"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Zap } from "lucide-react"

export function Hero() {
	const scrollToServices = () => {
		const servicesSection = document.getElementById("services")
		servicesSection?.scrollIntoView({ behavior: "smooth" })
	}

	return (
		<section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
			{/* Enhanced grid with depth */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#444_1px,transparent_1px),linear-gradient(to_bottom,#444_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>

			{/* Layered grey accents with depth */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-br from-white/10 to-white/5 filter blur-3xl"></div>
				<div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-bl from-white/10 to-white/5 filter blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/5 to-transparent rounded-full filter blur-3xl"></div>
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="max-w-6xl mx-auto text-center">
					{/* Badge with shadow depth */}
					<div className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 mb-8 animate-fade-in-up shadow-2xl shadow-teal-500/20">
						<Zap className="w-4 h-4 text-black" />
						<span className="text-sm font-bold text-black tracking-wider">
							SOLO DEV • 3 CONTINENTS • 10 YEARS EXPERIENCE
						</span>
					</div>

					{/* Main Headline with text shadows */}
					<h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up animation-delay-200 leading-tight">
						<span className="text-white drop-shadow-lg">
							I Design & Build Your
						</span>
						<br />
						<span className="text-teal-500 drop-shadow-[0_0_30px_rgba(20,184,166,0.3)]">
							Entire Software Solution
						</span>
					</h1>

					{/* Subheadline - more benefit focused */}
					<p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed drop-shadow-md">
						Full-stack architect who's shipped products for startups to Fortune 500s across Europe, Asia, and North America.
						<span className="text-teal-400 font-semibold"> React • Rails • Golang • Java</span>—I handle it all, from concept to deployment.
					</p>

					{/* CTA Buttons with layered shadows */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600 mb-16">
						<Button
							size="lg"
							className="group min-w-[240px] bg-teal-500 hover:bg-teal-400 text-black border-0 font-bold text-base h-14 rounded-none shadow-2xl shadow-teal-500/30 hover:shadow-teal-400/40 hover:-translate-y-1 transition-all"
							onClick={() =>
								(window.location.href = "mailto:info@wipsolutions.com")
							}
						>
							Let's Talk About Your Project
							<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="min-w-[240px] bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-base h-14 rounded-none font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
							onClick={scrollToServices}
						>
							See What I Build
						</Button>
					</div>

					{/* Trust Indicators with depth - more specific */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-20 pt-12 border-t border-gray-800 max-w-4xl mx-auto">
						<div className="text-center group">
							<div className="text-5xl font-bold text-teal-500 mb-3 drop-shadow-[0_0_20px_rgba(20,184,166,0.4)] group-hover:drop-shadow-[0_0_30px_rgba(20,184,166,0.6)] transition-all">
								10+
							</div>
							<div className="text-base text-gray-400 font-medium">
								Years Coding Professionally
							</div>
						</div>
						<div className="text-center group">
							<div className="text-5xl font-bold text-white mb-3 drop-shadow-lg group-hover:text-teal-500 group-hover:drop-shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all">
								3
							</div>
							<div className="text-base text-gray-400 font-medium">
								Continents, Countless Projects
							</div>
						</div>
						<div className="text-center group">
							<div className="text-5xl font-bold text-teal-500 mb-3 drop-shadow-[0_0_20px_rgba(20,184,166,0.4)] group-hover:drop-shadow-[0_0_30px_rgba(20,184,166,0.6)] transition-all">
								A-Z
							</div>
							<div className="text-base text-gray-400 font-medium">
								Full-Stack Solutions
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator with glow */}
			<button
				onClick={scrollToServices}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer text-gray-400 hover:text-teal-500 transition-colors drop-shadow-lg hover:drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"
				aria-label="Scroll to services"
			>
				<ChevronDown className="h-10 w-10" />
			</button>
		</section>
	)
}

