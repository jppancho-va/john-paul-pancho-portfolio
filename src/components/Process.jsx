const steps = [
  {
    number: "01",
    title: "DISCOVERY CALL",
    description:
      "We spend 30 minutes understanding your business, identifying operational bottlenecks, and defining your immediate priorities. No sales pitch—just practical strategy tailored to your goals.",
  },
  {
    number: "02",
    title: "ONBOARDING & SETUP",
    description:
      "I integrate into your existing systems, learn your communication style, brand voice, and workflows so I'm fully operational within 48 hours.",
  },
  {
    number: "03",
    title: "EXECUTION & RESULTS",
    description:
      "Once everything is in place, I take ownership of daily execution while providing proactive communication, weekly reporting, KPI tracking, and continuous process improvements.",
  },
];

export default function Process() {
  return (
    <section id="process" className="process-section reveal">
      <div className="wrap">

        {/* Header */}
        <div className="process-header">

          <div className="process-heading">

            <div className="about-eyebrow">
             — HOW IT WORKS
            </div>

            <h2 className="process-title">
              FROM HELLO TO
              <br />
              HANDLING IT
            </h2>

          </div>

          <p className="process-intro">
            Every engagement follows a proven process designed to move from our
            first conversation to measurable business results quickly,
            efficiently, and transparently.
          </p>

        </div>

        {/* Timeline */}
        <div className="process-grid">

          {steps.map((step) => (
            <article
              key={step.number}
              className="process-card reveal"
            >

              <div className="process-number">
                {step.number}
              </div>

              <h3 className="process-name">
                {step.title}
              </h3>

              <p className="process-description">
                {step.description}
              </p>

            </article>
          ))}

        </div>

        {/* CTA */}
        <div className="process-cta">

          <a
            href="#book"
            className="btn-y"
          >
            Book Your Discovery Call →
          </a>

        </div>

      </div>
    </section>
  );
}