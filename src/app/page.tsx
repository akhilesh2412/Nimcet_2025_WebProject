import { CourseCard } from '@/components/course-card';
import { courseData } from '@/lib/data';

export default function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline mb-4 tracking-tight sm:text-5xl md:text-6xl">
          Welcome to Course Compass
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          Your ultimate guide to mastering new skills. Explore our expertly crafted courses.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
        {courseData.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </>
  );
}
