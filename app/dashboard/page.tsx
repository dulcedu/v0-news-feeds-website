import Link from "next/link"
import {
  Bell,
  Bookmark,
  Home,
  Settings,
  Zap,
  Plus,
  Search,
  Filter,
  RefreshCw,
  CloudLightningIcon as Lightning,
  Newspaper,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import NewsletterPreview from "@/components/newsletter-preview"
import TopicSelector from "@/components/topic-selector"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 border-r border-gray-800 h-screen sticky top-0">
          <div className="p-4 border-b border-gray-800">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                <Lightning className="h-6 w-6 text-amber-500 absolute -top-1 -right-1 transform rotate-12" />
                <Newspaper className="h-6 w-6 text-purple-500" />
              </div>
              <span className="font-bold text-xl">OneFeed</span>
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2 text-purple-400 bg-purple-950/40 rounded-md"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              href="/dashboard/bookmarks"
              className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-100 rounded-md"
            >
              <Bookmark className="h-5 w-5" />
              <span>Bookmarks</span>
            </Link>
            <Link
              href="/dashboard/notifications"
              className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-100 rounded-md"
            >
              <Bell className="h-5 w-5" />
              <span>Notifications</span>
              <Badge className="ml-auto bg-purple-600 text-white">3</Badge>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-100 rounded-md"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>

          <div className="p-4 border-t border-gray-800">
            <div className="bg-gray-900 rounded-md p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center text-amber-400">
                  <Zap className="h-4 w-4 mr-1" />
                  <span className="font-medium">5,200 sats</span>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs border-amber-500 text-amber-400 hover:bg-amber-950/30"
                >
                  Top up
                </Button>
              </div>
              <p className="text-xs text-gray-400">Your Lightning wallet balance for zapping creators</p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <header className="sticky top-0 z-10 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">Your Feed</h1>
              <div className="flex items-center gap-3">
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input placeholder="Search content..." className="pl-10 bg-gray-900 border-gray-800 text-gray-300" />
                </div>
                <Button variant="outline" size="icon" className="border-gray-800">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-gray-800 hidden md:flex">
                  <Plus className="h-4 w-4 mr-2" />
                  Discover
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Your Topics</h2>
              <TopicSelector />
            </div>

            <Tabs defaultValue="today" className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <TabsList className="bg-gray-900">
                  <TabsTrigger value="today">Today</TabsTrigger>
                  <TabsTrigger value="week">This Week</TabsTrigger>
                  <TabsTrigger value="month">This Month</TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-gray-400">
                    <RefreshCw className="h-4 w-4 mr-1" />
                    Refresh
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400">
                    <Filter className="h-4 w-4 mr-1" />
                    Filter
                  </Button>
                </div>
              </div>

              <TabsContent value="today" className="space-y-6 mt-0">
                <NewsletterPreview
                  title="Bitcoin Daily"
                  date="May 17, 2025"
                  content="<p><strong>Lightning Network Growth:</strong> The Lightning Network capacity has surpassed 5,000 BTC, marking a significant milestone in Bitcoin's scaling solution.</p><p><strong>Bitcoin Core Update:</strong> Developers have released version 26.0 with important privacy enhancements and performance improvements.</p><p><strong>Regulatory News:</strong> El Salvador has announced new Bitcoin-friendly legislation to attract more crypto businesses to the country.</p>"
                  topics={["Bitcoin", "Lightning", "Regulation"]}
                  creators={[
                    { name: "Satoshi's Student", npub: "npub1sat..." },
                    { name: "Lightning Lucy", npub: "npub1lucy..." },
                  ]}
                />

                <NewsletterPreview
                  title="Nostr Ecosystem"
                  date="May 17, 2025"
                  content="<p><strong>New Clients:</strong> Three new Nostr clients have been released this week, each focusing on different use cases from social media to content monetization.</p><p><strong>NIP Updates:</strong> NIP-42 has been finalized, adding important authentication features to the Nostr protocol.</p><p><strong>Community Growth:</strong> The Nostr network has seen a 15% increase in active users over the past month, with particularly strong growth in Asia and Latin America.</p>"
                  topics={["Nostr", "Development", "Social"]}
                  creators={[
                    { name: "Nostr Native", npub: "npub1nostr..." },
                    { name: "Alex Sats", npub: "npub1alex..." },
                  ]}
                />
              </TabsContent>

              <TabsContent value="week" className="mt-0">
                <div className="text-center py-12">
                  <p className="text-gray-400">Weekly digest will be available on Sunday</p>
                </div>
              </TabsContent>

              <TabsContent value="month" className="mt-0">
                <div className="text-center py-12">
                  <p className="text-gray-400">Monthly digest will be available at the end of the month</p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Recommended Topics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-purple-800 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">DeFi Developments</h3>
                    <Badge variant="outline" className="bg-gray-800 text-gray-300 border-gray-700">
                      Finance
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">
                    Updates on decentralized finance projects, protocols, and innovations.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-gray-700 hover:bg-purple-700 hover:text-white"
                  >
                    Add Topic
                  </Button>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-purple-800 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Mining Insights</h3>
                    <Badge variant="outline" className="bg-gray-800 text-gray-300 border-gray-700">
                      Bitcoin
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">
                    Analysis of Bitcoin mining trends, hardware, and energy consumption.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-gray-700 hover:bg-purple-700 hover:text-white"
                  >
                    Add Topic
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Creators You Follow</h2>
                <Button variant="ghost" size="sm" className="text-purple-400">
                  View All
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-900 border border-gray-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-900/30 w-10 h-10 rounded-md flex items-center justify-center">
                      <span className="font-bold text-purple-400">S</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Satoshi's Student</h3>
                      <p className="text-xs text-gray-400">npub1sat... • 3 new posts</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-amber-400">
                    <Zap className="h-4 w-4 mr-1" />
                    Zap
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-900 border border-gray-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-900/30 w-10 h-10 rounded-md flex items-center justify-center">
                      <span className="font-bold text-blue-400">N</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Nostr Native</h3>
                      <p className="text-xs text-gray-400">npub1nostr... • 1 new post</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-amber-400">
                    <Zap className="h-4 w-4 mr-1" />
                    Zap
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-900 border border-gray-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-900/30 w-10 h-10 rounded-md flex items-center justify-center">
                      <span className="font-bold text-amber-400">L</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Lightning Lucy</h3>
                      <p className="text-xs text-gray-400">npub1lucy... • 5 new posts</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-amber-400">
                    <Zap className="h-4 w-4 mr-1" />
                    Zap
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
