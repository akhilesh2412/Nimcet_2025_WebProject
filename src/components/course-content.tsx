'use client';

import Link from 'next/link';
import type { Course } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VideoSection } from '@/components/video-section';

export function CourseContent({ course }: { course: Course }) {
  // Special layout for Web Development Course
  if (course.id === 'web-development-course') {
    if (!course.subjects.length) {
      return <p>No content available yet.</p>;
    }
    return (
      <Tabs defaultValue={course.subjects[0].id} className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-auto">
          {course.subjects.map(subject => (
            <TabsTrigger key={subject.id} value={subject.id} className="text-xs sm:text-sm">
              {subject.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {course.subjects.map(subject => (
          <TabsContent key={subject.id} value={subject.id} className="mt-6">
            <VideoSection videos={subject.videos} />
          </TabsContent>
        ))}
      </Tabs>
    );
  }

  // Default layout for all other courses
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
