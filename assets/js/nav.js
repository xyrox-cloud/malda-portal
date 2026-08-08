/**
 * MALDA COLLEGE — SHARED NAV + FOOTER INJECTOR
 * Injects nav, footer, handles mobile menu, dropdowns,
 * language toggle (EN/BN), active state, scroll reveal.
 *
 * Usage: Add <script src="{root}assets/js/nav.js"></script>
 * before </body>. Set window.MC_ROOT if not at root level
 * (e.g. window.MC_ROOT = '../'; for pages in subdirectories).
 */

(function () {
  'use strict';

  /* ── Root path resolution ── */
  const ROOT = (typeof window.MC_ROOT !== 'undefined') ? window.MC_ROOT : './';

  /* ── Navigation data ── */
  const NAV = [
    { label: 'Home', labelBn: 'হোম', href: ROOT + 'index.html', page: 'home' },
    { label: 'About Us', labelBn: 'আমাদের সম্পর্কে', href: ROOT + 'about-us.html', page: 'about-us' },
    {
      label: 'Administration', labelBn: 'প্রশাসন', page: 'admin',
      children: [
        { label: 'Governing Body', labelBn: 'পরিচালনা পর্ষদ', href: ROOT + 'governing-body.html', page: 'governing-body' },
        { label: "Principal's Desk", labelBn: 'অধ্যক্ষের বার্তা', href: ROOT + 'principals-desk.html', page: 'principals-desk' },
        { label: 'Administrative & Support Staff', labelBn: 'প্রশাসনিক কর্মীবৃন্দ', href: ROOT + 'administrative-staff.html', page: 'administrative-staff' },
        { label: 'Code of Conduct of Staff', labelBn: 'কর্মীবিধি', href: ROOT + 'code-of-conduct.html', page: 'code-of-conduct' },
        {
          label: 'Various Cell', labelBn: 'বিভিন্ন সেল',
          children: [
            { label: 'Grievance and Redressal Cell', labelBn: 'অভিযোগ নিষ্পত্তি সেল', href: ROOT + 'cells/grievance-cell.html', page: 'grievance-cell' },
            { label: 'SC/ST Cell', labelBn: 'এসসি/এসটি সেল', href: ROOT + 'cells/sc-st-cell.html', page: 'sc-st-cell' },
            { label: 'Minority Cell', labelBn: 'সংখ্যালঘু সেল', href: ROOT + 'cells/minority-cell.html', page: 'minority-cell' },
            { label: 'Internal Complaint Cell', labelBn: 'অভ্যন্তরীণ অভিযোগ সেল', href: ROOT + 'cells/internal-complaint-cell.html', page: 'internal-complaint-cell' },
            { label: 'Anti Ragging Cell', labelBn: 'র‍্যাগিং বিরোধী সেল', href: ROOT + 'cells/anti-ragging-cell.html', page: 'anti-ragging-cell' },
            { label: 'OBC Cell', labelBn: 'ওবিসি সেল', href: ROOT + 'cells/obc-cell.html', page: 'obc-cell' },
          ]
        }
      ]
    },
    {
      label: 'Facilities', labelBn: 'অবকাঠামো', href: ROOT + 'infrastructure.html', page: 'facilities',
      children: [
        { label: 'Academic', labelBn: 'একাডেমিক', href: ROOT + 'facilities/academic.html', page: 'academic' },
        { label: 'Administrative', labelBn: 'প্রশাসনিক', href: ROOT + 'facilities/administrative.html', page: 'administrative' },
        { label: 'Human Resource', labelBn: 'মানবসম্পদ', href: ROOT + 'facilities/human-resource.html', page: 'human-resource' },
        { label: 'Physical', labelBn: 'ভৌত', href: ROOT + 'facilities/physical.html', page: 'physical' },
        { label: 'Digital', labelBn: 'ডিজিটাল', href: ROOT + 'facilities/digital.html', page: 'digital' },
      ]
    },
    {
      label: 'Programmes & Courses', labelBn: 'প্রোগ্রাম ও কোর্স', href: ROOT + 'courses.html', page: 'courses',
      children: [
        {
          label: 'Honours', labelBn: 'অনার্স',
          children: [
            {
              label: 'B.A. (Hons)', labelBn: 'বিএ (অনার্স)',
              children: [
                { label: 'Arabic', labelBn: 'আরবি', href: ROOT + 'subjects/arabic.html', page: 'arabic' },
                { label: 'Bengali', labelBn: 'বাংলা', href: ROOT + 'subjects/bengali.html', page: 'bengali' },
                { label: 'Economics', labelBn: 'অর্থনীতি', href: ROOT + 'subjects/economics.html', page: 'economics' },
                { label: 'Education', labelBn: 'শিক্ষা', href: ROOT + 'subjects/education.html', page: 'education' },
                { label: 'English', labelBn: 'ইংরেজি', href: ROOT + 'subjects/english.html', page: 'english' },
                { label: 'History', labelBn: 'ইতিহাস', href: ROOT + 'subjects/history.html', page: 'history' },
                { label: 'Philosophy', labelBn: 'দর্শন', href: ROOT + 'subjects/philosophy.html', page: 'philosophy' },
                { label: 'Political Science', labelBn: 'রাষ্ট্রবিজ্ঞান', href: ROOT + 'subjects/political-science.html', page: 'political-science' },
                { label: 'Sanskrit', labelBn: 'সংস্কৃত', href: ROOT + 'subjects/sanskrit.html', page: 'sanskrit' },
                { label: 'Sociology', labelBn: 'সমাজবিজ্ঞান', href: ROOT + 'subjects/sociology.html', page: 'sociology' },
              ]
            },
            {
              label: 'B.Sc. (Hons)', labelBn: 'বিএসসি (অনার্স)',
              children: [
                { label: 'Botany', labelBn: 'উদ্ভিদবিজ্ঞান', href: ROOT + 'subjects/botany.html', page: 'botany' },
                { label: 'Chemistry', labelBn: 'রসায়ন', href: ROOT + 'subjects/chemistry.html', page: 'chemistry' },
                { label: 'Computer Science', labelBn: 'কম্পিউটার বিজ্ঞান', href: ROOT + 'subjects/computer-science.html', page: 'computer-science' },
                { label: 'Mathematics', labelBn: 'গণিত', href: ROOT + 'subjects/mathematics.html', page: 'mathematics' },
                { label: 'Physics', labelBn: 'পদার্থবিজ্ঞান', href: ROOT + 'subjects/physics.html', page: 'physics' },
                { label: 'Zoology', labelBn: 'প্রাণিবিজ্ঞান', href: ROOT + 'subjects/zoology.html', page: 'zoology' },
                { label: 'Geography', labelBn: 'ভূগোল', href: ROOT + 'subjects/geography.html', page: 'geography' },
              ]
            },
            { label: 'B.Com. (Accounting)', labelBn: 'বিকম (অ্যাকাউন্টিং)', href: ROOT + 'subjects/commerce.html', page: 'commerce' },
            { label: 'BCA', labelBn: 'বিসিএ', href: ROOT + 'subjects/bca.html', page: 'bca' },
          ]
        },
        {
          label: 'General', labelBn: 'জেনারেল',
          children: [
            { label: 'B.A. General subjects', labelBn: 'বিএ জেনারেল', href: ROOT + 'courses.html#ba-general', page: 'ba-general' },
            { label: 'B.Sc. General subjects', labelBn: 'বিএসসি জেনারেল', href: ROOT + 'courses.html#bsc-general', page: 'bsc-general' },
          ]
        }
      ]
    },
    { label: 'NAAC / IQAC', labelBn: 'ন্যাক / আইকিউএসি', href: ROOT + 'naac-iqac.html', page: 'naac-iqac' },
    { label: 'Notice Board', labelBn: 'নোটিশ বোর্ড', href: ROOT + 'notice-board.html', page: 'notice-board' },
    { label: 'Alumni', labelBn: 'প্রাক্তনী', href: ROOT + 'alumni.html', page: 'alumni' },
    { label: 'Admissions', labelBn: 'ভর্তি', href: ROOT + 'admissions.html', page: 'admissions' },
    { label: 'Contact Us', labelBn: 'যোগাযোগ', href: ROOT + 'contact.html', page: 'contact' },
  ];

  /* ── Footer links ── */
  const FOOTER_LINKS = {
    important: [
      { label: 'Admissions 2026', labelBn: 'ভর্তি ২০২৬', href: ROOT + 'admissions.html' },
      { label: 'Notice Board', labelBn: 'নোটিশ বোর্ড', href: ROOT + 'notice-board.html' },
      { label: 'NAAC / IQAC', labelBn: 'ন্যাক / আইকিউএসি', href: ROOT + 'naac-iqac.html' },
      { label: 'Tenders', labelBn: 'টেন্ডার', href: ROOT + 'tenders.html' },
      { label: 'NIRF', labelBn: 'এনআইআরএফ', href: ROOT + 'nirf.html' },
      { label: 'Alumni', labelBn: 'প্রাক্তনী', href: ROOT + 'alumni.html' },
    ],
    connect: [
      { label: '📅 Class Routine (Telegram Bot)', labelBn: '📅 ক্লাস রুটিন (টেলিগ্রাম বট)', href: 'https://t.me/Maldacollage_bot', external: true },
      { label: 'Contact Us', labelBn: 'যোগাযোগ', href: ROOT + 'contact.html' },
      { label: 'Faculty Directory', labelBn: 'শিক্ষক তালিকা', href: ROOT + 'faculty.html' },
      { label: 'Student Login', labelBn: 'শিক্ষার্থী লগইন', href: 'https://mcerp.in/erp/login.aspx' },
      { label: 'Privacy Policy', labelBn: 'গোপনীয়তা নীতি', href: ROOT + 'privacy-policy.html' },
      { label: 'FAQ', labelBn: 'সাধারণ প্রশ্নাবলী', href: ROOT + 'faq.html' },
    ]
  };

  /* ── Detect current page ── */
  function getCurrentPage() {
    const path = window.location.pathname;
    const file = path.split('/').pop().replace('.html', '') || 'index';
    return file;
  }

  function isActive(item, current) {
    if (item.page === current) return true;
    if (item.page === 'home' && (current === '' || current === 'index')) return true;
    return false;
  }

  /* ── Build desktop dropdown HTML ── */
  function buildDropdown(items, depth) {
    depth = depth || 0;
    let html = `<ul class="dropdown-menu" style="${depth > 0 ? 'left:100%;top:0;' : ''}">`;
    items.forEach(item => {
      if (item.children) {
        html += `<li class="submenu">
          <button class="dropdown-toggle" aria-haspopup="true">
            <span class="lang-en">${item.label}</span>
            <span class="lang-bn">${item.labelBn || item.label}</span>
            <span class="material-symbols-outlined" style="font-size:14px">chevron_right</span>
          </button>
          ${buildDropdown(item.children, depth + 1)}
        </li>`;
      } else {
        html += `<li>
          <a href="${item.href}">
            <span class="lang-en">${item.label}</span>
            <span class="lang-bn">${item.labelBn || item.label}</span>
          </a>
        </li>`;
      }
    });
    html += '</ul>';
    return html;
  }

  /* ── Build desktop nav ── */
  function buildDesktopNav(currentPage) {
    let html = '<ul class="nav-links" role="list">';
    NAV.forEach(item => {
      const active = isActive(item, currentPage);
      if (item.children) {
        html += `<li class="dropdown">
          <button class="nav-link${active ? ' active' : ''}" aria-haspopup="true" aria-expanded="false">
            <span class="lang-en">${item.label}</span>
            <span class="lang-bn">${item.labelBn || item.label}</span>
            <span class="material-symbols-outlined" style="font-size:14px;margin-left:2px">expand_more</span>
          </button>
          ${buildDropdown(item.children, 0)}
        </li>`;
      } else {
        html += `<li>
          <a href="${item.href}" class="nav-link${active ? ' active' : ''}">
            <span class="lang-en">${item.label}</span>
            <span class="lang-bn">${item.labelBn || item.label}</span>
          </a>
        </li>`;
      }
    });
    html += '</ul>';
    return html;
  }

  /* ── Build mobile nav ── */
  function buildMobileNav(currentPage) {
    function renderItems(items, level) {
      level = level || 0;
      let html = '';
      items.forEach(item => {
        if (item.children) {
          html += `<div class="mobile-section-title">
            <span class="lang-en">${item.label}</span>
            <span class="lang-bn">${item.labelBn || item.label}</span>
          </div>`;
          html += renderItems(item.children, level + 1);
        } else {
          const active = isActive(item, currentPage);
          html += `<a href="${item.href}" class="mobile-nav-link${active ? ' active' : ''}" style="padding-left:${16 + level * 12}px">
            <span class="lang-en">${item.label}</span>
            <span class="lang-bn">${item.labelBn || item.label}</span>
          </a>`;
        }
      });
      return html;
    }
    return renderItems(NAV, 0);
  }

  /* ── Build full nav HTML ── */
  function buildNav() {
    const currentPage = getCurrentPage();
    return `
    <div class="nav-inner">
      <!-- Logo -->
      <a href="${ROOT}index.html" class="nav-logo" aria-label="Malda College Home">
        <img src="https://i.ibb.co/ksHdWc7h/mc-logo-1.png" alt="Malda College" style="height:40px; width:auto; object-fit:contain; margin-right:8px;" class="mc-logo">
        <span>
          <span class="lang-en">Malda College</span>
          <span class="lang-bn">মালদা কলেজ</span>
        </span>
      </a>

      <!-- Desktop Nav -->
      ${buildDesktopNav(currentPage)}

      <!-- Right Actions -->
      <div style="display:flex;align-items:center;gap:12px;flex-shrink:0">
        <button class="lang-toggle" id="lang-toggle-btn" aria-label="Toggle language" title="Toggle English / Bengali">
          <span class="lang-en">বাং</span>
          <span class="lang-bn">EN</span>
        </button>
        <a href="https://mcerp.in/erp/login.aspx" class="btn-login">
          <span class="lang-en">Student Login</span>
          <span class="lang-bn">শিক্ষার্থী লগইন</span>
        </a>
        <button class="hamburger" id="hamburger-btn" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Mobile slide panel -->
    <div id="mobile-panel" role="dialog" aria-label="Navigation menu">
      <div style="padding-bottom:16px">
        ${buildMobileNav(currentPage)}
        <div style="padding:16px;margin-top:8px">
          <a href="https://mcerp.in/erp/login.aspx" class="btn-primary" style="width:100%;justify-content:center">
            <span class="material-symbols-outlined" style="font-size:18px">login</span>
            <span class="lang-en">Student Login</span>
            <span class="lang-bn">শিক্ষার্থী লগইন</span>
          </a>
        </div>
      </div>
    </div>`;
  }

  /* ── Build footer HTML ── */
  function buildFooter() {
    let importantLinks = FOOTER_LINKS.important.map(l =>
      `<a href="${l.href}"><span class="lang-en">${l.label}</span><span class="lang-bn">${l.labelBn || l.label}</span></a>`
    ).join('');
    let connectLinks = FOOTER_LINKS.connect.map(l => {
      const ext = l.external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${l.href}"${ext}><span class="lang-en">${l.label}</span><span class="lang-bn">${l.labelBn || l.label}</span></a>`;
    }).join('');

    return `
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="${ROOT}index.html" class="footer-logo">
          <span class="lang-en">Malda College</span>
          <span class="lang-bn">মালদা কলেজ</span>
        </a>
        <p class="footer-desc">
          <span class="lang-en">A heritage institution committed to quality education and intellectual growth in North Bengal since 1944. NAAC Accredited: Grade B+ (2nd Cycle).</span>
          <span class="lang-bn">উত্তরবঙ্গে ১৯৪৪ সাল থেকে মানসম্পন্ন শিক্ষা ও মেধা বিকাশে নিবেদিত ঐতিহ্যবাহী প্রতিষ্ঠান। NAAC স্বীকৃত: গ্রেড B+ (২য় চক্র)।</span>
        </p>
        <div style="display:flex;gap:10px;margin-top:8px">
          <a href="${ROOT}contact.html" style="width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,0.20);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.60);text-decoration:none;transition:all 0.2s" aria-label="Contact">
            <span class="material-symbols-outlined" style="font-size:18px">mail</span>
          </a>
          <a href="${ROOT}about-us.html" style="width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,0.20);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.60);text-decoration:none;transition:all 0.2s" aria-label="About">
            <span class="material-symbols-outlined" style="font-size:18px">public</span>
          </a>
          <a href="${ROOT}notice-board.html" style="width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,0.20);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.60);text-decoration:none;transition:all 0.2s" aria-label="Notices">
            <span class="material-symbols-outlined" style="font-size:18px">notifications</span>
          </a>
        </div>
        <p class="footer-copy" style="margin-top:16px">
          <span class="lang-en">© 1944–${new Date().getFullYear()} Malda College. All Rights Reserved.</span>
          <span class="lang-bn">© ১৯৪৪–${new Date().getFullYear()} মালদা কলেজ। সর্বস্বত্ব সংরক্ষিত।</span>
        </p>
      </div>
      <div class="footer-col">
        <h4><span class="lang-en">Important Links</span><span class="lang-bn">গুরুত্বপূর্ণ লিংক</span></h4>
        ${importantLinks}
      </div>
      <div class="footer-col">
        <h4><span class="lang-en">Connect</span><span class="lang-bn">যোগাযোগ</span></h4>
        ${connectLinks}
        <div style="margin-top:16px;padding:12px;background:rgba(255,255,255,0.06);border-radius:8px;border:1px solid rgba(255,255,255,0.10)">
          <p style="font-size:11px;color:rgba(255,255,255,0.50);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px">
            <span class="lang-en">Campus Address</span>
            <span class="lang-bn">ক্যাম্পাস ঠিকানা</span>
          </p>
          <p style="font-size:13px;color:rgba(255,255,255,0.70);line-height:1.55">
            Rabindra Avenue, Malda,<br>West Bengal 732101, India
          </p>
          <p style="font-size:12px;color:rgba(255,255,255,0.55);margin-top:6px">📞 +91 03512 220808</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p><span class="lang-en">Established 1944 · NAAC B+ · Affiliated to University of Gour Banga</span><span class="lang-bn">প্রতিষ্ঠা ১৯৪৪ · NAAC B+ · গৌড়বঙ্গ বিশ্ববিদ্যালয় অধিভুক্ত</span></p>
      <a href="#top" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">
        <span class="lang-en">Back to top</span>
        <span class="lang-bn">উপরে যান</span>
        <span class="material-symbols-outlined" style="font-size:16px">arrow_upward</span>
      </a>
    </div>`;
  }

  /* ── Build mobile bottom bar ── */
  function buildBottomBar() {
    const cur = getCurrentPage();
    const items = [
      { href: ROOT + 'index.html', icon: 'home', label: 'Home', labelBn: 'হোম', page: 'index' },
      { href: ROOT + 'about-us.html', icon: 'info', label: 'About', labelBn: 'সম্পর্কে', page: 'about-us' },
      { href: ROOT + 'courses.html', icon: 'school', label: 'Courses', labelBn: 'কোর্স', page: 'courses' },
      { href: ROOT + 'admissions.html', icon: 'history_edu', label: 'Admissions', labelBn: 'ভর্তি', page: 'admissions' },
    ];
    return items.map(item => {
      const active = (cur === item.page || (item.page === 'index' && cur === '')) ? ' active' : '';
      return `<a href="${item.href}" class="bottom-bar-item${active}">
        <span class="material-symbols-outlined" style="${active ? 'font-variation-settings:\'FILL\' 1' : ''}">${item.icon}</span>
        <span class="lang-en">${item.label}</span>
        <span class="lang-bn">${item.labelBn}</span>
      </a>`;
    }).join('');
  }

  /* ── Inject nav ── */
  function injectNav() {
    let el = document.getElementById('site-nav');
    if (!el) {
      el = document.createElement('nav');
      el.id = 'site-nav';
      el.setAttribute('role', 'navigation');
      el.setAttribute('aria-label', 'Main navigation');
      document.body.insertAdjacentElement('afterbegin', el);
    }
    el.innerHTML = buildNav();
  }

  /* ── Inject footer ── */
  function injectFooter() {
    let el = document.getElementById('site-footer');
    if (!el) {
      el = document.createElement('footer');
      el.id = 'site-footer';
      document.body.appendChild(el);
    }
    el.innerHTML = buildFooter();
  }

  /* ── Inject mobile bottom bar ── */
  function injectBottomBar() {
    let el = document.getElementById('mobile-bottom-bar');
    if (!el) {
      el = document.createElement('nav');
      el.id = 'mobile-bottom-bar';
      el.setAttribute('aria-label', 'Quick navigation');
      document.body.appendChild(el);
    }
    el.innerHTML = buildBottomBar();
  }

  /* ── Language toggle ── */
  function initLangToggle() {
    const stored = localStorage.getItem('mc-lang');
    if (stored === 'bn') {
      document.body.classList.add('lang-bn-active');
    }
    document.addEventListener('click', function (e) {
      if (e.target.closest('#lang-toggle-btn')) {
        document.body.classList.toggle('lang-bn-active');
        const isBn = document.body.classList.contains('lang-bn-active');
        localStorage.setItem('mc-lang', isBn ? 'bn' : 'en');
      }
    });
  }

  /* ── Mobile hamburger ── */
  function initHamburger() {
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('#hamburger-btn');
      const panel = document.getElementById('mobile-panel');
      if (btn && panel) {
        const isOpen = panel.classList.contains('open');
        panel.classList.toggle('open');
        btn.classList.toggle('open');
        btn.setAttribute('aria-expanded', !isOpen);
      }
      // Close if clicking outside
      if (!e.target.closest('#site-nav') && panel) {
        panel.classList.remove('open');
        const hb = document.getElementById('hamburger-btn');
        if (hb) { hb.classList.remove('open'); hb.setAttribute('aria-expanded', 'false'); }
      }
    });
  }

  /* ── Scroll reveal ── */
  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(el => obs.observe(el));
    } else {
      revealEls.forEach(el => el.classList.add('visible'));
    }
  }

  /* ── Nav scroll shadow ── */
  function initNavScroll() {
    window.addEventListener('scroll', function () {
      const nav = document.getElementById('site-nav');
      if (!nav) return;
      if (window.scrollY > 20) {
        nav.style.boxShadow = '0 4px 30px rgba(0,31,63,0.14)';
      } else {
        nav.style.boxShadow = '0 20px 40px rgba(0,31,63,0.08)';
      }
    }, { passive: true });
  }

  /* ── Search toggle ── */
  function initSearch() {
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-search-toggle]')) {
        const overlay = document.getElementById('search-overlay');
        if (overlay) {
          overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
          if (overlay.style.display === 'flex') {
            const input = overlay.querySelector('input');
            if (input) setTimeout(() => input.focus(), 50);
          }
        }
      }
      if (e.target.closest('[data-search-close]')) {
        const overlay = document.getElementById('search-overlay');
        if (overlay) overlay.style.display = 'none';
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        const overlay = document.getElementById('search-overlay');
        if (overlay) overlay.style.display = 'none';
      }
    });
  }

  /* ── Init ── */
  function init() {
    injectNav();
    injectFooter();
    injectBottomBar();
    initLangToggle();
    initHamburger();
    initNavScroll();
    initScrollReveal();
    initSearch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
