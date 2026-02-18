# Phase 4: Sitemap Update

## File to Modify

**`app/sitemap.ts`** — add 6 new entries after the existing `/tools/bmi-calculator` entry:

```ts
{
  url: `${baseUrl}/tools/water-intake-calculator`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${baseUrl}/tools/heart-rate-zones-calculator`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${baseUrl}/tools/activity-to-steps-converter`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${baseUrl}/tools/running-pace-calculator`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${baseUrl}/tools/body-fat-calculator`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: `${baseUrl}/tools/calorie-deficit-calculator`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
```

## Tools Landing Page

**`app/tools/page.tsx`** — add 6 new tool cards to the existing grid.

Check current structure first, then add cards matching existing pattern with:
- Tool name + description
- Link to route
- Icon/emoji (water 💧, heart ❤️, activity 🏃, pace ⏱️, body 📏, calories 🔥)
