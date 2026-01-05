import { CheckCircle2 } from "lucide-react"

export function WhyDifferentSection() {
  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Why This Is Different</h2>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Built by Someone Who Understands the Floor</h3>
              <p className="text-gray-600">
                Not a generic agency, this system is designed by someone who knows both the training floor and the admin
                desk.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Specifically for Private Training Conversions</h3>
              <p className="text-gray-600">
                Every element is optimized for the unique sales cycle of private sessions, not generic membership
                funnels.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Systems Scale Without More Manual Work</h3>
              <p className="text-gray-600">
                Automation handles follow-up, reminders, and commitment so you can focus on training, not admin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
