"use client"

import { Award, Code, Globe, CheckCircle } from "lucide-react"

const stats = [
	{
		icon: Award,
		title: "Nearly 10 Years",
		description: "of Excellence",
		details: [
			"Founded 2015, still growing strong",
			"Cutting-edge tech & methodologies",
			"Deep expertise across industries",
		],
	},
	{
		icon: Code,
		title: "Enterprise-Grade Quality",
		description: "Every Single Time",
		details: [
			"Production-ready from day one",
			"Built to scale to millions of users",
			"Industry best practices & security",
		],
	},
	{
		icon: Globe,
		title: "Global Impact",
		description: "Local Support",
		details: [
			"Clients across 5 continents",
			"Healthcare to fintech expertise",
			"Long-term partnerships (avg 3+ years)",
		],
	},
]

export function Experience() {
	return (
		<section className="py-32 bg-gray-50 relative overflow-hidden">
			{/* Minimalist background decorations with more depth */}
			<div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-gray-300/30 to-gray-200/20 blur-3xl"></div>
			<div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gray-300/20 to-transparent blur-3xl"></div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
				{/* Section Header */}
				<div className="text-center mb-20">
					<div className="inline-block px-6 py-3 bg-black text-white mb-8 shadow-lg">
						<p className="text-sm font-bold tracking-wider">WHY CHOOSE US</p>
					</div>
					<h2 className="text-5xl sm:text-6xl font-bold text-black mb-6 leading-tight">
						Your Success Is
						<span className="block text-teal-500 mt-2 drop-shadow-sm">
							Our Only Metric
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						We don't just write code—we build solutions that solve real problems, drive revenue, and scale as you grow.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{stats.map((stat, index) => {
						const Icon = stat.icon
						return (
							<div key={index} className="text-center group relative">
								{/* Shadow layer for depth */}
								<div className="absolute inset-0 bg-black/5 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>

								{/* Square card with layered shadow */}
								<div className="relative bg-white p-10 border-2 border-gray-300 hover:border-teal-500 transition-all duration-300 group-hover:-translate-y-2 shadow-xl hover:shadow-2xl">
									{/* Square icon container with depth */}
									<div className="relative inline-block mb-8">
										{/* Icon shadow layer */}
										<div className="absolute inset-0 bg-black/10 translate-x-1 translate-y-1"></div>
										<div className="relative inline-flex items-center justify-center w-24 h-24 bg-black text-white group-hover:bg-teal-500 group-hover:text-black transition-all duration-300 shadow-lg group-hover:shadow-xl">
											<Icon className="h-12 w-12" />
										</div>
									</div>

									<h3 className="text-3xl font-bold text-black mb-3">
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
												className="flex items-start text-sm text-gray-700 font-medium"
											>
												<CheckCircle className="h-5 w-5 mr-3 text-teal-500 flex-shrink-0 mt-0.5 drop-shadow-sm" />
												<span>{detail}</span>
											</li>
										))}
									</ul>

									{/* Bottom accent with shadow */}
									<div className="absolute bottom-0 left-0 right-0 h-1 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left shadow-lg"></div>
								</div>
							</div>
						)
					})}
				</div>

				{/* Social proof section */}
				<div className="mt-20 text-center">
					<p className="text-lg text-gray-600 mb-6">
						<span className="font-bold text-black">Trusted by startups to Fortune 500s</span> — from healthcare platforms processing millions of records to fintech apps handling secure transactions.
					</p>
					<div className="inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-gray-300 shadow-lg">
						<CheckCircle className="h-5 w-5 text-teal-500" />
						<span className="text-sm font-bold text-gray-700">
							Average project NPS score: 9.2/10
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}
