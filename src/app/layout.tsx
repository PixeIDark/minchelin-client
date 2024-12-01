import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { cookies } from 'next/headers';
import { getTheme } from '@/styled-system/themes';
import SessionProvider from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

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
  const session = await getServerSession(authOptions); // useSession 헤더와 프로필에서 ㄱㄱ
  const store = cookies();
  const themeName = (store.get('theme')?.value as 'light' | 'dark') || 'light';
  const theme = await getTheme(themeName);

  return (
    <html lang='en' data-panda-theme={themeName} suppressHydrationWarning>
      <head>
        <style type='text/css' id={theme.id} dangerouslySetInnerHTML={{ __html: theme.css }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AntdRegistry>
          <SessionProvider session={session}>{children}</SessionProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
