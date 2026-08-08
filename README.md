# Malda College Website

A complete, deploy-ready static website for Malda College, Malda, West Bengal.

## Tech Stack
- **HTML5** with semantic markup
- **Tailwind CSS** (CDN) for utility classes
- **Vanilla CSS** for shared design system (`assets/css/`)
- **Vanilla JavaScript** for nav injection, language toggle, animations
- **WebGL** for animated hero background on liquid glass pages
- **Google Fonts**: Playfair Display + Inter

## Structure

```
malda-site/
├── index.html              # Home (Liquid Glass)
├── about-us.html
├── principals-desk.html
├── governing-body.html
├── administrative-staff.html
├── code-of-conduct.html
├── courses.html            # Academic Programmes
├── faculty.html
├── admissions.html
├── notice-board.html
├── tenders.html
├── contact.html
├── student-login.html
├── naac-iqac.html          # Liquid Glass
├── nirf.html
├── alumni.html             # Liquid Glass
├── faq.html
├── privacy-policy.html
├── infrastructure.html
├── sitemap.xml
├── robots.txt
│
├── subjects/               # 19 Department pages
│   ├── arabic.html
│   ├── bengali.html
│   ├── economics.html
│   ├── education.html
│   ├── english.html
│   ├── history.html
│   ├── philosophy.html
│   ├── political-science.html
│   ├── sanskrit.html
│   ├── sociology.html
│   ├── botany.html
│   ├── chemistry.html
│   ├── computer-science.html
│   ├── mathematics.html
│   ├── physics.html
│   ├── zoology.html
│   ├── geography.html
│   ├── commerce.html
│   └── bca.html
│
├── cells/                  # 6 Administrative Cell pages
│   ├── grievance-cell.html
│   ├── sc-st-cell.html
│   ├── minority-cell.html
│   ├── internal-complaint-cell.html
│   ├── anti-ragging-cell.html
│   └── obc-cell.html
│
├── facilities/             # 5 Facility detail pages
│   ├── academic.html
│   ├── administrative.html
│   ├── human-resource.html
│   ├── physical.html
│   └── digital.html
│
└── assets/
    ├── css/
    │   ├── design-tokens.css    # All CSS custom properties
    │   └── components.css       # Shared component styles
    ├── js/
    │   ├── nav.js               # Nav/footer injection + lang toggle + mobile
    │   └── animations.js        # WebGL shader, counters, accordion, filters
    └── images/
```

## Pages: 20 root + 19 subjects + 6 cells + 5 facilities = **50 pages**

## Design System
- **Navy + Gold** Material You color palette
- **Standard** (light): bg #faf9fc, text #1a1c1e
- **Liquid Glass** (dark): bg #000613, text #fff — used for Home, NAAC/IQAC, Alumni
- **Typography**: Playfair Display (display/headlines) + Inter (body/labels)
- **Glass cards**: backdrop-filter blur with rgba whites
- **Responsive**: mobile-first, bottom nav bar on mobile

## Running Locally

```bash
# Option 1: Python (built-in)
python3 -m http.server 8080
# Then open http://localhost:8080

# Option 2: Node.js
npx serve .

# Option 3: Use the convenience script
./serve.sh
```

## Features
- ✅ Bilingual EN/Bengali toggle (localStorage persistent)
- ✅ Full dropdown navigation with deep submenus
- ✅ Mobile hamburger + bottom navigation bar
- ✅ WebGL animated hero on liquid glass pages
- ✅ Scroll-reveal animations
- ✅ Animated stat counters
- ✅ Countdown timer on admissions page
- ✅ Notice board + tender filter by category
- ✅ Faculty & course search
- ✅ FAQ accordion
- ✅ SEO meta tags on all pages
- ✅ sitemap.xml + robots.txt
- ✅ ARIA accessibility attributes
- ✅ Responsive (mobile + tablet + desktop)

## External Links (not rebuilt as pages)
- ERP Login: https://mcerp.in/erp/login.aspx
- Admission Portal: https://sites.google.com/maldacollege.ac.in/mc-admission/home
- NAAC: https://www.naac.gov.in
- NIRF: https://www.nirfindia.org

## Excluded (as requested)
- List of Holidays
- Strategy Development and Deployment
- Academic Calendar
- Routine (Central + Class)

## Deploy
This is a purely static site — drop the folder into any web host:
- Netlify: `netlify deploy --dir .`
- GitHub Pages: push to gh-pages branch
- Traditional hosting: FTP the entire folder
- Nginx/Apache: serve the directory as document root
