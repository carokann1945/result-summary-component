import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const hankenGrotesk = localFont({
  src: '../../public/fonts/HankenGrotesk-VariableFont_wght.ttf', // 폰트 파일 경로 설정
  variable: '--font-hankenGrotesk', // css 변수명을 정의하여 Tailwind CSS 등에서 사용할 수 있음
});

export const metadata: Metadata = {
  title: 'result-summary-component',
  description: 'frontend mentor challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={hankenGrotesk.variable}>
      <body className="antialiased w-screen h-screen bg-[#F3F4FD] flex justify-center items-center">{children}</body>
    </html>
  );
}
