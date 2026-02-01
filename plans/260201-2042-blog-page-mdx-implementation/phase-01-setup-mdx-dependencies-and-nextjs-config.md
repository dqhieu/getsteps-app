# Phase 01: Setup MDX Dependencies & Next.js Config

## Context
- Plan: [plan.md](plan.md)
- Docs: [brainstorm report](../reports/brainstorm-260201-2042-blog-page-implementation.md)

## Overview
| Field | Value |
|-------|-------|
| Priority | P1 - Foundation |
| Status | pending |
| Effort | 30m |

Install MDX dependencies and configure Next.js for MDX support.

## Requirements
- Install @next/mdx, @mdx-js/loader, gray-matter
- Configure next.config.ts for MDX file handling
- Add MDX type declarations

## Related Code Files

### To Modify
- `next.config.ts` - Add MDX plugin config
- `tsconfig.json` - Add MDX include pattern (if needed)

### To Create
- `mdx-components.tsx` - Required by @next/mdx (root level)

## Implementation Steps

1. Install dependencies:
   ```bash
   npm install @next/mdx @mdx-js/loader gray-matter
   npm install -D @types/mdx
   ```

2. Update `next.config.ts`:
   ```typescript
   import createMDX from '@next/mdx'
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
   };

   const withMDX = createMDX({
     extension: /\.mdx?$/,
   });

   export default withMDX(nextConfig);
   ```

3. Create `mdx-components.tsx` at project root:
   ```typescript
   import type { MDXComponents } from 'mdx/types'

   export function useMDXComponents(components: MDXComponents): MDXComponents {
     return {
       ...components,
     }
   }
   ```

## Todo
- [ ] Install npm dependencies
- [ ] Update next.config.ts with MDX config
- [ ] Create mdx-components.tsx
- [ ] Verify build succeeds

## Success Criteria
- `npm run build` passes
- MDX files can be imported

## Risk Assessment
| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Version conflicts | Low | Use latest compatible versions |

## Next Steps
→ Phase 02: Create blog utilities & types
