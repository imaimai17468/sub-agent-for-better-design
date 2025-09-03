import {
	ArrowRight,
	Code,
	Eye,
	Palette,
	Sparkles,
	Target,
	Users,
	Zap,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WithAgentLanding from "@/features/with-agent-landing";
import WithoutAgentLanding from "@/features/without-agent-landing";

export default function Home() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-[var(--design-gradient-from)] via-indigo-600 to-[var(--design-gradient-to)] text-white">
				<div className="absolute inset-0 bg-black/10"></div>
				<div className="relative container mx-auto px-6 py-24 lg:py-32">
					<div className="max-w-4xl mx-auto text-center">
						<div className="flex items-center justify-center mb-8">
							<Sparkles className="w-8 h-8 mr-3" />
							<span className="text-lg font-medium opacity-90">
								SubAgent for Better Design
							</span>
						</div>

						<h1 className="text-5xl lg:text-7xl font-light mb-8 leading-tight">
							Transform Your UI/UX
							<br />
							<span className="font-semibold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
								with AI Design Agents
							</span>
						</h1>

						<p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
							Witness the dramatic difference AI design agents make. From
							cluttered interfaces to elegant, modern designs that users love.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<button
								type="button"
								className="bg-white text-[var(--design-primary)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
							>
								See the Transformation
								<ArrowRight className="inline ml-2 w-5 h-5" />
							</button>
							<button
								type="button"
								className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
							>
								Learn More
							</button>
						</div>
					</div>
				</div>

				{/* Floating Elements */}
				<div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
				<div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
				<div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/50 rounded-full"></div>
			</section>

			{/* Value Proposition Section */}
			<section className="py-24 bg-[var(--design-secondary)]">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-light text-[var(--design-text)] mb-6">
							Why AI Design Agents
							<br />
							<span className="font-semibold text-[var(--design-primary)]">
								Change Everything
							</span>
						</h2>
						<p className="text-xl text-[var(--design-text-light)] max-w-3xl mx-auto">
							Experience the power of AI-driven design that transforms user
							experiences and drives business results.
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
							<div className="w-16 h-16 bg-gradient-to-br from-[var(--design-primary)] to-[var(--design-accent)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Zap className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-2xl font-semibold text-[var(--design-text)] mb-4">
								Lightning Fast
							</h3>
							<p className="text-[var(--design-text-light)] leading-relaxed">
								Transform designs in minutes, not days. AI agents work at the
								speed of thought to deliver polished interfaces instantly.
							</p>
						</div>

						<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
							<div className="w-16 h-16 bg-gradient-to-br from-[var(--design-accent)] to-[var(--design-success)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Eye className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-2xl font-semibold text-[var(--design-text)] mb-4">
								Modern Aesthetics
							</h3>
							<p className="text-[var(--design-text-light)] leading-relaxed">
								Stay ahead with contemporary design patterns, optimal spacing,
								and sophisticated visual hierarchies that users expect.
							</p>
						</div>

						<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
							<div className="w-16 h-16 bg-gradient-to-br from-[var(--design-success)] to-[var(--design-warning)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Target className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-2xl font-semibold text-[var(--design-text)] mb-4">
								User-Centered
							</h3>
							<p className="text-[var(--design-text-light)] leading-relaxed">
								Every design decision is based on UX best practices and
								accessibility standards for optimal user experiences.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Before/After Demo Section */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-light text-[var(--design-text)] mb-6">
							See the
							<span className="font-semibold text-[var(--design-primary)]">
								{" "}
								Dramatic Difference
							</span>
						</h2>
						<p className="text-xl text-[var(--design-text-light)] max-w-3xl mx-auto mb-8">
							Compare interfaces designed without AI assistance versus those
							enhanced by our design agents. The results speak for themselves.
						</p>
					</div>

					<Tabs defaultValue="without" className="w-full max-w-7xl mx-auto">
						<TabsList className="grid w-full max-w-lg mx-auto grid-cols-2 mb-12 bg-gray-100 p-1 rounded-full shadow-lg">
							<TabsTrigger
								value="without"
								className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm px-8 py-4 text-base font-semibold transition-all"
							>
								⚠️ Without AI Agent
							</TabsTrigger>
							<TabsTrigger
								value="with"
								className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm px-8 py-4 text-base font-semibold transition-all"
							>
								✨ With AI Agent
							</TabsTrigger>
						</TabsList>

						<div className="relative">
							<TabsContent value="without" className="mt-0">
								<div className="rounded-3xl border-2 border-red-200 bg-white shadow-xl overflow-hidden relative">
									<div className="absolute -top-4 left-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
										⚠️ Before: Basic Design
									</div>
									<div className="bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100 px-6 py-4 mt-4">
										<div className="flex items-center gap-3">
											<div className="w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
											<span className="text-base font-semibold text-red-800">
												Standard Implementation
											</span>
											<div className="ml-auto bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
												Needs Improvement
											</div>
										</div>
									</div>
									<WithoutAgentLanding />
								</div>
							</TabsContent>

							<TabsContent value="with" className="mt-0">
								<div className="rounded-3xl border-2 border-[var(--design-primary)]/30 bg-white shadow-2xl overflow-hidden relative">
									<div className="absolute -top-4 left-6 bg-gradient-to-r from-[var(--design-primary)] to-[var(--design-accent)] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-xl">
										✨ After: AI-Enhanced Design
									</div>
									<div className="bg-gradient-to-r from-[var(--design-secondary)] to-blue-50 border-b border-[var(--design-primary)]/20 px-6 py-4 mt-4">
										<div className="flex items-center gap-3">
											<div className="w-4 h-4 bg-[var(--design-primary)] rounded-full">
												<div className="w-full h-full bg-[var(--design-accent)] rounded-full animate-ping opacity-75"></div>
											</div>
											<span className="text-base font-semibold text-[var(--design-text)]">
												AI-Powered Experience
											</span>
											<Sparkles className="w-5 h-5 text-[var(--design-primary)] ml-1" />
											<div className="ml-auto bg-[var(--design-success)]/10 text-[var(--design-success)] px-3 py-1 rounded-full text-sm font-medium">
												Optimized for Conversion
											</div>
										</div>
									</div>
									<WithAgentLanding />
								</div>
							</TabsContent>
						</div>
					</Tabs>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-24 bg-gradient-to-br from-gray-50 to-[var(--design-secondary)]">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-light text-[var(--design-text)] mb-6">
							Measurable
							<span className="font-semibold text-[var(--design-primary)]">
								{" "}
								Impact
							</span>
						</h2>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
						<div className="text-center">
							<div className="text-4xl font-bold text-[var(--design-primary)] mb-2">
								85%
							</div>
							<p className="text-[var(--design-text-light)]">
								Faster Design Process
							</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-[var(--design-accent)] mb-2">
								40%
							</div>
							<p className="text-[var(--design-text-light)]">
								Higher User Engagement
							</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-[var(--design-success)] mb-2">
								95%
							</div>
							<p className="text-[var(--design-text-light)]">
								Client Satisfaction
							</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-[var(--design-warning)] mb-2">
								60%
							</div>
							<p className="text-[var(--design-text-light)]">
								Reduced Design Iterations
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Target Audience Section */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-light text-[var(--design-text)] mb-6">
							Perfect for
							<span className="font-semibold text-[var(--design-primary)]">
								{" "}
								Every Team
							</span>
						</h2>
					</div>

					<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						<div className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
							<Code className="w-12 h-12 text-[var(--design-primary)] mx-auto mb-6" />
							<h3 className="text-2xl font-semibold text-[var(--design-text)] mb-4">
								Developers
							</h3>
							<p className="text-[var(--design-text-light)] leading-relaxed">
								Focus on functionality while AI handles the visual polish.
								Create beautiful interfaces without design expertise.
							</p>
						</div>

						<div className="text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
							<Palette className="w-12 h-12 text-[var(--design-accent)] mx-auto mb-6" />
							<h3 className="text-2xl font-semibold text-[var(--design-text)] mb-4">
								Designers
							</h3>
							<p className="text-[var(--design-text-light)] leading-relaxed">
								Accelerate your workflow and explore new design possibilities.
								Let AI handle the tedious details.
							</p>
						</div>

						<div className="text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
							<Users className="w-12 h-12 text-[var(--design-success)] mx-auto mb-6" />
							<h3 className="text-2xl font-semibold text-[var(--design-text)] mb-4">
								Product Teams
							</h3>
							<p className="text-[var(--design-text-light)] leading-relaxed">
								Ship better products faster. Ensure consistent, user-friendly
								interfaces across all touchpoints.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 bg-gradient-to-r from-[var(--design-gradient-from)] to-[var(--design-gradient-to)] text-white relative overflow-hidden">
				<div className="absolute inset-0 bg-black/10"></div>
				<div className="relative container mx-auto px-6 text-center">
					<h2 className="text-4xl lg:text-5xl font-light mb-6">
						Ready to Transform
						<br />
						<span className="font-semibold">Your Design Process?</span>
					</h2>
					<p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
						Join thousands of teams already using AI design agents to create
						better user experiences.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<button
							type="button"
							className="bg-white text-[var(--design-primary)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
						>
							Try SubAgent Now
							<ArrowRight className="inline ml-2 w-5 h-5" />
						</button>
						<button
							type="button"
							className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
						>
							Schedule Demo
						</button>
					</div>
				</div>

				{/* Floating Elements */}
				<div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
				<div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-16">
				<div className="container mx-auto px-6">
					<div className="text-center">
						<div className="flex items-center justify-center mb-6">
							<Sparkles className="w-8 h-8 mr-3 text-[var(--design-accent)]" />
							<span className="text-2xl font-semibold">
								SubAgent for Better Design
							</span>
						</div>
						<p className="text-gray-400 mb-8 max-w-2xl mx-auto">
							Transforming UI/UX design with the power of artificial
							intelligence. Create beautiful, user-friendly interfaces that
							drive results.
						</p>
						<div className="flex flex-wrap justify-center gap-8 text-sm">
							<a
								href="/about"
								className="hover:text-[var(--design-accent)] transition-colors"
							>
								About
							</a>
							<a
								href="/features"
								className="hover:text-[var(--design-accent)] transition-colors"
							>
								Features
							</a>
							<a
								href="/pricing"
								className="hover:text-[var(--design-accent)] transition-colors"
							>
								Pricing
							</a>
							<a
								href="/contact"
								className="hover:text-[var(--design-accent)] transition-colors"
							>
								Contact
							</a>
							<a
								href="/privacy"
								className="hover:text-[var(--design-accent)] transition-colors"
							>
								Privacy
							</a>
						</div>
						<div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
							© 2024 SubAgent for Better Design. All rights reserved.
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
