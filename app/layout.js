import Header from '@/components/main-header/main-header';
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Yvette recipes',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
