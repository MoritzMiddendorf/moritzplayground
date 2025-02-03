import { siteConfig } from '../config'
import { useTranslations } from 'next-intl'
import { Metadata } from 'next'
import SharedContent from '@/components/SharedContent'

// This would typically come from an API that encapsulates a database
const subprojects = [
  { id: 1, title: 'Subproject 1', description: 'Description of subproject 1' },
  { id: 2, title: 'Subproject 2', description: 'Description of subproject 2' },
]

export const metadata: Metadata = {
  title: `${siteConfig.name}'s Multi-Project Platform`,
  description: siteConfig.description,
}

export default function Home() {
  const t = useTranslations('Index');

  return <SharedContent t={t} siteName={siteConfig.name} subprojects={subprojects} />;
}

