# Web2App Pro via Redemption Links — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Sell Steps Pro on the web (RevenueCat Web Billing, web-discounted) and unlock it in the iOS app via a RevenueCat Redemption Link, account-less.

**Architecture:** RevenueCat is merchant of record (Stripe as gateway). A web visitor buys anonymously on RevenueCat's hosted checkout, lands on RevenueCat's branded 2-step success page, and opens the Steps app via a `steps://redeem_web_purchase?...` deep link. The iOS app parses that link with the RevenueCat SDK and redeems it, granting the existing `"pro"` entitlement — no new entitlement logic. Restore on reinstall/new device is handled entirely by RevenueCat's email re-issue of redemption links (zero build).

**Tech Stack:** RevenueCat Web Billing + dashboard config; RevenueCat iOS SDK (`purchases-ios`, already integrated); SwiftUI; Next.js 16 / React 19 / TypeScript / Vitest (getsteps.app web app).

## Status (2026-06-26)

- ✅ **Task 1** (RevenueCat dashboard) — products/prices/entitlement/offering verified via MCP; purchase link live. Remaining: Stripe test purchase (folds into Task 5).
- ✅ **Task 2** (iOS `PurchaseManager` redemption) — committed `2c6ec62` on `feat/web-purchase-redemption`; builds clean.
- ✅ **Task 3** (iOS `StepsApp` deep-link + alert) — committed `849767f`; builds clean; scheme routing confirmed on simulator.
- ✅ **Task 4** (web `/get-pro` redirect) — committed `38e9fb4` on `feat/web2app-get-pro`; vitest + tsc pass.
- ⏳ **Task 5** (end-to-end on a fresh install) — **user-driven**: real Stripe purchase → redeem → Pro unlocks. Run before merging either branch.

## Funnel Context (drives Task 4 design)

- **No paid ads.** The funnel is **organic getsteps.app traffic** (~28K visitors / 28 days as of 2026-06): SEO blog + tool/conversion pages + landing page.
- **Placement + intent is the key conversion lever**, not the number of products. Most traffic is informational; cold researchers rarely buy Pro before trying the app, so web-Pro buyers skew toward **already-convinced** visitors (landing page, returning users).
- Implication for **Task 4**: the web entry should be **more than a bare redirect** — favor a real **pricing/comparison placement on getsteps.app** ("same Pro, cheaper on web — for iPhone") at high-intent spots (landing hero/pricing; A/B vs the existing high-converting tool-page App Store CTAs). The `/get-pro` redirect remains the canonical checkout target.
- **App is iOS-only** — web checkout copy must say so (avoid refunds/chargebacks from non-iOS buyers; required for MoR clarity).
- **Pricing — LIVE & verified (individual, all 20% off App Store):** Monthly **$3.99** (vs $4.99) · Yearly **$23.99** (vs $29.99) · Lifetime **$39.99** (vs $49.99, one-time). Enables a flat "20% cheaper than the App Store" claim. Family deferred. Offering `pro-web` (`ofrngc82725fb86`), all three attached to the `pro` entitlement, `is_current: false`.

## Global Constraints

- **Entitlement key is `"pro"`** — verbatim; do not introduce a new entitlement. (`Steps/Utilities/PurchaseManager.swift:60`)
- **Redemption deep-link format:** `steps://redeem_web_purchase?redemption_token=<token>` — host is `redeem_web_purchase` (RevenueCat `DeepLinkParser`). The `steps` URL scheme is **already registered** (`Steps/Info.plist:178`); do not add a new scheme.
- **Merchant of record:** RevenueCat Web Billing (RevenueCat is MoR, handles tax); Stripe connected as payment gateway. Not Stripe Managed Payments.
- **Identity:** anonymous (A1). The app calls `Purchases.configure(withAPIKey:)` with no app user ID (`PurchaseManager.swift:80`); redemption binds to the install's anonymous RC ID. No login.
- **Restore:** RevenueCat auto-reissues a fresh one-time link to the billing email when an expired/used link is opened (60-min link expiry). No in-app restore UI, no Apple Sign In.
- **Web checkout + success page:** RevenueCat-hosted and brand-configured in the dashboard. No custom checkout/`/welcome` code.
- **iOS SDK API (verified in checked-out SDK):**
  - `Purchases.parseAsWebPurchaseRedemption(_ url: URL) -> WebPurchaseRedemption?` (static)
  - `Purchases.shared.redeemWebPurchase(_ webPurchaseRedemption: WebPurchaseRedemption) async -> WebPurchaseRedemptionResult`
  - `enum WebPurchaseRedemptionResult { case success(CustomerInfo); case error(PublicError); case invalidToken; case purchaseBelongsToOtherUser; case expired(_ obfuscatedEmail: String) }`

Spec: `docs/superpowers/specs/2026-06-26-web2app-redemption-links-stripe-design.md`

---

### Task 1: RevenueCat dashboard — Web Billing, discounted offering, redemption links, branding

**Repo/Surface:** RevenueCat dashboard (no code). Produces: the **Web Purchase Link URL** and the **web product/price**, consumed by Task 4 and the end-to-end test (Task 5).

**Interfaces:**
- Produces: a hosted **Web Purchase Link URL** (paste into `lib/constants.ts` in Task 4); a configured redemption flow that emits `steps://redeem_web_purchase?redemption_token=...`.

**Current state (verified via RevenueCat MCP, project `proj5d0b420c`, 2026-06):**
- ✅ A **Web Billing app** (`Steps (Web Billing)`, `app8d0d7f7f03`) already exists with **Stripe connected** (`acct_1TmaP1...`), USD, support email + seller name set. → **Steps 1–2 below are already DONE; most of Step 7 too.**
- ✅ The **`pro` entitlement** (`entl348ec23ff9`) exists. Current offering is `pro` (App Store products only); **no Web Billing products yet** → Step 3 is the real starting point.

- [x] **Step 1: Connect Stripe under RevenueCat Billing** — already done (Web Billing app has `stripe_account_id`).

- [x] **Step 2: Add web config** — already done (the `rc_billing` app is the web config).

- [ ] **Step 3: Create the discounted web product(s) + price**

✅ **DONE & verified via MCP.** Under the **`Steps (Web Billing)`** app, three products created (price set directly in RevenueCat; RC is MoR), all 20% off App Store, no trial:

| Plan | Identifier | Name (customer-facing) | Web price | App Store | Type |
|---|---|---|---|---|---|
| Monthly | `steps_pro_monthly_web` | `Steps Pro — Monthly` | **$3.99** | $4.99 | subscription |
| Yearly | `steps_pro_annual_web` | `Steps Pro — Annual` | **$23.99** | $29.99 | subscription |
| Lifetime | `steps_pro_lifetime_web` | `Steps Pro — Lifetime` | **$39.99** | $49.99 | one-time |

Descriptions state iOS-only (`…in the Steps app for iPhone & iPad`). Web Billing did support a one-time Lifetime product.

Verify: ✅ each appears with the intended price/currency.

- [x] **Step 3b: Attach the web product(s) to the `pro` entitlement** ⚠️ critical — ✅ verified: all three web products attached to `pro` (`entl348ec23ff9`), matching the offering's product IDs exactly (no orphans).

- [x] **Step 4: Create a dedicated web offering** — ✅ verified: offering `pro-web` (`ofrngc82725fb86`) with Monthly/Yearly/Lifetime web packages, **`is_current: false`** (app paywall unaffected).

- [ ] **Step 5: Enable Redemption Links**

On the offering/web config, **enable Redemption Links** (allows anonymous checkout + deep-link redemption into the app).

Verify: Redemption Links shows as enabled.

- [ ] **Step 6: Configure the redemption custom URL scheme**

Set the app's custom URL scheme used for redemption to **`steps`** so the hosted "Redeem purchase" button opens `steps://redeem_web_purchase?redemption_token=...`.

Verify: the configured scheme is `steps`.

- [ ] **Step 7: Confirm App Information (required for the success page)**

App name + support email + seller name are already set on the Web Billing app. Confirm the **app icon** and **App Store link** (`https://apps.apple.com/us/app/steps-workout-pedometer/id6746096378`) are present.

Verify: icon + App Store link filled (the hosted success page requires them).

- [ ] **Step 8: Brand the checkout + success page (Appearance editor)**

In the Web Billing app's **Appearance** tab → **Open Editor**, set Steps brand color (accent `#ED772F`) and logo so both the RevenueCat-hosted checkout and the 2-step success page match the brand.

Verify: the live preview shows Steps branding (not the default RevenueCat red).

- [ ] **Step 9: Generate the Web Purchase Link**

Create a **Web Purchase Link** for the offering. Copy its URL.

Verify: opening the URL in a browser shows the branded checkout with the discounted price.

- [ ] **Step 10: End-to-end dashboard verification with a Stripe test card**

Open the Web Purchase Link, complete checkout with Stripe test card `4242 4242 4242 4242` (any future expiry/CVC), and use a real email you control.

Verify ALL of:
- The branded **2-step success page** appears ("Purchase successful" → Install → **Redeem purchase**).
- A confirmation email with a redemption link arrives.
- Inspecting the **Redeem purchase** button's URL shows `steps://redeem_web_purchase?redemption_token=...`.
- The purchase appears in the RevenueCat dashboard (Customer/Transactions).

- [ ] **Step 11: Record the outputs**

Note the **Web Purchase Link URL** (for Task 4) and confirm the redemption deep link uses the `steps` scheme (for Tasks 2–3, 5).

---

### Task 2: iOS — `PurchaseManager` web-purchase redemption method + outcome state

**Files:**
- Modify: `/Users/hieudinh/Projects/Steps/Steps/Utilities/PurchaseManager.swift`
- Test: `/Users/hieudinh/Projects/Steps/StepsTests/PurchaseManagerRedemptionTests.swift` (create)

**Interfaces:**
- Consumes: nothing from prior tasks (uses the RevenueCat SDK).
- Produces (used by Task 3):
  - `func webPurchaseRedemption(from url: URL) -> WebPurchaseRedemption?`
  - `@discardableResult func redeemWebPurchase(from url: URL) async -> Bool`
  - `enum WebRedemptionOutcome: Equatable { case success; case expired(obfuscatedEmail: String); case alreadyRedeemedByOtherUser; case invalid; case failed }`
  - `private(set) var webRedemptionOutcome: WebRedemptionOutcome?`
  - `func clearWebRedemptionOutcome()`

- [ ] **Step 1: Write the failing test**

Create `/Users/hieudinh/Projects/Steps/StepsTests/PurchaseManagerRedemptionTests.swift`:

```swift
import XCTest
import RevenueCat
@testable import Steps

@MainActor
final class PurchaseManagerRedemptionTests: XCTestCase {

  func testRecognizesRedemptionURL() {
    let url = URL(string: "steps://redeem_web_purchase?redemption_token=abc123")!
    XCTAssertNotNil(PurchaseManager.shared.webPurchaseRedemption(from: url))
  }

  func testIgnoresNonRedemptionURL() {
    let url = URL(string: "steps://open?screen=PAYWALL")!
    XCTAssertNil(PurchaseManager.shared.webPurchaseRedemption(from: url))
  }

  func testRedeemReturnsFalseForNonRedemptionURL() async {
    let url = URL(string: "steps://open?screen=PAYWALL")!
    let handled = await PurchaseManager.shared.redeemWebPurchase(from: url)
    XCTAssertFalse(handled)
  }
}
```

- [ ] **Step 2: Run the test to verify it fails**

Build the test target (the method doesn't exist yet).

Run (XcodeBuildMCP `test_sim`, or):
```bash
cd /Users/hieudinh/Projects/Steps && xcodebuild test -scheme Steps -destination 'platform=iOS Simulator,name=iPhone 16' -only-testing:StepsTests/PurchaseManagerRedemptionTests 2>&1 | tail -20
```
Expected: FAIL — compile error, `value of type 'PurchaseManager' has no member 'webPurchaseRedemption'`.

- [ ] **Step 3: Add the redemption outcome enum + state**

In `PurchaseManager.swift`, inside the class, after the `isCancelledButActive` computed property (around line 55), add:

```swift
  /// Outcome of the most recent web-purchase redemption, for surfacing UI feedback.
  enum WebRedemptionOutcome: Equatable {
    case success
    case expired(obfuscatedEmail: String)
    case alreadyRedeemedByOtherUser
    case invalid
    case failed
  }

  /// Set after a web redemption attempt so the root view can present feedback.
  private(set) var webRedemptionOutcome: WebRedemptionOutcome?

  /// Clears the redemption outcome after the UI has presented it.
  func clearWebRedemptionOutcome() {
    webRedemptionOutcome = nil
  }
```

- [ ] **Step 4: Add the redemption methods**

In `PurchaseManager.swift`, in the `// MARK: - Public Methods` section after `restorePurchases()` (around line 120), add:

```swift
  /// Parses a deep link as a RevenueCat web-purchase redemption.
  /// Returns nil when the URL is not a redemption link, so callers can fall through to other routing.
  func webPurchaseRedemption(from url: URL) -> WebPurchaseRedemption? {
    Purchases.parseAsWebPurchaseRedemption(url)
  }

  /// Redeems a web purchase from a deep link.
  /// - Returns: `true` if the URL was a redemption link (and a redemption was attempted), `false` otherwise.
  @discardableResult
  func redeemWebPurchase(from url: URL) async -> Bool {
    guard let redemption = webPurchaseRedemption(from: url) else { return false }
    let result = await Purchases.shared.redeemWebPurchase(redemption)
    switch result {
    case let .success(customerInfo):
      updateSubscriptionStatus(with: customerInfo)
      webRedemptionOutcome = .success
    case let .expired(obfuscatedEmail):
      webRedemptionOutcome = .expired(obfuscatedEmail: obfuscatedEmail)
    case .purchaseBelongsToOtherUser:
      webRedemptionOutcome = .alreadyRedeemedByOtherUser
    case .invalidToken:
      webRedemptionOutcome = .invalid
    case .error:
      webRedemptionOutcome = .failed
    }
    return true
  }
```

(`updateSubscriptionStatus(with:)` is a private method of this class — callable here. On success the `customerInfoStream` listener also fires, so this is an idempotent immediate update.)

- [ ] **Step 5: Run the test to verify it passes**

Run:
```bash
cd /Users/hieudinh/Projects/Steps && xcodebuild test -scheme Steps -destination 'platform=iOS Simulator,name=iPhone 16' -only-testing:StepsTests/PurchaseManagerRedemptionTests 2>&1 | tail -20
```
Expected: PASS (3 tests). If the `StepsTests` target isn't wired to a host/run config, first do a plain build to confirm compilation:
```bash
cd /Users/hieudinh/Projects/Steps && xcodebuild build -scheme Steps -destination 'platform=iOS Simulator,name=iPhone 16' 2>&1 | tail -5
```
Expected: `** BUILD SUCCEEDED **`.

- [ ] **Step 6: Commit**

```bash
cd /Users/hieudinh/Projects/Steps && git add Steps/Utilities/PurchaseManager.swift StepsTests/PurchaseManagerRedemptionTests.swift && git commit -m "feat: add web-purchase redemption to PurchaseManager"
```

---

### Task 3: iOS — intercept the redemption deep link + present the result

**Files:**
- Modify: `/Users/hieudinh/Projects/Steps/Steps/StepsApp.swift` (deep-link handler ~line 253; root-view presentation modifiers ~line 136–158)

**Interfaces:**
- Consumes (from Task 2): `purchaseManager.webPurchaseRedemption(from:)`, `purchaseManager.redeemWebPurchase(from:)`, `purchaseManager.webRedemptionOutcome`, `purchaseManager.clearWebRedemptionOutcome()`.
- Produces: end-user redemption behavior (Pro unlocks + alert).

- [ ] **Step 1: Intercept the redemption URL in `handleDeepLink`**

In `StepsApp.swift`, in `handleDeepLink(_ url: URL)`, locate the block that routes `https://getsteps.app` to the universal-link handler, immediately followed by:

```swift
    guard components.scheme == "steps", components.host == "open" else {
      return
    }
```

Insert the redemption check **immediately before** that `guard` (the redemption URL's host is `redeem_web_purchase`, not `open`, so it must be handled before this guard):

```swift
    // RevenueCat web-purchase redemption deep link:
    // steps://redeem_web_purchase?redemption_token=...
    if purchaseManager.webPurchaseRedemption(from: url) != nil {
      Task { await purchaseManager.redeemWebPurchase(from: url) }
      return
    }

```

- [ ] **Step 2: Add redemption-result alert copy helpers**

In `StepsApp.swift`, in the same view struct that defines `handleDeepLink` (the one with `@Environment(PurchaseManager.self) private var purchaseManager` at ~line 63), add these helpers:

```swift
  private func webRedemptionAlertTitle(_ outcome: PurchaseManager.WebRedemptionOutcome) -> String {
    switch outcome {
    case .success: return "Pro Unlocked"
    case .expired: return "Link Expired"
    case .alreadyRedeemedByOtherUser: return "Already Redeemed"
    case .invalid, .failed: return "Couldn't Redeem"
    }
  }

  private func webRedemptionAlertMessage(_ outcome: PurchaseManager.WebRedemptionOutcome) -> String {
    switch outcome {
    case .success:
      return "Your web purchase is now active. Enjoy Steps Pro!"
    case let .expired(obfuscatedEmail):
      return "That link expired. We've emailed a new one to \(obfuscatedEmail). Open it on this device to finish."
    case .alreadyRedeemedByOtherUser:
      return "This purchase is already linked to a different install."
    case .invalid, .failed:
      return "Something went wrong redeeming your purchase. Please try the link in your email again."
    }
  }
```

- [ ] **Step 3: Attach the alert to the root view**

In `StepsApp.swift`, find the presentation modifiers on the root view (around lines 136–158, e.g. `.fullScreenCover(isPresented: $showPaywall)` … `.sheet(isPresented: $showWhatsNew)`). Directly after the last modifier in that chain, add:

```swift
        .alert(
          item: Binding(
            get: { purchaseManager.webRedemptionOutcome },
            set: { if $0 == nil { purchaseManager.clearWebRedemptionOutcome() } }
          ),
          // WebRedemptionOutcome is Equatable; wrap for Identifiable alert(item:)
          content: { outcome in
            Alert(
              title: Text(webRedemptionAlertTitle(outcome)),
              message: Text(webRedemptionAlertMessage(outcome)),
              dismissButton: .default(Text("OK")) { purchaseManager.clearWebRedemptionOutcome() }
            )
          }
        )
```

If the compiler requires `Identifiable` for `alert(item:)`, make the enum conform by adding to its declaration in `PurchaseManager.swift` (Task 2, Step 3):

```swift
  enum WebRedemptionOutcome: Equatable, Identifiable {
    case success
    case expired(obfuscatedEmail: String)
    case alreadyRedeemedByOtherUser
    case invalid
    case failed
    var id: String {
      switch self {
      case .success: return "success"
      case .expired: return "expired"
      case .alreadyRedeemedByOtherUser: return "other_user"
      case .invalid: return "invalid"
      case .failed: return "failed"
      }
    }
  }
```

- [ ] **Step 4: Build**

Run:
```bash
cd /Users/hieudinh/Projects/Steps && xcodebuild build -scheme Steps -destination 'platform=iOS Simulator,name=iPhone 16' 2>&1 | tail -5
```
Expected: `** BUILD SUCCEEDED **`.

- [ ] **Step 5: Manual deep-link smoke test on the simulator**

Boot the app on a simulator, then fire a non-redemption and a malformed redemption URL to confirm routing doesn't crash and the existing flows still work:
```bash
xcrun simctl openurl booted "steps://open?screen=PAYWALL"
xcrun simctl openurl booted "steps://redeem_web_purchase?redemption_token=fake"
```
Expected: `screen=PAYWALL` still behaves as before; the fake token triggers a redemption attempt that resolves to a `.invalid`/`.failed` alert (network call returns an error) — confirming the interception + alert wiring works end to end. (A *real* token is exercised in Task 5.)

- [ ] **Step 6: Commit**

```bash
cd /Users/hieudinh/Projects/Steps && git add Steps/StepsApp.swift Steps/Utilities/PurchaseManager.swift && git commit -m "feat: redeem web purchase from steps:// deep link with result alert"
```

---

### Task 4: Web — branded entry URL on getsteps.app that points at the purchase link

**Files:**
- Modify: `/Users/hieudinh/Projects/getsteps-app/lib/constants.ts`
- Create: `/Users/hieudinh/Projects/getsteps-app/app/get-pro/route.ts`
- Test: `/Users/hieudinh/Projects/getsteps-app/app/get-pro/route.test.ts` (create)

**Interfaces:**
- Consumes (from Task 1): the Web Purchase Link URL.
- Produces: a stable, swappable entry URL `https://getsteps.app/get-pro` that 307-redirects to the RevenueCat purchase link (point ad campaigns here so the destination can change without re-editing ads).

- [ ] **Step 1: Add the purchase-link constant**

In `lib/constants.ts`, add a field to `SITE_CONFIG` (replace the placeholder with the real URL from Task 1, Step 11):

```ts
  appStoreUrl:
    "https://apps.apple.com/us/app/steps-workout-pedometer/id6746096378",
  proWebCheckoutUrl: "https://pay.rev.cat/almjpuvcjngxzlih/",
  supportEmail: "support@getsteps.app",
```

- [ ] **Step 2: Write the failing test**

Create `app/get-pro/route.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { GET } from "./route";
import { SITE_CONFIG } from "@/lib/constants";

describe("/get-pro", () => {
  it("redirects to the RevenueCat web checkout link", () => {
    const res = GET();
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe(SITE_CONFIG.proWebCheckoutUrl);
  });
});
```

- [ ] **Step 3: Run the test to verify it fails**

Run:
```bash
cd /Users/hieudinh/Projects/getsteps-app && npx vitest run app/get-pro/route.test.ts 2>&1 | tail -20
```
Expected: FAIL — cannot resolve `./route` (file doesn't exist yet).

- [ ] **Step 4: Implement the redirect route**

Create `app/get-pro/route.ts`:

```ts
import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/constants";

// Stable, brandable entry URL for web2app ad funnels. Redirects to the
// RevenueCat-hosted checkout so the destination can change without re-editing ads.
export function GET() {
  return NextResponse.redirect(SITE_CONFIG.proWebCheckoutUrl, 307);
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run:
```bash
cd /Users/hieudinh/Projects/getsteps-app && npx vitest run app/get-pro/route.test.ts 2>&1 | tail -20
```
Expected: PASS.

- [ ] **Step 6: Typecheck/build**

Run:
```bash
cd /Users/hieudinh/Projects/getsteps-app && npx tsc --noEmit 2>&1 | tail -5
```
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
cd /Users/hieudinh/Projects/getsteps-app && git add lib/constants.ts app/get-pro/route.ts app/get-pro/route.test.ts && git commit -m "feat: add /get-pro redirect to RevenueCat web checkout"
```

---

### Task 5: End-to-end verification on a fresh install

**Files:** none (manual integration test across all three surfaces).

**Interfaces:**
- Consumes: Task 1 (live web checkout + redemption), Tasks 2–3 (iOS redemption), Task 4 (entry URL).

- [ ] **Step 1: Fresh install of the app with the redemption code**

Build & run the Steps app on a simulator/device, ensuring it is **not** already Pro (debug builds: use the in-app debug toggle to force non-Pro, or use a clean install).

- [ ] **Step 2: Complete a web purchase (Stripe test mode)**

On the same device's browser, open `https://getsteps.app/get-pro` (or the raw Web Purchase Link), complete checkout with Stripe test card `4242 4242 4242 4242` and an email you control.

Verify: the branded 2-step success page appears.

- [ ] **Step 3: Redeem into the app**

Tap **Redeem purchase** on the success page (within 60 minutes).

Verify ALL of:
- The app opens and shows the **"Pro Unlocked"** alert.
- `purchaseManager.isProUser` is now `true` — Pro-gated UI/widgets unlock.
- The purchase + customer appear in the RevenueCat dashboard.

- [ ] **Step 4: Verify the expired-link path**

Wait >60 minutes (or reuse the already-redeemed link), then tap the link again.

Verify: RevenueCat emails a fresh link to the billing email, and (if opened in-app) the **"Link Expired"** alert shows the obfuscated email. Open the new emailed link → redemption completes.

- [ ] **Step 5: Verify analytics attribution**

Confirm the purchase event reached DataFast via the existing webhook (`app/api/webhooks/revenuecat/route.ts` forwards `INITIAL_PURCHASE`).

Verify: the payment shows in DataFast.

- [ ] **Step 6: Switch to live mode (go-live checklist)**

When ready: switch the RevenueCat Stripe connection from test to **live**, confirm the live Web Purchase Link, and update `SITE_CONFIG.proWebCheckoutUrl` if the live link differs. Re-run Steps 2–3 with a real card (small-value or refunded).

---

## Notes
- **Task ordering:** Task 1 must complete first (it produces the purchase link + proves the redemption URL format). Tasks 2 and 4 are independent and can run in parallel; Task 3 depends on Task 2; Task 5 depends on all.
- **Repos:** Tasks 2, 3, 5(app) are in `/Users/hieudinh/Projects/Steps`; Task 4 is in `/Users/hieudinh/Projects/getsteps-app`; Task 1 is dashboard-only.
- **Out of scope (per spec):** Apple Sign In / `logIn` identity binding, custom Next.js checkout/`/welcome` page, branded transactional email, replacing the App Store offer-code flow.
