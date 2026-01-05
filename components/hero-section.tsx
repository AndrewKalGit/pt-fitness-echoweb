"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="px-4 py-16 md:py-24 lg:py-32 max-w-6xl mx-auto">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight text-balance max-w-4xl mx-auto">
          Turn Private Training Interest Into Booked, Committed Sessions Without More Admin Work
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
          Conversion-focused web design, local visibility, and backend systems built specifically for boutique gyms
          offering private training.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            className="text-base px-8 bg-gray-900 hover:bg-gray-800 text-white"
            onClick={() => scrollToSection("book-audit")}
          >
            Book a Free Audit
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            onClick={() => scrollToSection("demo")}
          >
            See How the System Works
          </Button>
        </div>
      </div>
    </section>
  )
}
