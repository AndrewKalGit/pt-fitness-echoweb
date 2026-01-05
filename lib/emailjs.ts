"use server"

// Email.js Server Actions
// Follow these steps to set up Email.js:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create two email templates (one for audit form, one for lead magnet)
// 4. Get your Public Key from Account settings
// 5. Add your credentials to the environment variables in Vercel (Vars section in sidebar)
//    - EMAILJS_SERVICE_ID
//    - EMAILJS_AUDIT_TEMPLATE_ID
//    - EMAILJS_LEAD_TEMPLATE_ID
//    - EMAILJS_PUBLIC_KEY

interface AuditFormData {
  name: string
  gymName: string
  email: string
  issue: string
  turnstileToken: string; 
}

export async function sendAuditEmail(formData: AuditFormData): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if Email.js is configured
    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_AUDIT_TEMPLATE_ID || !process.env.EMAILJS_PUBLIC_KEY) {
      console.log("Email.js not configured, simulating success")
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return { success: true }
    }

    // Import Email.js only when configured
    const emailjs = (await import("@emailjs/browser")).default

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_AUDIT_TEMPLATE_ID,
      {
        name: formData.name,
        gym_name: formData.gymName,
        email: formData.email,
        issue: formData.issue,
      },
      process.env.EMAILJS_PUBLIC_KEY,
    )

    return { success: true }
  } catch (error) {
    console.error("Error sending audit email:", error)
    return { success: false, error: "Failed to send email" }
  }
}

export async function sendLeadMagnetEmail(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if Email.js is configured
    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_LEAD_TEMPLATE_ID || !process.env.EMAILJS_PUBLIC_KEY) {
      console.log("Email.js not configured, simulating success")
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return { success: true }
    }

    // Import Email.js only when configured
    const emailjs = (await import("@emailjs/browser")).default

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_LEAD_TEMPLATE_ID,
      {
        email: email,
      },
      process.env.EMAILJS_PUBLIC_KEY,
    )

    return { success: true }
  } catch (error) {
    console.error("Error sending lead magnet email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
