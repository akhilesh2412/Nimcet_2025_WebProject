'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Course } from '@/lib/data';
import { Star } from 'lucide-react';
import { useFavorites } from '@/hooks/use-favorites';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites();
  const isCourseFavorite = isFavorite(course.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(course.id);
  };

  return (
    <Card className="group w-full overflow-hidden bg-card border-border rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
      <CardHeader className="pt-4 pb-2 px-4">
        <CardTitle className="text-foreground text-base font-bold truncate transition-colors duration-300 group-hover:text-primary">{course.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={course.imageUrl}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={course.imageHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <Badge variant="secondary" className="absolute top-3 left-3 text-[10px] sm:text-xs px-2 sm:px-2.5">
            {course.category}
          </Badge>
          <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
            {course.originalPrice && (
              <span className="line-through opacity-70 mr-1.5">₹{course.originalPrice}/-</span>
            )}
            <span>₹{course.price}/-</span>
          </div>
          <div className="absolute bottom-3 right-3">
             {isLoaded ? (
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 bg-black/30 text-white hover:bg-black/50 hover:text-white backdrop-blur-sm rounded-full"
                    onClick={handleFavoriteClick}
                    aria-label={isCourseFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <Star className={cn("h-5 w-5 transition-colors", isCourseFavorite ? "fill-primary text-primary" : "text-white")} />
                </Button>
            ) : (
                <Skeleton className="h-9 w-9 rounded-full" />
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2">
        <Button
          asChild
          variant="outline"
          className="w-full h-11 text-lg font-semibold border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
        >
          <Link href={`/courses/${course.id}`}>Let's Study</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
