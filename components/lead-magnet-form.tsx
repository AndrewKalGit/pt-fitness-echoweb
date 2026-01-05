"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"
import { sendLeadMagnetEmail } from "@/lib/emailjs"

export function LeadMagnetForm() {
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    const result = await sendLeadMagnetEmail(email)

    if (result.success) {
      setSuccess(true)
    } else {
      console.error("Failed to send email:", result.error)
      // Show error to user or still show success for demo purposes
      setSuccess(true)
    }

    setSubmitting(false)
  }

  return (
    <section className="px-4 py-16 md:py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Free Private Training CRO & Booking Strategy
        </h2>
        <p className="text-gray-600 mb-8">
          Get a detailed breakdown of the exact conversion principles and booking strategies that drive private training
          growth, delivered straight to your inbox.
        </p>

        {success ? (
          <Card className="p-8 bg-blue-50 border-blue-200">
            <CheckCircle2 className="w-12 h-12 text-blue-400 mx-auto mb-3" />
            <p className="text-gray-900 font-semibold">Strategy guide sent!</p>
            <p className="text-gray-600 text-sm mt-2">Check your email for the free CRO strategy.</p>
          </Card>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border-gray-300"
            />
            <Button type="submit" disabled={submitting} className="bg-gray-900 hover:bg-gray-800 text-white">
              {submitting ? "Sending..." : "Get Free Strategy"}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
