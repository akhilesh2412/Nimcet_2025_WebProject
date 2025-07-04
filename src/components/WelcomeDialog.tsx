'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const WELCOME_DIALOG_SHOWN_KEY = 'welcomeDialogShown';

export function WelcomeDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only run on the client
    if (typeof window !== 'undefined') {
        const hasBeenShown = sessionStorage.getItem(WELCOME_DIALOG_SHOWN_KEY);
        if (!hasBeenShown) {
            // A small delay to let the page render before showing the dialog
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem(WELCOME_DIALOG_SHOWN_KEY, 'true');
    setIsOpen(false);
  };
  
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      handleClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent 
        className="sm:max-w-md" 
        hideCloseButton={true}
      >
        <DialogHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-center text-2xl font-bold font-headline">Welcome to NIMCET 2026</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground pt-2">
            Your journey to success starts here. Explore our courses and resources to get started.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center pt-4">
          <Button type="button" onClick={handleClose}>
            Let's Get Started
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
