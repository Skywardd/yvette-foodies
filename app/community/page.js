import Image from 'next/image';
import Link from 'next/link';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Coming <span className={classes.highlight}>Soon</span>
        </h1>
      </header>
      <section className={classes.section}>
        <h2>Why The Seasoned Life?</h2>
        <p>
          We&apos;re a community of food enthusiasts who love to discover and
          share amazing recipes. From comfort food classics to innovative fusion
          dishes, every recipe tells a story.
        </p>
        <div className={classes.cta}>
          <Link href="/community">Join the Community</Link>
          <Link href="/meals">Explore Meals</Link>
        </div>
      </section>
    </>
  );
}
