'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from './ui/button';
import { X } from 'lucide-react';

interface PdfViewerProps {
  url: string | null;
  title: string;
  onClose: () => void;
}

export function PdfViewer({ url, title, onClose }: PdfViewerProps) {
  if (!url) {
    return null;
  }

  const handleInteraction = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <Dialog open={!!url} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent 
        className="max-w-none w-screen h-screen p-0 m-0 bg-background flex flex-col"
        hideCloseButton={true}
        onContextMenu={handleInteraction}
        onDragStart={handleInteraction}
      >
        <DialogHeader className="flex-shrink-0 flex flex-row items-center justify-between p-4 border-b bg-card">
          <DialogTitle className="text-lg font-semibold truncate">{title}</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close PDF Viewer</span>
          </Button>
        </DialogHeader>
        <div className="flex-grow w-full h-full overflow-hidden" onContextMenu={handleInteraction}>
          <iframe
            src={`${url}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full border-none"
            title={title}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
