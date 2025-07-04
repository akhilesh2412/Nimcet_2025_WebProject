import { CourseCard } from '@/components/course-card';
import { courseData } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md space-y-8">
        {courseData.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
}
