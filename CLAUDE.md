# Elea Institute Website — Claude Code Project Guide

## What this is
Static HTML/CSS website for [Elea Institute](https://eleainstitute.org), a foundation that funds hospice and palliative care organizations. Hosted on **GitHub Pages** at `roeckermolly/elea-website-css`, served via custom domain `eleainstitute.org` (CNAME file in repo root).

## How to edit and deploy
1. Edit files directly in this repo directory
2. Commit and push to `main` — GitHub Pages deploys automatically (usually 1–3 minutes)
3. Verify with `curl -s https://eleainstitute.org/page-name.html | grep "some text"`

**Git push requires a classic GitHub PAT** (fine-grained PATs return 403 on this repo). Use:
```
git push https://<PAT>@github.com/roeckermolly/elea-website-css.git main
```
Ask Molly for the current PAT if you don't have it.

> **Note for Molly:** You also maintain a working copy at `/Users/molly/elea-site/`. After editing there, copy changed files to this repo before committing. The two directories should stay in sync.

---

## Site structure

| File | Purpose |
|---|---|
| `index.html` | Homepage |
| `about-us.html` | About / team / board |
| `impact.html` | Impact stats + featured publication |
| `grant-applications.html` | Apply for a Grant (main grantmaking page) |
| `rfp-2026.html` | National RFP 2026 details |
| `rfp-midwest-2026.html` | Midwest RFP 2026 details (now open, due Oct 27 2026) |
| `grants-awarded.html` | Past grantees |
| `fact-sheets.html` | Facts & Resources |
| `care-continuum.html` | The Care Continuum |
| `newsroom.html` | News index |
| `news-*.html` | Individual news articles |
| `style.css` | Main stylesheet |
| `elea-think-tank-refresh.css` | Additional CSS (originally WordPress Additional CSS) |
| `site.js` | Nav hamburger + any shared JS |
| `images/` | All site images |

---

## CSS design tokens (defined in style.css)

| Variable | Color | Use |
|---|---|---|
| `--c_a3` | Navy / dark blue | Headings, nav, buttons, borders |
| `--c_c1` | Rust / orange | Accent, CTA buttons, eyebrows |
| `--c_b3` | Light blue-grey | Section backgrounds, card backgrounds |
| `--ff_1` | Lora (serif) | Headings, pull quotes |
| `--ff_2` | Montserrat (sans) | Body, labels, nav, buttons |

---

## Nav pattern
Every page uses the same desktop + mobile nav. Desktop dropdown:

```html
<li class="has-dropdown"><a href="grant-applications.html">Grant Applications</a>
  <ul class="nav-dropdown">
    <li><a href="grant-applications.html">Apply for a Grant</a></li>
    <li><a href="rfp-2026.html">National RFP 2026</a></li>
    <li><a href="rfp-midwest-2026.html">Midwest RFP 2026</a></li>
  </ul>
</li>
```

Mobile nav sub-items use `padding-left:2.5rem;font-size:0.78rem;opacity:0.85;` and the `&#8618;` arrow character.

Add `class="active"` to the `<li>` of the current page.

**When adding a new nav item to all pages**, use a Python find-and-replace script rather than editing 25 files by hand. See prior session history for examples.

---

## Key external services

| Service | Detail |
|---|---|
| Contact / newsletter form | Formspree endpoint: `https://formspree.io/f/myklrpkl` → delivers to elea@teamlsg.com |
| Grant portal | `https://www.grantinterface.com/Home/Logon?urlkey=elea` (GrantInterface, new system as of 2026) |
| Midwest RFP access code | `Elea26` |

---

## Grant programs

**National Grant Program** — released ~March each year, US-wide. Current: `rfp-2026.html`.

**Midwest Grant Program** — Illinois-focused, community-level. Current: `rfp-midwest-2026.html` (2026–2027 cycle open Sep 15 – Oct 27, 2026). Three focus areas: Charity Care ($550–600k), Education ($75–150k), Integrative Therapy ($75–150k). Covers 13 IL counties.

---

## Adding a new page
1. Copy an existing page as a starting point
2. Update `<title>`, hero text, and main content
3. Set `class="active"` on the correct nav `<li>`
4. Add it to the dropdown on **all other pages** if it needs nav visibility
5. Commit and push

## Important notes
- No build step — plain HTML/CSS/JS, no framework, no npm
- Images live in `images/` — add new ones there
- The `JustUs/` folder in this directory is a separate git repo; it is gitignored and should never be committed (adding it as a submodule broke a deployment previously)
- Do not commit `.DS_Store` files (gitignored)
