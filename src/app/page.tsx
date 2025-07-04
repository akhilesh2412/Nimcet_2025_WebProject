import { CourseCard } from '@/components/course-card';
import { courseData } from '@/lib/data';
import { WelcomeDialog } from '@/components/WelcomeDialog';

export default function Home() {
  return (
    <>
      <WelcomeDialog />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseData.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </>
  );
}
