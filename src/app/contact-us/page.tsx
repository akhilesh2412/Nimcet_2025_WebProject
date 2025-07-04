import { Breadcrumbs } from '@/components/breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]} />
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-headline mb-2">Contact Us</h1>
        <p className="text-lg text-muted-foreground">We'd love to hear from you.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-4">
          <div className="flex items-center gap-4">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <a href="mailto:support@nimcet2026.com" className="hover:underline">
              support@nimcet2026.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <span>+1 (555) 123-4567</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
