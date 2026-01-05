import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Terms & Conditions | Private Training Growth Systems",
  description: "Terms and conditions for using our services",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/">
          <Button variant="outline" className="mb-8 bg-transparent">
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: January 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using this website and our services, you accept and agree to be bound by these Terms and
              Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-600 mb-4">
              Private Training Growth Systems provides conversion-optimized web design, local SEO optimization, and
              backend automation systems specifically for boutique fitness gyms offering private training services. Our
              services include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Free private training flow audits and growth plan consultations</li>
              <li>Conversion-optimized landing page design and development</li>
              <li>Local SEO optimization and Google Business profile management</li>
              <li>Backend automation systems for lead follow-up and booking management</li>
              <li>Ongoing optimization and performance tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Obligations</h2>
            <p className="text-gray-600 mb-4">When using our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Not attempt to gain unauthorized access to any portion of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content, features, and functionality on this website, including but not limited to text, graphics,
              logos, designs, and software, are the exclusive property of Private Training Growth Systems and are
              protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-600">
              Work products created for clients as part of our services remain our intellectual property until full
              payment is received, at which point rights transfer to the client as specified in individual service
              agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              For paid services, payment terms will be specified in individual service agreements. General terms
              include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Payment is required according to the agreed-upon schedule</li>
              <li>Late payments may result in service suspension</li>
              <li>Refund policies are specified in individual service agreements</li>
              <li>Prices are subject to change with advance notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Guarantees and Limitations</h2>
            <p className="text-gray-600 mb-4">
              While we strive to deliver exceptional results, we make no guarantees regarding specific business
              outcomes, revenue increases, or conversion rates. Results depend on multiple factors including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Quality of your existing services and training programs</li>
              <li>Market conditions and competition in your area</li>
              <li>Your engagement and implementation of recommended strategies</li>
              <li>External factors beyond our control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600">
              To the maximum extent permitted by law, Private Training Growth Systems shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
              whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses
              resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to terminate or suspend access to our services immediately, without prior notice or
              liability, for any reason, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Breach of these Terms and Conditions</li>
              <li>Non-payment for services</li>
              <li>Abusive or inappropriate behavior</li>
              <li>At our discretion for business reasons</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy and Data Protection</h2>
            <p className="text-gray-600">
              Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to
              understand how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Third-Party Services</h2>
            <p className="text-gray-600">
              Our services may integrate with third-party tools and platforms. We are not responsible for the
              availability, accuracy, or content of third-party services, and your use of such services is governed by
              their respective terms and policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modifications to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
              immediately upon posting to this page. Your continued use of our services after changes are posted
              constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-600">
              These Terms and Conditions shall be governed by and construed in accordance with applicable laws. Any
              disputes arising from these terms or your use of our services shall be resolved through binding
              arbitration or in the courts of appropriate jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Severability</h2>
            <p className="text-gray-600">
              If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision
              shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain
              in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-600">
              For questions about these Terms and Conditions, please contact us through the form on our homepage or via
              the contact information provided on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Entire Agreement</h2>
            <p className="text-gray-600">
              These Terms and Conditions, together with our Privacy Policy and any service-specific agreements,
              constitute the entire agreement between you and Private Training Growth Systems regarding your use of our
              services.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
