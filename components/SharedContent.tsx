import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export type TranslationKeys =
  | "welcome"
  | "explore"
  | "exploreButton"
  | "allRightsReserved"
  | "privacyPolicy"
  | "imprint"

interface SharedContentProps {
  t: (key: TranslationKeys, params?: Record<string, any>) => string
  siteName: string
  subprojects: { id: number; title: string; description: string }[]
}

const SharedContent: React.FC<SharedContentProps> = ({ t, siteName, subprojects }) => {
  return (
    <div className="flex flex-col items-center min-h-screen container mx-auto px-4 py-8 bg-lavender-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-lavender-900">{t("welcome", { name: siteName })}</h1>

      <p className="text-center mb-8 text-lg text-lavender-800">{t("explore")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        {subprojects.map((project) => (
          <Card key={project.id} className="w-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lavender-900 text-center">{project.title}</CardTitle>
              <CardDescription className="text-lavender-700">{project.description}</CardDescription>
            </CardHeader>
            <Link
              href={`/subproject/${project.id}`}
              className="block text-center bg-lavender-600 text-white p-2 mt-4 rounded-b-lg hover:bg-lavender-700 transition-colors"
            >
              {t("exploreButton")}
            </Link>
          </Card>
        ))}
      </div>

      <footer className="mt-auto text-center text-sm text-lavender-700">
        <p>
          © {new Date().getFullYear()} {siteName}. {t("allRightsReserved")}
        </p>
        <p>
          <Link href="/privacy-policy" className="underline hover:text-lavender-900">
            {t("privacyPolicy")}
          </Link>
          {" | "}
          <Link href="/imprint" className="underline hover:text-lavender-900">
            {t("imprint")}
          </Link>
        </p>
      </footer>
    </div>
  )
}

export default SharedContent