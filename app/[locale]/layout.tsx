import "../globals.css"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { locales } from "../config"
import Link from "next/link"
import { AuthProvider } from "@/contexts/AuthContext"
import type React from "react"
import {routing} from '@/i18n/routing';
import {getMessages} from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
 // Ensure that the incoming `locale` is valid
 if (!routing.locales.includes(locale as any)) {
  notFound();
}

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  if (!locales.includes(locale as any)) {
    notFound()
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <header className="bg-lavender-100 p-4">
            <nav className="container mx-auto px-4">
              <div className="flex justify-end">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc}`}
                    className="mx-2 text-lavender-900 hover:text-lavender-700 transition-colors"
                  >
                    {loc === "en" ? "English" : "Deutsch"}
                  </Link>
                ))}
              </div>
            </nav>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        </div>
      </AuthProvider>
    </NextIntlClientProvider>
  )
}