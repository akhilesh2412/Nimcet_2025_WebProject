'use client';

import { useState } from 'react';
import type { Content, DirectVideoSource, GoogleDriveVideoSource } from '@/lib/data';
import { VideoPlayer } from '@/components/video-player';
import { GoogleDrivePlayer } from '@/components/google-drive-player';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { X, PlayCircle, CircleHelp } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

export function VideoSection({ videos }: { videos: Content[] }) {
    const [selectedDirectVideo, setSelectedDirectVideo] = useState<Content | null>(null);
    const [selectedGdriveVideo, setSelectedGdriveVideo] = useState<Content | null>(null);
    const { toast } = useToast();

    const handleVideoSelect = (video: Content) => {
        if (video.sources && video.sources.length > 0) {
            const source = video.sources[0];
            if (source.type === 'gdrive') {
                setSelectedGdriveVideo(video);
            } else {
                setSelectedDirectVideo(video);
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
    }

    const directSources = selectedDirectVideo?.sources?.filter(s => s.type === 'direct') as DirectVideoSource[] | undefined;
    const gdriveSource = selectedGdriveVideo?.sources?.find(s => s.type === 'gdrive') as GoogleDriveVideoSource | undefined;

    const groupedVideos = videos.reduce((acc, video) => {
        const match = video.title.match(/^(.*?)\s+[0-9]+$/);
        let groupName = match ? match[1].trim() : video.title;

        if (groupName === 'Set') {
          groupName = 'Set Theory';
        }

        if (!acc[groupName]) {
            acc[groupName] = [];
        }
        acc[groupName].push(video);
        return acc;
    }, {} as Record<string, Content[]>);


    if (videos.length === 0) {
        return (
            <div className="text-center py-16 bg-muted/50 rounded-lg">
                <CircleHelp className="mx-auto h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">No videos available yet.</p>
            </div>
        );
    }

    return (
        <>
            <Accordion type="single" collapsible className="w-full space-y-2">
                {Object.entries(groupedVideos).map(([groupName, videoItems]) => (
                    <Card key={groupName} className="overflow-hidden">
                        <AccordionItem value={groupName} className="border-b-0">
                            <AccordionTrigger className="p-4 hover:no-underline text-lg font-semibold">
                                {groupName}
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-1 pb-2 px-2">
                                    {videoItems.map((video) => (
                                        <div
                                            key={video.id}
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
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                ))}
            </Accordion>

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
        </>
    );
}
