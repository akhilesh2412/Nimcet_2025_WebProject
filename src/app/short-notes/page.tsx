'use client';

import { useState } from 'react';
import { shortNotesData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { PdfViewer } from '@/components/pdf-viewer';

export default function ShortNotesPage() {
  const [viewingPdf, setViewingPdf] = useState<{ url: string; title: string } | null>(null);

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Short Notes' }]} />
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-headline mb-4">Short Notes</h1>
        <p className="text-lg text-muted-foreground">Quick notes and cheatsheets for you.</p>
      </div>
      
      {shortNotesData.length > 0 ? (
        <div className="space-y-4">
          {shortNotesData.map(item => (
             <div key={item.id} className="group block cursor-pointer" onClick={() => item.url && setViewingPdf({ url: item.url, title: item.title })}>
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
            </div>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-6 text-center text-muted-foreground">
            <p>No short notes available yet. Please check back later.</p>
          </CardContent>
        </Card>
      )}

      {viewingPdf && (
        <PdfViewer 
          url={viewingPdf.url} 
          title={viewingPdf.title} 
          onClose={() => setViewingPdf(null)} 
        />
      )}
    </>
  );
}
