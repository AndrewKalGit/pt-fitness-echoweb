import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-4 py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
         
            <h3 className="font-semibold mb-4">   <Link href="/" className="text-lg font-bold mb-4 inline-block hover:text-white transition-colors">
            Echo Web, LLC Fitness 
            </Link></h3>
            <p className="text-sm text-gray-400">
              Conversion-optimized web design and backend systems for boutique fitness gyms
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/#demo" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#audit-form" className="hover:text-white transition-colors">
                  Book Growth Plan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Private Training Growth Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
