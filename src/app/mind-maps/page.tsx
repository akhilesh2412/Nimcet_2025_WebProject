import { mindMapsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';

export default function MindMapsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Mind Maps' }]} />
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-headline mb-4">Mind Maps</h1>
        <p className="text-lg text-muted-foreground">Download and view our curated mind maps.</p>
      </div>
      
      {mindMapsData.length > 0 ? (
        <div className="space-y-4">
          {mindMapsData.map(item => (
            <Link href={item.url!} key={item.id} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold font-headline">{item.title}</CardTitle>
                    <FileText className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-6 text-center text-muted-foreground">
            <p>No mind maps available yet. Please check back later.</p>
          </CardContent>
        </Card>
      )}
    </>
  );
}
