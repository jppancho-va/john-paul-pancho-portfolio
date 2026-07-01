import { useEffect, useRef } from "react"

export default function StatsBar() {
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const counters = section.querySelectorAll(".cnt")

    const animate = () => {
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-to"), 10)
        let current = 0

        const step = Math.max(1, Math.floor(target / 80))

        const update = () => {
          current += step

          if (current >= target) {
            counter.textContent = target
          } else {
            counter.textContent = current
            requestAnimationFrame(update)
          }
        }

        update()
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animate()
          observer.disconnect()
        }
      },
      {
        threshold: 0.4
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section-divider" ref={sectionRef}>
      <div className="wrap">
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-number">
              <span className="cnt" data-to="12">0</span>+
            </div>
            <div className="stat-label">Years Experience</div>
          </div>

          <div className="stat-box">
            <div className="stat-number">
              $<span className="cnt" data-to="121">0</span>K+
            </div>
            <div className="stat-label">Revenue in 2 Weeks</div>
          </div>

          <div className="stat-box">
            <div className="stat-number">
              <span className="cnt" data-to="1000">0</span>+
            </div>
            <div className="stat-label">Monthly Interactions</div>
          </div>

          <div className="stat-box">
            <div className="stat-number">
              <span className="cnt" data-to="75">0</span>%
            </div>
            <div className="stat-label">Sales Conversion Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}