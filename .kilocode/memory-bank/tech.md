# Technical Specifications

## Core Technologies

### Framework & Runtime
- **Next.js 15+**: React framework for the application
  - App Router for modern routing
  - Server and client components appropriately used
  - Built-in optimization for images and performance

### UI Library
- **React 18+**: Component-based UI development
- **TypeScript** (Recommended): Type safety for maintainability
- **Tailwind CSS** (Recommended): Utility-first styling for rapid UI development

## Development Setup

### Initial Setup Commands
```bash
npx create-next-app@latest personalities --typescript --tailwind --eslint
cd personalities
```

### Project Structure
```
personalities/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing page
│   ├── quiz/              # Quiz routes (optional)
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Reusable UI elements
│   ├── Quiz.tsx          # Main quiz component
│   └── Result.tsx        # Result display
├── lib/ or data/          # Quiz data and utilities
├── public/                # Static assets
└── styles/                # Global styles
```

### Recommended VSCode Extensions
- ESLint
- Prettier
- TypeScript Vue-plugin (if using Vue features)
- Tailwind CSS IntelliSense

## Technical Constraints

### Hard Constraints
- **No backend/database**: All data must be static or client-side
- **No authentication**: Anonymous quiz taking
- **Client-side execution**: Quiz logic runs in browser
- **Mobile-first**: Responsive design mandatory

### Soft Constraints
- **Performance**: Fast load times essential
- **Accessibility**: Should be usable on various devices
- **Maintainability**: Clean code structure for future updates

## Dependencies

### Core Dependencies (To Be Determined)
| Category | Options | Status |
|----------|---------|--------|
| State Management | React useState/useReducer | Sufficient |
| Styling | Tailwind CSS / CSS Modules | TBD |
| Icons | Lucide React / Heroicons | TBD |
| Animations | Framer Motion (optional) | TBD |
| Sharing | react-share / native APIs | TBD |

### Development Dependencies
- TypeScript
- ESLint
- Prettier
- @types/node

## Tool Usage Patterns

### Version Control
- **Git**: Primary source control
- **GitHub**: Repository hosting
- **Branching Strategy**: Main + feature branches

### Deployment Options
- **Vercel**: Native Next.js support (recommended)
- **Netlify**: Alternative with Next.js support
- **GitHub Pages**: Limited (requires static export)

### Code Quality
- ESLint for linting
- TypeScript for type checking
- Prettier for formatting

## Environment Variables (If Needed)
```bash
# Example - may not be required for this project
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Performance Targets
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: > 90
- **Bundle Size**: Optimized for mobile

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- No IE11 support required
