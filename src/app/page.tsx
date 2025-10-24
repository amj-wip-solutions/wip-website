"use client"

import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"

function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t-2 border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-white">
              WIP <span className="text-teal-500">Solutions</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md text-base leading-relaxed">
              Solo full-stack developer with a decade of experience shipping production code across 3 continents.
              From React to Rails, concept to deployment—I've got you covered.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-teal-500 flex items-center justify-center hover:scale-110 transition-all shadow-lg group"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-teal-500 flex items-center justify-center hover:scale-110 transition-all shadow-lg group"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-teal-500 flex items-center justify-center hover:scale-110 transition-all shadow-lg group"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">TECH STACK</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-teal-500 transition-colors text-base">React & Next.js</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-teal-500 transition-colors text-base">React Native</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-teal-500 transition-colors text-base">Ruby on Rails</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-teal-500 transition-colors text-base">Golang</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-teal-500 transition-colors text-base">Java</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">CONNECT</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors text-base">About Me</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-teal-500 transition-colors text-base">Get in Touch</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors text-base">Past Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors text-base">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-500 transition-colors text-base">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} WIP Solutions. Crafted by a solo developer.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:info@wipsolutions.com" className="text-gray-400 hover:text-teal-500 transition-colors">
              info@wipsolutions.com
            </a>
            <span className="text-gray-600">|</span>
            <p className="text-gray-500">
              Built with Next.js & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <main className="relative">
      {/* All sections */}
      <Hero />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
