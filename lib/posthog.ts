import posthog from 'posthog-js'

let isInitialized = false

export function initPostHog() {
  console.log('🔧 initPostHog called')
  console.log('Window available:', typeof window !== 'undefined')
  console.log('Already initialized:', isInitialized)
  
  if (typeof window !== 'undefined' && !isInitialized) {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com'
    const isDevelopment = process.env.NEXT_PUBLIC_POSTHOG_DEVELOPMENT === 'true'
    
    console.log('PostHog config:', { posthogKey, posthogHost, isDevelopment })
    
    if (posthogKey) {
      console.log('✅ Initializing PostHog with key:', posthogKey)
      
      // Check for existing consent
      const consent = localStorage.getItem('posthog-consent')
      console.log('User consent:', consent)
      
      posthog.init(posthogKey, {
        api_host: posthogHost,
        person_profiles: 'identified_only',
        capture_pageview: false, // We'll handle this manually
        capture_pageleave: true,
        surveys_request_timeout_ms: 10000,
        loaded: (posthog) => {
          console.log('🎉 PostHog loaded successfully!')
          console.log('PostHog object:', posthog)
          
          if (process.env.NODE_ENV === 'development' && !isDevelopment) {
            console.log('⚠️ Opting out PostHog in development')
            posthog.opt_out_capturing()
          }
          
          // Respect user consent
          if (consent === 'declined') {
            console.log('⚠️ User declined consent, opting out')
            posthog.opt_out_capturing()
          }
        }
      })
      
      isInitialized = true
      console.log('✅ PostHog initialization marked as complete')
    } else {
      console.error('❌ PostHog key not found!')
    }
  } else {
    console.log('❌ PostHog init skipped - window not available or already initialized')
  }
}

export { posthog }
