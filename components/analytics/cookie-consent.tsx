'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { usePostHog } from '@/lib/use-posthog'

// Extend Window interface for PostHog
declare global {
  interface Window {
    posthog?: {
      opt_out_capturing: () => void
      capture: (...args: unknown[]) => void
      loaded?: boolean
    }
  }
}

interface CookieConsentProps {
  onAccept?: () => void
  onDecline?: () => void
}

export function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false)
  const { track } = usePostHog()

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('posthog-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('posthog-consent', 'accepted')
    setShowBanner(false)
    track('cookie_consent_accepted', {
      consent_type: 'analytics',
      location: 'cookie_banner'
    })
    onAccept?.()
  }

  const handleDecline = () => {
    localStorage.setItem('posthog-consent', 'declined')
    setShowBanner(false)
    // Disable PostHog tracking
    if (typeof window !== 'undefined' && window.posthog) {
      window.posthog.opt_out_capturing()
    }
    track('cookie_consent_declined', {
      consent_type: 'analytics',
      location: 'cookie_banner'
    })
    onDecline?.()
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md">
      <div className="card-warm p-6 hover:scale-[1.02] transition-all duration-300 group">
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-coral-sage rounded-xl" />
        {/* Coral accent line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-coral-direct rounded-full" />
        
        <div className="relative z-10">
          <h3 className="text-xl font-semibold text-foreground mb-3 heading-section">
            Cookie-Einstellungen
          </h3>
          <p className="text-muted-foreground text-sm mb-6 text-body-premium leading-relaxed">
            Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unsere Website zu analysieren. 
            Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
          </p>
          <div className="flex gap-3">
            <Button 
              onClick={handleAccept}
              size="sm"
              className="flex-1 btn-primary rounded-full text-sm font-medium focus-warm hover:scale-105 transition-all duration-300"
            >
              Akzeptieren
            </Button>
            <Button 
              onClick={handleDecline}
              variant="outline"
              size="sm"
              className="flex-1 rounded-full text-sm font-medium shadow-none border-coral-30 hover-bg-coral-5 hover-border-coral-50 hover:scale-105 focus-warm transition-all duration-300"
            >
              Ablehnen
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
