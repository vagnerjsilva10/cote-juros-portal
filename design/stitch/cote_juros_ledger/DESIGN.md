# Design System Strategy: The Financial Curator

## 1. Overview & Creative North Star
This design system is built upon the "Financial Curator" North Star. We are moving away from the crowded, grid-locked interfaces typical of legacy banking and toward an editorial, high-fidelity experience that feels globally funded and technologically superior.

The system rejects "standard" UI patterns in favor of **Intentional Asymmetry** and **Cinematic Scale**. We treat every screen like a high-end magazine spread: bold headlines, massive breathing room, and data that feels like art. We don't just show numbers; we curate an atmosphere of wealth and precision. The aesthetic borrows the weightlessness of Apple, the technical rigors of Stripe, and the architectural "blank space" of Mercury.

---

## 2. Colors & Surface Logic
Our palette is rooted in deep trust (Royal Blue) and technical sophistication (Deep Purple). However, the premium feel is achieved not through the colors themselves, but through how they occupy space.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to define sections. Traditional dividers are a sign of lazy design. Instead, boundaries must be defined through:
- **Tonal Shifts:** Transitioning from `surface` (#f9f9ff) to `surface-container-low` (#f1f3ff).
- **Negative Space:** Using the Spacing Scale to create "voids" that separate content blocks.
- **Glassmorphism:** Using `surface-container-lowest` (#ffffff) with a 70% opacity and `backdrop-blur` to sit on top of gradient backgrounds.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of premium materials.
- **Base Layer:** `surface` (#f9f9ff).
- **Secondary Sectioning:** `surface-container-low` (#f1f3ff).
- **Floating Interactive Elements:** `surface-container-lowest` (#ffffff).
- **Dark Emphasis Sections:** `on-surface` (#151b2a) or the specific dark section token (#0B1220).

### Signature Textures
Main CTAs and high-impact hero sections must utilize our signature gradients to move beyond "flat" UI:
- **The Core Gradient:** `primary` (#004ccd) to `secondary` (#712ae2).
- **The Financial Growth Gradient:** `primary_container` (#0f62fe) to `tertiary_container` (#007e71).

---

## 3. Typography: The Cinematic Voice
We utilize a dual-font strategy to balance editorial authority with technical legibility.

- **Display & Headlines (Manrope):** These are your "Cinematic" elements. Use `display-lg` (3.5rem) for hero statements with a `-0.02em` letter-spacing. The goal is to make the typography feel like a physical brand presence.
- **Body & Labels (Inter):** These provide "Technical Precision." Inter is used for all data-heavy contexts. Maintain high line-heights (1.5x) for `body-lg` to ensure the "editorial" feel is preserved even in long-form text.

**Hierarchy Tip:** Never use `headline-sm` where a `title-lg` with increased weight would suffice. Reserve "Display" and "Headline" scales for storytelling, not for utility.

---

## 4. Elevation & Depth
In this system, depth is a tool for focus, not just a stylistic flourish.

- **The Layering Principle:** Rather than using a shadow to make a card "pop," place a `surface-container-lowest` (#ffffff) card on top of a `surface-container` (#e9edff) background. The subtle contrast is more sophisticated than a heavy shadow.
- **Ambient Shadows:** When a card must float (e.g., a dashboard widget over a chart), use a "Weightless Shadow": `Y: 20px, Blur: 40px, Color: on-surface (Opacity 4%)`. It should feel like the element is levitating, not resting.
- **The Ghost Border Fallback:** If accessibility requires a border (e.g., in a high-density comparison table), use the `outline-variant` (#c3c6d8) at **15% opacity**. It should be felt, not seen.
- **Glassmorphism:** For the Premium Header, use a background of `surface/80%` with a `backdrop-blur-md` (12px). This creates a sense of "depth-of-field" as the user scrolls.

---

## 5. Components

### Buttons (The Kinetic CTA)
- **Primary:** Background uses the `primary` to `secondary` gradient. Radius: `full`. No border. On hover, apply a subtle inner-glow (1px white overlay at 10%).
- **Secondary:** `surface-container-lowest` with a "Ghost Border."
- **Micro-interactions:** Buttons should scale slightly (0.98) on click to mimic a physical depress.

### Cards & Financial Modules
- **Radius:** Always use `xl` (1.5rem) for outer containers.
- **Content Separation:** Forbid divider lines. Use `body-sm` labels in `primary` color to act as headers for data sections within the card. Use 24px of vertical padding between logical blocks.

### Comparison Tables
- **Aesthetic:** Ultra-minimal. No vertical lines.
- **Header:** `label-md` in `outline` color, all-caps with 0.05em tracking.
- **Rows:** Alternate between `surface` and `surface-container-low` on hover to provide a "tracking" guide for the eye without permanent lines.

### Financial Calculators
- **Sliders:** The track should use `surface-container-highest`. The thumb should be a large, `primary` colored circle with a `surface-container-lowest` center dot.
- **Real-time Updates:** Numerical changes should use a "fade-in-up" animation when data refreshes to feel high-tech and reactive.

---

## 6. Do’s and Don’ts

### Do:
- **Do** embrace extreme white space. If a section feels "comfortable," add 20% more padding.
- **Do** use `tertiary` (#006358) and its containers for "Success" or "Growth" states—it feels more sophisticated than standard "Green."
- **Do** use `primary-fixed` (#dbe1ff) for subtle background highlights behind important icons.

### Don’t:
- **Don’t** use black (#000000). Use `on-surface` (#151b2a) for all high-contrast text.
- **Don’t** use a 1px border to separate the header from the hero. Use the glassmorphism blur or a subtle shadow.
- **Don’t** use standard "drop shadows." If the shadow isn't soft enough to be invisible at a glance, it’s too heavy.
- **Don’t** crowd charts. A chart should have a 40px minimum margin from any other UI element.