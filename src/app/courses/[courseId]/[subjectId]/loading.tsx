import { Skeleton } from '@/components/ui/skeleton';

export default function SubjectLoading() {
  return (
    <>
      <Skeleton className="h-5 w-1/2 md:w-1/3 mb-6" />
      
      <div className="mb-8">
        <Skeleton className="h-10 w-3/4 mb-4" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      
      <div className="w-full">
        <Skeleton className="h-10 w-full mb-6" />
        <div className="space-y-4">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    </>
  );
}
