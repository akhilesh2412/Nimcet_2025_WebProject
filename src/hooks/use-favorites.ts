'use client';

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_STORAGE_KEY = 'favoriteCourses';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Failed to parse favorites from localStorage', error);
      setFavorites([]);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const toggleFavorite = useCallback((courseId: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(courseId)) {
        return prevFavorites.filter(id => id !== courseId);
      } else {
        return [...prevFavorites, courseId];
      }
    });
  }, []);

  const isFavorite = useCallback((courseId: string) => {
    return favorites.includes(courseId);
  }, [favorites]);

  return { isFavorite, toggleFavorite, favorites, isLoaded };
}
