'use client';

import { useEffect, useState } from 'react';
import { CalendarClock } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export function SessionTimer() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const targetDate = new Date('2026-01-01T00:00:00Z');
    
    const calculateDays = () => {
        const today = new Date();
        const diffTime = targetDate.getTime() - today.getTime();
        
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        setDaysLeft(diffDays > 0 ? diffDays : 0);
    };
    
    calculateDays();

    const interval = setInterval(calculateDays, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  if (daysLeft === null) {
    return <Skeleton className="h-9 w-32 rounded-md" />;
  }
  
  return (
    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-primary-foreground bg-primary/90 px-3 py-2 rounded-md h-9">
      <CalendarClock className="h-4 w-4" />
      <span>{daysLeft} {daysLeft === 1 ? 'Day' : 'Days'} Left</span>
    </div>
  );
}
