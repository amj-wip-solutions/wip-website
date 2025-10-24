"use client"

import { Award, Code, Globe, CheckCircle } from "lucide-react"

const stats = [
	{
		icon: Globe,
		title: "Global Experience",
		description: "3 Continents, Countless Lessons",
		details: [
			"Worked in Europe, Asia, North America",
			"Startups to Fortune 500 companies",
			"Small teams and large organizations",
		],
	},
	{
		icon: Code,
		title: "Full-Stack Mastery",
		description: "React to Rails, Golang to Java",
		details: [
			"Entire React ecosystem (Next.js, React Native)",
			"Backend: Rails, Golang, Java",
			"DevOps, databases, architecture",
		],
	},
	{
		icon: Award,
		title: "Nearly a Decade",
		description: "Still Learning Every Day",
		details: [
			"Started in 2015, still shipping code",
			"Led teams, shipped solo projects",
			"From code to customer success",
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
						<p className="text-sm font-bold tracking-wider">MY JOURNEY</p>
					</div>
					<h2 className="text-5xl sm:text-6xl font-bold text-black mb-6 leading-tight">
						A Decade of Building
						<span className="block text-teal-500 mt-2 drop-shadow-sm">
							Software That Matters
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						I&apos;ve worn every hat—junior dev, senior engineer, tech lead, solo founder. I know what works because I&apos;ve lived it.
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

				{/* Personal statement */}
				<div className="mt-20 text-center">
					<p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
						<span className="font-bold text-black">Why work with a solo developer?</span> Direct communication, faster decisions, and deep expertise across the entire stack.
						No handoffs, no miscommunication—just one experienced developer who owns your project from start to finish.
					</p>
					<div className="inline-flex items-center gap-2 px-5 py-3 bg-white border-2 border-gray-300 shadow-lg">
						<CheckCircle className="h-5 w-5 text-teal-500" />
						<span className="text-sm font-bold text-gray-700">
							One developer. Full ownership. Real results.
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}
