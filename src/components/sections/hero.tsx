"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react"

export function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    servicesSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated background grid with higher contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* More vibrant gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-600/30 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full mb-8 animate-fade-in-up backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-100">Nearly a Decade of Excellence</span>
          </div>

          {/* Enhanced Main Headline with more contrast */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up animation-delay-200 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              Smart & Robust
            </span>
            <br />
            <span className="text-white drop-shadow-lg">Software Solutions</span>
          </h1>

          {/* Streamlined Subheadline - removed redundancy */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
            From SaaS platforms to mobile apps, e-commerce to AI automation—we deliver production-ready code that scales with your business.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600 mb-16">
            <Button
              size="lg"
              className="group min-w-[240px] bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white border-0 shadow-lg shadow-blue-500/50 text-base h-14"
              onClick={() => window.location.href = 'mailto:info@wipsolutions.com'}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[240px] bg-white/5 border-gray-500 text-white hover:bg-white/10 hover:border-gray-300 backdrop-blur-sm text-base h-14"
              onClick={scrollToServices}
            >
              Explore Our Services
            </Button>
          </div>

          {/* Streamlined Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-20 pt-12 border-t border-gray-700 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">10+</div>
              <div className="text-base text-gray-300 font-medium">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">200+</div>
              <div className="text-base text-gray-300 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">98%</div>
              <div className="text-base text-gray-300 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer text-gray-300 hover:text-white transition-colors"
        aria-label="Scroll to services"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </section>
  )
}
