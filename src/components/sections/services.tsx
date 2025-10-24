"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Cloud, Smartphone, ShoppingCart, Code2, Workflow, Bot, ArrowRight, CheckCircle2 } from "lucide-react"

const services = [
	{
		icon: Cloud,
		title: "SaaS Platforms",
		description: "End-to-end SaaS development. I design the architecture, build the backend, craft the frontend, and deploy to production.",
		features: ["React + Next.js frontends", "Rails/Golang/Java backends", "AWS/Cloud infrastructure"],
		highlight: "From idea to MVP in weeks"
	},
	{
		icon: Smartphone,
		title: "Mobile Applications",
		description: "Native iOS/Android or cross-platform with React Native. Complete app development including backend APIs and deployment.",
		features: ["React Native expertise", "App Store submissions", "Backend integration"],
		highlight: "One developer, full app"
	},
	{
		icon: ShoppingCart,
		title: "E-commerce Solutions",
		description: "Custom e-commerce platforms tailored to your business. Payment processing, inventory, analytics—all integrated seamlessly.",
		features: ["Custom checkout flows", "Payment gateway setup", "Admin dashboards"],
		highlight: "Revenue-ready solutions"
	},
	{
		icon: Code2,
		title: "Legacy Modernization",
		description: "I've worked with codebases from Rails 2 to modern stacks. Let me modernize your legacy system without the risk.",
		features: ["Incremental migration", "Zero downtime approach", "Knowledge transfer"],
		highlight: "Safe, proven process"
	},
	{
		icon: Workflow,
		title: "Full-Stack Development",
		description: "Need a complete solution? I handle frontend (React ecosystem), backend (Rails, Golang, Java), databases, and DevOps.",
		features: ["End-to-end ownership", "Modern tech stack", "Best practices built-in"],
		highlight: "One point of contact"
	},
	{
		icon: Bot,
		title: "Technical Leadership",
		description: "Led dev teams of all sizes across continents. Available for architecture reviews, code audits, or fractional CTO work.",
		features: ["Architecture design", "Code reviews", "Team mentoring"],
		highlight: "Startup to enterprise"
	}
]

export function Services() {
	return (
		<section id="services" className="py-32 bg-white relative overflow-hidden">
			{/* Layered background with depth */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-200 to-gray-100 opacity-60"></div>
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-200 to-gray-100 opacity-60"></div>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-500/5 to-transparent rounded-full blur-3xl"></div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
				{/* Section Header */}
				<div className="max-w-4xl mx-auto text-center mb-20">
					<div className="inline-block px-6 py-3 bg-black text-white mb-8 shadow-lg">
						<p className="text-sm font-bold tracking-wider">WHAT I DO</p>
					</div>
					<h2 className="text-5xl sm:text-6xl font-bold text-black mb-6 leading-tight">
						Full-Stack Solutions
						<span className="block text-teal-500 mt-2 drop-shadow-sm">
							Built By One Expert Developer
						</span>
					</h2>
					<p className="text-xl text-gray-600 leading-relaxed">
						No project managers. No account executives. Just direct collaboration with an experienced developer who&apos;s done this for a decade.
					</p>
				</div>

				{/* Services Grid - Enhanced Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => {
						const Icon = service.icon
						return (
							<div key={index} className="group relative">
								{/* Shadow layer for depth */}
								<div className="absolute inset-0 bg-black/5 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>

								<Card className="relative cursor-pointer transition-all duration-300 hover:-translate-y-2 border-2 border-gray-300 hover:border-teal-500 bg-white overflow-hidden rounded-none shadow-xl hover:shadow-2xl h-full">
									{/* Accent bar with shadow */}
									<div className="absolute top-0 left-0 right-0 h-1 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left shadow-lg"></div>

									<CardHeader className="relative z-10 p-8">
										{/* Icon with layered shadow */}
										<div className="mb-6 relative inline-block">
											<div className="absolute inset-0 bg-black/10 translate-x-1 translate-y-1"></div>
											<div className="relative inline-flex items-center justify-center w-16 h-16 bg-black text-white group-hover:bg-teal-500 group-hover:text-black transition-all duration-300 shadow-lg group-hover:shadow-xl">
												<Icon className="h-8 w-8" />
											</div>
										</div>

										<CardTitle className="text-2xl mb-4 text-black font-bold">
											{service.title}
										</CardTitle>
										<CardDescription className="text-base text-gray-600 mb-6 leading-relaxed">
											{service.description}
										</CardDescription>

										{/* Highlight badge */}
										<div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20">
											<CheckCircle2 className="h-4 w-4 text-teal-600" />
											<span className="text-xs font-bold text-teal-700 tracking-wide">
												{service.highlight}
											</span>
										</div>

										{/* Feature list */}
										<ul className="space-y-2">
											{service.features.map((feature, idx) => (
												<li key={idx} className="flex items-center text-sm text-gray-700 font-medium">
													<ArrowRight className="h-4 w-4 mr-2 text-teal-500 flex-shrink-0 drop-shadow-sm" />
													{feature}
												</li>
											))}
										</ul>
									</CardHeader>
								</Card>
							</div>
						)
					})}
				</div>

				{/* Bottom CTA */}
				<div className="text-center mt-16">
					<p className="text-lg text-gray-600 mb-4">
						Need something specific? <span className="font-bold text-black">Let&apos;s build it together.</span>
					</p>
					<a
						href="mailto:info@wipsolutions.com"
						className="inline-flex items-center text-teal-500 hover:text-teal-600 font-bold text-lg group"
					>
						Tell Me About Your Project
						<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
					</a>
				</div>
			</div>
		</section>
	)
}
