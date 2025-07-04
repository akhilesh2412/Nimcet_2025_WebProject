'use client';

import { useState } from 'react';
import type { Course, Content, DirectVideoSource, GoogleDriveVideoSource } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { PlayCircle, CircleHelp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { VideoPlayer } from '@/components/video-player';
import { GoogleDrivePlayer } from '@/components/google-drive-player';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface CourseContentProps {
  course: Course;
}

export function CourseContent({ course }: CourseContentProps) {
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
        {course.subjects.length > 0 ? (
            <Accordion type="single" collapsible className="w-full space-y-4">
                {course.subjects.map((subject) => (
                <Card key={subject.id} className="overflow-hidden">
                    <AccordionItem value={subject.id} className="border-b-0">
                    <AccordionTrigger className="p-4 hover:no-underline text-lg font-semibold text-left">
                        {subject.name}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-1 pb-2 px-2">
                        {subject.videos.length > 0 ? (
                            subject.videos.map((video) => (
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
                            ))
                        ) : (
                            <p className="px-3 pb-2 text-sm text-muted-foreground">No videos available for this subject yet.</p>
                        )}
                        </div>
                    </AccordionContent>
                    </AccordionItem>
                </Card>
                ))}
            </Accordion>
        ) : (
            <Card>
                <CardContent className="p-6">
                    <p>No subjects available for this course yet.</p>
                </CardContent>
            </Card>
        )}

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
