import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Define the type for the translation function
type TranslationFunction = (key: string, params?: Record<string, any>) => string;

// Define the props for SharedContent
interface SharedContentProps {
  t: TranslationFunction;
  siteName: string;
  subprojects: { id: number; title: string; description: string }[];
}

// Use the defined types in your components
const SharedContent: React.FC<SharedContentProps> = ({ t, siteName, subprojects }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">{t('welcome', { name: siteName })}</h1>
      <p className="text-center text-lg mt-4">{t('explore')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {subprojects.map((project) => (
          <Card key={project.id} className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lavender-900">{project.title}</CardTitle>
              <CardDescription className="text-lavender-700">{project.description}</CardDescription>
            </CardHeader>
            <Link 
              href={`/subproject/${project.id}`} 
              className="block text-center bg-lavender-600 text-white p-2 mt-4 rounded-b-lg hover:bg-lavender-700 transition-colors"
            >
              {t('exploreButton')}
            </Link>
          </Card>
        ))}
      </div>

      <footer className="mt-16 text-center text-sm text-lavender-700">
        <p>© {new Date().getFullYear()} {siteName}. {t('allRightsReserved')}</p>
        <p>
          <Link href="/privacy-policy" className="underline hover:text-lavender-900">{t('privacyPolicy')}</Link>
          {' | '}
          <Link href="/imprint" className="underline hover:text-lavender-900">{t('imprint')}</Link>
        </p>
      </footer>
    </div>
  );
};

export default SharedContent;