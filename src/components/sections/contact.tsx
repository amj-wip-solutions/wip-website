"use client"

import { Button } from "@/components/ui/button"
import { Mail, ArrowRight, Phone, Calendar, Zap } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Layered grey accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-gray-200 to-gray-100 opacity-50 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-gray-200 to-transparent opacity-40 blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-black text-white mb-8 shadow-lg">
              <p className="text-sm font-bold tracking-wider">LET&apos;S CONNECT</p>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-black mb-6 leading-tight">
              Got an Idea?
              <span className="block text-teal-500 mt-2 drop-shadow-sm">
                Let&apos;s Build It Together
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Free 30-minute consultation. I&apos;ll give you honest feedback on your project, tech stack, and timeline—no sales pitch.
            </p>
          </div>

          {/* Contact Cards Grid - Enhanced with depth */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Email Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-black/5 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
              <div className="relative bg-white border-2 border-gray-300 hover:border-teal-500 p-8 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-black/10 translate-x-1 translate-y-1"></div>
                  <div className="relative w-16 h-16 bg-black flex items-center justify-center shadow-lg">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Email Me</h3>
                <p className="text-sm text-gray-500 mb-3">I reply within 24 hours</p>
                <a
                  href="mailto:info@wipsolutions.com"
                  className="text-teal-500 hover:text-teal-600 font-semibold transition-colors text-lg break-all"
                >
                  info@wipsolutions.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-black/5 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
              <div className="relative bg-white border-2 border-gray-300 hover:border-teal-500 p-8 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-black/10 translate-x-1 translate-y-1"></div>
                  <div className="relative w-16 h-16 bg-black flex items-center justify-center shadow-lg">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Call Me</h3>
                <p className="text-sm text-gray-500 mb-3">Available across time zones</p>
                <a
                  href="tel:+1234567890"
                  className="text-teal-500 hover:text-teal-600 font-semibold transition-colors text-lg"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-black/5 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
              <div className="relative bg-white border-2 border-gray-300 hover:border-teal-500 p-8 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-black/10 translate-x-1 translate-y-1"></div>
                  <div className="relative w-16 h-16 bg-black flex items-center justify-center shadow-lg">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Schedule a Call</h3>
                <p className="text-sm text-gray-500 mb-3">30-min free consultation</p>
                <a
                  href="mailto:info@wipsolutions.com?subject=Schedule Consultation"
                  className="text-teal-500 hover:text-teal-600 font-semibold transition-colors text-lg"
                >
                  Pick a Time
                </a>
              </div>
            </div>
          </div>

          {/* Main CTA Card - Enhanced depth */}
          <div className="relative group">
            <div className="absolute inset-0 bg-black/20 translate-x-3 translate-y-3"></div>
            <div className="relative bg-black p-12 shadow-2xl">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 mb-6">
                  <Zap className="h-4 w-4 text-black" />
                  <span className="text-sm font-bold text-black tracking-wide">
                    ACCEPTING NEW PROJECTS
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                  Work Directly With Me
                </h3>
                <p className="text-gray-300 text-xl mb-10 leading-relaxed font-medium">
                  No account managers. No project coordinators. Just <span className="text-teal-400 font-bold">direct collaboration</span> with
                  an experienced full-stack developer who will own your project end-to-end.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Button
                    size="lg"
                    className="group min-w-[250px] bg-teal-500 text-black hover:bg-teal-400 text-base h-14 font-bold rounded-none shadow-2xl shadow-teal-500/30 hover:shadow-teal-400/40 hover:-translate-y-1 transition-all"
                    onClick={() => window.location.href = 'mailto:info@wipsolutions.com?subject=Project Inquiry'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Start the Conversation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Stats with guarantees */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t-2 border-gray-800">
                  <div>
                    <div className="text-4xl font-bold text-teal-500 mb-2 drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">Direct</div>
                    <div className="text-gray-400 text-sm font-medium">Communication</div>
                    <div className="text-gray-500 text-xs mt-1">No middlemen</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">Fast</div>
                    <div className="text-gray-400 text-sm font-medium">Turnaround</div>
                    <div className="text-gray-500 text-xs mt-1">Solo efficiency</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-teal-500 mb-2 drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">A-Z</div>
                    <div className="text-gray-400 text-sm font-medium">Ownership</div>
                    <div className="text-gray-500 text-xs mt-1">Full-stack coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
