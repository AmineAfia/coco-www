'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { usePostHog } from '@/lib/use-posthog'

interface DebugEvent {
  timestamp: string
  event: string
  properties: Record<string, unknown>
}

export function AnalyticsDebug() {
  const [events, setEvents] = useState<DebugEvent[]>([])
  const [posthogStatus, setPosthogStatus] = useState('Checking...')
  const { track, identify, reset } = usePostHog()

  useEffect(() => {
    // Check PostHog status
    const checkStatus = () => {
      if (window.posthog && 'loaded' in window.posthog) {
        setPosthogStatus('Initialized ✅')
      } else if (window.posthog) {
        setPosthogStatus('Loading... ⏳')
      } else {
        setPosthogStatus('Not initialized ❌')
      }
    }
    
    checkStatus()
    
    // Check again after a delay to catch async initialization
    const timer = setTimeout(checkStatus, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return

    // Listen for PostHog events (for debugging)
    const originalCapture = window.posthog?.capture
    if (window.posthog && originalCapture) {
      window.posthog.capture = (...args: unknown[]) => {
        setEvents(prev => [...prev, { timestamp: new Date().toISOString(), event: args[0] as string, properties: args[1] as Record<string, unknown> }])
        return originalCapture.apply(window.posthog, args)
      }
    }
  }, [])

  const testEvents = [
    { name: 'test_button_click', properties: { test: true, location: 'debug_panel' } },
    { name: 'test_page_view', properties: { page: 'debug', test: true } },
    { name: 'test_user_action', properties: { action: 'debug_test', test: true } }
  ]

  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm bg-card border border-border rounded-lg shadow-lg p-4">
      <h3 className="text-sm font-semibold text-foreground mb-2">Analytics Debug</h3>
      <div className="text-xs text-muted-foreground mb-2">
        Status: {posthogStatus}
      </div>
      
      <div className="space-y-2 mb-4">
        {testEvents.map((event) => (
          <Button
            key={event.name}
            size="sm"
            variant="outline"
            onClick={() => track(event.name, event.properties)}
            className="w-full text-xs"
          >
            Test: {event.name}
          </Button>
        ))}
      </div>

      <div className="space-y-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            console.log('🧪 Manual test button clicked')
            console.log('PostHog available:', !!window.posthog)
            console.log('Environment variables:', {
              key: process.env.NEXT_PUBLIC_POSTHOG_KEY,
              host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
              dev: process.env.NEXT_PUBLIC_POSTHOG_DEVELOPMENT
            })
          }}
          className="w-full text-xs bg-blue-100"
        >
          🧪 Manual Test
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => identify('test-user-123', { name: 'Test User', email: 'test@example.com' })}
          className="w-full text-xs"
        >
          Identify User
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => reset()}
          className="w-full text-xs"
        >
          Reset User
        </Button>
      </div>

      {events.length > 0 && (
        <div className="mt-4">
          <h4 className="text-xs font-semibold text-foreground mb-2">Recent Events:</h4>
          <div className="max-h-32 overflow-y-auto space-y-1">
            {events.slice(-5).map((event) => (
              <div key={`${event.event}-${event.timestamp}`} className="text-xs text-muted-foreground">
                <div className="font-mono">{event.event}</div>
                <div className="text-xs opacity-75">{event.timestamp}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
