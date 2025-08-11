'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logoImg from '/assets/yvette-purple.png';
import styles from './main-header.module.css';

import NavLink from './nav-link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="logo" priority />
          recipes
        </Link>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`${styles.hamburgerLine} ${
              isMenuOpen ? styles.open : ''
            }`}
          ></span>
          <span
            className={`${styles.hamburgerLine} ${
              isMenuOpen ? styles.open : ''
            }`}
          ></span>
          <span
            className={`${styles.hamburgerLine} ${
              isMenuOpen ? styles.open : ''
            }`}
          ></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul>
            <li>
              <NavLink href="/meals" onClick={() => setIsMenuOpen(false)}>
                Browse meals
              </NavLink>
            </li>
            <li>
              <NavLink href="/community" onClick={() => setIsMenuOpen(false)}>
                Community
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
