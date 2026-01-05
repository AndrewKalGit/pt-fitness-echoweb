"use client"

import { Button } from "@/components/ui/button"

export function PricingSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" className="px-4 py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Setup + Ongoing Partnership</h2>
        <p className="text-gray-600 mb-6">
          This is not a one-time project, it is a growth partnership with performance-friendly structure designed to
          scale your private training revenue.
        </p>
        <p className="text-sm text-gray-500 mb-8">Winter special pricing available for qualifying gyms.</p>
        <Button
          size="lg"
          className="bg-gray-900 hover:bg-gray-800 text-white"
          onClick={() => scrollToSection("audit-form")}
        >
        Book a Free Audit for Pricing Details
        </Button>
      </div>
    </section>
  )
}
