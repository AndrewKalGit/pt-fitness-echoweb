"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { label: "Case Studies", id: "case-study" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={scrollToTop}
            aria-label="Scroll to top">
            <Image
              src="/logo.png"
              alt="Echo Web, LLC Fitness Logo"
              width={200}
              height={50}
              className="object-contain cursor-pointer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-gray-700 border border-gray-300 p-2 rounded-lg shadow-lg drops hover:text-gray-700/70 transition-colors font-semibold"
              >
                {link.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection("book-audit")} className="bg-gray-900 hover:bg-gray-800 text-white">
              Book a Free Audit
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          {/* <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-900 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>

        {/* Mobile Navigation */}
        {/* {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-blue-400 transition-colors font-medium text-left px-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("book-audit")}
                className="bg-blue-400 hover:bg-blue-500 text-white w-full"
              >
                Book Free Audit
              </Button>
            </div>
          </nav>
        )} */}
      </div>
    </header>
  )
}
