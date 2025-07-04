import Link from 'next/link';
import { Youtube, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-headline text-foreground">NIMCET 2026</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Your guide to mastering new skills and acing your exams with top-quality resources.
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div className="md:mx-auto">
            <h4 className="text-lg font-semibold text-foreground tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/practice-sheets" className="text-muted-foreground hover:text-primary transition-colors">Practice Sheets</Link></li>
              <li><Link href="/mind-maps" className="text-muted-foreground hover:text-primary transition-colors">Mind Maps</Link></li>
              <li><Link href="/short-notes" className="text-muted-foreground hover:text-primary transition-colors">Short Notes</Link></li>
              <li><Link href="/contact-us" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="md:ml-auto">
            <h4 className="text-lg font-semibold text-foreground tracking-wider uppercase">Follow Us</h4>
            <div className="flex mt-4 space-x-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NIMCET 2026. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
