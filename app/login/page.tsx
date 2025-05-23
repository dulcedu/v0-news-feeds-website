import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import NostrLoginOptions from "@/components/nostr-login-options"
import Logo from "@/components/logo"

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col font-helvetica">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-6">
            <Logo size="lg" />
          </div>

          <h1 className="text-3xl font-bold mb-2 text-center">Login to LastFeed</h1>
          <p className="text-gray-400 mb-8 text-center">
            Connect with your Nostr account to access personalized newsletters.
          </p>

          <NostrLoginOptions />

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-950 px-2 text-gray-500">Or</span>
            </div>
          </div>

          <p className="text-center text-gray-400 mb-6">
            Don't have a Nostr account yet?{" "}
            <Link href="https://getalby.com" target="_blank" className="text-purple-400 hover:underline">
              Create one with Alby
            </Link>
          </p>

          <p className="text-center text-gray-400">
            New to LastFeed?{" "}
            <Link href="/signup" className="text-purple-400 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
