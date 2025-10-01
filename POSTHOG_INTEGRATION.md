# PostHog Analytics Integration

This document outlines the complete PostHog analytics integration for the Coco AI website.

## Overview

PostHog has been integrated to provide comprehensive web analytics, user behavior tracking, and business insights for the Coco AI pregnancy support platform.

## Features Implemented

### 1. Core Analytics Setup
- ✅ PostHog SDK installation and configuration
- ✅ Automatic page view tracking
- ✅ User session management
- ✅ GDPR-compliant cookie consent
- ✅ Performance optimizations

### 2. Event Tracking

#### User Interactions
- **Hero Section**: WhatsApp button clicks
- **CTA Banner**: Primary and secondary button clicks
- **Pricing**: Plan selections and billing period changes
- **FAQ**: Question expand/collapse interactions
- **Blog**: Post clicks, category filters, navigation
- **Theme Toggle**: Dark/light mode switches

#### Business Events
- **Conversion Tracking**: WhatsApp link clicks from all sections
- **Content Engagement**: Blog post views and interactions
- **User Journey**: Page navigation and section interactions
- **Feature Usage**: FAQ interactions, theme preferences

### 3. Privacy & Compliance
- **GDPR Compliance**: Cookie consent banner
- **Data Protection**: User opt-out mechanisms
- **Consent Management**: Local storage-based consent tracking
- **Privacy-First**: Minimal data collection approach

## Configuration

### Environment Variables

Create a `.env.local` file with:

```bash
# PostHog Configuration
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_project_api_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
NEXT_PUBLIC_POSTHOG_DEVELOPMENT=false
```

### PostHog Setup

1. Create a PostHog account at [app.posthog.com](https://app.posthog.com)
2. Create a new project
3. Copy your project API key
4. Add the API key to your environment variables

## File Structure

```
lib/
├── posthog.ts                 # PostHog initialization and configuration
└── use-posthog.ts           # Custom hook for tracking

components/
├── providers/
│   └── posthog-provider.tsx # PostHog React provider
└── analytics/
    ├── cookie-consent.tsx   # GDPR cookie consent banner
    └── analytics-debug.tsx  # Development debugging tool

app/
└── layout.tsx              # Root layout with PostHog integration
```

## Event Schema

### Page Views
```javascript
{
  event: '$pageview',
  properties: {
    $current_url: 'https://getcoco.ai/blog',
    pathname: '/blog'
  }
}
```

### User Interactions
```javascript
{
  event: 'hero_whatsapp_click',
  properties: {
    location: 'hero_section',
    button_text: 'Kostenlos anfangen',
    target: 'whatsapp'
  }
}
```

### Business Events
```javascript
{
  event: 'blog_post_view',
  properties: {
    post_slug: 'schwangerschaftswoche-12',
    post_title: 'Schwangerschaftswoche 12: Was passiert...',
    post_category: 'Schwangerschaftswochen',
    read_time: '5 Min'
  }
}
```

## Development

### Debug Mode
In development, an analytics debug panel is available in the top-right corner that allows you to:
- Test event tracking
- View recent events
- Identify test users
- Reset user sessions

### Testing Events
Use the debug panel to test various events:
- Button clicks
- Page views
- User identification
- Custom events

## Production Deployment

### Environment Setup
1. Set `NEXT_PUBLIC_POSTHOG_KEY` with your production API key
2. Set `NEXT_PUBLIC_POSTHOG_HOST` to your PostHog instance URL
3. Set `NEXT_PUBLIC_POSTHOG_DEVELOPMENT=false`

### Performance Considerations
- PostHog is lazy-loaded to avoid blocking initial page load
- Batch requests are enabled for better performance
- Request timeout is set to 10 seconds
- Only initializes once per session

## Analytics Dashboard

### Key Metrics to Track
1. **Conversion Funnel**:
   - Landing page → Features → Pricing → WhatsApp click
   - Blog post view → WhatsApp click

2. **User Engagement**:
   - FAQ interactions
   - Blog post engagement
   - Theme preferences
   - Session duration

3. **Content Performance**:
   - Most popular blog posts
   - FAQ question popularity
   - Feature section engagement

### PostHog Dashboard Setup
1. Create funnels for conversion tracking
2. Set up cohorts for user segmentation
3. Create insights for key metrics
4. Set up alerts for important events

## Privacy & GDPR

### Cookie Consent
- Users are shown a cookie consent banner on first visit
- Consent is stored in localStorage
- Users can opt-out at any time
- PostHog respects user consent choices

### Data Collection
- Minimal data collection approach
- No personal information collected without consent
- User identification only when explicitly provided
- All data is anonymized by default

## Troubleshooting

### Common Issues

1. **Events not appearing in PostHog**:
   - Check API key is correct
   - Verify environment variables are set
   - Check browser console for errors
   - Ensure user has given consent

2. **Development vs Production**:
   - Development mode disables tracking by default
   - Set `NEXT_PUBLIC_POSTHOG_DEVELOPMENT=true` to enable in dev
   - Debug panel only shows in development

3. **Performance Issues**:
   - PostHog is lazy-loaded
   - Batch requests are enabled
   - Check network tab for slow requests

## Support

For issues with PostHog integration:
1. Check the PostHog documentation
2. Review browser console for errors
3. Test with the debug panel
4. Verify environment configuration

## Future Enhancements

### Planned Features
- A/B testing for CTAs and messaging
- Advanced user segmentation
- Custom event properties
- Real-time analytics dashboard
- Conversion optimization insights

### Advanced Analytics
- User journey mapping
- Cohort analysis
- Retention tracking
- Feature adoption metrics
