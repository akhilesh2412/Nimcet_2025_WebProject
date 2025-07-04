import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Course } from '@/lib/data';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="w-full overflow-hidden bg-card border-border rounded-lg shadow-lg">
      <CardHeader className="pt-4 pb-2 px-4">
        <CardTitle className="text-foreground text-base font-bold truncate">{course.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 relative">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={course.imageUrl}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            data-ai-hint={course.imageHint}
          />
          <Badge variant="secondary" className="absolute top-3 left-3 bg-yellow-400 text-black border-none hover:bg-yellow-500">
            {course.category}
          </Badge>
          <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-md">
            {course.originalPrice && (
              <span className="line-through text-gray-700 mr-1.5">₹{course.originalPrice}/-</span>
            )}
            <span>₹{course.price}/-</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2">
        <Button asChild variant="secondary" className="w-full h-11 text-lg font-semibold">
            <Link href={`/courses/${course.id}`}>Let's Study</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
