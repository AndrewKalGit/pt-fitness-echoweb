import { Card } from "@/components/ui/card"

export function ProblemSection() {
  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Why Private Training Revenue Gets Stuck
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-white border-gray-200 border border-gray-300 shadow-lg">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                <span className="text-red-400 font-bold">×</span>
              </div>
              <h3 className="font-semibold text-gray-900">Leads Inquire But Disappear</h3>
              <p className="text-gray-600 text-sm">
                Interest does not convert because follow-up is manual and inconsistent
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-white border-gray-200 border border-gray-300 shadow-lg">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                <span className="text-red-500 font-bold">×</span>
              </div>
              <h3 className="font-semibold text-gray-900">Sessions Cancel or Never Commit</h3>
              <p className="text-gray-600 text-sm">
                Without commitment systems, clients flake and revenue stays unpredictable
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-white border-gray-200 border border-gray-300 shadow-lg">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                <span className="text-red-400 font-bold">×</span>
              </div>
              <h3 className="font-semibold text-gray-900">Trainers Wait Around Unused</h3>
              <p className="text-gray-600 text-sm">Poor utilization means lost revenue and frustrated coaching staff</p>
            </div>
          </Card>

          <Card className="p-6 bg-white border-gray-200 border border-gray-300 shadow-lg">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                <span className="text-red-400 font-bold">×</span>
              </div>
              <h3 className="font-semibold text-gray-900">Revenue Stuck at $10-15k/Month</h3>
              <p className="text-gray-600 text-sm">
                Systems built for memberships do not optimize private training conversions
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
