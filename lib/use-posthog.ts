'use client'

import { useCallback } from 'react'
import { posthog } from './posthog'

export function usePostHog() {
  const track = useCallback((event: string, properties?: Record<string, unknown>) => {
    if (posthog) {
      posthog.capture(event, properties)
      console.log('✅ PostHog event tracked:', event, properties)
    } else {
      console.warn('❌ PostHog not initialized - event not tracked:', event, properties)
    }
  }, [])

  const identify = useCallback((userId: string, properties?: Record<string, unknown>) => {
    if (posthog) {
      posthog.identify(userId, properties)
      console.log('✅ PostHog user identified:', userId, properties)
    } else {
      console.warn('❌ PostHog not initialized - user not identified:', userId, properties)
    }
  }, [])

  const reset = useCallback(() => {
    if (posthog) {
      posthog.reset()
      console.log('✅ PostHog user reset')
    } else {
      console.warn('❌ PostHog not initialized - user not reset')
    }
  }, [])

  const setPersonProperties = useCallback((properties: Record<string, unknown>) => {
    if (posthog) {
      posthog.people.set(properties)
    }
  }, [])

  return {
    track,
    identify,
    reset,
    setPersonProperties,
  }
}
