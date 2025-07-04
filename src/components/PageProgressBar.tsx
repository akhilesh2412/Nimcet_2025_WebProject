'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

export function PageProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  useEffect(() => {
    // This is a workaround for triggering nprogress on route changes in Next.js App Router.
    // It overrides the history.pushState method to start the progress bar.
    if (typeof window === 'undefined' || typeof window.history === 'undefined') {
        return;
    }

    const originalPushState = window.history.pushState;
    if ((originalPushState as any)._patchedByNProgress) {
        return; // Already patched
    }
    
    window.history.pushState = function(...args) {
        NProgress.start();
        return originalPushState.apply(window.history, args);
    };
    (window.history.pushState as any)._patchedByNProgress = true;

    const originalReplaceState = window.history.replaceState;
     if (!(originalReplaceState as any)._patchedByNProgress) {
        window.history.replaceState = function(...args) {
            NProgress.start();
            return originalReplaceState.apply(window.history, args);
        };
        (window.history.replaceState as any)._patchedByNProgress = true;
     }


    const onPopState = () => {
        NProgress.start();
    };

    window.addEventListener('popstate', onPopState);

    return () => {
        // Restore original methods on unmount
        window.history.pushState = originalPushState;
        window.history.replaceState = originalReplaceState;
        window.removeEventListener('popstate', onPopState);
    };
  }, []);

  return null;
}
