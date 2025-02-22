import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Multi-Project Platform",
  description: "A platform for managing multiple subprojects",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale="en">
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}