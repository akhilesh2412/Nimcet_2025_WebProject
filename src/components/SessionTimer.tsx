'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Timer } from 'lucide-react';

export function SessionTimer() {
  const { expiresAt, logout } = useAuth();
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    if (!expiresAt) return;

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = expiresAt - now;

      if (distance < 0) {
        clearInterval(intervalId);
        setTimeLeft('Expired');
        logout();
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [expiresAt, logout]);

  if (!timeLeft) return null;

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-md">
      <Timer className="h-4 w-4" />
      <span>Session ends in: {timeLeft}</span>
    </div>
  );
}
