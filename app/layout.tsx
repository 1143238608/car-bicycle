import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '汽车与自行车中心 - 专业的车辆资讯平台',
  description: '探索最新的汽车和自行车资讯、评测、购买指南和维护技巧。为您提供全面的车辆信息和专业建议。',
  keywords: '汽车, 自行车, 车辆评测, 购车指南, 维护保养, 新能源汽车, 电动自行车',
  other: {
    'ppck-ver': '401215a0184ba59e37ab9af9e96cd22a',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Script id="popcash-ad" strategy="afterInteractive">
          {`
            var uid = '499396';
            var wid = '751365';
            var pop_tag = document.createElement('script');
            pop_tag.src='//cdn.popcash.net/show.js';
            document.body.appendChild(pop_tag);
            pop_tag.onerror = function() {
              pop_tag = document.createElement('script');
              pop_tag.src='//cdn2.popcash.net/show.js';
              document.body.appendChild(pop_tag)
            };
          `}
        </Script>
      </body>
    </html>
  )
}
