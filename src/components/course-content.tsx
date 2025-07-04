'use client';

import Link from 'next/link';
import type { Course } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export function CourseContent({ course }: { course: Course }) {
  if (course.subjects.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Subjects Yet</CardTitle>
          <CardDescription>
            Content is being prepared. Please check back later.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {course.subjects.map((subject) => (
        <Link key={subject.id} href={`/courses/${course.id}/${subject.id}`} className="group block">
          <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary">
            <CardHeader>
              <div className="flex justify-between items-start">
                  <div className="space-y-1">
                      <CardTitle className="text-xl font-semibold font-headline transition-colors group-hover:text-primary">{subject.name}</CardTitle>
                      <CardDescription>{subject.videos.length} videos</CardDescription>
                  </div>
                  <BookOpen className="h-8 w-8 text-muted-foreground transition-transform group-hover:text-primary group-hover:scale-110" />
              </div>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
