import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import TopicSelector from "@/components/topic-selector"

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-2">Create your account</h1>
          <p className="text-gray-400 mb-8">Join OneFeed to get personalized AI newsletters from the Nostr network.</p>

          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Display Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your display name"
                  className="bg-gray-900 border-gray-800 text-gray-100 mt-1"
                />
              </div>

              <div>
                <Label htmlFor="npub">Nostr Public Key (optional)</Label>
                <Input id="npub" placeholder="npub1..." className="bg-gray-900 border-gray-800 text-gray-100 mt-1" />
                <p className="text-xs text-gray-500 mt-1">You can connect your Nostr account now or later</p>
              </div>

              <div>
                <Label htmlFor="email">Email (optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-900 border-gray-800 text-gray-100 mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">Only needed if you want to receive newsletters via email</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Select your interests</h2>
              <p className="text-gray-400 mb-4">Choose topics you're interested in to personalize your newsletters.</p>

              <TopicSelector />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm leading-tight">
                I agree to the{" "}
                <Link href="/terms" className="text-purple-400 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-purple-400 hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Create Account
            </Button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-purple-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
