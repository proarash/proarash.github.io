# Project Rules

- Use TypeScript for all code.
- Use TanStack React Query for client-side data fetching.
- Use the Next.js built-in `fetch` for server-side (SSR) data fetching.
- Use only shadcn/ui components for UI.
- Before creating any new component, check `src/components/shared` for an existing one to reuse.
- Do not add code comments.
- Do not run a build. Check for errors with `npx tsc --noEmit` only.
- Do not install any third-party package without explicit permission.
- main layouts and navbar and footers, their inside parent must have max-w-360
- for Image components use alt for sure, for links use Link with buttonVariants
- use bg card for any parent container such as navbar bg, custom containers
- do not use useEffect or useCallback which are against react compiler
- use icon version of lucide icon, for example WrenchIcon not Wrench