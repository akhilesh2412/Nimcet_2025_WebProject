'use client';

import { useState } from 'react';
import type { Content, DirectVideoSource, GoogleDriveVideoSource } from '@/lib/data';
import { ContentList } from '@/components/content-list';
import { VideoPlayer } from '@/components/video-player';
import { GoogleDrivePlayer } from '@/components/google-drive-player';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

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

    return (
        <>
            <ContentList 
                items={videos} 
                emptyMessage="No videos available yet." 
                onItemClick={handleVideoSelect}
                isClickable={() => true}
                showPlayIcon={(item) => !!item.sources && item.sources.length > 0}
            />

            <Dialog open={!!selectedDirectVideo} onOpenChange={(open) => !open && handleClosePlayer()}>
                <DialogContent className="max-w-4xl p-0 border-0 bg-transparent shadow-none">
                    {selectedDirectVideo && directSources && (
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
