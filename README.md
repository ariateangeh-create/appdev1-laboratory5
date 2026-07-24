# Laboratory 5: Build "Mini Fruit & Veg Stand"

**Built directly from your "React – Quick Start" deck.** If you get stuck, the slide range in the concept map below tells you exactly where to look. Beyond that, this isn't broken down step-by-step — the acceptance criteria describe what "done" looks like, and it's on you to figure out where in the code each piece belongs. That's the actual skill this lab is testing.

---

## What you're building

A tiny shop screen: a list of products, each with a name, price, and an "Add to Cart" button. Clicking Add to Cart on *any* product increases one shared counter at the top — same idea as the "counters that update together" example in the deck (slides 33–42), just applied to a shop instead of two plain buttons.

**What it should look like once finished:**

```
Mini Fruit & Veg Stand
Cart is empty

┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│ Cabbage     │  │ Garlic ⭐   │  | Apple ⭐   │  │ Mango       │
│ $1.50       │  │ $2.00       │  │ $3.25       │  │ $4.00       │
│ (dark green)│  │ (dark green)│  │ (magenta)   │  │ (magenta)   │
│[Add to Cart]│  │[Add to Cart]│  │[Add to Cart]│  │[Add to Cart]│
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘

-- after clicking Apple twice and Mango once --

3 items in cart

-- with the stretch goal's "Remove one" button in place --

3 items in cart   [Remove one]

-- after clicking "Remove one" three times in a row --

Cart is empty
```

---

## Starter Scaffold

Open the `ShopApp.jsx`.

This file is incomplete, and it has a couple of bugs. Nothing in the code below marks where — that's for you to work out against the acceptance criteria and the concept map above. Anywhere you see placeholder text like `PRODUCT NAME HERE` and `CART STATUS HERE`, that's a sign something needs to be replaced with real logic, but not every gap looks like that.

---

## Acceptance criteria

- [ ] Component is correctly named `ProductCard` (capital letter) and nested inside `ShopApp`
- [ ] `ProductCard` returns exactly one root element — no stray siblings
- [ ] Product title and price are displayed via `{}` expressions, not hardcoded text
- [ ] Price text color is `magenta` for fruit, `darkgreen` for vegetables, via a `style={{ }}` object
- [ ] "⭐ Popular" only appears on products where `popular` is `true`
- [ ] All four products render from the `products` array via `.map()`, each with a unique `key`
- [ ] Clicking **any** product's "Add to Cart" button increases **one shared** counter
- [ ] Cart status line correctly switches between "Cart is empty" and "N items in cart"
- [ ] The counter's state lives in `ShopApp`, not in `ProductCard` — `ProductCard` receives `onAddToCart` as a prop and calls it, it doesn't manage the count itself

---

## Stretch goal

Add a **"Remove one"** button next to the cart status that decreases the count by 1 — but never below 0. This doesn't require any new concept beyond what's in the deck, just applying `useState` and a condition you already know.

---