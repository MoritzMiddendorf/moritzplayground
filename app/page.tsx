import { siteConfig } from './config'
import { Metadata } from 'next'
import SharedContent from '@/components/SharedContent'

// This would typically come from an API that encapsulates a database
const subprojects = [
  { id: 1, title: 'Subproject 1', description: 'Description of subproject 1' },
  { id: 2, title: 'Subproject 2', description: 'Description of subproject 2' },
  // Add more subprojects as needed
]

export const metadata: Metadata = {
  title: `${siteConfig.name}'s Multi-Project Platform`,
  description: siteConfig.description,
}

export default function Home() {
  type TranslationKeys = 'welcome' | 'explore' | 'exploreButton' | 'allRightsReserved' | 'privacyPolicy' | 'imprint';

  const t = (key: TranslationKeys, params?: Record<string, any>) => {
    const translations: Record<TranslationKeys, string> = {
      welcome: `Welcome to ${params?.name}'s Multi-Project Platform`,
      explore: 'Explore our projects',
      exploreButton: 'Explore',
      allRightsReserved: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      imprint: 'Imprint'
    };
    return translations[key];
  };

  return <SharedContent t={t} siteName={siteConfig.name} subprojects={subprojects} />;
}

