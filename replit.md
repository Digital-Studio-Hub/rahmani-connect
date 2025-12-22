# RahmaniCorp Website

## Overview

RahmaniCorp is a professional corporate website for an enterprise IT consulting and digital transformation company based in Cape Town, South Africa. The site serves as the company's primary marketing presence, showcasing their services (IT consulting, cloud services, managed IT, telecommunications, connectivity, cybersecurity, and web development) to SMEs and enterprise clients both locally and internationally.

The application is a full-stack TypeScript project with a React frontend and Express backend, designed to present a premium, enterprise-focused brand identity with a contact form that sends inquiries via email.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite

The frontend follows a page-based architecture with shared layout components (Header, Footer, Layout). Pages include Home, About, Services, ServiceDetail, Industries, Contact, and legal pages. UI components are organized in `client/src/components/ui/` following shadcn/ui conventions.

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: HTTP server with environment-based static file serving
- **API Design**: RESTful endpoints under `/api/` prefix
- **Email Service**: ZeptoMail API integration for contact form submissions

The backend serves the Vite-built frontend in production and proxies to Vite dev server in development. The primary API endpoint handles contact form submissions and sends emails to the business.

### Data Layer
- **Database**: PostgreSQL with Drizzle ORM (schema defined but primarily used for future expansion)
- **Current Storage**: In-memory storage for user management (MemStorage class)
- **Schema Validation**: Zod schemas shared between frontend and backend in `shared/schema.ts`

### Design System
The project follows strict design guidelines documented in `design_guidelines.md`:
- **Color Palette**: Deep Tech Blue (#0A2540), Corporate Navy (#102A43), Electric Cyan (#1FB6FF), Cloud White (#F5F7FA)
- **Typography**: Inter font family via Google Fonts
- **Component Style**: Enterprise/corporate aesthetic inspired by Microsoft Fluent and IBM Carbon design systems

## External Dependencies

### Third-Party Services
- **ZeptoMail**: Transactional email service for contact form submissions (requires `ZEPTOMAIL_TOKEN` environment variable)
- **Google Fonts**: Inter font family loaded via CDN

### Database
- **PostgreSQL**: Required for Drizzle ORM (requires `DATABASE_URL` environment variable)

### Key NPM Packages
- **UI Framework**: @radix-ui/* components, shadcn/ui patterns
- **Forms**: react-hook-form, @hookform/resolvers, zod
- **Data Fetching**: @tanstack/react-query
- **Styling**: tailwindcss, class-variance-authority, clsx, tailwind-merge
- **Database**: drizzle-orm, drizzle-zod, pg
- **Build**: vite, esbuild, tsx

### Development Tools
- **Replit Plugins**: @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer (dev only)