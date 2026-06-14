import { useState, useEffect, useRef } from 'react'

export function useCounter(target) {
  const [val, setVal] = useState('0')
  const ref = useRef(null)
  const started = useRef(false)
  const numeric = parseFloat(target)
  const suffix = target.replace(/[\d.]/g, '')
  const isFloat = target.includes('.')

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const steps = 55, dur = 1400
        let frame = 0
        const id = setInterval(() => {
          frame++
          const ease = 1 - Math.pow(1 - frame / steps, 3)
          const cur = numeric * ease
          if (frame >= steps) { setVal(target); clearInterval(id) }
          else setVal((isFloat ? cur.toFixed(1) : Math.round(cur)) + suffix)
        }, dur / steps)
      }
    }, { threshold: 0.4 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [numeric, suffix, isFloat, target])

  return { val, ref }
}
