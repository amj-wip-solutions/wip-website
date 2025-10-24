"use client"

import { Award, Code, Globe, CheckCircle } from "lucide-react"

const stats = [
	{
		icon: Award,
		title: "Nearly 10 Years",
		description: "of Excellence",
		gradient: "from-yellow-500 to-orange-500",
		details: [
			"Established in 2015",
			"Continuous innovation",
			"Industry expertise",
		],
	},
	{
		icon: Code,
		title: "Smart & Robust Code",
		description: "Production-Ready",
		gradient: "from-blue-500 to-cyan-500",
		details: [
			"Enterprise-grade quality",
			"Scalable architecture",
			"Best practices",
		],
	},
	{
		icon: Globe,
		title: "Trusted Worldwide",
		description: "Global Reach",
		gradient: "from-purple-500 to-pink-500",
		details: [
			"Global client base",
			"Multi-industry experience",
			"Long-term partnerships",
		],
	},
]

export function Experience() {
	return (
		<section className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
			{/* Enhanced background decorations */}
			<div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl"></div>
			<div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl"></div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Streamlined Section Header */}
				<div className="text-center mb-20">
					<div className="inline-block px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full mb-8 shadow-lg">
						<p className="text-sm font-bold tracking-wide">WHY CHOOSE US</p>
					</div>
					<h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
						Built on Excellence,
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mt-2">
							Driven by Results
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Hundreds of successful projects delivered across industries worldwide.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto mb-16">
					{stats.map((stat, index) => {
						const Icon = stat.icon
						return (
							<div key={index} className="text-center group relative">
								{/* Enhanced Card background */}
								<div className="bg-white rounded-3xl p-10 shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-3 hover:border-gray-200">
									{/* Enhanced Icon with gradient background */}
									<div className="relative inline-block mb-8">
										<div
											className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity scale-150`}
										></div>
										<div
											className={`relative inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${stat.gradient} text-white shadow-2xl`}
										>
											<Icon className="h-12 w-12" />
										</div>
									</div>

									<h3 className="text-3xl font-bold text-gray-900 mb-3">
										{stat.title}
									</h3>
									<p className="text-xl text-gray-600 mb-6 font-medium">
										{stat.description}
									</p>

									{/* Details list */}
									<ul className="space-y-3 text-left">
										{stat.details.map((detail, idx) => (
											<li
												key={idx}
												className="flex items-start text-sm text-gray-700"
											>
												<CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
												<span>{detail}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						)
					})}
				</div>

				{/* Streamlined credibility section */}
				<div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl text-white text-center">
					<h3 className="text-3xl font-bold mb-6">
						Ready to Build Something Amazing?
					</h3>
					<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
						Join hundreds of satisfied clients. From startups to enterprises, we
						scale with your vision.
					</p>
					<div className="flex flex-wrap justify-center gap-8 text-center">
						<div>
							<div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
							<div className="text-gray-400">On-time Delivery</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
							<div className="text-gray-400">Support Available</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
							<div className="text-gray-400">Technologies</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
