import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/theme-switcher/theme-provider';
import { ResponsiveBG } from '@/components/particles/particles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mujtaba Shafique - Software Engineer & React Developer',
  description:
    'Welcome to the portfolio of Mujtaba Shafique, a software engineer specializing in frontend development with React and NextJS. Explore my projects, skills, work experience, and more.',
  keywords: [
    'Mujtaba Shafique',
    'Software Engineer',
    'React Developer',
    'NextJS',
    'AWS',
    'Next.js',
    'React',
    'JavaScript',
    'NodeJS',
    'Typescript',
    'MERN Stack',
    'Portfolio',
    'Projects',
    'Web Development',
    'Frontend Developer',
    'Islamabad',
  ],
  referrer: 'origin-when-cross-origin',
  authors: [
    { name: 'Mujtaba Shafique', url: 'https://github.com/mujtabacodes' },
  ],
  openGraph: {
    title: 'Mujtaba Shafique - Software Engineer & React Developer',
    description:
      'Explore the professional portfolio of Mujtaba Shafique, featuring his work experience, projects, skills, and contact information.',
    url: 'https://mujtabacodes.com',
    type: 'website',
    images: [
      {
        url: 'https://mujtabacodes.com/profile-image.jpg',
        width: 800,
        height: 600,
        alt: 'Mujtaba Shafique Profile Picture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mujtabacodes',
    title: 'Mujtaba Shafique - Software Engineer & React Developer',
    description:
      'Welcome to the professional portfolio of Mujtaba Shafique. Discover his projects, skills, and work experience in web development.',
    images: 'https://mujtabacodes.com/profile-image.jpg',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ResponsiveBG />
        </ThemeProvider>
      </body>
    </html>
  );
}
