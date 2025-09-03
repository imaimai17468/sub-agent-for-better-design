import { Gift, Sparkles, Star, User } from "lucide-react";

export default function WithAgentLanding() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-[var(--beauty-secondary)] to-white py-20 px-6">
				<div className="max-w-6xl mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-bold text-[var(--beauty-text)] mb-6 leading-tight">
						あなた専属の
						<br />
						AI美容アドバイザー
					</h1>
					<p className="text-xl text-[var(--beauty-text-light)] mb-8 max-w-2xl mx-auto">
						AIがあなたにぴったりのスキンケアをおすすめします
					</p>
					<button
						type="button"
						className="bg-[var(--beauty-primary)] hover:bg-[var(--beauty-accent)] text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors shadow-lg"
					>
						無料で試す
					</button>
				</div>
			</section>

			{/* Service Introduction Section */}
			<section className="py-20 px-6">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold text-center text-[var(--beauty-text)] mb-16">
						AI美容アドバイザーの機能
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center p-6 rounded-lg bg-white border border-gray-100 shadow-sm">
							<div className="w-16 h-16 bg-[var(--beauty-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
								<User className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-semibold text-[var(--beauty-text)] mb-4">
								パーソナライズ相談
							</h3>
							<p className="text-[var(--beauty-text-light)]">
								あなたの肌質や悩みに合わせて、最適な美容法をご提案します
							</p>
						</div>
						<div className="text-center p-6 rounded-lg bg-white border border-gray-100 shadow-sm">
							<div className="w-16 h-16 bg-[var(--beauty-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
								<Gift className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-semibold text-[var(--beauty-text)] mb-4">
								商品レコメンド
							</h3>
							<p className="text-[var(--beauty-text-light)]">
								膨大な商品データから、あなたにぴったりのアイテムを厳選
							</p>
						</div>
						<div className="text-center p-6 rounded-lg bg-white border border-gray-100 shadow-sm">
							<div className="w-16 h-16 bg-[var(--beauty-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
								<Sparkles className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-semibold text-[var(--beauty-text)] mb-4">
								24時間サポート
							</h3>
							<p className="text-[var(--beauty-text-light)]">
								いつでもどこでも、美容に関するお悩みにお答えします
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Product Recommendation Section */}
			<section className="py-20 px-6 bg-[var(--beauty-secondary)]">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold text-center text-[var(--beauty-text)] mb-16">
						おすすめ商品
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white rounded-lg overflow-hidden shadow-sm">
							<div className="h-48 bg-gradient-to-br from-pink-100 to-purple-100"></div>
							<div className="p-6">
								<h3 className="text-lg font-semibold text-[var(--beauty-text)] mb-2">
									保湿美容液
								</h3>
								<p className="text-[var(--beauty-text-light)] text-sm mb-4">
									乾燥肌に最適な高保湿成分配合の美容液
								</p>
								<button
									type="button"
									className="w-full bg-[var(--beauty-primary)] hover:bg-[var(--beauty-accent)] text-white py-2 rounded-md text-sm transition-colors"
								>
									詳細を見る
								</button>
							</div>
						</div>
						<div className="bg-white rounded-lg overflow-hidden shadow-sm">
							<div className="h-48 bg-gradient-to-br from-green-100 to-blue-100"></div>
							<div className="p-6">
								<h3 className="text-lg font-semibold text-[var(--beauty-text)] mb-2">
									敏感肌用クレンジング
								</h3>
								<p className="text-[var(--beauty-text-light)] text-sm mb-4">
									刺激の少ない優しい洗い上がりのクレンジング
								</p>
								<button
									type="button"
									className="w-full bg-[var(--beauty-primary)] hover:bg-[var(--beauty-accent)] text-white py-2 rounded-md text-sm transition-colors"
								>
									詳細を見る
								</button>
							</div>
						</div>
						<div className="bg-white rounded-lg overflow-hidden shadow-sm">
							<div className="h-48 bg-gradient-to-br from-orange-100 to-red-100"></div>
							<div className="p-6">
								<h3 className="text-lg font-semibold text-[var(--beauty-text)] mb-2">
									日焼け止めクリーム
								</h3>
								<p className="text-[var(--beauty-text-light)] text-sm mb-4">
									SPF50+で紫外線をしっかりブロック
								</p>
								<button
									type="button"
									className="w-full bg-[var(--beauty-primary)] hover:bg-[var(--beauty-accent)] text-white py-2 rounded-md text-sm transition-colors"
								>
									詳細を見る
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* User Testimonials Section */}
			<section className="py-20 px-6">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl font-bold text-center text-[var(--beauty-text)] mb-16">
						利用者の声
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 bg-[var(--beauty-primary)] rounded-full flex items-center justify-center mr-4">
									<span className="text-white font-semibold">M</span>
								</div>
								<div>
									<p className="font-semibold text-[var(--beauty-text)]">
										美佳さん
									</p>
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className="w-4 h-4 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>
								</div>
							</div>
							<p className="text-[var(--beauty-text-light)] italic">
								「肌質に合った商品をすぐに見つけられて、肌の調子が良くなりました！」
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 bg-[var(--beauty-accent)] rounded-full flex items-center justify-center mr-4">
									<span className="text-white font-semibold">S</span>
								</div>
								<div>
									<p className="font-semibold text-[var(--beauty-text)]">
										さやかさん
									</p>
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className="w-4 h-4 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>
								</div>
							</div>
							<p className="text-[var(--beauty-text-light)] italic">
								「24時間いつでも相談できるので、忙しい私にピッタリです！」
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[var(--beauty-text)] text-white py-12 px-6">
				<div className="max-w-6xl mx-auto text-center">
					<h3 className="text-2xl font-bold mb-4">AI Beauty Advisor</h3>
					<div className="flex flex-wrap justify-center gap-6 text-sm">
						<a
							href="/terms"
							className="hover:text-[var(--beauty-primary)] transition-colors"
						>
							利用規約
						</a>
						<a
							href="/privacy"
							className="hover:text-[var(--beauty-primary)] transition-colors"
						>
							プライバシーポリシー
						</a>
						<a
							href="/contact"
							className="hover:text-[var(--beauty-primary)] transition-colors"
						>
							お問い合わせ
						</a>
					</div>
					<p className="text-gray-400 text-xs mt-6">
						© 2024 AI Beauty Advisor. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
