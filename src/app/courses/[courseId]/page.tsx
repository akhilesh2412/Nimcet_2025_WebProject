import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCourseById } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = getCourseById(params.courseId);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs items={[
        { label: 'Courses', href: '/' },
        { label: course.title }
      ]} />
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-headline mb-2">{course.title}</h1>
        <p className="text-lg text-muted-foreground">Select a subject to start learning.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {course.subjects.length > 0 ? (
          course.subjects.map((subject) => (
            <Link href={`/courses/${course.id}/${subject.id}`} key={subject.id} className="group">
              <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary">
                <CardContent className="p-6 flex items-center justify-between">
                  <h2 className="text-xl font-semibold font-headline">{subject.name}</h2>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-1" />
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <Card>
            <CardContent className="p-6">
              <p>No subjects available for this course yet.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}
