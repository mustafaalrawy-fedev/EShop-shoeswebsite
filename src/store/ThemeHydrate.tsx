'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme, Theme } from './slices/themeSlice';

export default function ThemeHydrate({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
    const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'light';
    dispatch(setTheme(savedTheme));
    document.documentElement.dataset.theme = savedTheme;
    setMounted(true);
  }, [dispatch]);

  if (!mounted) return null;

  return <>{children}</>;
}