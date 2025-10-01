'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { initPostHog, posthog } from '@/lib/posthog'

interface PostHogProviderProps {
  children: React.ReactNode
}

function PostHogTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page views
    if (pathname && posthog) {
      let url = `${window.origin}${pathname}`
      if (searchParams.toString()) {
        url = `${url}?${searchParams.toString()}`
      }
      
      posthog.capture('$pageview', {
        $current_url: url,
        pathname,
      })
    }
  }, [pathname, searchParams])

  return null
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  useEffect(() => {
    // Initialize PostHog
    initPostHog()
  }, [])

  return (
    <>
      {children}
      <Suspense fallback={null}>
        <PostHogTracker />
      </Suspense>
    </>
  )
}
