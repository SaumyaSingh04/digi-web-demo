import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './PremiumAnimations.css'

/* ─── 1. Animated gradient blobs ─── */
function GradientBlobs() {
  return (
    <>
      <div className="pa-blob pa-blob--a" aria-hidden />
      <div className="pa-blob pa-blob--b" aria-hidden />
      <div className="pa-blob pa-blob--c" aria-hidden />
    </>
  )
}

/* ─── 2. Global cursor follower ─── */
function MouseFollower() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 120, damping: 22, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 120, damping: 22, mass: 0.6 })

  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  return (
    <motion.div
      aria-hidden
      style={{
        position: 'fixed', top: 0, left: 0,
        width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
        x: sx, y: sy, translateX: '-50%', translateY: '-50%',
        willChange: 'transform',
      }}
    />
  )
}

/* ─── 3. All DOM-based effects ─── */
function DOMEffects() {
  const rafRef = useRef(null)

  useEffect(() => {
    function parseNum(str) {
      const m = str.match(/[\d.]+/)
      return m ? parseFloat(m[0]) : null
    }

    // ── 3a. Counter animation ──────────────────────────────
    const counterMap = new WeakMap()
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || counterMap.get(entry.target)) return
        counterMap.set(entry.target, true)
        const el = entry.target
        const original = el.textContent.trim()
        const num = parseNum(original)
        if (num === null) return
        const prefix = original.match(/^[^0-9]*/)[0]
        const suffix = original.match(/[^0-9.]*$/)[0]
        const isFloat = original.includes('.')
        const duration = 1800
        const start = performance.now()
        function tick(now) {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          const current = isFloat ? (eased * num).toFixed(1) : Math.round(eased * num)
          el.textContent = prefix + current + suffix
          if (p < 1) rafRef.current = requestAnimationFrame(tick)
        }
        rafRef.current = requestAnimationFrame(tick)
        counterObs.unobserve(el)
      })
    }, { threshold: 0.6 })

    document.querySelectorAll('.stats__value, .about__stat-num').forEach((el) => {
      counterObs.observe(el)
    })

    // ── 3b. Magnetic buttons ──────────────────────────────
    function applyMagnetic(btn) {
      if (btn.dataset.magnetic) return
      btn.dataset.magnetic = '1'
      const onMove = (e) => {
        const r = btn.getBoundingClientRect()
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.28
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.28
        btn.style.transform = `translate(${dx}px, ${dy}px)`
        btn.style.transition = 'transform 0.15s ease'
      }
      const onLeave = () => {
        btn.style.transform = 'translate(0,0)'
        btn.style.transition = 'transform 0.4s cubic-bezier(0.22,1,0.36,1)'
      }
      btn.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)
    }

    function refreshMagnetic() {
      document.querySelectorAll(
        '.hero__btn-primary, .hero__btn-outline, .btn-primary, .svc-cta, .cta__submit, .btn-outline'
      ).forEach(applyMagnetic)
    }
    refreshMagnetic()

    // ── 3c. Section entrance reveal ──────────────────────
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('pa-revealed')
        revealObs.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '-40px' })

    function classifySection(el) {
      const rect = el.getBoundingClientRect()
      const mid = window.innerWidth / 2
      const center = rect.left + rect.width / 2
      const off = Math.abs(center - mid) / (window.innerWidth / 2)
      if (off < 0.25) return 'center'
      return center < mid ? 'left' : 'right'
    }

    const sectionSelectors = ['.gm__left', '.gm__right', '.about__content', '.about__visual']
    sectionSelectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        if (el.dataset.paReveal) return
        el.dataset.paReveal = '1'
        const dir = classifySection(el)
        const tx = dir === 'left' ? '-32px' : dir === 'right' ? '32px' : '0'
        const scale = dir === 'center' ? '0.96' : '1'
        el.style.cssText += `
          opacity: 0;
          transform: translateX(${tx}) scale(${scale});
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
          will-change: transform, opacity;
        `
        el.classList.add(`pa-reveal-${dir}`)
        revealObs.observe(el)
      })
    })

    if (!document.getElementById('pa-reveal-style')) {
      const s = document.createElement('style')
      s.id = 'pa-reveal-style'
      s.textContent = `.pa-revealed { opacity: 1 !important; transform: translateX(0) scale(1) !important; }`
      document.head.appendChild(s)
    }

    // ── 3d. Premium card hover (lift + glow) ─────────────
    function applyCardHover(el) {
      if (el.dataset.paHover) return
      el.dataset.paHover = '1'
      el.style.transition = [
        el.style.transition,
        'transform 0.35s cubic-bezier(0.22,1,0.36,1)',
        'box-shadow 0.35s ease',
      ].filter(Boolean).join(', ')

      const onEnter = () => {
        el.style.transform = (el.style.transform || '') + ' translateY(-5px) scale(1.02)'
        el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.13), 0 4px 16px rgba(0,0,0,0.06)'
        el.style.zIndex = '2'
      }
      const onLeave = () => {
        el.style.transform = (el.style.transform || '').replace(/ translateY\(-5px\) scale\(1\.02\)/g, '')
        el.style.boxShadow = ''
        el.style.zIndex = ''
      }
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    }

    function refreshCards() {
      document.querySelectorAll(
        '.gm__card, .impact__pillar, .gr-card, .faq__item, .pricing__card'
      ).forEach(applyCardHover)
    }
    refreshCards()

    // ── 3e. Mouse-follow tilt on hero & CTA ──────────────
    function applyMouseTilt(el) {
      if (el.dataset.paTilt) return
      el.dataset.paTilt = '1'
      const onMove = (e) => {
        const r = el.getBoundingClientRect()
        const nx = (e.clientX - r.left) / r.width - 0.5
        const ny = (e.clientY - r.top) / r.height - 0.5
        el.style.transform = `rotateX(${-ny * 3}deg) rotateY(${nx * 3}deg)`
        el.style.transition = 'transform 0.15s ease'
      }
      const onLeave = () => {
        el.style.transform = ''
        el.style.transition = 'transform 0.6s cubic-bezier(0.22,1,0.36,1)'
      }
      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
    }
    document.querySelectorAll('.impact__orbit-wrap, .cta__form-card').forEach(applyMouseTilt)

    // ── 3f. Scroll parallax ───────────────────────────────
    function onScroll() {
      document.querySelectorAll('.about__card').forEach((el) => {
        const rect = el.getBoundingClientRect()
        const progress = 1 - rect.top / window.innerHeight
        el.style.transform = `translateY(${progress * -12}px)`
        el.style.willChange = 'transform'
      })
      document.querySelectorAll('.impact__circle').forEach((el) => {
        const rect = el.getBoundingClientRect()
        const progress = 1 - rect.top / window.innerHeight
        el.style.transform = `translateY(${progress * -20}px)`
        el.style.willChange = 'transform'
      })
      // Portfolio image parallax
      document.querySelectorAll('.svc-img-wrap').forEach((el) => {
        const rect = el.getBoundingClientRect()
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        const clamped = Math.max(0, Math.min(1, progress))
        const shift = (clamped - 0.5) * 20
        const inner = el.querySelector('svg, img')
        if (inner) {
          inner.style.transform = `translateY(${shift}px) scale(1.04)`
          inner.style.willChange = 'transform'
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // ── 3g. Smooth scroll ────────────────────────────────
    if (!document.documentElement.style.scrollBehavior) {
      document.documentElement.style.scrollBehavior = 'smooth'
    }

    // ── 3h. Service cards stacked overlap effect ─────────
    function applyStackedCards() {
      const panel = document.querySelector('.svc-panel__right')
      if (!panel || panel.dataset.paStacked) return
      panel.dataset.paStacked = '1'
      panel.style.cssText += `
        position: sticky;
        top: 100px;
        transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
      `
    }
    applyStackedCards()

    // ── 3i. Text line-by-line reveal for headings ────────
    function applyTextReveal(el) {
      if (el.dataset.paText) return
      el.dataset.paText = '1'
      el.style.overflow = 'hidden'
      el.style.clipPath = 'inset(0 0 0 0)'

      const textRevealObs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('pa-text-revealed')
          textRevealObs.unobserve(entry.target)
        })
      }, { threshold: 0.3 })

      el.classList.add('pa-text-reveal')
      textRevealObs.observe(el)
    }

    // Only apply to headings that don't already have framer-motion
    document.querySelectorAll('.tm__title, .gm__headline, .section-title').forEach((el) => {
      if (!el.closest('[data-framer-appear-id]')) applyTextReveal(el)
    })

    // ── 3j. Process connecting lines scroll reveal ───────
    // Already handled by Process.jsx (framer-motion path animation)
    // Add progressive step highlight on scroll
    function onScrollProcess() {
      const cards = document.querySelectorAll('.tm-card')
      if (!cards.length) return
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect()
        const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0
        if (inView && !card.dataset.paVisible) {
          card.dataset.paVisible = '1'
          card.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`
          card.style.opacity = '1'
          card.style.transform = 'translateY(0) scale(1)'
        }
      })
    }
    window.addEventListener('scroll', onScrollProcess, { passive: true })

    // ── 3k. Portfolio image zoom on scroll ───────────────
    const portfolioObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('pa-portfolio-visible')
        portfolioObs.unobserve(entry.target)
      })
    }, { threshold: 0.15 })

    document.querySelectorAll('.svc-img-wrap').forEach((el) => {
      if (el.dataset.paPortfolio) return
      el.dataset.paPortfolio = '1'
      el.classList.add('pa-portfolio-item')
      portfolioObs.observe(el)
    })

    // ── 3l. Periodic refresh for dynamically added elements ──
    const refreshId = setInterval(() => {
      refreshMagnetic()
      refreshCards()
    }, 2000)

    return () => {
      counterObs.disconnect()
      revealObs.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onScrollProcess)
      clearInterval(refreshId)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return null
}

/* ─── Main export ─── */
export default function PremiumAnimations() {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) return null

  return (
    <>
      <GradientBlobs />
      <MouseFollower />
      <DOMEffects />
    </>
  )
}
