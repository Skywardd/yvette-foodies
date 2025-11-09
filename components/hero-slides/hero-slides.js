'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import styles from './hero-slides.module.css';

import burger from '@/assets/burger.jpg';
import curry from '@/assets/curry.jpg';
import dumplings from '@/assets/dumplings.jpg';
import macncheese from '@/assets/macncheese.jpg';
import pizza from '@/assets/pizza.jpg';
import schnitzel from '@/assets/schnitzel.jpg';

const slides = [
  {
    text: 'Find your meal',
    description:
      'Discover delicious recipes from our curated collection. From comfort food classics to exotic international dishes, explore flavors that will inspire your next culinary adventure.',
    cta: 'Browse',
    href: '/meals',
    images: [burger, curry],
  },
  {
    text: 'Share your meal',
    description:
      'Share your favorite recipes with food lovers around the world. Upload photos, write detailed instructions, and connect with fellow cooking enthusiasts who share your passion.',
    cta: 'Share',
    href: '/meals/share',
    images: [dumplings, macncheese],
  },
  {
    text: 'Join the community',
    description:
      'Become part of a vibrant community of food enthusiasts. Exchange cooking tips, discover new techniques, and celebrate the joy of creating memorable meals together.',
    cta: 'Join',
    href: '/community',
    images: [pizza, schnitzel],
  },
];

export default function HeroSlides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const imagesRef = useRef([]);
  const indicatorsRef = useRef([]);
  const isAnimating = useRef(false);

  useEffect(() => {
    const textElement = textRef.current;
    const descriptionElement = descriptionRef.current;
    const ctaElement = ctaRef.current;
    const imageElements = imagesRef.current;

    gsap.killTweensOf([
      textElement,
      descriptionElement,
      ctaElement,
      imageElements,
    ]);

    gsap.set([textElement, descriptionElement, ctaElement], {
      opacity: 1,
      y: 0,
      scale: 1,
      clearProps: 'all',
    });
    gsap.set(imageElements, {
      opacity: 1,
      scale: 1,
      clearProps: 'all',
    });

    const tl = gsap.timeline();

    tl.from(textElement, {
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
    })
      .from(
        descriptionElement,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .from(
        ctaElement,
        {
          y: 30,
          scale: 0.8,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.4'
      )
      .from(
        imageElements,
        {
          scale: 0.9,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        },
        '-=0.6'
      );

    return () => {
      gsap.killTweensOf([
        textElement,
        descriptionElement,
        ctaElement,
        imageElements,
      ]);
    };
  }, []);

  const goToSlide = useCallback(
    (slideIndex) => {
      if (slideIndex === currentSlides || isAnimating.current) return;

      isAnimating.current = true;

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
        },
      });

      tl.to([textRef.current, descriptionRef.current, ctaRef.current], {
        opacity: 1,
        y: -30,
        duration: 0.4,
        ease: 'power2.in',
      })
        .to(
          imagesRef.current,
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            stagger: 0.1,
            ease: 'power2.in',
          },
          '-=0.2'
        )
        .call(() => {
          setCurrentSlide(slideIndex);
        })
        .to({}, { duration: 0.1 })
        .to([textRef.current, descriptionRef.current, ctaRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
        })
        .to(
          imagesRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: 'power3.out',
          },
          '-=0.3'
        );
    },
    [currentSlide]
  );

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating.current) return;

      e.preventDefault();

      if (e.deltaY > 0) {
        nextSlide();
      } else if (e.deltaY < 0) {
        prevSlide();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [nextSlide, prevSlide]);
  const touchData = useRef({
    startX: 0,
    startY: 0,
    isSwiping: false,
    hasMoved: false,
  });

  useEffect(() => {
    const handleTouchStart = (e) => {
      touchData.current.startX = e.touches[0].clientX;
      touchData.current.startY = e.touches[0].clientY;
      touchData.current.isSwiping = false;
      touchData.current.hasMoved = false;
    };

    const handleTouchMove = (e) => {
      if (!touchData.current.startX || !touchData.current.startY) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;

      const diffX = Math.abs(touchData.current.startX - currentX);
      const diffY = Math.abs(touchData.current.startY - currentY);

      if (!touchData.current.hasMoved) {
        if (diffX > 10 || diffY > 10) {
          touchData.current.hasMoved = true;
          if (diffX > diffY && diffX > 15) {
            touchData.current.isSwiping = true;
            e.preventDefault();
          }
        }
      } else if (touchData.current.isSwiping) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (isAnimating.current || !touchData.current.isSwiping) {
        touchData.current = {
          startX: 0,
          startY: 0,
          isSwiping: false,
          hasMoved: false,
        };
        return;
      }

      const endX = e.changedTouches[0].clientX;
      const diffX = touchData.current.startX - endX;

      if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }

      touchData.current = {
        startX: 0,
        startY: 0,
        isSwiping: false,
        hasMoved: false,
      };
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, {
        passive: true,
      });
      container.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
      container.addEventListener('touchend', handleTouchEnd, {
        passive: true,
      });
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [nextSlide, prevSlide]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.content}>
        <div className={styles.wordSection}>
          <h2 className={styles.slideHeader} ref={textRef}>
            {slides[currentSlide].text}
          </h2>
          <p className={styles.slideDescription} ref={descriptionRef}>
            {slides[currentSlide].description}
          </p>
          <Link
            href={slides[currentSlide].href}
            className={styles.cta}
            ref={ctaRef}
          >
            {slides[currentSlide].cta}
          </Link>
        </div>

        <div className={styles.imagesSection}>
          {slides[currentSlide].images.map((image, index) => (
            <div
              key={`${currentSlide}-${index}`}
              className={styles.imageWrapper}
              ref={(el) => (imagesRef.current[index] = el)}
            >
              <Image
                src={image}
                alt={`Food image ${index + 1}`}
                fill
                className={styles.image}
                priority={currentSlide === 0}
                sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 250px"
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollHint}>
        <p className={styles.scrollHintDesktop}>Scroll to navigate</p>
        <p className={styles.scrollHintMobile}>Swipe left/right to navigate</p>
        <div className={styles.scrollIndicator}>
          <span></span>
        </div>
      </div>
    </div>
  );
}
