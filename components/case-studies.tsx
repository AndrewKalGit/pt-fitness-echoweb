import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function CaseStudySection() {
  return (
    <section id="case-study" className="px-4 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">See the System in Action</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-white border-gray-200">
            <iframe
              className="w-full aspect-video rounded-lg mb-4"
              src="https://www.youtube.com/embed/"
              title="Case Study Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Watch the System in Action</h3>
            <p className="text-gray-600 text-sm">
              See how the conversion-optimized flow and automation work together to turn leads into committed sessions
            </p>
            <div><Link target="blank" href="https://your-case-study-link.com" className="text-blue-400 hover:underline">View Finished Work</Link></div>
            <div><Link target="blank" href="https://your-case-study-link.com" className="text-blue-400 hover:underline">View Live Automation Demo</Link></div>
          </Card>

          <Card className="p-6 bg-white border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Results</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Automated Lead Management:</span> Automated follow-ups and reminders, reducing no-shows,
                  and keeping clients engaged
                </p>
              </div>
               <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">SEO and Local Visibility:</span> Cast a wider but targeted net to attract more
                  potential clients
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Higher booking & commitment:</span> Clear value proposition through high quality digital content and
                  frictionless scheduling integration with your existing systems
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Less admin overhead:</span> Backend systems handle repetitive tasks
                  automatically
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Better trainer utilization:</span> More booked sessions, less waiting
                  around, faster communication between clients and trainers
                </p>
              </div>
               <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Maintain Your Current Systems:</span> We work off your existing websites, domains, and act as an additional 
                  layer to enhance your current setup without disruption
                </p>
              </div>
            </div>
          </Card>
        </div>
         {/* <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-white border-gray-200">
            <iframe
              className="w-full aspect-video rounded-lg mb-4"
              src="https://www.youtube.com/embed/"
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Watch the System in Action</h3>
            <p className="text-gray-600 text-sm">
              See how the conversion-optimized flow and automation work together to turn leads into committed sessions
            </p>
          </Card>

          <Card className="p-6 bg-white border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Results</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Automated Lead Management:</span> Automated follow-ups and reminders, reducing no-shows,
                  and keeping clients engaged
                </p>
              </div>
               <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">SEO and Local Visibility:</span> Cast a wider but targeted net to attract more
                  potential clients
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Higher booking & commitment:</span> Clear value proposition through high quality digital content and
                  frictionless scheduling integration with your existing systems
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Less admin overhead:</span> Backend systems handle repetitive tasks
                  automatically
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Better trainer utilization:</span> More booked sessions, less waiting
                  around, faster communication between clients and trainers
                </p>
              </div>
               <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Maintain Your Current Systems:</span> We work off your existing websites, domains, and act as an additional 
                  layer to enhance your current setup without disruption
                </p>
              </div>
            </div>
          </Card>
        </div> */}
      </div>
    </section>
  )
}
