"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

interface TurnstileWidgetProps {
  siteKey: string
  onVerify?: (token: string) => void
  theme?: "light" | "dark" | "auto"
  size?: "normal" | "compact"
}

function TurnstileWidget({
  siteKey,
  onVerify,
  theme = "auto",
  size = "normal",
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const initTurnstile = () => {
      if (typeof window.turnstile === "undefined") {
        setTimeout(initTurnstile, 100)
        return
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme,
        size,
        callback: (token: string) => {
          if (onVerify) {
            onVerify(token)
          }
        },
      })
    }

    initTurnstile()

    return () => {
      if (widgetIdRef.current && typeof window.turnstile !== "undefined") {
        window.turnstile.remove(widgetIdRef.current)
      }
    }
  }, [siteKey, theme, size, onVerify])

  return <div ref={containerRef} />
}

declare global {
  interface Window {
    turnstile: {
      render: (
        container: HTMLElement | null,
        options: {
          sitekey: string
          theme?: string
          size?: string
          callback?: (token: string) => void
        }
      ) => string
      remove: (widgetId: string) => void
      reset: (widgetId: string) => void
    }
  }
}

export function AuditForm() {
  const [form, setForm] = useState({
    name: "",
    gymName: "",
    email: "",
    issue: "",
  })
  const [turnstileToken, setTurnstileToken] = useState<string>("")
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "")
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!turnstileToken) {
      setError("Please complete the verification")
      return
    }

    setSubmitting(true)

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: form.name,
          gym_name: form.gymName,
          reply_to: form.email,
          message: form.issue,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )

      console.log("EmailJS Success:", result)
      setSuccess(true)
    } catch (err) {
      console.error("EmailJS Error:", err)
      setError("Failed to send email. Please try again or contact us directly.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="book-audit" className="px-4 py-16 md:py-24">
      <div className="max-w-2xl mx-auto shadow-xl border border-gray-300 rounded-lg p-4 md:p-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Get More Private Training Clients
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Book a free audit to identify exactly what is holding back your private training revenue and how to fix it.
        </p>

        <Card className="p-8 bg-white border-gray-200 min-h-[600px] flex flex-col justify-center">
          {success ? (
            <div className="text-center py-8 animate-in fade-in duration-500">
              <CheckCircle2 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Growth Plan Request Received!
              </h3>
              <p className="text-gray-600">
                We will review your gym's private training flow and reach out within 24 hours with your customized growth plan.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {error && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="border-gray-300"
                />
              </div>

              <div>
                <label htmlFor="gymName" className="block text-sm font-medium text-gray-700 mb-2">
                  Gym Name *
                </label>
                <Input
                  id="gymName"
                  type="text"
                  value={form.gymName}
                  onChange={(e) => setForm({ ...form, gymName: e.target.value })}
                  required
                  className="border-gray-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="border-gray-300"
                />
              </div>

              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-2">
                  What is your biggest private training challenge? *
                </label>
                <Textarea
                  id="issue"
                  value={form.issue}
                  onChange={(e) => setForm({ ...form, issue: e.target.value })}
                  required
                  rows={4}
                  className="border-gray-300"
                  placeholder="e.g., Leads inquire but never commit, trainers not fully booked, no clear booking system..."
                />
              </div>

              <div className="flex justify-center">
                <TurnstileWidget
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                  onVerify={setTurnstileToken}
                  theme="auto"
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Book a Free Audit"}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our{" "}
                <a href="/privacy" className="underline hover:text-gray-700">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="underline hover:text-gray-700">
                  Terms & Conditions
                </a>
                .
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  )
}