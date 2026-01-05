import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { WhyDifferentSection } from "@/components/why-different-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CaseStudySection } from "@/components/case-studies"
import { LeadMagnetForm } from "@/components/lead-magnet-form"
import { PricingSection } from "@/components/pricing-section"
import { AuditForm } from "@/components/audit-form"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <WhyDifferentSection />
        <HowItWorksSection />
         <PricingSection />
        <CaseStudySection />
        {/* <LeadMagnetForm /> */}
        <AuditForm />
        <Footer />
      </div>
    </div>
  )
}
