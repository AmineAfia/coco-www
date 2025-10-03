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
      <div className="relative group">
        {/* Warm minimalist background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coral-50 to-amber-50 rounded-2xl shadow-lg shadow-coral-200/30" />
        
        {/* Main card content */}
        <div className="relative bg-coral-50/80 backdrop-blur-sm rounded-2xl p-6 border border-coral-200/50 overflow-hidden hover-lift transition-warm">
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-coral-900 mb-3">
              Cookie-Einstellungen
            </h3>
            <p className="text-coral-800 text-sm mb-6 leading-relaxed">
              Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unsere Website zu analysieren. 
              Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
            </p>
            <div className="flex gap-3">
              <Button 
                onClick={handleAccept}
                size="sm"
                className="flex-1 btn-primary rounded-full text-sm font-medium focus-warm"
              >
                Akzeptieren
              </Button>
              <Button 
                onClick={handleDecline}
                variant="outline"
                size="sm"
                className="flex-1 rounded-full text-sm font-medium border-coral-200/60 hover:bg-coral-100/50 hover:border-coral-300/60 focus-warm transition-all duration-300"
              >
                Ablehnen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
