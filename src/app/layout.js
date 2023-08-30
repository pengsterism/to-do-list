import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../../lib/registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'To Do List',
  description: 'Zahira made this! Wow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
