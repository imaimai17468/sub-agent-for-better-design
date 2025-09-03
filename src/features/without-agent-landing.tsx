export default function WithoutAgentLanding() {
	return (
		<div className="min-h-screen bg-white">
			{/* ヒーローセクション */}
			<section className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-24 relative overflow-hidden">
				<div className="container mx-auto px-6 relative z-10">
					<div className="text-center">
						<h1 className="text-5xl md:text-6xl font-light mb-6">
							あなた専属のAI美容アドバイザー
						</h1>
						<p className="text-xl md:text-2xl mb-10 opacity-90">
							AIがあなたにぴったりのスキンケアをおすすめします
						</p>
						<button
							type="button"
							className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-pink-500/30"
						>
							無料で試す
						</button>
					</div>
				</div>
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full"></div>
					<div className="absolute top-40 right-32 w-3 h-3 bg-white rounded-full"></div>
					<div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white rounded-full"></div>
				</div>
			</section>

			{/* サービス紹介セクション */}
			<section className="py-24 bg-gray-50">
				<div className="container mx-auto px-6">
					<h2 className="text-4xl font-light text-center mb-16 text-gray-800">
						AI Beauty Advisorの特徴
					</h2>
					<div className="grid md:grid-cols-3 gap-12">
						<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
							<div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
								🤖
							</div>
							<h3 className="text-xl font-semibold mb-4 text-gray-800">
								パーソナライズ相談
							</h3>
							<p className="text-gray-600 leading-relaxed">
								あなたの肌質、年齢、悩みに合わせて、AIが最適なアドバイスを提供します
							</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
							<div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
								💡
							</div>
							<h3 className="text-xl font-semibold mb-4 text-gray-800">
								商品レコメンド
							</h3>
							<p className="text-gray-600 leading-relaxed">
								数万種類の美容商品から、あなたに最適な商品をAIが厳選してお届けします
							</p>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
							<div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
								📱
							</div>
							<h3 className="text-xl font-semibold mb-4 text-gray-800">
								24時間対応
							</h3>
							<p className="text-gray-600 leading-relaxed">
								いつでもどこでも、気になった時にすぐに相談できる便利なサービスです
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* 商品推薦セクション */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-6">
					<h2 className="text-4xl font-light text-center mb-16 text-gray-800">
						おすすめ商品
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
							<div className="h-48 bg-gradient-to-br from-pink-400 to-red-400 flex items-center justify-center text-6xl">
								🧴
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-3 text-gray-800">
									保湿美容液
								</h3>
								<p className="text-gray-600 text-sm mb-6 leading-relaxed">
									乾燥肌の方に特におすすめ。ヒアルロン酸配合で長時間うるおいをキープします。
								</p>
								<button
									type="button"
									className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-full text-sm font-medium transition-colors duration-300"
								>
									詳細を見る
								</button>
							</div>
						</div>
						<div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
							<div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-6xl">
								🌸
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-3 text-gray-800">
									エイジングケアクリーム
								</h3>
								<p className="text-gray-600 text-sm mb-6 leading-relaxed">
									年齢肌の悩みに応える高機能クリーム。ハリと弾力を取り戻します。
								</p>
								<button
									type="button"
									className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-full text-sm font-medium transition-colors duration-300"
								>
									詳細を見る
								</button>
							</div>
						</div>
						<div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
							<div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-6xl">
								☀️
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-3 text-gray-800">
									日焼け止め
								</h3>
								<p className="text-gray-600 text-sm mb-6 leading-relaxed">
									SPF50+でしっかりUVカット。軽いつけ心地で毎日使えます。
								</p>
								<button
									type="button"
									className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-full text-sm font-medium transition-colors duration-300"
								>
									詳細を見る
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ユーザーの声セクション */}
			<section className="py-24 bg-gray-50">
				<div className="container mx-auto px-6">
					<h2 className="text-4xl font-light text-center mb-16 text-gray-800">
						ユーザーの声
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-2xl shadow-lg">
							<p className="text-gray-600 italic text-lg mb-6 leading-relaxed">
								"AIの提案が的確で、長年の肌トラブルが改善されました。本当に感謝しています！"
							</p>
							<div className="flex items-center">
								<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
									A
								</div>
								<div>
									<h4 className="font-semibold text-gray-800">田中 あかね</h4>
									<p className="text-gray-500 text-sm">30代 会社員</p>
								</div>
							</div>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-lg">
							<p className="text-gray-600 italic text-lg mb-6 leading-relaxed">
								"忙しくて美容について調べる時間がなかったけど、AIが簡単にアドバイスしてくれるので助かります。"
							</p>
							<div className="flex items-center">
								<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
									M
								</div>
								<div>
									<h4 className="font-semibold text-gray-800">佐藤 美咲</h4>
									<p className="text-gray-500 text-sm">20代 学生</p>
								</div>
							</div>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-lg">
							<p className="text-gray-600 italic text-lg mb-6 leading-relaxed">
								"年齢に合わせたケアを教えてもらえて、肌の調子がとても良くなりました。"
							</p>
							<div className="flex items-center">
								<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
									Y
								</div>
								<div>
									<h4 className="font-semibold text-gray-800">山田 由美</h4>
									<p className="text-gray-500 text-sm">40代 主婦</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* フッター */}
			<footer className="bg-gray-800 text-white py-16">
				<div className="container mx-auto px-6">
					<div className="grid md:grid-cols-3 gap-12">
						<div>
							<h3 className="text-xl font-semibold mb-4">AI Beauty Advisor</h3>
							<p className="text-gray-400 leading-relaxed">
								あなた専属のAI美容アドバイザーとして、最適なスキンケアソリューションを提供します。
							</p>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-4">サービス</h3>
							<div className="space-y-2">
								<p>
									<a
										href="/skin-diagnosis"
										className="text-gray-400 hover:text-white transition-colors"
									>
										肌診断
									</a>
								</p>
								<p>
									<a
										href="/products"
										className="text-gray-400 hover:text-white transition-colors"
									>
										商品レコメンド
									</a>
								</p>
								<p>
									<a
										href="/consultation"
										className="text-gray-400 hover:text-white transition-colors"
									>
										パーソナル相談
									</a>
								</p>
							</div>
						</div>
						<div>
							<h3 className="text-xl font-semibold mb-4">サポート</h3>
							<div className="space-y-2">
								<p>
									<a
										href="/faq"
										className="text-gray-400 hover:text-white transition-colors"
									>
										よくある質問
									</a>
								</p>
								<p>
									<a
										href="/contact"
										className="text-gray-400 hover:text-white transition-colors"
									>
										お問い合わせ
									</a>
								</p>
								<p>
									<a
										href="/terms"
										className="text-gray-400 hover:text-white transition-colors"
									>
										利用規約
									</a>
								</p>
								<p>
									<a
										href="/privacy"
										className="text-gray-400 hover:text-white transition-colors"
									>
										プライバシーポリシー
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="border-t border-gray-700 mt-12 pt-8 text-center">
						<p className="text-gray-400">
							&copy; 2024 AI Beauty Advisor. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
