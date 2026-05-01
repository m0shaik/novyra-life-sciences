# Novyra Engineer Connect - AI Coding Agent Instructions

## Project Overview
This is a React/TypeScript SPA for Novyra Life Sciences, a life sciences engineering and technical staffing company. Built with Vite, shadcn/ui, Tailwind CSS, and focused on professional B2B presentation.

## Architecture & Key Patterns

### Component Structure
- **Layout-based architecture**: `Layout.tsx` wraps all pages with fixed navigation (`Navigation.tsx`)
- **Page-based routing**: Simple React Router setup in `App.tsx` with catch-all 404 handling
- **Component composition**: Heavy use of shadcn/ui components with custom styling extensions

### Design System (Critical Understanding)
The project uses a **custom professional design system** layered on top of shadcn/ui:

```css
/* Key Design Tokens in src/index.css */
--primary: 43 76% 55%;        /* Novyra Golden brand color */
--secondary: 215 28% 17%;     /* Professional Charcoal */
--accent-blue: 217 91% 60%;   /* Engineering Blue */
```

**Custom CSS Classes** (use these, don't reinvent):
- `.card-professional` - Standard card styling with hover effects
- `.hero-text` / `.hero-subtitle` - Hero section typography
- `.shadow-golden` - Brand-consistent golden shadow
- `.transition-smooth` - Consistent 0.3s cubic-bezier transitions
- `.animate-fade-up` / `.animate-scale-in` - Custom entrance animations

### Typography Hierarchy
- **Headings**: Use `Outfit` font family for h1-h4, `Inter` for body text
- **Responsive scaling**: All headings have md: and lg: breakpoint adjustments
- **Professional tone**: Technical but accessible copy focusing on engineering expertise

## Development Workflows

### Key Commands
```bash
# Development (runs on port 8080, not 3000)
npm run dev

# Building (uses Vite)
npm run build
npm run build:dev  # Development mode build

# Linting (ESLint v9 with new config format)
npm run lint
```

### Asset Management
- **Images**: Store in `src/assets/` - project includes engineering-focused stock photos
- **Icons**: Use `lucide-react` icons throughout (already imported in most components)
- **Paths**: Always use `@/` alias for imports (configured in `vite.config.ts`)

## Component Patterns

### shadcn/ui Integration
- Components are in `src/components/ui/` - don't modify these directly
- Extend functionality by wrapping in custom components
- Use `components.json` for shadcn configuration (Tailwind prefix, CSS variables)

### Responsive Design Pattern
```tsx
// Standard responsive class pattern used throughout
className="text-lg md:text-xl lg:text-2xl"
className="py-8 md:py-12 lg:py-16"
className="grid md:grid-cols-2 lg:grid-cols-3"
```

### Navigation Pattern
- Fixed positioned navigation with backdrop blur
- Mobile hamburger menu with slide-in drawer
- Active state management via `useLocation()` hook
- Brand logo always links to home

### Content Sections Pattern
All pages follow this structure:
```tsx
<section className="py-20 md:py-32 bg-[background-variant]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content with consistent max-width and padding */}
  </div>
</section>
```

## Industry Context & Content Strategy

### Target Industries
Engineering focus areas: Automation & Robotics, Life Sciences, Utilities & Renewable Energy, Food & Beverage, Manufacturing, Technology

### Content Tone
- **Professional B2B**: Technical competence without jargon
- **Results-focused**: Emphasize metrics (98% satisfaction, 500+ projects)
- **Engineering excellence**: Premium positioning in technical services

### Key Value Props
- Engineering Consulting & Project Management
- Technical Staffing & Talent Acquisition  
- Industry-specific expertise across 6+ verticals

## Critical Integration Points

### Routing Setup
- **ALL custom routes** must be added ABOVE the catch-all `path="*"` route in `App.tsx`
- Uses React Router v6 with BrowserRouter
- 404 handling via `NotFound.tsx` component

### State Management
- TanStack Query configured in `App.tsx` for data fetching
- No Redux/Zustand - prefer React Query for server state
- Local state with useState/useContext as needed

### Toast System
Dual toast setup in `App.tsx`:
```tsx
<Toaster />      {/* shadcn/ui toasts */}
<Sonner />       {/* Sonner toasts */}
```

### Theme System
- CSS variables in `:root` for light theme, `.dark` for dark mode
- Custom HSL color scale with engineering-appropriate palette
- Use `next-themes` for theme switching (installed but not implemented)

## Best Practices for This Codebase

1. **Follow the design system**: Use existing custom classes before creating new ones
2. **Maintain responsive patterns**: Always include md: and lg: breakpoints
3. **Use lucide-react icons**: Consistent with existing icon usage
4. **Preserve professional tone**: Engineering-focused, results-driven copy
5. **Leverage shadcn/ui**: Don't reinvent components that exist in `src/components/ui/`
6. **Image optimization**: Use descriptive alt text mentioning engineering context
7. **Animation consistency**: Use existing `animate-fade-up` and `animate-scale-in` classes
