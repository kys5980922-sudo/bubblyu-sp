import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata = {
  title: "버블리유SP",
  description:
    "24시간 응대 · 안전 거래 · 서든어택 SP 전문 업체",

  openGraph: {
    title: "버블리유SP",
    description:
      "24시간 응대 · 안전 거래 · 빠른 거래",
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
