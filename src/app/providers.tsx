// app/providers.tsx
"use client"
import { Provider as JotaiProvider } from "jotai"
import { ReactNode, useEffect, useState } from "react"

export function Providers({ children }: { children: ReactNode }) {
  // solving white loading flash on dark mode when serving the page
  // https://brianlovin.com/writing/adding-dark-mode-with-next-js
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{null}</div>
  }

  const body = (
    <>
      <JotaiProvider>
      {children}
      </JotaiProvider>
    </>
  )

  return body
}
