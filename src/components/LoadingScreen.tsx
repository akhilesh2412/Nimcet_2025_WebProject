import { Loader } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Loader className="h-12 w-12 animate-spin text-primary" />
        <p className="text-lg text-foreground">Loading...</p>
      </div>
    </div>
  );
}
