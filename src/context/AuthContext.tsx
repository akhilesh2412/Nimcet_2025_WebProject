'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';

const PIN = '2412'; // Hardcoded PIN
const SESSION_DURATION = 48 * 60 * 60 * 1000; // 48 hours in milliseconds
const STORAGE_KEY = 'sessionExpiresAt';

interface AuthContextType {
  isAuthenticated: boolean;
  expiresAt: number | null;
  login: (pin: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [expiresAt, setExpiresAt] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setIsAuthenticated(false);
    setExpiresAt(null);
  }, []);

  useEffect(() => {
    const sessionExpiresAt = localStorage.getItem(STORAGE_KEY);
    if (sessionExpiresAt) {
      const expirationTime = parseInt(sessionExpiresAt, 10);
      if (new Date().getTime() < expirationTime) {
        setIsAuthenticated(true);
        setExpiresAt(expirationTime);
      } else {
        logout();
      }
    }
    setIsLoaded(true);
  }, [logout]);
  
  const login = (pin: string): boolean => {
    if (pin === PIN) {
      const expirationTime = new Date().getTime() + SESSION_DURATION;
      localStorage.setItem(STORAGE_KEY, expirationTime.toString());
      setIsAuthenticated(true);
      setExpiresAt(expirationTime);
      return true;
    }
    return false;
  };

  const value = { isAuthenticated, expiresAt, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {isLoaded ? children : <LoadingScreen />}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
