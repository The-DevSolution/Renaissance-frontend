"use client"

import Link from "next/link"
import { Bell } from "lucide-react"
import RenaissanceLogo from "./renaissance-logo"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface HeaderProps {
  showAuthButtons?: boolean
}

export function Header({ showAuthButtons = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <RenaissanceLogo className="h-8 w-8" />
          <span className="text-xl font-bold">Renaissance</span>
        </div>

        {showAuthButtons ? (
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="/premium" className="text-sm font-medium hover:underline underline-offset-4">
              Premium
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
          </nav>
        ) : null}

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {showAuthButtons ? (
            <>
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          ) : (
            <>
              <Button variant="outline" size="icon" onClick={() => (window.location.href = "/notifications")}>
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </>
          )}
        </div>
      </div>
    </header>
  )
}