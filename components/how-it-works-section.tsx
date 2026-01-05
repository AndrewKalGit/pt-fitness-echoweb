export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-4 py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Audit Your Private Training Flow</h3>
            <p className="text-gray-600 text-center">
              We analyze your site, inquiry process, and booking flow to identify conversion leaks
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Build Conversion-Focused Systems</h3>
            <p className="text-gray-600 text-center">
              Design optimized landing page and implement backend automation for bookings and follow-up
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">Launch, Track, Optimize</h3>
            <p className="text-gray-600 text-center">
              Go live with tracking in place, then continuously optimize based on real booking data
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
