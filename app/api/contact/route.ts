export async function POST(request: Request) {
  const { turnstileToken, ...formData } = await request.json()

  // Verify token with Cloudflare
  const verifyResponse = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    }
  )

  const verification = await verifyResponse.json()

  if (!verification.success) {
    return Response.json({ error: 'Verification failed' }, { status: 400 })
  }

  // Process form...
  return Response.json({ success: true })
}