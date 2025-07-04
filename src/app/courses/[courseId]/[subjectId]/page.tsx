import { notFound } from 'next/navigation';
import { getCourseById, getSubjectByIds } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Video, FileText, Notebook, GraduationCap } from 'lucide-react';
import { ContentList } from '@/components/content-list';
import { VideoSection } from '@/components/video-section';

export default async function SubjectPage({ params: { courseId, subjectId } }: { params: { courseId: string, subjectId: string } }) {
  const course = getCourseById(courseId);
  const subject = getSubjectByIds(courseId, subjectId);

  if (!course || !subject) {
    notFound();
  }

  return (
    <>
       <Breadcrumbs items={[
        { label: 'Courses', href: '/' },
        { label: course.title, href: `/courses/${course.id}` },
        { label: subject.name }
      ]} />
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-headline mb-2">{subject.name}</h1>
        <p className="text-lg text-muted-foreground">All your learning materials in one place.</p>
      </div>
      
      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto sm:h-10">
          <TabsTrigger value="videos" className="gap-2">
            <Video className="h-4 w-4" /> Videos
          </TabsTrigger>
          <TabsTrigger value="dpp" className="gap-2">
            <FileText className="h-4 w-4" /> DPP
          </TabsTrigger>
          <TabsTrigger value="notes" className="gap-2">
            <Notebook className="h-4 w-4" /> Notes
          </TabsTrigger>
          <TabsTrigger value="solutions" className="gap-2">
            <GraduationCap className="h-4 w-4" /> Solutions
          </TabsTrigger>
        </TabsList>
        <TabsContent value="videos" className="mt-6">
          <VideoSection videos={subject.videos} />
        </TabsContent>
        <TabsContent value="dpp" className="mt-6">
          <ContentList items={subject.dpps} emptyMessage="No Daily Practice Problems available yet." />
        </TabsContent>
        <TabsContent value="notes" className="mt-6">
          <ContentList items={subject.notes} emptyMessage="No notes available yet." />
        </TabsContent>
        <TabsContent value="solutions" className="mt-6">
          <ContentList items={subject.solutions} emptyMessage="No solutions available yet." />
        </TabsContent>
      </Tabs>
    </>
  );
}
