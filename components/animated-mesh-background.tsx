"use client"

import { useEffect, useState } from "react"

export function AnimatedMeshBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Static grid for SSR */}
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 bg-[size:40px_40px] opacity-20 dark:opacity-10" />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base Grid Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 bg-[size:40px_40px] opacity-20 dark:opacity-10" />

      {/* Animated Data Points */}
      <div className="absolute inset-0">
        {/* Pulsing dots at grid intersections */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 dark:bg-blue-300/60 rounded-full animate-pulse"
            style={{
              left: `${15 + (i % 5) * 15}%`,
              top: `${20 + Math.floor(i / 5) * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: "3s",
            }}
          />
        ))}

        {/* Network connection lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-300/20 dark:via-blue-400/30 to-transparent animate-pulse"
            style={{
              left: `${10 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
              width: `${20 + (i % 3) * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: "4s",
            }}
          />
        ))}
      </div>

      {/* Data Visualization Accents */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        {/* Subtle bar chart elements */}
        <div className="absolute bottom-20 left-10 flex items-end space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={`bar-${i}`}
              className="w-2 bg-blue-200/60 dark:bg-blue-400/40 rounded-t-sm animate-pulse"
              style={{
                height: `${20 + i * 8}px`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>

        {/* Subtle line trend */}
        <div className="absolute top-20 right-20 w-16 h-8 border border-blue-200/40 dark:border-blue-400/30 rounded">
          <svg className="w-full h-full" viewBox="0 0 64 32">
            <path
              d="M0,24 Q16,16 32,20 T64,12"
              stroke="rgb(147 197 253 / 0.6)"
              strokeWidth="1.5"
              fill="none"
              className="dark:stroke-blue-300/60"
            />
          </svg>
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-1/3 left-1/4 w-8 h-8 border border-blue-200/30 dark:border-blue-400/20 rotate-45 animate-spin"
             style={{ animationDuration: "20s" }} />
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-blue-100/20 dark:bg-blue-400/10 rotate-12 animate-pulse"
             style={{ animationDuration: "15s" }} />
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/5 dark:via-blue-900/10 to-transparent animate-pulse"
           style={{ animationDuration: "8s" }} />

      {/* Additional grid overlay for depth */}
      <div className="absolute inset-0 bg-grid-slate-50 dark:bg-grid-slate-800/20 bg-[size:80px_80px] opacity-10 dark:opacity-5" />
    </div>
  )
}
