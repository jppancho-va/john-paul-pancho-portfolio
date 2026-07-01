// src/components/Services.jsx

const services = [
  {
    id: "01",
    title: "MEDICAL VIRTUAL ASSISTANT",
    description:
      "HIPAA-compliant admin support for healthcare practices: patient scheduling, insurance follow-ups, records management, and multi-channel member support.",
    bullets: [
      "Virtual Front Desk",
      "Patient Scheduling",
      "EHR Updates",
      "Insurance Verification",
      "Prior Authorizations",
      "Billing Support",
      "Inbound Patient Queues",
      "Care Coordination",
      "HIPAA Compliance",
    ],
  },
  {
    id: "02",
    title: "CLIENT SUCCESS & REVENUE OPS",
    description:
      "High-ticket sales closing, CRM optimization, pipeline reporting, and retention strategy that increases revenue and client retention.",
    bullets: [
      "End-to-End Sales Pipeline",
      "Lifecycle Management",
      "Automated CRM Workflows",
      "Revenue Tracking",
      "Retention Strategy",
      "Client Churn Mitigation",
    ],
  },
  {
    id: "03",
    title: "ECOMMERCE VA",
    description:
      "Complete eCommerce operations from live selling to fulfillment, logistics, CRM management, and customer engagement.",
    bullets: [
      "Multi-Channel Store",
      "Inventory Logistics",
      "Live Selling Strategy",
      "Video Commerce",
      "Order Fulfillment",
      "Customer Retention Campaigns",
    ],
  },
  {
    id: "04",
    title: "CUSTOMER SERVICE VA",
    description:
      "Omnichannel support through phone, email, and chat with systems focused on customer satisfaction and operational excellence.",
    bullets: [
      "High Volume Tier 1",
      "Tier 2 Support",
      "Queue Management",
      "Helpdesk Architecture",
      "CRM Tracking",
      "First Contact Resolution",
    ],
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">

      <div className="wrap">

        {/* Header */}

        <div className="services-header">

          <div className="services-left">

            <p className="about-eyebrow">
             — WHAT I DO
            </p>

            <h2 className="services-title">
              FOUR WAYS I GROW
              <br />
              YOUR BUSINESS
            </h2>

          </div>

          <div className="services-right">

            <p className="services-intro">
              Every service delivers measurable outcomes.
              No busywork—just execution that directly
              impacts your bottom line.
            </p>

          </div>

        </div>

        {/* Cards */}

        <div className="services-grid">

          {services.map((service) => (

            <div
              className="service-card"
              key={service.id}
            >

              <div className="service-card-inner">

                {/* FRONT */}

                <div className="service-front">

                  <span className="service-number">
                    {service.id}
                  </span>

                  <h3 className="service-name">
                    {service.title}
                  </h3>

                </div>

                {/* BACK */}

                <div className="service-back">

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <ul>

                    {service.bullets.map((item) => (

                      <li key={item}>
                         {item}
                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="services-cta">

          <a
            href="#book"
            className="btn-y"
          >
            Find Out Which Service Fits You →
          </a>

        </div>

      </div>

    </section>
  );
}