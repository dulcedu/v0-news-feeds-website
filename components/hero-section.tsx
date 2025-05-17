import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Purple glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4 text-center">
        <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-gray-800 text-yellow-400 border border-gray-700">
          <span className="flex h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
          Powered by Nostr & Lightning Network
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight font-helvetica">
          Your personalized{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            newsletter
          </span>{" "}
          from the Nostr network
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Cut through the noise. Get customized, AI-generated newsletters based on your interests, curated from Nostr
          content.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/signup">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/discover">
            <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800 w-full sm:w-auto">
              Explore Newsletters
            </Button>
          </Link>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
            <img
              src="/placeholder.svg?height=600&width=1000"
              alt="LastFeed dashboard preview"
              className="w-full h-auto"
            />
          </div>

          {/* Floating cards */}
          <div className="absolute -top-6 -left-6 md:top-12 md:-left-12 bg-gray-800 border border-gray-700 p-4 rounded-lg shadow-lg max-w-[200px] hidden md:block">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-sm font-medium">Bitcoin</span>
            </div>
            <p className="text-xs text-gray-400">Latest updates on Bitcoin development and adoption</p>
          </div>

          <div className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 bg-gray-800 border border-gray-700 p-4 rounded-lg shadow-lg max-w-[200px] hidden md:block">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-sm font-medium">Lightning</span>
            </div>
            <p className="text-xs text-gray-400">Weekly analysis of Lightning Network growth and innovations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
