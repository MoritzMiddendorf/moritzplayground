import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { siteConfig, locales } from '../config'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Await the entire params object first
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  if (!locales.includes(locale as any)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="h-full">
      <body className={`${inter.className} min-h-screen bg-lavender-50`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col min-h-screen">
            <header className="bg-lavender-100 p-4">
              <nav className="container mx-auto px-4">
                <div className="flex justify-end">
                  {locales.map((loc) => (
                    <Link 
                      key={loc}
                      href={`/${loc}`}
                      className="mx-2 text-lavender-900 hover:text-lavender-700"
                    >
                      {loc === 'en' ? 'English' : 'Deutsch'}
                    </Link>
                  ))}
                </div>
              </nav>
            </header>
            <main className="flex-grow container mx-auto px-4">
              {children}
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

