import { ArrowRight, Eye, Sparkles, Star, Target, Zap } from "lucide-react";

export default function WithAgentLanding() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section - AI Enhanced */}
			<section className="relative bg-gradient-to-br from-[var(--design-secondary)] via-blue-50 to-white py-24 px-6 overflow-hidden">
				<div className="absolute inset-0">
					<div className="absolute top-20 left-20 w-32 h-32 bg-[var(--design-primary)]/10 rounded-full blur-2xl"></div>
					<div className="absolute bottom-20 right-20 w-40 h-40 bg-[var(--design-accent)]/10 rounded-full blur-2xl"></div>
					<div className="absolute top-1/2 left-1/3 w-4 h-4 bg-[var(--design-accent)]/30 rounded-full"></div>
					<div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[var(--design-primary)]/40 rounded-full"></div>
				</div>
				<div className="relative max-w-6xl mx-auto text-center">
					<div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-[var(--design-primary)]/20 rounded-full px-6 py-2 mb-8">
						<Sparkles className="w-5 h-5 mr-2 text-[var(--design-primary)]" />
						<span className="text-sm font-medium text-[var(--design-text)]">
							AI-Enhanced Design
						</span>
					</div>
					<h1 className="text-6xl md:text-7xl font-light text-[var(--design-text)] mb-8 leading-tight">
						Transform Your
						<br />
						<span className="font-semibold bg-gradient-to-r from-[var(--design-primary)] to-[var(--design-accent)] bg-clip-text text-transparent">
							User Experience
						</span>
					</h1>
					<p className="text-2xl text-[var(--design-text-light)] mb-12 max-w-4xl mx-auto leading-relaxed">
						AI-powered design agents create stunning, user-centered interfaces
						that convert visitors into customers
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<button
							type="button"
							className="bg-[var(--design-primary)] hover:bg-[var(--design-primary)]/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
						>
							See the Transformation
							<ArrowRight className="inline ml-2 w-5 h-5" />
						</button>
						<button
							type="button"
							className="border-2 border-[var(--design-primary)]/20 text-[var(--design-text)] px-8 py-4 rounded-full font-semibold text-lg hover:border-[var(--design-primary)]/40 hover:bg-[var(--design-primary)]/5 transition-all"
						>
							Learn More
						</button>
					</div>
				</div>
			</section>

			{/* Features Section - AI Enhanced */}
			<section className="py-24 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-20">
						<h2 className="text-5xl font-light text-[var(--design-text)] mb-6">
							Why AI Design Agents
							<br />
							<span className="font-semibold text-[var(--design-primary)]">
								Change Everything
							</span>
						</h2>
						<p className="text-xl text-[var(--design-text-light)] max-w-3xl mx-auto">
							Experience the power of AI-driven design that transforms user
							experiences and drives business results
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
							<div className="w-16 h-16 bg-gradient-to-br from-[var(--design-primary)] to-[var(--design-accent)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
								<Zap className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-2xl font-semibold text-[var(--design-text)] mb-4">
								Lightning Fast
							</h3>
							<p className="text-[var(--design-text-light)] leading-relaxed">
								Transform designs in minutes, not days. AI agents work at the
								speed of thought to deliver polished interfaces instantly
							</p>
						</div>
						<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
							<div className="w-16 h-16 bg-gradient-to-br from-[var(--design-accent)] to-[var(--design-success)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
								<Eye className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-2xl font-semibold text-[var(--design-text)] mb-4">
								Modern Aesthetics
							</h3>
							<p className="text-[var(--design-text-light)] leading-relaxed">
								Stay ahead with contemporary design patterns, optimal spacing,
								and sophisticated visual hierarchies that users expect
							</p>
						</div>
						<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
							<div className="w-16 h-16 bg-gradient-to-br from-[var(--design-success)] to-[var(--design-warning)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
								<Target className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-2xl font-semibold text-[var(--design-text)] mb-4">
								User-Centered
							</h3>
							<p className="text-[var(--design-text-light)] leading-relaxed">
								Every design decision is based on UX best practices and
								accessibility standards for optimal user experiences
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Showcase Section - AI Enhanced */}
			<section className="py-24 px-6 bg-gradient-to-br from-[var(--design-secondary)] to-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-5xl font-light text-[var(--design-text)] mb-6">
							Design Excellence
							<br />
							<span className="font-semibold text-[var(--design-primary)]">
								Delivered
							</span>
						</h2>
						<p className="text-xl text-[var(--design-text-light)] max-w-3xl mx-auto">
							See how AI design agents transform basic interfaces into
							conversion-optimized experiences
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
							<div className="h-48 bg-gradient-to-br from-[var(--design-primary)]/10 via-[var(--design-accent)]/10 to-white flex items-center justify-center relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-[var(--design-primary)]/20 to-transparent"></div>
								<div className="relative text-6xl">📱</div>
								<div className="absolute top-2 right-2 bg-[var(--design-success)] text-white text-xs px-2 py-1 rounded-full font-medium">
									+40% CTR
								</div>
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-semibold text-[var(--design-text)] mb-3">
									Mobile App Redesign
								</h3>
								<p className="text-[var(--design-text-light)] mb-6 leading-relaxed">
									Modern navigation, optimized spacing, and intuitive user flows
									that increase engagement
								</p>
								<button
									type="button"
									className="w-full bg-gradient-to-r from-[var(--design-primary)] to-[var(--design-accent)] hover:from-[var(--design-primary)]/90 hover:to-[var(--design-accent)]/90 text-white py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
								>
									View Case Study
								</button>
							</div>
						</div>
						<div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
							<div className="h-48 bg-gradient-to-br from-[var(--design-accent)]/10 via-[var(--design-success)]/10 to-white flex items-center justify-center relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-[var(--design-accent)]/20 to-transparent"></div>
								<div className="relative text-6xl">💻</div>
								<div className="absolute top-2 right-2 bg-[var(--design-success)] text-white text-xs px-2 py-1 rounded-full font-medium">
									+60% Usage
								</div>
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-semibold text-[var(--design-text)] mb-3">
									Dashboard Transformation
								</h3>
								<p className="text-[var(--design-text-light)] mb-6 leading-relaxed">
									Data visualization excellence with clear hierarchy and
									actionable insights
								</p>
								<button
									type="button"
									className="w-full bg-gradient-to-r from-[var(--design-primary)] to-[var(--design-accent)] hover:from-[var(--design-primary)]/90 hover:to-[var(--design-accent)]/90 text-white py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
								>
									View Case Study
								</button>
							</div>
						</div>
						<div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
							<div className="h-48 bg-gradient-to-br from-[var(--design-success)]/10 via-[var(--design-warning)]/10 to-white flex items-center justify-center relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-[var(--design-success)]/20 to-transparent"></div>
								<div className="relative text-6xl">🛒</div>
								<div className="absolute top-2 right-2 bg-[var(--design-success)] text-white text-xs px-2 py-1 rounded-full font-medium">
									+85% Sales
								</div>
							</div>
							<div className="p-8">
								<h3 className="text-2xl font-semibold text-[var(--design-text)] mb-3">
									E-commerce Optimization
								</h3>
								<p className="text-[var(--design-text-light)] mb-6 leading-relaxed">
									Streamlined checkout flow and persuasive design elements that
									convert browsers to buyers
								</p>
								<button
									type="button"
									className="w-full bg-gradient-to-r from-[var(--design-primary)] to-[var(--design-accent)] hover:from-[var(--design-primary)]/90 hover:to-[var(--design-accent)]/90 text-white py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
								>
									View Case Study
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Success Stories Section - AI Enhanced */}
			<section className="py-24 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-5xl font-light text-[var(--design-text)] mb-6">
							Real Results from
							<br />
							<span className="font-semibold text-[var(--design-primary)]">
								Real Teams
							</span>
						</h2>
						<p className="text-xl text-[var(--design-text-light)] max-w-3xl mx-auto">
							See how design agencies and product teams use AI agents to deliver
							exceptional results
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="flex items-start mb-6">
								<div className="w-16 h-16 bg-gradient-to-br from-[var(--design-primary)] to-[var(--design-accent)] rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
									<span className="text-white font-semibold text-lg">M</span>
								</div>
								<div>
									<p className="font-semibold text-[var(--design-text)] text-lg mb-1">
										Maria Rodriguez
									</p>
									<p className="text-[var(--design-text-light)] text-sm mb-2">
										Lead Product Designer, TechCorp
									</p>
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className="w-4 h-4 fill-[var(--design-warning)] text-[var(--design-warning)]"
											/>
										))}
									</div>
								</div>
							</div>
							<p className="text-[var(--design-text)] text-lg italic leading-relaxed">
								"SubAgent transformed our design process completely. We're
								shipping 3x faster with designs that consistently test better
								with users. The AI suggestions are spot-on every time."
							</p>
							<div className="mt-6 flex items-center gap-4 text-sm">
								<div className="bg-[var(--design-success)]/10 text-[var(--design-success)] px-3 py-1 rounded-full font-medium">
									85% faster delivery
								</div>
								<div className="bg-[var(--design-accent)]/10 text-[var(--design-accent)] px-3 py-1 rounded-full font-medium">
									40% higher conversion
								</div>
							</div>
						</div>
						<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
							<div className="flex items-start mb-6">
								<div className="w-16 h-16 bg-gradient-to-br from-[var(--design-accent)] to-[var(--design-success)] rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
									<span className="text-white font-semibold text-lg">D</span>
								</div>
								<div>
									<p className="font-semibold text-[var(--design-text)] text-lg mb-1">
										David Chen
									</p>
									<p className="text-[var(--design-text-light)] text-sm mb-2">
										Frontend Developer, StartupXYZ
									</p>
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className="w-4 h-4 fill-[var(--design-warning)] text-[var(--design-warning)]"
											/>
										))}
									</div>
								</div>
							</div>
							<p className="text-[var(--design-text)] text-lg italic leading-relaxed">
								"As a developer, I never thought I could create designs this
								good. The AI agent handles all the visual polish while I focus
								on functionality. It's like having a senior designer on the
								team."
							</p>
							<div className="mt-6 flex items-center gap-4 text-sm">
								<div className="bg-[var(--design-primary)]/10 text-[var(--design-primary)] px-3 py-1 rounded-full font-medium">
									Zero design bottlenecks
								</div>
								<div className="bg-[var(--design-warning)]/10 text-[var(--design-warning)] px-3 py-1 rounded-full font-medium">
									Professional results
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer - AI Enhanced */}
			<footer className="bg-gradient-to-r from-[var(--design-text)] to-gray-900 text-white py-16 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<div className="flex items-center justify-center mb-6">
							<Sparkles className="w-8 h-8 mr-3 text-[var(--design-accent)]" />
							<h3 className="text-3xl font-semibold">
								SubAgent for Better Design
							</h3>
						</div>
						<p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
							Transforming UI/UX design with the power of artificial
							intelligence. Create beautiful, user-friendly interfaces that
							drive results.
						</p>
					</div>
					<div className="grid md:grid-cols-4 gap-8 mb-12">
						<div>
							<h4 className="font-semibold mb-4 text-white">Product</h4>
							<div className="space-y-2">
								<a
									href="/features"
									className="block text-gray-400 hover:text-[var(--design-accent)] transition-colors"
								>
									Features
								</a>
								<a
									href="/pricing"
									className="block text-gray-400 hover:text-[var(--design-accent)] transition-colors"
								>
									Pricing
								</a>
								<a
									href="/demo"
									className="block text-gray-400 hover:text-[var(--design-accent)] transition-colors"
								>
									Live Demo
								</a>
							</div>
						</div>
						<div>
							<h4 className="font-semibold mb-4 text-white">Resources</h4>
							<div className="space-y-2">
								<a
									href="/docs"
									className="block text-gray-400 hover:text-[var(--design-accent)] transition-colors"
								>
									Documentation
								</a>
								<a
									href="/blog"
									className="block text-gray-400 hover:text-[var(--design-accent)] transition-colors"
								>
									Blog
								</a>
								<a
									href="/case-studies"
									className="block text-gray-400 hover:text-[var(--design-accent)] transition-colors"
								>
									Case Studies
								</a>
							</div>
						</div>
						<div>
							<h4 className="font-semibold mb-4 text-white">Company</h4>
							<div className="space-y-2">
								<a
									href="/about"
									className="block text-gray-400 hover:text-[var(--design-accent)] transition-colors"
								>
									About
								</a>
								<a
									href="/contact"
									className="block text-gray-400 hover:text-[var(--design-accent)] transition-colors"
								>
									Contact
								</a>
								<a
									href="/careers"
									className="block text-gray-400 hover:text-[var(--design-accent)] transition-colors"
								>
									Careers
								</a>
							</div>
						</div>
						<div>
							<h4 className="font-semibold mb-4 text-white">Legal</h4>
							<div className="space-y-2">
								<a
									href="/privacy"
									className="block text-gray-400 hover:text-[var(--design-accent)] transition-colors"
								>
									Privacy Policy
								</a>
								<a
									href="/terms"
									className="block text-gray-400 hover:text-[var(--design-accent)] transition-colors"
								>
									Terms of Service
								</a>
								<a
									href="/security"
									className="block text-gray-400 hover:text-[var(--design-accent)] transition-colors"
								>
									Security
								</a>
							</div>
						</div>
					</div>
					<div className="border-t border-gray-700 pt-8 text-center">
						<p className="text-gray-400 text-sm">
							© 2024 SubAgent for Better Design. All rights reserved.
							Transforming design with AI.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
