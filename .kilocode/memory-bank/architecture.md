# System Architecture

## High-Level Overview

The application follows a **single-page Next.js architecture** with client-side quiz logic. This approach prioritizes speed, simplicity, and ease of deployment without requiring backend infrastructure.

```
┌─────────────────────────────────────────────────────────────┐
│                    Next.js 15+ Application                  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    │
│  │   Landing   │───▶│    Quiz     │───▶│   Results   │    │
│  │    Page     │    │   Flow      │    │    Page     │    │
│  └─────────────┘    └─────────────┘    └─────────────┘    │
│                                              │              │
│                                              ▼              │
│                                    ┌─────────────┐         │
│                                    │    Share    │         │
│                                    │   Module    │         │
│                                    └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

## Source Code Paths

| Purpose | Path | Status |
|---------|------|--------|
| Next.js App | `/` (root) | To be created |
| Components | `/components/` | Planned |
| Quiz Logic | `/lib/` or `/utils/` | Planned |
| Data/Config | `/data/` | Planned |
| Styles | `/styles/` or Tailwind | Planned |

## Key Technical Decisions

### Decision: No Database / Client-Side Only
**Rationale**: 
- Quiz data is static and predetermined
- Eliminates server infrastructure costs
- Enables faster development and deployment
- Sufficient for a 10-question personality quiz

### Decision: Client-Side State Management
**Rationale**:
- React's built-in state management (useState, useReducer) is sufficient
- No need for Redux or other state libraries
- Quiz state is transient and lightweight

### Decision: Static Data Structure
**Rationale**:
- Quiz questions, answers, and scoring logic stored as JSON/TypeScript objects
- Easy to update and maintain
- No API calls required during quiz flow

## Component Relationships

### Landing Page
- Entry point for users
- Contains quiz introduction and start button
- Links to: Quiz Flow

### Quiz Flow (Core Experience)
- Manages question progression (10 questions total)
- Tracks user selections in local state
- Calculates personality score incrementally
- Links to: Results Page

### Results Page
- Computes final personality type based on answers
- Displays dish personality with description
- Visual elements for shareability
- Links to: Share Module

### Share Module
- Generates shareable results format
- Handles social media integration
- Encourages friend participation

## Critical Implementation Paths

### Path 1: Quiz State Management
```
User selects answer → Update state → Check if last question
                   → If yes: Calculate result
                   → If no: Show next question
```
**Key Files**: Quiz component, state hooks

### Path 2: Scoring Algorithm
- Each answer maps to one or more personality traits
- Traits accumulate across 10 questions
- Dominant trait determines dish personality
- Tie-breaking logic for edge cases

### Path 3: Share Functionality
- Generate shareable image/text content
- Handle platform-specific sharing APIs
- Provide fallback copy-to-clipboard option

## Data Flow

```
┌──────────────┐
│  Quiz Data   │ (Static JSON/TypeScript)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Quiz State  │ (React useState/useReducer)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Result      │ (Computed based on state)
│  Calculator  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Result Page │ (User sees dish personality)
└──────────────┘
```

## Security Considerations
- No user authentication required
- No personal data collection
- Client-side only (no server vulnerabilities)
- Share functionality uses platform APIs only
