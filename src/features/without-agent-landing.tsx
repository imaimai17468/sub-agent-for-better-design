export default function WithoutAgentLanding() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section - Basic Design */}
			<section className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-16 relative">
				<div className="container mx-auto px-6">
					<div className="text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">
							Design Your Interface
						</h1>
						<p className="text-lg mb-8 opacity-80">
							Create functional user interfaces for your applications
						</p>
						<button
							type="button"
							className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded text-base transition-colors"
						>
							Get Started
						</button>
					</div>
				</div>
			</section>

			{/* Features Section - Basic Layout */}
			<section className="py-16 bg-gray-100">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
						Key Features
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-6 rounded-lg shadow text-center">
							<div className="w-16 h-16 bg-gray-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl text-white">
								⚡
							</div>
							<h3 className="text-lg font-semibold mb-3 text-gray-900">
								Fast Development
							</h3>
							<p className="text-gray-600 text-sm">
								Quickly build interfaces with standard components and layouts
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow text-center">
							<div className="w-16 h-16 bg-gray-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl text-white">
								🔧
							</div>
							<h3 className="text-lg font-semibold mb-3 text-gray-900">
								Basic Customization
							</h3>
							<p className="text-gray-600 text-sm">
								Modify colors and fonts to match your brand requirements
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow text-center">
							<div className="w-16 h-16 bg-gray-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl text-white">
								📋
							</div>
							<h3 className="text-lg font-semibold mb-3 text-gray-900">
								Template Library
							</h3>
							<p className="text-gray-600 text-sm">
								Choose from pre-built templates for common interface patterns
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Sample Projects Section - Basic */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
						Sample Projects
					</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
							<div className="h-32 bg-gray-200 flex items-center justify-center text-4xl text-gray-500">
								📱
							</div>
							<div className="p-4">
								<h3 className="text-lg font-medium mb-2 text-gray-900">
									Mobile App
								</h3>
								<p className="text-gray-600 text-sm mb-4">
									Basic mobile interface with standard navigation and content
									areas.
								</p>
								<button
									type="button"
									className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded text-sm font-medium transition-colors"
								>
									View Details
								</button>
							</div>
						</div>
						<div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
							<div className="h-32 bg-gray-200 flex items-center justify-center text-4xl text-gray-500">
								💻
							</div>
							<div className="p-4">
								<h3 className="text-lg font-medium mb-2 text-gray-900">
									Web Dashboard
								</h3>
								<p className="text-gray-600 text-sm mb-4">
									Data visualization dashboard with charts and metrics display.
								</p>
								<button
									type="button"
									className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded text-sm font-medium transition-colors"
								>
									View Details
								</button>
							</div>
						</div>
						<div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
							<div className="h-32 bg-gray-200 flex items-center justify-center text-4xl text-gray-500">
								🛒
							</div>
							<div className="p-4">
								<h3 className="text-lg font-medium mb-2 text-gray-900">
									E-commerce Site
								</h3>
								<p className="text-gray-600 text-sm mb-4">
									Simple online store with product listings and checkout flow.
								</p>
								<button
									type="button"
									className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded text-sm font-medium transition-colors"
								>
									View Details
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section - Basic */}
			<section className="py-16 bg-gray-100">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
						What Our Users Say
					</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="bg-white p-6 rounded-lg border border-gray-200">
							<p className="text-gray-600 text-base mb-4">
								"The templates are useful and help us get started quickly with
								our projects."
							</p>
							<div className="flex items-center">
								<div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-medium mr-3">
									J
								</div>
								<div>
									<h4 className="font-medium text-gray-900">John Smith</h4>
									<p className="text-gray-500 text-sm">Frontend Developer</p>
								</div>
							</div>
						</div>
						<div className="bg-white p-6 rounded-lg border border-gray-200">
							<p className="text-gray-600 text-base mb-4">
								"Good selection of components. Saves time on basic UI
								implementation."
							</p>
							<div className="flex items-center">
								<div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-medium mr-3">
									S
								</div>
								<div>
									<h4 className="font-medium text-gray-900">Sarah Johnson</h4>
									<p className="text-gray-500 text-sm">Product Manager</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-800 text-white py-12">
				<div className="container mx-auto px-6">
					<div className="text-center">
						<h3 className="text-lg font-semibold mb-4">Design Tools</h3>
						<div className="flex justify-center gap-6 text-sm mb-6">
							<a
								href="/templates"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Templates
							</a>
							<a
								href="/components"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Components
							</a>
							<a
								href="/docs"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Documentation
							</a>
							<a
								href="/support"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Support
							</a>
						</div>
						<p className="text-gray-500 text-sm">
							© 2024 Design Tools. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
