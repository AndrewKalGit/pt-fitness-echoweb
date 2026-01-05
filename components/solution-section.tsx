import { Target, TrendingUp, Settings } from "lucide-react"

export function SolutionSection() {
  return (
    <section className="px-4 py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          A System Built for Private Training Growth
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Not just web design, a complete conversion system with automation that scales without adding manual work.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
              <Target className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Conversion-Optimized Page</h3>
            <p className="text-gray-600 text-sm">
              Built with intentions of turning interest into booked sessions with clear messaging and frictionless booking
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Local SEO Optimization</h3>
            <p className="text-gray-600 text-sm">
              Google Business profile and On-page local SEO visibility optimized for private training intented searches
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
              <Settings className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Backend Systems</h3>
            <p className="text-gray-600 text-sm">
              Automated systems that manage leads and bookings without adding admin work
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
