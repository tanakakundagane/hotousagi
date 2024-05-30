import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ホトうさぎ岐阜',
  description: 'ホトうさぎ岐阜は、障がい者の社会参加と自立を支援する就労継続支援A型事業所です。安全で適正な環境のもと、社会参加の機会を提供し、継続的な就労訓練を通じて社会的障壁の除去を目指しています。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
