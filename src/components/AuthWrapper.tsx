'use client';

import { useAuth } from '@/context/AuthContext';
import { PinDialog } from '@/components/PinDialog';
import { type ReactNode } from 'react';

export function AuthWrapper({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <PinDialog />;
  }

  return <>{children}</>;
}
