// components/Layout.js
import Nav from "./Nav";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">{children}</main> {/* Dynamic page content */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-emerald-600" />
              <span className="font-semibold text-white">Ml Global</span>
            </div>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              Independent energy company focused on delivering energy security
              and decarbonisation.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold">About</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="#operations" className="hover:text-white">
                  Operations
                </Link>
              </li>
              <li>
                <Link href="#esg" className="hover:text-white">
                  ESG
                </Link>
              </li>
              <li>
                <Link href="#investors" className="hover:text-white">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="#careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Media</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="#media" className="hover:text-white">
                  Press releases
                </Link>
              </li>
              <li>
                <Link href="#media" className="hover:text-white">
                  Results & presentations
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white">
                  Contact PR
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-400">
            © {new Date().getFullYear()} YourEnergy plc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
