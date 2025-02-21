"use client"

import type React from "react"
import { useAuth } from "@/contexts/AuthContext"
import { useTranslations } from "next-intl"

export const Auth: React.FC = () => {
  const { user, signIn, signOut } = useAuth()
  const t = useTranslations("Auth")

  return (
    <div className="flex justify-end p-4">
      {user ? (
        <div className="flex items-center">
          <span className="mr-4">{t("welcome", { email: user.email })}</span>
          <button
            onClick={signOut}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            {t("signOut")}
          </button>
        </div>
      ) : (
        <button
          onClick={signIn}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          {t("signInWithGoogle")}
        </button>
      )}
    </div>
  )
}

export default Auth