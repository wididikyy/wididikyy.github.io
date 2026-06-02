"use client"

import * as React from "react"
import { RiMoonFill, RiSunFill } from "@remixicon/react"
import { useTheme } from "next-themes"

import { Toggle } from "@/components/ui/toggle"

export function ToggleMode() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  return (
    <Toggle
      variant="outline"
      size="default"
      pressed={mounted ? resolvedTheme === "dark" : false}
      onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
      aria-label="Toggle theme"
      className="size-9 rounded-full border-foreground dark:border-foreground"
    >
      <RiSunFill className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <RiMoonFill className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Toggle>
  )
}
