"use client"

import { useEffect, useState } from "react"

interface FadingBackgroundProps {
  imageUrl: string
  height?: number // height in px, default 400
}

export function FadingBackground({ imageUrl, height = 400 }: FadingBackgroundProps) {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const fadePoint = 300 // px until fully invisible
      const scrollTop = window.scrollY
      const newOpacity = Math.max(0, 1 - scrollTop / fadePoint)
      setOpacity(newOpacity)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-full bg-cover bg-center bg-no-repeat z-[-1]"
      style={{
        height: `${height}px`,
        backgroundImage: `url("${imageUrl}")`,
        opacity,
        transition: "opacity 0.2s linear",
      }}
    />
  )
}
