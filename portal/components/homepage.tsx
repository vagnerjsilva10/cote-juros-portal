import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { AiSection } from '@/components/sections/ai-section';
import { ComparatorsSection } from '@/components/sections/comparators-section';
import { DiagnosisSection } from '@/components/sections/diagnosis-section';
import { EditorialSection } from '@/components/sections/editorial-section';
import { HeroSection } from '@/components/sections/hero-section';
import { PillarsSection } from '@/components/sections/pillars-section';
import { ProblemSection } from '@/components/sections/problem-section';
import { ToolsSection } from '@/components/sections/tools-section';

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PillarsSection />
        <ProblemSection />
        <ComparatorsSection />
        <ToolsSection />
        <DiagnosisSection />
        <AiSection />
        <EditorialSection />
      </main>
      <SiteFooter />
    </>
  );
}
