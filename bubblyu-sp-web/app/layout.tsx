import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Bubblyu SP - 서든어택 거래 브랜드',
  description: '빠른 거래 · 안전 거래 · 실시간 응대 - 디스코드 기반 서든어택 거래 브랜드',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
