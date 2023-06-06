import './globals.css'
import { Roboto } from 'next/font/google'
import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '500', variable: '--font-roboto' })
const roboto_flex = Roboto_Flex({ subsets: ['latin'], weight: '900', variable: '--font-roboto-flex' })

export const metadata = {
  title: 'Christian.dev',
  description: 'Portifólio pessoal de Chrsitian Mesaque, FullStack developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${roboto_flex.variable} bg-white-200`}>{children}</body>
    </html>
  )
}
