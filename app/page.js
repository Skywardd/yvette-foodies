'use client';
import { useEffect } from 'react';
import HeroSlides from '@/components/hero-slides/hero-slides';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.homePage}>
      <HeroSlides />
    </div>
  );
}
