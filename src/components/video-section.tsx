'use client';

import { useState, useMemo } from 'react';
import type { Content, DirectVideoSource, GoogleDriveVideoSource, YoutubeVideoSource } from '@/lib/data';
import { VideoPlayer } from '@/components/video-player';
import { GoogleDrivePlayer } from '@/components/google-drive-player';
import { YoutubePlayer } from '@/components/youtube-player';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { X, PlayCircle, CircleHelp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type GroupedVideoItem = {
    isGroup: true;
    title: string;
    videos: Content[];
};

type SingleVideoItem = {
    isGroup: false;
    video: Content;
};

type ProcessedVideoItem = GroupedVideoItem | SingleVideoItem;

const groupingRules: Record<string, (video: Content) => boolean> = {
    'Set Theory': (video: Content) => video.title.toLowerCase().startsWith('set '),
    'Before Web Dev Journey': (video: Content) => video.id.startsWith('wd-b4j-'),
    'Basics of Development': (video: Content) => video.id.startsWith('wd-bod-'),
    'Learn HTML': (video: Content) => video.id.startsWith('wd-html-'),
    'Learn about CSS': (video: Content) => video.id.startsWith('wd-css-'),
};


export function VideoSection({ videos }: { videos: Content[] }) {
    const [selectedDirectVideo, setSelectedDirectVideo] = useState<Content | null>(null);
    const [selectedGdriveVideo, setSelectedGdriveVideo] = useState<Content | null>(null);
    const [selectedYoutubeVideo, setSelectedYoutubeVideo] = useState<Content | null>(null);
    const { toast } = useToast();

    const processedVideos = useMemo(() => {
        const groups: Record<string, Content[]> = {};
        const singles: Content[] = [];

        videos.forEach(video => {
            let groupTitle: string | null = null;
            for (const title in groupingRules) {
                if (groupingRules[title](video)) {
                    groupTitle = title;
                    break;
                }
            }

            if (groupTitle) {
                if (!groups[groupTitle]) {
                    groups[groupTitle] = [];
                }
                groups[groupTitle].push(video);
            } else {
                singles.push(video);
            }
        });

        const result: ProcessedVideoItem[] = [];
        
        const groupTitles = Object.keys(groups).sort();
        groupTitles.forEach(title => {
            result.push({ isGroup: true, title, videos: groups[title] });
        });

        singles.forEach(video => {
            result.push({ isGroup: false, video });
        });

        // Ensure groups appear before single items
        result.sort((a, b) => {
            if (a.isGroup && !b.isGroup) return -1;
            if (!a.isGroup && b.isGroup) return 1;
            return 0;
        });

        return result;

    }, [videos]);

    const handleVideoSelect = (video: Content) => {
        if (video.sources && video.sources.length > 0) {
            const source = video.sources[0];
            if (source.type === 'gdrive') {
                setSelectedGdriveVideo(video);
            } else if (source.type === 'direct') {
                setSelectedDirectVideo(video);
            } else if (source.type === 'youtube') {
                setSelectedYoutubeVideo(video);
            }
        } else {
            toast({
                title: 'Coming Soon',
                description: 'The video for this chapter is not available yet.',
            });
        }
    };

    const handleClosePlayer = () => {
        setSelectedDirectVideo(null);
        setSelectedGdriveVideo(null);
        setSelectedYoutubeVideo(null);
    };

    const directSources = selectedDirectVideo?.sources?.filter(s => s.type === 'direct') as DirectVideoSource[] | undefined;
    const gdriveSource = selectedGdriveVideo?.sources?.find(s => s.type === 'gdrive') as GoogleDriveVideoSource | undefined;
    const youtubeSource = selectedYoutubeVideo?.sources?.find(s => s.type === 'youtube') as YoutubeVideoSource | undefined;

    if (videos.length === 0) {
        return (
            <div className="text-center py-16 bg-muted/50 rounded-lg">
                <CircleHelp className="mx-auto h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">No videos available yet.</p>
            </div>
        );
    }

    const VideoItemCard = ({ video }: { video: Content }) => (
        <Card
            onClick={() => handleVideoSelect(video)}
            className="flex items-center justify-between p-3 rounded-md cursor-pointer hover:bg-muted group"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleVideoSelect(video) }}
        >
            <div className="flex flex-col">
                <p className="font-medium">{video.title}</p>
                {video.description && <p className="text-sm text-muted-foreground">{video.description}</p>}
            </div>
            {video.sources && video.sources.length > 0 && (
                <PlayCircle className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
            )}
        </Card>
    );

    const groupedItems = processedVideos.filter((item): item is GroupedVideoItem => item.isGroup);
    const singleItems = processedVideos.filter((item): item is SingleVideoItem => !item.isGroup);


    return (
        <>
            <div className="space-y-2">
                {groupedItems.length > 0 && (
                    <Accordion type="single" collapsible className="w-full space-y-2">
                        {groupedItems.map((item, index) => (
                             <Card className="overflow-hidden" key={`${item.title}-${index}`}>
                                <AccordionItem value={item.title} className="border-b-0">
                                    <AccordionTrigger className="p-4 hover:no-underline font-semibold text-lg hover:bg-muted/50">
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="space-y-2 pt-2 px-3 pb-3 border-t">
                                            {item.videos.map((video) => (
                                                <VideoItemCard key={video.id} video={video} />
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Card>
                        ))}
                    </Accordion>
                )}
                <div className="space-y-2">
                    {singleItems.map((item) => (
                        <VideoItemCard key={item.video.id} video={item.video} />
                    ))}
                </div>
            </div>

            <Dialog open={!!selectedDirectVideo} onOpenChange={(open) => !open && handleClosePlayer()}>
                <DialogContent className="max-w-4xl p-0 border-0 bg-transparent shadow-none">
                    {selectedDirectVideo && directSources && directSources.length > 0 && (
                        <>
                           <DialogTitle className="sr-only">{selectedDirectVideo.title}</DialogTitle>
                           <VideoPlayer sources={directSources} title={selectedDirectVideo.title} onEnd={handleClosePlayer} />
                        </>
                    )}
                </DialogContent>
            </Dialog>

            <Dialog open={!!selectedGdriveVideo} onOpenChange={(open) => !open && handleClosePlayer()}>
                <DialogContent className="max-w-4xl p-0 border-0 bg-black flex flex-col">
                    {selectedGdriveVideo && gdriveSource && (
                        <>
                            <DialogHeader className="flex-shrink-0 flex flex-row items-center justify-between p-2 sm:p-4 border-b bg-card">
                                <DialogTitle className="text-lg font-semibold truncate">{selectedGdriveVideo.title}</DialogTitle>
                                <DialogClose asChild>
                                    <Button variant="ghost" size="icon">
                                        <X className="h-6 w-6" />
                                        <span className="sr-only">Close Player</span>
                                    </Button>
                                </DialogClose>
                            </DialogHeader>
                           <GoogleDrivePlayer fileId={gdriveSource.fileId} title={selectedGdriveVideo.title} />
                        </>
                    )}
                </DialogContent>
            </Dialog>
            
            <Dialog open={!!selectedYoutubeVideo} onOpenChange={(open) => !open && handleClosePlayer()}>
                <DialogContent className="max-w-4xl p-0 border-0 bg-black flex flex-col">
                    {selectedYoutubeVideo && youtubeSource && (
                        <>
                            <DialogHeader className="flex-shrink-0 flex flex-row items-center justify-between p-2 sm:p-4 border-b bg-card">
                                <DialogTitle className="text-lg font-semibold truncate">{selectedYoutubeVideo.title}</DialogTitle>
                                <DialogClose asChild>
                                    <Button variant="ghost" size="icon">
                                        <X className="h-6 w-6" />
                                        <span className="sr-only">Close Player</span>
                                    </Button>
                                </DialogClose>
                            </DialogHeader>
                           <YoutubePlayer videoId={youtubeSource.videoId} title={selectedYoutubeVideo.title} />
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
