import Link from "next/link"
import { ArrowRight, Search, Filter, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import HeroSection from "@/components/hero-section"
import NewsletterCard from "@/components/newsletter-card"
import CreatorCard from "@/components/creator-card"
import TopicSelector from "@/components/topic-selector"
import Logo from "@/components/logo"
import FrequencySelector from "@/components/frequency-selector"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-helvetica">
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <Logo size="md" />
        <div className="hidden md:flex items-center gap-6">
          <Link href="/discover" className="hover:text-purple-400 transition-colors">
            Discover
          </Link>
          <Link href="/creators" className="hover:text-purple-400 transition-colors">
            Creators
          </Link>
          <Link href="/about" className="hover:text-purple-400 transition-colors">
            About
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Login with Nostr
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
          </Link>
        </div>
      </header>

      <main>
        <HeroSection />

        <section className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How LastFeed Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Interests</h3>
              <p className="text-gray-400">
                Select topics you're interested in or search for specific keywords. LastFeed will curate relevant
                content from the Nostr network.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Generated Newsletters</h3>
              <p className="text-gray-400">
                Our AI analyzes and summarizes Nostr content into concise, personalized newsletters delivered on your
                schedule.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support Creators</h3>
              <p className="text-gray-400">
                Content creators are automatically rewarded with sats when their content is featured in newsletters.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-bold mb-4 md:mb-0">Trending Topics</h2>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input
                    placeholder="Search topics..."
                    className="pl-10 bg-gray-800 border-gray-700 text-gray-300 w-full"
                  />
                </div>
                <Button variant="outline" size="icon" className="border-gray-700">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <TopicSelector />

            <div className="mt-12">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h2 className="text-3xl font-bold mb-4 md:mb-0">Featured Newsletters</h2>
                <FrequencySelector />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <NewsletterCard
                  title="Bitcoin Weekly"
                  description="Stay updated with the latest trends, news, and analysis in the Bitcoin ecosystem."
                  topics={["Bitcoin", "Lightning", "Finance"]}
                  subscribers={1240}
                />
                <NewsletterCard
                  title="Nostr Roundup"
                  description="A weekly summary of the most important developments and discussions in the Nostr ecosystem."
                  topics={["Nostr", "Social", "Web3"]}
                  subscribers={890}
                />
                <NewsletterCard
                  title="Dev Insights"
                  description="Technical deep dives and tutorials on Bitcoin, Lightning, and Nostr development."
                  topics={["Programming", "Bitcoin", "Nostr"]}
                  subscribers={760}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-8">Top Creators</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <CreatorCard
              name="Alex Sats"
              npub="npub1alex..."
              topics={["Bitcoin", "Economics"]}
              subscribers={2450}
              imageUrl="/placeholder.svg?height=100&width=100"
            />
            <CreatorCard
              name="Nostr Native"
              npub="npub1nostr..."
              topics={["Nostr", "Development"]}
              subscribers={1870}
              imageUrl="/placeholder.svg?height=100&width=100"
            />
            <CreatorCard
              name="Lightning Lucy"
              npub="npub1lucy..."
              topics={["Lightning", "Payments"]}
              subscribers={1540}
              imageUrl="/placeholder.svg?height=100&width=100"
            />
            <CreatorCard
              name="Satoshi's Student"
              npub="npub1sat..."
              topics={["Bitcoin", "Privacy"]}
              subscribers={1320}
              imageUrl="/placeholder.svg?height=100&width=100"
            />
          </div>
          <div className="mt-10 text-center">
            <Link href="/creators">
              <Button variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-950">
                View All Creators
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="container mx-auto py-16 px-4">
          <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/40 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to simplify your content consumption?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of readers who get personalized, concise newsletters from the Nostr network.
              </p>
              <Link href="/signup">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo className="mb-4" />
              <p className="text-gray-400 mb-4">
                Customized newsletters from the Nostr network, powered by AI and Lightning.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    For Creators
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Lightning Integration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Nostr Integration
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Nostr Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Lightning Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© 2025 LastFeed. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-purple-400">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
