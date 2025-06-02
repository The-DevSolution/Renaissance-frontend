"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Home, Search, Settings, User, CoinsIcon, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Header } from "@/app/header"

// Sample data
const upcomingMatches = [
  {
    id: 1,
    homeTeam: { name: "Arsenal", logo: "/placeholder.svg?height=40&width=40" },
    awayTeam: { name: "Chelsea", logo: "/placeholder.svg?height=40&width=40" },
    date: "2025-05-10T15:00:00",
    competition: "Premier League",
  },
  {
    id: 2,
    homeTeam: { name: "Barcelona", logo: "/placeholder.svg?height=40&width=40" },
    awayTeam: { name: "Real Madrid", logo: "/placeholder.svg?height=40&width=40" },
    date: "2025-05-12T20:00:00",
    competition: "La Liga",
  },
  {
    id: 3,
    homeTeam: { name: "Bayern Munich", logo: "/placeholder.svg?height=40&width=40" },
    awayTeam: { name: "Borussia Dortmund", logo: "/placeholder.svg?height=40&width=40" },
    date: "2025-05-15T18:30:00",
    competition: "Bundesliga",
  },
]

const liveScores = [
  {
    id: 1,
    homeTeam: { name: "Liverpool", logo: "/placeholder.svg?height=40&width=40", score: 2 },
    awayTeam: { name: "Manchester City", logo: "/placeholder.svg?height=40&width=40", score: 1 },
    minute: 67,
    competition: "Premier League",
  },
  {
    id: 2,
    homeTeam: { name: "Juventus", logo: "/placeholder.svg?height=40&width=40", score: 0 },
    awayTeam: { name: "Inter Milan", logo: "/placeholder.svg?height=40&width=40", score: 0 },
    minute: 23,
    competition: "Serie A",
  },
]

const latestNews = [
  {
    id: 1,
    title: "Transfer Rumor: Star striker linked with Premier League move",
    date: "2 hours ago",
    isPremium: true,
  },
  {
    id: 2,
    title: "Team announces new kit for upcoming season",
    date: "5 hours ago",
    isPremium: false,
  },
  {
    id: 3,
    title: "Manager gives injury update ahead of weekend clash",
    date: "1 day ago",
    isPremium: false,
  },
  {
    id: 4,
    title: "Exclusive: Inside the training ground of champions",
    date: "2 days ago",
    isPremium: true,
  },
]

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isPremiumUser, setIsPremiumUser] = useState(false)

  // Format date for display
  const formatMatchDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] py-6">
        <aside className="hidden md:block">
          <nav className="grid items-start gap-2">
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2 bg-muted">
                <Home className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/matches">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Calendar className="h-4 w-4" />
                Matches
              </Button>
            </Link>
            <Link href="/search">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Search className="h-4 w-4" />
                Search
              </Button>
            </Link>
            <Link href="/stake">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <CoinsIcon className="h-4 w-4" />
                Stake STRK
              </Button>
            </Link>
            <Link href="/nft">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <TrendingUp className="h-4 w-4" />
                NFT Cards
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <User className="h-4 w-4" />
                Profile
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </Link>

            <Separator className="my-4" />

            <div className="px-3 py-2">
              <h3 className="mb-2 text-sm font-medium">Your Teams</h3>
              <div className="space-y-2">
                <Link
                  href="/team/arsenal"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
                >
                  <img src="/placeholder.svg?height=24&width=24" alt="Arsenal" className="h-6 w-6 rounded-full" />
                  Arsenal
                </Link>
                <Link
                  href="/team/barcelona"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
                >
                  <img src="/placeholder.svg?height=24&width=24" alt="Barcelona" className="h-6 w-6 rounded-full" />
                  Barcelona
                </Link>
                <Link
                  href="/team/juventus"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
                >
                  <img src="/placeholder.svg?height=24&width=24" alt="Juventus" className="h-6 w-6 rounded-full" />
                  Juventus
                </Link>
              </div>
            </div>
          </nav>
        </aside>

        <main className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="px-3 py-1 text-sm">
                <CoinsIcon className="h-4 w-4 mr-1" />
                Balance: 100.00 STRK
              </Badge>
              <Button
                variant={isPremiumUser ? "default" : "outline"}
                size="sm"
                onClick={() => setIsPremiumUser(!isPremiumUser)}
              >
                {isPremiumUser ? "Premium Active" : "Upgrade to Premium"}
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Live Scores</CardTitle>
                <CardDescription>Current matches of your teams</CardDescription>
              </CardHeader>
              <CardContent>
                {liveScores.length > 0 ? (
                  <div className="space-y-4">
                    {liveScores.map((match) => (
                      <div key={match.id} className="rounded-lg border p-3">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{match.competition}</Badge>
                          <Badge variant="secondary">{match.minute}'</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img
                              src={match.homeTeam.logo || "/placeholder.svg"}
                              alt={match.homeTeam.name}
                              className="h-8 w-8"
                            />
                            <span>{match.homeTeam.name}</span>
                          </div>
                          <span className="text-xl font-bold">{match.homeTeam.score}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <img
                              src={match.awayTeam.logo || "/placeholder.svg"}
                              alt={match.awayTeam.name}
                              className="h-8 w-8"
                            />
                            <span>{match.awayTeam.name}</span>
                          </div>
                          <span className="text-xl font-bold">{match.awayTeam.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-6 text-center">
                    <p className="text-muted-foreground">No live matches right now</p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/matches">View All Matches</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Upcoming Matches</CardTitle>
                <CardDescription>Next fixtures for your teams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingMatches.map((match) => (
                    <div key={match.id} className="rounded-lg border p-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{match.competition}</Badge>
                        <span className="text-xs text-muted-foreground">{formatMatchDate(match.date)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={match.homeTeam.logo || "/placeholder.svg"}
                            alt={match.homeTeam.name}
                            className="h-8 w-8"
                          />
                          <span>{match.homeTeam.name}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <img
                            src={match.awayTeam.logo || "/placeholder.svg"}
                            alt={match.awayTeam.name}
                            className="h-8 w-8"
                          />
                          <span>{match.awayTeam.name}</span>
                        </div>
                      </div>
                      <div className="mt-2 flex justify-end">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/stake?match=${match.id}`}>Stake STRK</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/stake">Place Stakes</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle>Latest News</CardTitle>
                <CardDescription>Updates about your teams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {latestNews.map((news) => (
                    <div key={news.id} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{news.title}</h3>
                        {news.isPremium && (
                          <Badge variant="secondary" className="ml-auto">
                            Premium
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{news.date}</p>
                      <Separator className="my-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/lifestyle">View All News</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>NFT Player Cards</CardTitle>
                <CardDescription>Your digital collectible cards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((id) => (
                    <div key={id} className="relative aspect-[2/3] rounded-md overflow-hidden group cursor-pointer">
                      <img
                        src={`/placeholder.svg?height=150&width=100&text=Card ${id}`}
                        alt={`Player Card ${id}`}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                        <span className="text-xs text-white font-medium">Player {id}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/nft">View Collection</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Player Search</CardTitle>
                <CardDescription>Search for any player or club to get detailed stats</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex w-full items-center space-x-2">
                  <Input
                    type="search"
                    placeholder="Search players or clubs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button
                    type="submit"
                    onClick={() => {
                      if (searchQuery.toLowerCase().includes("rodri")) {
                        window.location.href = "/search?q=rodri"
                      } else {
                        window.location.href = `/search?q=${searchQuery}`
                      }
                    }}
                  >
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
