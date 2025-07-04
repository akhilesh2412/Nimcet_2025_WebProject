import { notFound } from 'next/navigation';
import { getCourseById } from '@/lib/data';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CourseContent } from '@/components/course-content';

export default async function CoursePage({ params: { courseId } }: { params: { courseId: string } }) {
  const course = getCourseById(courseId);

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
      
      <CourseContent course={course} />
    </>
  );
}
