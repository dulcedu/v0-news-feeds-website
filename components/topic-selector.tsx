"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const availableTopics = [
  "Bitcoin",
  "Lightning Network",
  "Nostr",
  "Privacy",
  "Security",
  "Development",
  "Economics",
  "Mining",
  "Wallets",
  "DeFi",
  "NFTs",
  "Web3",
  "Regulation",
  "Adoption",
  "Education",
  "Trading",
  "Technical Analysis",
  "Fundamentals",
  "Governance",
  "Social",
]

export default function TopicSelector() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic))
    } else {
      setSelectedTopics([...selectedTopics, topic])
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {availableTopics.map((topic) => {
          const isSelected = selectedTopics.includes(topic)
          return (
            <Badge
              key={topic}
              variant={isSelected ? "default" : "outline"}
              className={`
                cursor-pointer text-sm py-1.5 px-3
                ${
                  isSelected
                    ? "bg-purple-600 hover:bg-purple-700 border-transparent"
                    : "bg-gray-800 text-gray-300 border-gray-700 hover:border-purple-600 hover:text-purple-400"
                }
              `}
              onClick={() => toggleTopic(topic)}
            >
              {topic}
            </Badge>
          )
        })}
      </div>

      {selectedTopics.length > 0 && (
        <p className="text-sm text-gray-400">
          {selectedTopics.length} topic{selectedTopics.length !== 1 ? "s" : ""} selected
        </p>
      )}
    </div>
  )
}
