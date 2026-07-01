import React from "react";

const experiences = [
  {
    role: "VIRTUAL HIGH-TICKET SALES CLOSER & BOOKING SPECIALIST",
    company: "HOTELPLANNER",
    date: "Sep 2023 – Oct 2025 · Remote, Miami FL, USA",

    metrics: [
      {
        value: "$121K",
        label: "PREPAID REVENUE\n(2 WEEKS)",
      },
      {
        value: "75%",
        label: "INBOUND\nCONVERSION",
      },
      {
        value: "30%",
        label: "REPEAT BOOKING\nGROWTH",
      },
    ],

    description:
      "Closed over 500 monthly hotel bookings while consistently exceeding revenue targets. Improved CRM workflow efficiency, customer retention, and billing accuracy through strategic follow-ups and consultative sales.",
  },

  {
    role: "MEDICAL VIRTUAL ASSISTANT & HEALTHCARE SUPPORT SPECIALIST",
    company: "UNITEDHEALTHCARE · OPTUM",
    date: "Oct 2016 – Feb 2020 · Quezon City, Philippines",

    metrics: [
      {
        value: "1,000+",
        label: "MONTHLY MEMBER\nINTERACTIONS",
      },
      {
        value: "18%",
        label: "RETENTION\nINCREASE",
      },
      {
        value: "100%",
        label: "HIPAA\nCOMPLIANCE",
      },
    ],

    description:
      "Delivered healthcare support across phone, email, and chat while coordinating benefits, claims, provider inquiries, and patient services under strict HIPAA compliance standards.",
  },

  {
    role: "FOUNDER · OPERATIONS & SOCIAL MEDIA MANAGER",
    company: "HAKUNA MATATA GOWNS",
    date: "Dec 2016 – Present · Philippines",

    metrics: [
      {
        value: "200+",
        label: "MONTHLY\nORDERS",
      },
      {
        value: "30%",
        label: "QUARTERLY\nGROWTH",
      },
      {
        value: "LIVE",
        label: "FACEBOOK &\nTIKTOK SELLING",
      },
    ],

    description:
      "Built and scaled a profitable eCommerce business from the ground up by managing CRM, logistics, digital marketing, livestream selling, customer experience, and end-to-end operations.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="wrap">

        <div className="experience-header">

          <div>
            <div className="about-eyebrow">
             — CAREER HIGHLIGHTS
            </div>

            <h2 className="experience-title">
              12+ YEARS OF
              <br />
              MEASURABLE IMPACT
            </h2>
          </div>

          <p className="experience-intro">
            Over a decade of experience driving measurable growth across
            healthcare, sales, customer success, and entrepreneurship.
          </p>

        </div>

        <div className="experience-grid">

          {experiences.map((job, index) => (
            <article
              className="experience-card reveal"
              key={index}
            >
              <div className="experience-card-header">

                <h4>{job.role}</h4>

                <h3>{job.company}</h3>

                <span>{job.date}</span>

              </div>

              <div className="experience-metrics">

                {job.metrics.map((metric, i) => (
                  <div
                    className="metric"
                    key={i}
                  >
                    <div className="metric-value">
                      {metric.value}
                    </div>

                    <div className="metric-label">
                      {metric.label
                        .split("\n")
                        .map((line, idx) => (
                          <React.Fragment key={idx}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                    </div>
                  </div>
                ))}

              </div>

              <p className="experience-description">
                {job.description}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}