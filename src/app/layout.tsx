import type { Metadata } from 'next';
import './globals.css';
import './nprogress.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/AuthContext';
import { AuthWrapper } from '@/components/AuthWrapper';
import { ThemeProvider } from '@/components/theme-provider';
import { PageProgressBar } from '@/components/PageProgressBar';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'NIMCET 2026',
  description: 'Your guide to mastering new skills.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col h-full bg-background">
        <Suspense fallback={null}>
            <PageProgressBar />
        </Suspense>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AuthProvider>
              <AuthWrapper>
                  <Header />
                  <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {children}
                  </main>
                  <Footer />
                  <Toaster />
              </AuthWrapper>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
