"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Cloud, Smartphone, ShoppingCart, Code2, Workflow, Bot, ArrowRight } from "lucide-react"

const services = [
	{
		icon: Cloud,
		title: "SaaS Development",
		description: "Scalable cloud-native applications from MVP to enterprise-scale platforms.",
		features: ["Multi-tenant architecture", "API-first design", "Auto-scaling"]
	},
	{
		icon: Smartphone,
		title: "Mobile Applications",
		description: "Native iOS/Android or cross-platform solutions with React Native and Flutter.",
		features: ["Native performance", "Offline-first", "Push notifications"]
	},
	{
		icon: ShoppingCart,
		title: "E-commerce Solutions",
		description: "Complete shopping experiences with payments, inventory, and analytics.",
		features: ["Payment gateways", "Order management", "Analytics"]
	},
	{
		icon: Code2,
		title: "Code Modernization",
		description: "Transform legacy systems into modern microservices with zero downtime.",
		features: ["Legacy migration", "Architecture redesign", "Zero downtime"]
	},
	{
		icon: Workflow,
		title: "MCP Integration",
		description: "Model Context Protocol implementation for AI-powered workflows.",
		features: ["AI automation", "Workflow optimization", "Context-aware systems"]
	},
	{
		icon: Bot,
		title: "AI Chatbots & Automation",
		description: "Intelligent conversational AI to reduce manual work and boost engagement.",
		features: ["Natural language", "24/7 availability", "Multi-channel"]
	}
]

export function Services() {
	return (
		<section id="services" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
			{/* Background decoration with more contrast */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Streamlined Section Header */}
				<div className="max-w-4xl mx-auto text-center mb-20">
					<div className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full mb-8 shadow-lg">
						<p className="text-sm font-bold tracking-wide">OUR SERVICES</p>
					</div>
					<h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
						Custom Software Solutions
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
							Built for Your Success
						</span>
					</h2>
					<p className="text-xl text-gray-600 leading-relaxed">
						Production-ready software that solves real business problems and drives growth.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
					{services.map((service, index) => {
						const Icon = service.icon
						return (
							<Card
								key={index}
								className="group relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-gray-200 bg-white overflow-hidden"
							>
								{/* Enhanced gradient overlay */}
								<div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

								<CardHeader className="relative z-10 p-8">
									<div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white group-hover:scale-110 transition-transform shadow-xl shadow-blue-500/30">
										<Icon className="h-8 w-8" />
									</div>
									<CardTitle className="text-2xl mb-4 text-gray-900 group-hover:text-blue-600 transition-colors font-bold">
										{service.title}
									</CardTitle>
									<CardDescription className="text-base text-gray-600 mb-6 leading-relaxed">
										{service.description}
									</CardDescription>

									{/* Feature list */}
									<ul className="space-y-2 mb-4">
										{service.features.map((feature, idx) => (
											<li key={idx} className="flex items-center text-sm text-gray-700">
												<ArrowRight className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0" />
												{feature}
											</li>
										))}
									</ul>
								</CardHeader>

								{/* Enhanced bottom accent line */}
								<div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
							</Card>
						)
					})}
				</div>
			</div>
		</section>
	)
}
