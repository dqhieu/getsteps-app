# Phase 05: Create Sample Post & Verify Build

## Context
- Plan: [plan.md](plan.md)
- Depends on: Phase 04 (navigation/sitemap)

## Overview
| Field | Value |
|-------|-------|
| Priority | P2 |
| Status | pending |
| Effort | 15m |

Create sample blog post to verify entire setup works correctly.

## Requirements
- Create sample MDX post with all frontmatter fields
- Verify build succeeds
- Test all pages render correctly
- Verify sitemap includes post

## Related Code Files

### To Create
- `content/blog/welcome-to-steps-blog.mdx` - Sample post

### To Verify
- `/blog` page renders
- `/blog/welcome-to-steps-blog` page renders
- `/sitemap.xml` includes post

## Implementation Steps

### 1. Create sample post
`content/blog/welcome-to-steps-blog.mdx`:
```mdx
---
title: "Welcome to the Steps Blog"
description: "Introducing the Steps blog - your source for fitness tips, app updates, and health insights."
date: "2026-02-01"
author:
  name: "Steps Team"
  avatar: "/app_icon.png"
image: "/meta.png"
---

# Welcome to the Steps Blog

We're excited to launch the Steps blog! Here you'll find:

- **Fitness tips** to help you reach your step goals
- **App updates** about new features and improvements
- **Health insights** backed by research

## Stay Active, Stay Healthy

Walking is one of the best exercises you can do. It's free, requires no equipment, and you can do it anywhere.

### Benefits of Daily Walking

1. Improves cardiovascular health
2. Boosts mood and reduces stress
3. Helps maintain healthy weight
4. Strengthens bones and muscles

## Track Your Progress with Steps

Our app makes it easy to see your daily, weekly, and yearly progress. Set goals, earn streaks, and celebrate personal records.

Stay tuned for more posts!
```

### 2. Verify build
```bash
npm run build
```

### 3. Test locally
```bash
npm run dev
# Visit:
# - http://localhost:3000/blog
# - http://localhost:3000/blog/welcome-to-steps-blog
# - http://localhost:3000/sitemap.xml
```

## Todo
- [ ] Create content/blog directory
- [ ] Create sample MDX post
- [ ] Run npm run build
- [ ] Test /blog page
- [ ] Test /blog/[slug] page
- [ ] Verify sitemap.xml

## Success Criteria
- Build completes without errors
- Blog list shows sample post
- Post page renders MDX content
- Author info displays correctly
- Dark mode works
- Mobile responsive
- Sitemap includes post URL

## Verification Checklist
| Check | Expected |
|-------|----------|
| /blog loads | List with 1 post card |
| Post card shows | Title, description, author, date |
| Click card | Navigates to post |
| Post page | Renders MDX content |
| Author section | Shows name + avatar |
| Dark mode toggle | Styles adapt |
| Mobile view | Responsive layout |
| /sitemap.xml | Contains /blog/welcome-to-steps-blog |

## Risk Assessment
| Risk | Likelihood | Mitigation |
|------|------------|------------|
| MDX parsing errors | Low | Validate frontmatter YAML |
| Missing styles | Low | Use existing Tailwind classes |

## Next Steps
→ Implementation complete! Ready for content creation.
