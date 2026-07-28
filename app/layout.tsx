import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

// Static search: fetch the build-time index once, search client-side.
// basePath-aware so it works at / locally and /alata-doc on GitHub Pages.
const searchOptions = {
  type: 'static' as const,
  api: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/api/search`,
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ options: searchOptions }}>{children}</RootProvider>
      </body>
    </html>
  );
}
