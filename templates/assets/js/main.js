/**
 * Aurora 4.0 — main
 */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // === Hero 背景视频自动播放 ===
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const resumeHeroVideo = () => {
          heroVideo.play();
          document.removeEventListener('click', resumeHeroVideo);
          document.removeEventListener('touchstart', resumeHeroVideo);
          document.removeEventListener('scroll', resumeHeroVideo);
        };
        document.addEventListener('click', resumeHeroVideo, { once: true });
        document.addEventListener('touchstart', resumeHeroVideo, { once: true });
        document.addEventListener('scroll', resumeHeroVideo, { once: true });
      });
    }
  }

  // === Hero 双图擦除交互 ===
  initHeroReveal();

  // Theme
  var tb = document.getElementById('themeBtn');
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
  }
  // Listen for system color scheme changes when in system mode
  var mql = window.matchMedia('(prefers-color-scheme: dark)');
  mql.addEventListener('change', function (e) {
    if (!localStorage.getItem('aurora-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
  if (tb) {
    tb.onclick = function () {
      var h = document.documentElement;
      var cur = h.getAttribute('data-theme');
      var n = cur === 'dark' ? 'light' : 'dark';
      h.setAttribute('data-theme', n);
      localStorage.setItem('aurora-theme', n);
    };
  }

  // === 导航子菜单：统一 open 状态 + 智能延迟（方案 B） ===
  const SUBMENU_DELAY = 200;       // 鼠标移出后延迟（毫秒）
  const DESKTOP_BP = 640;          // 桌面端断点
  let closeTimer = null;

  function _closeAll() {
    document.querySelectorAll('.nv-menu-item.open').forEach(function (item) {
      item.classList.remove('open');
      item.dataset.userToggle = 'false';
    });
  }

  // 桌面端：hover 立即打开，移出后延迟关闭，悬停切换时取消旧延迟
  document.querySelectorAll('.nv-menu-item.has-sub').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      if (window.innerWidth <= DESKTOP_BP) return;
      if (this.dataset.userToggle === 'true') return;
      clearTimeout(closeTimer);
      closeTimer = null;
      // 关闭其他已打开的菜单（排除自身和用户锁定项）
      document.querySelectorAll('.nv-menu-item.open').forEach(function (s) {
        if (s !== item && s.dataset.userToggle !== 'true') {
          s.classList.remove('open');
        }
      });
      this.classList.add('open');
    });

    item.addEventListener('mouseleave', function () {
      if (window.innerWidth <= DESKTOP_BP) return;
      if (this.dataset.userToggle === 'true') return;
      const self = this;
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () {
        self.classList.remove('open');
      }, SUBMENU_DELAY);
    });
  });

  // 点击箭头切换子菜单（桌面 / 移动端均可用）
  document.querySelectorAll('.nv-menu-arrow').forEach(function (arrow) {
    arrow.addEventListener('click', function (e) {
      e.stopPropagation();
      const parent = this.closest('.nv-menu-item');
      if (!parent) return;
      const nowOpen = parent.classList.contains('open');
      // 关闭同级其他菜单
      document.querySelectorAll('.nv-menu-item.open').forEach(function (s) {
        if (s !== parent) {
          s.classList.remove('open');
          s.dataset.userToggle = 'false';
        }
      });
      if (nowOpen) {
        parent.classList.remove('open');
        parent.dataset.userToggle = 'false';
      } else {
        parent.classList.add('open');
        parent.dataset.userToggle = 'true';
      }
    });
  });

  // 点击外部区域关闭所有
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nv-menu-item')) {
      _closeAll();
    }
  });

  // 键盘导航
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      _closeAll();
      return;
    }
    const active = document.activeElement;
    // ArrowDown: 打开并聚焦第一个可聚焦项
    if (e.key === 'ArrowDown') {
      const openItem = document.querySelector('.nv-menu-item.open');
      if (openItem) {
        e.preventDefault();
        const first = openItem.querySelector('.nv-submenu a, .nv-submenu button');
        if (first) first.focus();
      }
    }
    // 子菜单内焦点循环
    if (active && (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Escape')) {
      const submenu = active.closest('.nv-submenu');
      if (!submenu) return;
      const parent = submenu.closest('.nv-menu-item');
      if (!parent) return;
      const focusable = Array.from(submenu.querySelectorAll('a, button'));
      const idx = focusable.indexOf(active);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = focusable[idx + 1];
        if (next) next.focus();
        else focusable[0]?.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = focusable[idx - 1];
        if (prev) prev.focus();
        else parent.querySelector('> a, > button')?.focus();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        parent.classList.remove('open');
        parent.dataset.userToggle = 'false';
        const trigger = parent.querySelector('> a, > button');
        if (trigger) trigger.focus();
      }
    }
  });

  // 移动端：上滑关闭子菜单
  document.querySelectorAll('.nv-submenu').forEach(function (sub) {
    let touchStartY = 0;
    sub.addEventListener('touchstart', function (e) {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    sub.addEventListener('touchmove', function (e) {
      const dy = touchStartY - e.touches[0].clientY;
      if (dy > 50) {
        const parent = this.closest('.nv-menu-item');
        if (parent) {
          parent.classList.remove('open');
          parent.dataset.userToggle = 'false';
        }
      }
    }, { passive: true });
  });

  // Mobile nav
  const nt = document.getElementById('nvToggle');
  const nm = document.getElementById('nvMenu');
  if (nt && nm) nt.onclick = () => nm.classList.toggle('open');

  // Re-apply language highlights & refresh on lang change
  document.addEventListener('langchange', (e) => {
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  });

  // === 自动生成文章目录 ===
  const tocNav = document.getElementById('tocNav');
  const tp = document.querySelector('.tp');
  if (tocNav && tp) {
    const headings = tp.querySelectorAll('h1,h2,h3');
    if (headings.length > 0) {
      headings.forEach((h, i) => {
        const id = 'h-' + i;
        h.id = id;
        const a = document.createElement('a');
        a.href = '#' + id;
        a.textContent = h.textContent;
        a.className = h.tagName === 'H3' ? 'toc-h3' : '';
        tocNav.appendChild(a);
      });

      // 滚动高亮
      const tocLinks = tocNav.querySelectorAll('a');
      window.addEventListener('scroll', () => {
        let current = '';
        headings.forEach(h => {
          if (h.getBoundingClientRect().top <= 100) current = h.id;
        });
        tocLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + current);
        });
      }, { passive: true });
    } else {
      document.getElementById('postToc').style.display = 'none';
    }
  }

  // Lightbox
  if (tp) {
    tp.querySelectorAll('img').forEach(img => {
      if (img.closest('a')) return;
      img.style.cursor = 'zoom-in';
      img.onclick = () => {
        const o = document.createElement('div');
        o.className = 'lightbox';
        const c = img.cloneNode();
        o.appendChild(c);
        o.onclick = () => o.remove();
        document.body.appendChild(o);
      };
    });
  }

  // === GSAP Animations ===
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  const hEls = document.querySelectorAll('.hero-badge, .hero-title, .hero-desc');
  if (hEls.length) {
    gsap.fromTo(hEls, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: .6, stagger: .12, ease: 'power2.out', delay: .1,
    });
  }

  // Entry list items (standard)
  const entries = document.querySelectorAll('.entry');
  if (entries.length && typeof ScrollTrigger !== 'undefined') {
    entries.forEach((e, i) => {
      gsap.fromTo(e, { opacity: 0, y: 16 }, {
        opacity: 1, y: 0, duration: .4, delay: i * .06, ease: 'power2.out',
        scrollTrigger: { trigger: e, start: 'top 87%', once: true },
      });
    });
  }

  // image-reveal 双图擦除模式：一有上划标题即变淡，30%页面位置完全消失
  const revealSticky = document.querySelector('.hero-reveal-sticky');
  if (revealSticky && typeof ScrollTrigger !== 'undefined') {
    const hl = revealSticky.querySelector('.hero-hl');
    if (hl) {
      gsap.to(hl, {
        autoAlpha: 0,
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: '+=30%',
          scrub: true,
        },
      });
    }
  }

  // video-reveal 模式：一有上划标题即变淡，30%页面位置完全消失
  const vrWrap = document.querySelector('.hero-vr-wrap');
  if (vrWrap && typeof ScrollTrigger !== 'undefined') {
    const videoSection = vrWrap.querySelector('.hero-vr-video');
    const title = vrWrap.querySelector('.hero-hl');
    const entries = vrWrap.querySelector('.entries');
    if (videoSection && entries) {
      // 标题：一滚动就变淡，30%位置完全消失（上滑恢复）
      if (title) {
        gsap.to(title, {
          opacity: 0,
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: '+=30%',
            scrub: true,
          },
        });
      }
      // 视频淡出 + 彻底隐藏（下滑到文章区后完全消失，上滑回来再显示）
      gsap.fromTo(videoSection, { autoAlpha: 1, scale: 1 }, {
        autoAlpha: 0, scale: .95,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: entries,
          start: 'top bottom',
          end: 'top 30%',
          scrub: 1,
        },
      });
    }
  }

  // Article header
  const ah = document.querySelectorAll('.post-back, .post-title, .post-meta');
  if (ah.length) {
    gsap.fromTo(ah, { opacity: 0, y: 12 }, {
      opacity: 1, y: 0, duration: .4, stagger: .08, ease: 'power2.out',
    });
  }

  // Tag chips
  gsap.utils.toArray('.tag-it').forEach((t, i) => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: t, start: 'top 92%', once: true,
        onEnter: () => gsap.to(t, { opacity: 1, y: 0, scale: 1, duration: .3, delay: i * .025, ease: 'back.out(1.4)' }),
      });
    }
  });

  // Category items
  gsap.utils.toArray('.cat-it').forEach((c, i) => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: c, start: 'top 88%', once: true,
        onEnter: () => gsap.to(c, { opacity: 1, y: 0, duration: .35, delay: i * .05, ease: 'power2.out' }),
      });
    }
  });

  // Archive years
  gsap.utils.toArray('.arch-yr').forEach((y, i) => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: y, start: 'top 88%', once: true,
        onEnter: () => gsap.to(y, { opacity: 1, y: 0, duration: .4, delay: i * .08, ease: 'power2.out' }),
      });
    }
  });

  // 404
  const eds = document.querySelectorAll('.e404-code span');
  if (eds.length) gsap.fromTo(eds, { scale: .5, opacity: 0 }, {
    scale: 1, opacity: 1, duration: .7, stagger: .12, ease: 'back.out(1.7)',
  });
  const ebg = document.querySelectorAll('.e404-bg-digit');
  if (ebg.length) gsap.fromTo(ebg, { y: 30, opacity: 0 }, {
    y: 0, opacity: .5, duration: .8, stagger: .15, ease: 'power2.out', delay: .2,
  });
  // Links cards (feed-card-wrapper)
  gsap.utils.toArray('.feed-card-wrapper').forEach((c, i) => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: c, start: 'top 88%', once: true,
        onEnter: () => gsap.to(c, { opacity: 1, y: 0, duration: .35, delay: i * .03, ease: 'power2.out' }),
      });
    }
  });

  // Links header
  const lhEls = document.querySelectorAll('.links-back, .links-title, .links-desc');
  if (lhEls.length) {
    gsap.fromTo(lhEls, { opacity: 0, y: 12 }, {
      opacity: 1, y: 0, duration: .4, stagger: .08, ease: 'power2.out',
    });
  }

  // .e404-bg-digit.zero special
  const egz = document.querySelector('.e404-bg-digit.zero');
  if (egz) gsap.to(egz, { opacity: .3, duration: .8, delay: .4 });

  if (typeof ScrollTrigger !== 'undefined') window.addEventListener('load', () => ScrollTrigger.refresh());

  // === 3D Tag Cloud ===
  initTagCloud();
});

/* ===== 3D Tag Cloud ===== */
function initTagCloud() {
  const container = document.getElementById('tagCloud');
  if (!container) return;
  const items = container.querySelectorAll('.tagcloud-item');
  if (items.length < 2) return;

  // Configuration
  const radius = Math.min(container.offsetWidth * 0.45, 200);
  const speed = 0.003;
  let angleX = -0.2;
  let angleY = 0;
  let isDragging = false;
  let prevX = 0;
  let prevY = 0;
  let autoRotate = true;
  let rafId = null;

  // Assign random positions on a sphere
  const positions = [];
  const count = items.length;
  for (let i = 0; i < count; i++) {
    const theta = Math.acos(2 * i / count - 1); // polar angle
    const phi = Math.PI * (1 + Math.sqrt(5)) * i; // golden angle
    positions.push({ theta, phi });
  }

  function update() {
    const sinX = Math.sin(angleX);
    const cosX = Math.cos(angleX);
    const sinY = Math.sin(angleY);
    const cosY = Math.cos(angleY);

    items.forEach((item, i) => {
      const p = positions[i];
      const x = radius * Math.sin(p.theta) * Math.cos(p.phi);
      const y = radius * Math.cos(p.theta);
      const z = radius * Math.sin(p.theta) * Math.sin(p.phi);

      // Rotate around Y axis
      const rx = x * cosY - z * sinY;
      const rz = x * sinY + z * cosY;

      // Rotate around X axis
      const ry = y * cosX - rz * sinX;
      const rz2 = y * sinX + rz * cosX;

      // Perspective projection
      const scale = 600 / (600 + rz2);
      const px = rx * scale;
      const py = ry * scale;

      const opacity = 0.3 + 0.7 * ((rz2 + radius) / (2 * radius));
      const zIndex = Math.round(rz2 + radius);

      item.style.transform = 'translate(-50%,-50%) translate(' + px + 'px,' + py + 'px) scale(' + scale + ')';
      item.style.opacity = opacity;
      item.style.zIndex = zIndex;
      item.style.filter = 'blur(' + (scale < 0.6 ? 2 : 0) + 'px)';
    });
  }

  function animate() {
    if (autoRotate) {
      angleY += speed;
      angleX += speed * 0.2;
    }
    update();
    rafId = requestAnimationFrame(animate);
  }

  // Mouse/Touch interactions
  function onStart(e) {
    isDragging = true;
    autoRotate = false;
    const point = e.touches ? e.touches[0] : e;
    prevX = point.clientX;
    prevY = point.clientY;
    container.style.cursor = 'grabbing';
  }

  function onMove(e) {
    if (!isDragging) return;
    const point = e.touches ? e.touches[0] : e;
    const dx = point.clientX - prevX;
    const dy = point.clientY - prevY;
    angleY += dx * 0.005;
    angleX += dy * 0.005;
    // Clamp X rotation
    angleX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, angleX));
    prevX = point.clientX;
    prevY = point.clientY;
  }

  function onEnd() {
    if (!isDragging) return;
    isDragging = false;
    container.style.cursor = 'grab';
    // Resume auto-rotate after 3s of inactivity
    clearTimeout(container._rotateTimer);
    container._rotateTimer = setTimeout(function () {
      autoRotate = true;
    }, 3000);
  }

  // Mouse events
  container.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);

  // Touch events
  container.addEventListener('touchstart', onStart, { passive: true });
  window.addEventListener('touchmove', onMove, { passive: true });
  window.addEventListener('touchend', onEnd);

  // Wheel zoom
  container.addEventListener('wheel', function (e) {
    e.preventDefault();
    // Not adjusting radius dynamically in this simple version -
    // but could be extended. For now, just stop auto-rotate.
    autoRotate = false;
    clearTimeout(container._rotateTimer);
    container._rotateTimer = setTimeout(function () {
      autoRotate = true;
    }, 3000);
  }, { passive: false });

  // Start
  animate();

  // Handle resize
  window.addEventListener('resize', function () {
    // Recalculate if needed, just update positions
  });
}

/* ===== Hero 双图擦除交互（光照朦胧效果） ===== */
function initHeroReveal() {
  var topLayer = document.getElementById('heroRevealTop');
  if (!topLayer) return;

  // 兼容 .hero（image-reveal）和 .hero-reveal-section（video-reveal）
  var container = topLayer.closest('.hero') || topLayer.closest('.hero-reveal-section');
  if (!container) return;

  // 移动端减小擦除圆半径
  var isMobile = window.innerWidth <= 640;
  var revealSize = parseInt(container.getAttribute('data-reveal-size')) || (isMobile ? 60 : 100);
  // 使用 mask 替代 clip-path，柔边径向渐变实现朦胧光照效果
  topLayer.style.willChange = 'mask-image, -webkit-mask-image';

  function updateClip(x, y) {
    var rect = container.getBoundingClientRect();
    var relX = x - rect.left;
    var relY = y - rect.top;
    // 径向渐变：圆心完全透明（露出底图），向外柔边过渡到完全不透明（覆盖顶图）
    var softSize = revealSize * 1.5; // 外围柔边区域比核心擦除圆大 1.5 倍
    var gradient = 'radial-gradient(circle ' + softSize + 'px at ' + relX + 'px ' + relY + 'px, ' +
                   'transparent 0%, ' +
                   'transparent ' + (revealSize * 0.4) + 'px, ' +
                   'rgba(0,0,0,0.3) ' + (revealSize * 0.7) + 'px, ' +
                   'rgba(0,0,0,0.7) ' + (revealSize * 0.9) + 'px, ' +
                   'black ' + softSize + 'px)';
    topLayer.style.setProperty('-webkit-mask-image', gradient);
    topLayer.style.setProperty('mask-image', gradient);
  }

  function resetClip() {
    // 恢复全覆盖（不显示底图）
    var hiddenGradient = 'radial-gradient(circle 1px at 0px 0px, transparent 0px, black 1px)';
    topLayer.style.setProperty('-webkit-mask-image', hiddenGradient);
    topLayer.style.setProperty('mask-image', hiddenGradient);
  }

  // Mouse move
  container.addEventListener('mousemove', function (e) {
    updateClip(e.clientX, e.clientY);
  });

  // Touch move for mobile
  container.addEventListener('touchmove', function (e) {
    var touch = e.touches[0];
    if (touch) updateClip(touch.clientX, touch.clientY);
  }, { passive: true });

  // Reset on leave
  container.addEventListener('mouseleave', function () {
    resetClip();
  });

  container.addEventListener('touchend', function () {
    resetClip();
  });
}
