"use client"

import type React from "react"
import Link from "next/link"
import { Auth } from "@/components/Auth"
import { useTranslations } from "next-intl"

interface SharedContentProps {
  siteName: string
  subprojects: { id: number; title: string; description: string }[]
}

const SharedContent: React.FC<SharedContentProps> = ({siteName, subprojects }) => {
  const t = useTranslations("Index")

  return (
    <div className="min-h-screen flex flex-col bg-lavender-50">
      <div className="container mx-auto px-4 py-8 bg-lavender-50 flex-grow flex flex-col">
        <Auth />
        <h1 className="text-4xl font-bold mb-8 text-center text-lavender-900">{t("welcome", { name: siteName })}</h1>

        <p className="text-center mb-8 text-lg text-lavender-800">{t("explore")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {subprojects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-lavender-900 mb-2">{project.title}</h2>
                <p className="text-lavender-700 mb-4">{project.description}</p>
                <Link
                  href={`/subproject/${project.id}`}
                  className="block text-center bg-lavender-600 text-white p-2 rounded-lg hover:bg-lavender-700 transition-colors"
                >
                  {t("exploreButton")}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-auto text-center text-sm text-lavender-700 flex-shrink-0">
          <p>
            © {new Date().getFullYear()} {siteName}. {t("allRightsReserved")}
          </p>
          <p className="mt-2">
            <Link href="/privacy-policy" className="underline hover:text-lavender-900 mr-4">
              {t("privacyPolicy")}
            </Link>
            <Link href="/imprint" className="underline hover:text-lavender-900">
              {t("imprint")}
            </Link>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default SharedContent

