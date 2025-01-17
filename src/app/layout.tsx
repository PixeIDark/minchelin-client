import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { getServerSession } from 'next-auth';
import QueryProvider from '@/providers/QueryProvider';
import SessionProvider from '@/providers/SessionProvider';
import { authOptions } from '@/lib/next-auth';
import { getThemeConfig } from '@/utils/getThemeConfig';
import { Toaster } from '@/components/ui/toast/Toaster';
import { HeaderLayout } from '@/app/_components/layout/header-layout';
import { Footer } from '@/app/_components/footer';
import { css } from '@/styled-system/css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Minchelin',
  description: 'The Great',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  const { themeName, theme } = await getThemeConfig();

  return (
    <html lang='en' data-panda-theme={themeName} suppressHydrationWarning>
      <head>
        <style type='text/css' id={theme.id} dangerouslySetInnerHTML={{ __html: theme.css }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryProvider>
          <SessionProvider session={session}>
            <div
              className={css({
                h: '100vh',
                display: 'flex',
                flexDir: 'column',
              })}
            >
              <HeaderLayout />
              <main
                className={css({
                  flex: 1,
                  overflowY: 'auto',
                  '&::-webkit-scrollbar': { display: 'none' },
                })}
              >
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </SessionProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
