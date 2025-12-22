# RahmaniCorp Design Guidelines

## Design Approach
**Framework**: Hybrid approach drawing from enterprise design systems (Microsoft Fluent + IBM Carbon) combined with modern SaaS reference sites (Stripe, Cloudflare, AWS)
**Positioning**: Premium enterprise technology partner, not generic IT support

## Color System (Fixed Per Brief)
- **Primary Brand**: Deep Tech Blue `#0A2540`
- **Secondary**: Corporate Navy `#102A43`
- **Accent**: Electric Cyan `#1FB6FF`
- **Background**: Cloud White `#F5F7FA`
- **Text**: Graphite Black `#1A1A1A`

**Application Rules**:
- Primary CTA buttons: Electric Cyan background with white text
- Secondary CTAs: Deep Tech Blue outline with transparent background
- Section backgrounds: Alternate between Cloud White and subtle Deep Tech Blue tint
- Navigation: Deep Tech Blue background with white text
- Footer: Corporate Navy background

## Typography System
**Font Stack**: Inter (primary) via Google Fonts
- **Hero Headlines**: 3.5rem (desktop) / 2.25rem (mobile), font-weight: 700, line-height: 1.1
- **Section Headings**: 2.5rem (desktop) / 1.875rem (mobile), font-weight: 600
- **Service Titles**: 1.5rem, font-weight: 600, letter-spacing: -0.02em
- **Body Text**: 1.125rem, font-weight: 400, line-height: 1.6
- **CTA Buttons**: 1rem, font-weight: 600, uppercase, letter-spacing: 0.05em

## Layout & Spacing System
**Tailwind Units**: Standardize on 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- **Section Padding**: py-20 (desktop) / py-12 (mobile)
- **Container Max-Width**: max-w-7xl with px-6 horizontal padding
- **Card Spacing**: p-8 (desktop) / p-6 (mobile)
- **Element Gaps**: gap-6 (standard), gap-12 (section breaks)

## Component Library

### Navigation
- Sticky header with Deep Tech Blue background, shadow on scroll
- Logo (white version) left-aligned
- Desktop: Horizontal menu with dropdown for Services mega-menu
- Mobile: Hamburger menu, full-screen overlay
- Primary CTA: "Schedule Consultation" button (Electric Cyan, always visible)
- Contact number visible on desktop: +27 60 944 3087

### Hero Section
**Type**: Full-width hero with high-quality background image
- **Image**: Abstract cloud infrastructure / network visualization / data center (professional stock)
- **Overlay**: Dark gradient (Deep Tech Blue at 60% opacity) for text contrast
- **Layout**: Centered content, max-w-4xl
- **Headline**: White text, hero typography
- **Sub-headline**: Cloud White with 90% opacity
- **CTAs**: Two-button layout - Primary (Electric Cyan) + Secondary (white outline)
- **Height**: 85vh on desktop, auto on mobile

### Service Cards
**Grid Layout**: 3 columns (desktop) / 1 column (mobile), gap-8
- **Card Design**: White background, rounded-xl, shadow-lg on hover
- **Icon Area**: Electric Cyan background circle (w-16 h-16) with white icon (Heroicons)
- **Title**: Deep Tech Blue, service title typography
- **Description**: 2-3 lines, Graphite Black at 80% opacity
- **CTA Link**: "Learn More →" in Electric Cyan, hover underline
- **Padding**: p-8

### Call-to-Action Sections
**Full-Width Blocks** between major sections:
- **Background**: Deep Tech Blue with subtle geometric pattern
- **Text**: White headlines, Cloud White body
- **Button**: Electric Cyan with hover lift effect
- **Layout**: Centered, max-w-3xl, py-16

### Forms (Contact/Consultation)
- **Input Fields**: White background, border in Corporate Navy at 30%, rounded-lg
- **Focus State**: Electric Cyan border, shadow-md
- **Labels**: Graphite Black, font-weight 500, mb-2
- **Submit Button**: Electric Cyan, full-width on mobile
- **Spacing**: gap-6 between fields
- **Validation**: Electric Cyan success / red error states

### Footer
- **Background**: Corporate Navy
- **Layout**: 4-column grid (desktop) / stacked (mobile)
- **Sections**: Services, Company, Contact, Social Links
- **Text**: Cloud White at 80% opacity
- **Links**: Hover to Electric Cyan
- **Bottom Bar**: Copyright + legal links, bordered top, py-6

## Page-Specific Layouts

### Home Page Sections (In Order):
1. Hero with background image and CTAs
2. Trust Indicators (logos/stats bar) - py-8, Cloud White background
3. Services Overview (6-column icon grid on desktop)
4. About Preview (2-column: image left, content right)
5. Industries Served (4-column card grid)
6. CTA Section (consultation prompt)
7. Contact Preview with phone numbers

### Service Detail Pages:
- Hero: Service-specific headline, smaller (60vh)
- Overview section with key benefits
- 2-column feature breakdown with icons
- Pricing/packages (if applicable) in comparison table
- Related services grid
- Consultation CTA section

## Images
**Hero Images**: Required for all major pages
- **Home**: Cloud infrastructure / server room / network visualization
- **Services**: Technology-specific imagery (cloud, connectivity, security systems)
- **About**: Professional team setting / Cape Town office
- **Format**: WebP, 1920x1080 minimum, lazy-loaded
- **Treatment**: Dark overlay for text readability

**Icons**: Heroicons (outline style) via CDN, Electric Cyan color

## Mobile Optimization
- Stack all multi-column layouts to single column
- Increase touch targets to minimum 44px
- Reduce hero height to auto-fit content
- Hamburger menu with smooth slide-in animation
- Contact numbers click-to-call enabled
- Form inputs with increased padding for mobile keyboards

## Performance Requirements
- Minimize animations (subtle hover states only)
- Lazy-load all images below fold
- Preload hero image
- Use system fonts as fallback during web font load
- Critical CSS inline for above-fold content