# Web2App Pro via Redemption Links on RevenueCat Web Billing — Design

**Date:** 2026-06-26
**Status:** Approved (design) — pending spec review → implementation plan

## Goal

Sell **Steps Pro on the web** (ad-funnel friendly, no Apple 30% cut, web-discounted price)
and unlock it in the iOS app via a RevenueCat **Redemption Link**, with **no account/login**.

A cold web visitor buys Pro with a card, is shown a branded 2-step "redeem in app" page
(and emailed the link), opens Steps, taps **Redeem purchase**, and Pro turns on — on a
fresh install, no login — with the purchase visible in RevenueCat and DataFast.

## Locked Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Orchestration | **RevenueCat Web Billing** (Option A) | App already gates Pro on the RevenueCat `"pro"` entitlement (`PurchaseManager.swift:60`). Web purchase grants the *same* entitlement — zero new entitlement logic. |
| Payments / MoR | **RevenueCat Web Billing** — RevenueCat is merchant of record; **Stripe connected as payment gateway** | RevenueCat calculates/collects/remits tax. No Stripe Managed Payments eligibility hoops (those require Stripe Billing + eligible tax codes); fastest path. Checkout is RevenueCat-hosted and brandable. |
| Identity | **A1 — anonymous, no login** | App configures RevenueCat without an app user ID (`PurchaseManager.swift:80`); redemption binds the web purchase to the install's anonymous RC ID. |
| Web checkout surface | **RC-hosted Web Purchase Link** (RevenueCat Billing) | Fastest; RevenueCat hosts + brands the checkout (Stripe as gateway), owns PCI. |
| Welcome/success page | **1A — brand RevenueCat's hosted success page** | The hosted page *is* the desired 2-step layout; brandable (logo, colors, App Store badge, redeem instructions) via dashboard — **zero web code**. |
| Pricing | **Web discount** vs App Store | The ~30% Apple saving funds a lower web price as the funnel incentive. |

## Important Constraint (corrects an earlier assumption)

**Redemption Links expire 60 minutes after purchase.** They are for *prompt* redemption,
not weeks-later restore. Consequences under A1 (anonymous):

- Happy path (buy → open app within the hour) is fully covered.
- Durable cross-device / reinstall restore is **NOT** solved by emailing the link (it expires).
  That is genuinely an **A2 (identity-binding)** capability and is a **non-goal for v1** — see below.
- The confirmation email still carries the link for the immediate "open on phone" case.

## Components

### 1. RevenueCat dashboard (config only — no code)
- Under **RevenueCat Billing**: **Connect Stripe** (Stripe as payment gateway; RevenueCat is MoR) → **Add web config** → **Create web products and prices** (discounted Pro) → **Create an offering**.
- Enable **Redemption Links** on the offering.
- Configure the **custom URL scheme** so the hosted "Redeem purchase" button opens the Steps app
  (reuse the existing `steps://` scheme).
- **App Information:** Steps app icon, app name, App Store link.
- **Appearance editor:** Steps brand colors/logo for both the **RevenueCat-hosted checkout** and the
  hosted success page (the 2-step "Purchase successful → Install → Redeem" layout).

### 2. Web — Next.js (`getsteps.app`) — minimal
- Add/point an entry CTA (ad URL and/or a button on landing/pricing) at the **RC-hosted Web Purchase Link**.
- No `/welcome` page is built (success page is RC-hosted in 1A).
- Existing RC webhook (`app/api/webhooks/revenuecat/route.ts`) already forwards
  `INITIAL_PURCHASE`/`RENEWAL` to DataFast → web purchases get attribution for free.

### 3. iOS — Steps app (the only real code change — small)
- **URL scheme:** confirm `steps://` is registered (it is — used by `/join` deep links).
- **`StepsApp.swift` deep-link router** (around the existing `screen=JOIN_GROUP` branch, line ~336):
  add handling for the RevenueCat redemption URL via
  `Purchases.parseAsWebPurchaseRedemption(url)`.
- **`PurchaseManager`:** call `Purchases.shared.redeemWebPurchase(redemption)`; on success the
  customer-info observer refreshes `entitlements["pro"]` → `isProUser` flips automatically
  (no entitlement-logic changes).
- Show a lightweight success/failure UI state on redemption result (success / already-redeemed / expired).

### 4. Email
- Rely on **RevenueCat Web Billing's built-in purchase email** carrying the redemption link.
- Branded transactional email = **non-goal for v1**.

### 5. Analytics
- No new web code: existing RC webhook → DataFast covers purchase events.
- (Client-side "reached success page" goal is not captured in 1A since the page is RC-hosted —
  acceptable; revenue attribution comes from the webhook.)

## Runtime Flow

```
Ad / CTA ──► RevenueCat-hosted checkout (RevenueCat Billing, Stripe gateway; anonymous, no app user ID)
   │ pays; RevenueCat = merchant of record (tax handled)
   ▼
RevenueCat records purchase ──► generates Redemption Link (60-min expiry)
   │ (fires existing RC webhook → DataFast)
   ▼
Branded RC-hosted success page: "Purchase successful!"
   Step 1: Install Steps (App Store badge)
   Step 2: Redeem purchase  ──► opens steps:// … redeem …   (+ link emailed)
   ▼
Steps app opens ──► StepsApp deep-link router ──► Purchases.parseAsWebPurchaseRedemption(url)
   ▼
PurchaseManager.redeemWebPurchase ──► customerInfo refresh ──► entitlements["pro"].isActive
   ▼
isProUser = true ──► app unlocks. Done.
```

## Edge Cases
- **App not installed:** success page Step 1 → App Store; redeem after install (within 60 min, or via emailed link while valid).
- **Link expired (>60 min) / already redeemed:** SDK returns non-success → friendly state; durable re-redeem is an A2 concern (out of scope v1).
- **Refund / chargeback:** RevenueCat lifecycle revokes the `"pro"` entitlement; webhook fires.

## Non-Goals (v1)
- **A2 identity binding** (Apple Sign In / Supabase profile → `Purchases.logIn`) for portable,
  cross-device restore. Design the iOS redemption handler so this can be layered on later without rework.
- Custom in-Next.js card form / fully custom `/welcome` page (1B) — can upgrade later via `redeem_url`.
- Branded transactional email.
- Replacing the existing App Store offer-code flow (`OfferCodeOneTimeUseCodes_*.csv`) — coexists.

## Open Config Items (resolved at build time, not blockers)
- Exact discounted web price point(s) + product/offering IDs.
- Exact redemption URL format RevenueCat emits for the custom scheme (settle during iOS wiring).
- Which CTA/entry points on getsteps.app (and/or ad URLs) point at the purchase link.
- Confirm RevenueCat's built-in email includes the redemption link as shipped.

## Reversibility — switching to Stripe Managed Payments later
The web2app **redemption links and the branded 2-step success page are RevenueCat-hosted and
engine-agnostic** — they are identical whether on RevenueCat Billing or Stripe Billing/Managed
Payments. Only the **card-entry checkout** differs (RevenueCat-hosted checkout vs embedded
**Stripe Checkout**, branded in the Stripe dashboard). So moving to **Stripe Managed Payments**
later (to make Stripe the MoR) is possible with **no app changes and no change to the redemption
experience** — it requires: a Stripe Billing integration, the "Use Managed Payments when available"
checkbox, Managed Payments enabled/eligible on the Stripe account, elevated permissions, and
eligible tax codes on products. Existing RevenueCat Billing subscribers do not auto-migrate; new
purchases would route to the new engine while the old cohort renews/churns out.

## Success Criteria
- A web visitor can purchase Pro with a card via RevenueCat-hosted checkout (RevenueCat as MoR, anonymous).
- They see a Steps-branded 2-step success page and receive a confirmation email with the link.
- Opening Steps and tapping **Redeem purchase** grants `entitlements["pro"]` and flips `isProUser`,
  on a fresh install with no login.
- The purchase appears in RevenueCat and in DataFast (via the existing webhook).

## Repos Touched
- **getsteps-app** (this repo): minimal — entry CTA(s) pointing at the purchase link.
- **Steps** (`/Users/hieudinh/Projects/Steps`): iOS redemption deep-link handling in
  `StepsApp.swift` + `PurchaseManager.swift`.
- **RevenueCat dashboard:** the bulk of the setup (no code).
