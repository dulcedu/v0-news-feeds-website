import { Users, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CreatorCardProps {
  name: string
  npub: string
  topics: string[]
  subscribers: number
  imageUrl: string
}

export default function CreatorCard({ name, npub, topics, subscribers, imageUrl }: CreatorCardProps) {
  // Format subscribers to display with commas for thousands
  const formattedSubscribers = subscribers.toLocaleString()

  // Truncate npub for display
  const displayNpub = `${npub.substring(0, 8)}...`

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-purple-700 transition-colors group">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <img src={imageUrl || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h3 className="font-semibold group-hover:text-purple-400 transition-colors">{name}</h3>
            <p className="text-xs text-gray-400">{displayNpub}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {topics.map((topic) => (
            <Badge key={topic} variant="outline" className="bg-gray-700 text-gray-300 border-gray-600">
              {topic}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-400">
            <Users className="h-4 w-4 mr-1" />
            <span className="text-sm">{formattedSubscribers}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Link href={`/creator/${name.toLowerCase().replace(/\s+/g, "-")}`} className="flex-1">
            <Button variant="outline" className="w-full border-gray-600 hover:bg-gray-700">
              View
            </Button>
          </Link>
          <Button variant="outline" className="border-yellow-600 text-yellow-400 hover:bg-yellow-900/30">
            <Zap className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
