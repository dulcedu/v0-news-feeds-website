import { Newspaper, Zap } from "lucide-react"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  withText?: boolean
  className?: string
}

export default function Logo({ size = "md", withText = true, className = "" }: LogoProps) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  }

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Newspaper className={`${sizes[size]} text-purple-500`} />
        <Zap
          className={`absolute -top-1 -right-1 ${size === "sm" ? "h-4 w-4" : "h-5 w-5"} text-yellow-400 transform rotate-12`}
        />
      </div>
      {withText && (
        <span
          className={`font-bold ${textSizes[size]} bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-helvetica`}
        >
          LastFeed
        </span>
      )}
    </div>
  )
}
