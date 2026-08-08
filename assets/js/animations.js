/**
 * MALDA COLLEGE — ANIMATIONS & WEBGL SHADER
 * Animated gradient background for liquid glass pages
 */

/* WebGL animated hero shader (deep navy + gold pulse) */
function initHeroShader(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  function syncSize() {
    const w = canvas.clientWidth || 1280;
    const h = canvas.clientHeight || 720;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w; canvas.height = h;
    }
  }
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(syncSize).observe(canvas);
  }
  syncSize();

  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) return;

  const vs = `attribute vec2 a_position;
varying vec2 v_uv;
void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

  const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_uv;

void main() {
  vec2 uv = v_uv;
  vec3 navy1 = vec3(0.0, 0.122, 0.247);   /* #001F3F */
  vec3 navy2 = vec3(0.0, 0.04, 0.075);    /* #000A13 */
  vec3 gold  = vec3(1.0, 0.878, 0.533);   /* #FFE088 */

  float n = sin(uv.x * 3.0 + u_time * 0.5) * cos(uv.y * 2.0 + u_time * 0.3);
  float pulse = 0.5 + 0.5 * sin(u_time * 0.25);

  vec3 color = mix(navy2, navy1, uv.y + n * 0.15);

  float d1 = length(uv - vec2(0.8 + 0.05 * sin(u_time * 0.4), 0.2));
  color = mix(color, gold, smoothstep(0.5, 0.0, d1) * 0.08);

  float d2 = length(uv - vec2(0.15, 0.75 + 0.05 * cos(u_time * 0.3)));
  color = mix(color, gold, smoothstep(0.45, 0.0, d2) * 0.06);

  gl_FragColor = vec4(color, 1.0);
}`;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  }
  const prog = gl.createProgram();
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const pos = gl.getAttribLocation(prog, 'a_position');
  gl.enableVertexAttribArray(pos);
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

  const uTime  = gl.getUniformLocation(prog, 'u_time');
  const uRes   = gl.getUniformLocation(prog, 'u_resolution');
  const uMouse = gl.getUniformLocation(prog, 'u_mouse');

  let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
  window.addEventListener('mousemove', (e) => {
    const r = canvas.getBoundingClientRect();
    if (r.width && r.height) {
      mouse.x = ((e.clientX - r.left) / r.width) * canvas.width;
      mouse.y = (1 - (e.clientY - r.top) / r.height) * canvas.height;
    }
  });

  function render(t) {
    syncSize();
    gl.viewport(0, 0, canvas.width, canvas.height);
    if (uTime)  gl.uniform1f(uTime, t * 0.001);
    if (uRes)   gl.uniform2f(uRes, canvas.width, canvas.height);
    if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

/* Counter animation for stats */
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const start = performance.now();
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const val = target < 10 ? (eased * target).toFixed(1) : Math.floor(eased * target);
        el.textContent = val + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => obs.observe(el));
}

/* Countdown timer */
function initCountdown(targetDateStr, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const target = new Date(targetDateStr).getTime();
  function update() {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) { container.textContent = 'Applications Closed'; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const items = container.querySelectorAll('[data-unit]');
    items.forEach(item => {
      const unit = item.dataset.unit;
      const span = item.querySelector('span');
      if (span) {
        if (unit === 'd') span.textContent = String(d).padStart(2, '0');
        if (unit === 'h') span.textContent = String(h).padStart(2, '0');
        if (unit === 'm') span.textContent = String(m).padStart(2, '0');
        if (unit === 's') span.textContent = String(s).padStart(2, '0');
      }
    });
  }
  update();
  setInterval(update, 1000);
}

/* Accordion (for FAQ page) */
function initAccordion() {
  document.querySelectorAll('[data-accordion-trigger]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const icon = trigger.querySelector('[data-accordion-icon]');
      const isOpen = content.style.maxHeight;
      // Close all
      document.querySelectorAll('[data-accordion-trigger]').forEach(t => {
        const c = t.nextElementSibling;
        const ic = t.querySelector('[data-accordion-icon]');
        c.style.maxHeight = '';
        c.style.paddingBottom = '';
        if (ic) ic.style.transform = '';
      });
      // Open clicked
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.paddingBottom = '20px';
        if (icon) icon.style.transform = 'rotate(45deg)';
      }
    });
  });
}

/* Table filter for notice board / tenders */
function initNoticeFilter() {
  const filterBtns = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('[data-category]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active-filter'));
      btn.classList.add('active-filter');
      items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* Faculty / course search */
function initSearch() {
  const input = document.querySelector('[data-search-input]');
  const items = document.querySelectorAll('[data-search-item]');
  if (!input || !items.length) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = (!q || text.includes(q)) ? '' : 'none';
    });
  });
}

/* Auto-init on DOM ready */
document.addEventListener('DOMContentLoaded', () => {
  animateCounters();
  initAccordion();
  initNoticeFilter();
  initSearch();
  // Hero shader if canvas exists
  const heroCanvas = document.getElementById('hero-canvas');
  if (heroCanvas) initHeroShader('hero-canvas');
});

/* Expose for manual use */
window.MC = window.MC || {};
window.MC.initHeroShader   = initHeroShader;
window.MC.initCountdown    = initCountdown;
window.MC.animateCounters  = animateCounters;
