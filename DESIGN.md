---
name: VaaniSetu Design System
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#5b403d'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#906f6c'
  outline-variant: '#e4beb9'
  surface-tint: '#bb171c'
  primary: '#b7131a'
  on-primary: '#ffffff'
  primary-container: '#db322f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4ac'
  secondary: '#4c5d8e'
  on-secondary: '#ffffff'
  secondary-container: '#b7c8ff'
  on-secondary-container: '#425283'
  tertiary: '#515c71'
  on-tertiary: '#ffffff'
  tertiary-container: '#6a758a'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ac'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000d'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5fd'
  on-secondary-fixed: '#031846'
  on-secondary-fixed-variant: '#344574'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 120px
---

## Brand & Style

The design system is built for a premium EdTech SaaS that bridges linguistic gaps in education. The brand personality is **authoritative yet empathetic**, combining the institutional trust required for government and educational sectors with the cutting-edge innovation of AI technology.

The aesthetic follows a **Corporate / Modern** style influenced by high-end fintech and design-forward SaaS (like Stripe and Apple). It utilizes expansive whitespace, precise typography, and sophisticated "glass" elevation to convey a sense of clarity and "future-proof" reliability. The emotional response should be one of confidence, accessibility, and high-impact social change.

Key visual principles:
- **Precision:** Perfect alignment and consistent mathematical scaling.
- **Clarity:** Elimination of unnecessary decorative elements to focus on pedagogical content.
- **Trust:** A "Government-Grade" feel achieved through stable layouts and a robust navy/red palette.

## Colors

The color palette is anchored by **Vaani Red**, a vibrant, high-energy primary color used for key actions and brand emphasis. This is balanced by **Deep Navy**, which provides the institutional weight and professional grounding necessary for the EdTech sector.

- **Primary (Vaani Red):** Use for primary CTAs, critical brand moments, and highlighting key terminology.
- **Secondary (Deep Navy):** Use for headers, navigation backgrounds, and primary text to establish authority.
- **Background & Surface:** A layered approach using `F8FAFC` for the base canvas and pure white `FFFFFF` for interactive cards and containers.
- **Semantic Colors:** Use standard greens for success and ambers for warnings, but keep them muted to ensure they do not compete with the primary red.

## Typography

This design system utilizes **Inter** exclusively to ensure a clean, systematic, and highly legible experience across all platforms. The type scale is "Display Heavy," using tight tracking and aggressive weights for hero sections to mirror premium SaaS marketing aesthetics.

- **Scale:** Maintain a clear 1.25x or 1.5x scale ratio between levels.
- **Hierarchy:** Use Deep Navy (#0B1F4D) for all headings to maintain professional contrast. Use Neutral (#475569) for secondary body text.
- **Line Height:** Maintain generous line heights for body text (1.6) to ensure readability for educational content, but keep hero headlines tight (1.1) for maximum visual impact.

## Layout & Spacing

The system uses a **Fixed Grid** philosophy for desktop to maintain "Apple-level" control over line lengths and whitespace. 

- **Desktop (1440px+):** 12-column grid, 1280px max-width, 24px gutters.
- **Tablet (768px - 1024px):** 8-column grid, fluid margins.
- **Mobile (320px - 480px):** 4-column grid, 20px side margins.
- **Rhythm:** Use an 8px base grid for all internal component spacing. Section vertical padding should be aggressive (120px+) to create a sense of premium "breathing room."

## Elevation & Depth

To achieve the requested premium feel, this design system utilizes **Glassmorphism and Ambient Shadows**.

- **Surface Layering:** The primary canvas is `F8FAFC`. Components "float" on `FFFFFF` surfaces.
- **Glass Shadows:** Use extremely diffused, multi-layered shadows. A typical "Elevated Card" shadow should have a 40px - 60px blur with a very low opacity (3-5%) Deep Navy tint.
- **Glass Effects:** For navigation bars and floating overlays, use a `backdrop-filter: blur(12px)` with a semi-transparent white background (`rgba(255, 255, 255, 0.8)`).
- **Interactive States:** On hover, cards should subtly lift (translate -4px) and the shadow spread should increase to simulate physical proximity.

## Shapes

The shape language is defined by "Large Softness." By using a **20px - 24px corner radius** for primary containers, the UI feels approachable and modern, moving away from the "boxy" feel of traditional legacy education software.

- **Small Components:** Buttons and input fields use a consistent 8px - 12px radius.
- **Large Containers:** Content cards, feature blocks, and modals use 24px.
- **Consistency:** Never mix sharp corners with rounded corners. Every element, including images and video players, must adhere to the border-radius tokens.

## Components

### Buttons
- **Primary:** Vaani Red background, White text. 12px vertical padding, 24px horizontal. 8px radius. Subtle "inner-glow" gradient (white to transparent) at the top 10% to add depth.
- **Secondary:** Deep Navy background or transparent with a 2px Deep Navy border.

### Cards
- **Feature Cards:** White background, 24px radius, "Glass Shadow." Icons inside cards should use a circular background tint (10% opacity of the icon color).
- **Interactive Cards:** Hover state includes a 1px border stroke of `Primary-Light` (#FEE2E2).

### Input Fields
- **Styling:** `F8FAFC` background with a subtle 1px border (#E2E8F0). On focus, the border transitions to Vaani Red with a 4px soft red outer glow (shadow).

### Chips & Badges
- **Style:** Pill-shaped (fully rounded). High-contrast text on 10% opacity backgrounds. Used for "New," "AI-Powered," or "Beta" labels.

### Progress Indicators
- **Style:** Thin, sleek lines using a gradient transition from Deep Navy to Vaani Red to signify "growth" or "completion."