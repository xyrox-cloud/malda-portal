# Malda College Portal — UI/UX Upgrade Tasks

## High Severity Issues (Completed)
- [x] **Issue #1**: Remove Runtime Tailwind CDN (`<script src="https://cdn.tailwindcss.com">`) and Tailwind config blocks from all 61 HTML files. Consolidate layout utility classes into `assets/css/components.css`.
- [x] **Issue #2**: Fix Desktop Navigation Overflow/Cramping (`1024px–1280px`). Update breakpoint to `1200px` (`@media (min-width: 1200px)`), reduce nav item padding to `6px 8px`, and group secondary links (`Notice Board`, `Tenders`, `NIRF`, `Alumni`, `Donation`) into a clean "More" dropdown.
- [x] **Issue #3**: Convert Mobile Nav Drawer into interactive Accordion. Update `buildMobileNav()` in `assets/js/nav.js` with expandable/collapsible toggle headers (`[data-mobile-accordion]`), chevron rotation animations, and click handlers to eliminate flat 50+ item scroll clutter.
- [x] **Issue #4**: Fix Mobile Card Grid Overflow (`320px–360px`). Update grid template columns in `assets/css/components.css` (`.skills-grid`, `.card-grid`, `.faculty-grid`, `.courses-grid`, `.notice-grid`) from `minmax(320px, 1fr)` to fluid `minmax(min(100%, 280px), 1fr)`.

---

## Pending Issues (Medium & Low Severity)

### Medium Severity (Pending)
- [ ] **Issue #5**: Button style standardization — unify border radii (`--radius-md: 8px` vs `rounded-xl: 12px` vs `rounded-full`) and padding across all template pages.
- [ ] **Issue #6**: Contrast ratio improvements for WCAG AA compliance — adjust `.mobile-section-title` text color (`#43474e`) and footer helper text opacity (`rgba(255,255,255,0.70)`).
- [ ] **Issue #7**: Touch device support for multi-level hover submenus — add tap/click event handlers for `.submenu-menu` dropdowns.
- [ ] **Issue #8**: Remove dead `#hero-canvas` code & unneeded background style overrides in `index.html`.

### Low Severity (Pending)
- [ ] **Issue #9**: Add styled empty state component (`.empty-state`) for search filters when 0 results match on `notice-board.html` and `faculty.html`.
- [ ] **Issue #10**: Add explicit `width`, `height`, and `aspect-ratio` properties to logo and hero images to eliminate Layout Shift (CLS).
