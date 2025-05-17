import Link from "next/link"
import {
  BarChart2,
  FileText,
  Settings,
  Users,
  Zap,
  Plus,
  Calendar,
  Clock,
  Filter,
  CloudLightningIcon as Lightning,
  Newspaper,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CreatorDashboard() {
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
              href="/creator"
              className="flex items-center gap-3 px-3 py-2 text-purple-400 bg-purple-950/40 rounded-md"
            >
              <BarChart2 className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/creator/content"
              className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-100 rounded-md"
            >
              <FileText className="h-5 w-5" />
              <span>My Content</span>
            </Link>
            <Link
              href="/creator/followers"
              className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-100 rounded-md"
            >
              <Users className="h-5 w-5" />
              <span>Followers</span>
            </Link>
            <Link
              href="/creator/earnings"
              className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-gray-100 rounded-md"
            >
              <Zap className="h-5 w-5" />
              <span>Earnings</span>
            </Link>
            <Link
              href="/creator/settings"
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
                  <span className="font-medium">125,430 sats</span>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs border-amber-500 text-amber-400 hover:bg-amber-950/30"
                >
                  Withdraw
                </Button>
              </div>
              <p className="text-xs text-gray-400">Your earnings from content contributions</p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <header className="sticky top-0 z-10 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold">Creator Dashboard</h1>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="border-gray-800">
                  <Calendar className="h-4 w-4 mr-2" />
                  Last 30 days
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Post
                </Button>
              </div>
            </div>
          </header>

          <div className="p-6">
            {/* Stats overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-2">
                  <CardDescription>Total Followers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">2,547</CardTitle>
                    <Badge className="bg-green-600/20 text-green-400 hover:bg-green-600/30">+12%</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-2">
                  <CardDescription>Total Earnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">125,430 sats</CardTitle>
                    <Badge className="bg-green-600/20 text-green-400 hover:bg-green-600/30">+8%</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-2">
                  <CardDescription>Content Used</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">68</CardTitle>
                    <Badge className="bg-amber-600/20 text-amber-400 hover:bg-amber-600/30">+15</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-2">
                  <CardDescription>Zaps Received</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">432</CardTitle>
                    <Badge className="bg-purple-600/20 text-purple-400 hover:bg-purple-600/30">+24</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs for different views */}
            <Tabs defaultValue="content" className="mb-8">
              <TabsList className="bg-gray-900 mb-4">
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="followers">Followers</TabsTrigger>
                <TabsTrigger value="earnings">Earnings</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="space-y-6 mt-0">
                <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                  <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                    <h3 className="font-medium">Your Content in Newsletters</h3>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-gray-400">
                        <Filter className="h-4 w-4 mr-1" />
                        Filter
                      </Button>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-800">
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-900/30 w-10 h-10 rounded-md flex items-center justify-center">
                          <span className="font-bold text-purple-400">B</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Bitcoin Weekly</h4>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              1,245 readers
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />3 days ago
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-amber-600/20 text-amber-400">+1,200 sats</Badge>
                        <Button variant="outline" size="sm" className="border-gray-700">
                          View
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-900/30 w-10 h-10 rounded-md flex items-center justify-center">
                          <span className="font-bold text-blue-400">N</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Nostr Roundup</h4>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              890 readers
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />1 week ago
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-amber-600/20 text-amber-400">+850 sats</Badge>
                        <Button variant="outline" size="sm" className="border-gray-700">
                          View
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-900/30 w-10 h-10 rounded-md flex items-center justify-center">
                          <span className="font-bold text-green-400">D</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Dev Insights</h4>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              412 readers
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />2 weeks ago
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-amber-600/20 text-amber-400">+650 sats</Badge>
                        <Button variant="outline" size="sm" className="border-gray-700">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="font-medium mb-4">Content Performance</h3>
                  <div className="h-64 flex items-center justify-center border border-gray-800 rounded-lg bg-gray-900/50">
                    <p className="text-gray-400">Performance chart will appear here</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="followers" className="mt-0">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="font-medium mb-4">Follower Growth</h3>
                  <div className="h-64 flex items-center justify-center border border-gray-800 rounded-lg bg-gray-900/50">
                    <p className="text-gray-400">Follower growth chart will appear here</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="earnings" className="mt-0">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="font-medium mb-4">Earnings Overview</h3>
                  <div className="h-64 flex items-center justify-center border border-gray-800 rounded-lg bg-gray-900/50">
                    <p className="text-gray-400">Earnings chart will appear here</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Recent Activity</h3>
                <Button variant="link" className="text-purple-400 p-0 h-auto">
                  View All
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-green-900/30 w-10 h-10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">5 new followers</span> started following you
                    </p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-amber-900/30 w-10 h-10 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">2,500 sats</span> earned from content in Bitcoin Weekly
                    </p>
                    <p className="text-xs text-gray-400">6 hours ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-900/30 w-10 h-10 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">Your post</span> was featured in Nostr Roundup
                    </p>
                    <p className="text-xs text-gray-400">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
