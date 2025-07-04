import { CourseCard } from '@/components/course-card';
import { courseData } from '@/lib/data';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courseData.map((course) => (
        <CourseCard course={course} key={course.id} />
      ))}
    </div>
  );
}
