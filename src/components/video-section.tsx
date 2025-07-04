'use client';

import { useState } from 'react';
import type { Content } from '@/lib/data';
import { ContentList } from '@/components/content-list';
import { VideoPlayer } from '@/components/video-player';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

export function VideoSection({ videos }: { videos: Content[] }) {
    const [selectedVideo, setSelectedVideo] = useState<Content | null>(null);

    const handleVideoSelect = (video: Content) => {
        if (video.sources && video.sources.length > 0) {
            setSelectedVideo(video);
        }
    };

    const handleClosePlayer = () => {
        setSelectedVideo(null);
    }

    return (
        <>
            <ContentList 
                items={videos} 
                emptyMessage="No videos available yet." 
                onItemClick={handleVideoSelect}
                isClickable={(item) => !!item.sources && item.sources.length > 0}
            />

            <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && handleClosePlayer()}>
                <DialogContent className="max-w-4xl p-0 border-0 bg-transparent shadow-none">
                    {selectedVideo && selectedVideo.sources && (
                        <>
                           <DialogTitle className="sr-only">{selectedVideo.title}</DialogTitle>
                           <VideoPlayer sources={selectedVideo.sources} title={selectedVideo.title} onEnd={handleClosePlayer} />
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
