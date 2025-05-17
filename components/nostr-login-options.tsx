"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QrCode, Key, Wallet } from "lucide-react"

export default function NostrLoginOptions() {
  const [nsec, setNsec] = useState("")
  const [npub, setNpub] = useState("")

  const handleNsecLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would handle the Nostr login with nsec
    console.log("Login with nsec:", nsec)
    // Never log nsec in production!
  }

  const handleNpubLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would handle the Nostr login with npub
    console.log("Login with npub:", npub)
  }

  return (
    <Tabs defaultValue="extension" className="w-full">
      <TabsList className="grid grid-cols-3 mb-6">
        <TabsTrigger value="extension">Extension</TabsTrigger>
        <TabsTrigger value="npub">Public Key</TabsTrigger>
        <TabsTrigger value="nsec">Private Key</TabsTrigger>
      </TabsList>

      <TabsContent value="extension" className="space-y-4">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
          <Button
            className="w-full bg-amber-600 hover:bg-amber-700 mb-4 h-12"
            onClick={() => console.log("Connect with Alby")}
          >
            <Wallet className="mr-2 h-5 w-5" />
            Connect with Alby
          </Button>

          <Button
            variant="outline"
            className="w-full border-gray-700 hover:bg-gray-800 h-12"
            onClick={() => console.log("Connect with NIP-07 Extension")}
          >
            <QrCode className="mr-2 h-5 w-5" />
            Connect with NIP-07 Extension
          </Button>

          <p className="text-xs text-gray-500 mt-4">
            Connect using a Nostr browser extension like Alby or any NIP-07 compatible extension.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="npub">
        <form onSubmit={handleNpubLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="npub">Your Nostr Public Key (npub)</Label>
            <Input
              id="npub"
              placeholder="npub1..."
              value={npub}
              onChange={(e) => setNpub(e.target.value)}
              className="bg-gray-900 border-gray-800 text-gray-100"
            />
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            <Key className="mr-2 h-4 w-4" />
            Login with Public Key
          </Button>
          <p className="text-xs text-gray-500 text-center">
            Login with your npub to receive a login challenge that you can sign with your private key.
          </p>
        </form>
      </TabsContent>

      <TabsContent value="nsec">
        <form onSubmit={handleNsecLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nsec">Your Nostr Private Key (nsec)</Label>
            <Input
              id="nsec"
              type="password"
              placeholder="nsec1..."
              value={nsec}
              onChange={(e) => setNsec(e.target.value)}
              className="bg-gray-900 border-gray-800 text-gray-100"
            />
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            <Key className="mr-2 h-4 w-4" />
            Login with Private Key
          </Button>
          <p className="text-xs text-gray-500 text-center">
            Your private key is never stored on our servers and is only used to sign events locally in your browser.
          </p>
        </form>
      </TabsContent>
    </Tabs>
  )
}
