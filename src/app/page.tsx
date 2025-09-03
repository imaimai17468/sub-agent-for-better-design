import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WithAgentLanding from "@/features/with-agent-landing";
import WithoutAgentLanding from "@/features/without-agent-landing";

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="container mx-auto px-4 py-8">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-2">
						美容サービス比較デモ
					</h1>
					<p className="text-gray-600">
						AIエージェントありとなしの違いを体験してください
					</p>
				</div>

				<Tabs defaultValue="without" className="w-full">
					<TabsList className="grid w-full grid-cols-2 mb-6">
						<TabsTrigger value="without">エージェントなし</TabsTrigger>
						<TabsTrigger value="with">エージェントあり</TabsTrigger>
					</TabsList>

					<TabsContent value="without" className="mt-0">
						<div className="rounded-lg border bg-white shadow-sm overflow-hidden">
							<WithoutAgentLanding />
						</div>
					</TabsContent>

					<TabsContent value="with" className="mt-0">
						<div className="rounded-lg border bg-white shadow-sm overflow-hidden">
							<WithAgentLanding />
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
