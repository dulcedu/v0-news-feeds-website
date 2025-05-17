import { Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface NewsletterCardProps {
  title: string
  description: string
  topics: string[]
  subscribers: number
}

export default function NewsletterCard({ title, description, topics, subscribers }: NewsletterCardProps) {
  // Format subscribers to display with commas for thousands
  const formattedSubscribers = subscribers.toLocaleString()

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-purple-700 transition-colors group">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

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
            <span className="text-sm">{formattedSubscribers} subscribers</span>
          </div>
        </div>

        <Link href={`/newsletter/${title.toLowerCase().replace(/\s+/g, "-")}`}>
          <Button className="w-full bg-gray-700 hover:bg-purple-700 border border-gray-600 group-hover:bg-purple-700 group-hover:border-purple-600 transition-colors">
            Subscribe
          </Button>
        </Link>
      </div>
    </div>
  )
}
