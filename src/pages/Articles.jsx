import { Link } from "react-router-dom";

export default function Articles() {
  const articles = [
    {
      number: "01",
      category: "Healthcare Operations",
      title: "What does a Medical Virtual Assistant do?",
      description:
        "A deep dive into the role of a Medical Virtual Assistant, including patient support, scheduling, documentation, insurance workflows, and modern healthcare operations.",
      link: "/articles/medical-virtual-assistant",
    },
    {
      number: "02",
      category: "Behind The Scenes",
      title: "My Daily Workflow as a Medical VA",
      description:
        "A look inside my daily systems, including patient communication, EHR workflows, scheduling management, insurance coordination, and clinic operations.",
      link: "/articles/my-daily-workflow",
    },
    {
      number: "03",
      category: "Revenue Cycle Management",
      title: "How Insurance Verification Really Works",
      description:
        "Understanding eligibility checks, benefits verification, copays, deductibles, prior authorizations, and how accurate verification supports healthcare practices.",
      link: "/articles/insurance-verification",
    },
    {
      number: "04",
      category: "Client Success & RevOps",
      title: "Scaling High-Ticket Sales: Why B2B Agencies are Outsourcing Revenue Operations to the Philippines",
      description:
        "An operational deep dive into how high-ticket B2B agencies are maximizing efficiency, eliminating lead leakage, and boosting customer lifetime value by centralizing their sales infrastructure.",
      link: "/articles/client-success-revenue-ops",
    },
    {
      number: "05",
      category: "E-Commerce Architecture",
      title: "From Checkout to Doorstep: Outsourcing Multi-Channel Shopify Operations and Order Fulfillment to the Philippines",
      description:
        "A strategic blueprint for managing multi-channel e-commerce stores, balancing inventory logistics across variable lines, and deploying high-retention marketing campaigns.",
      link: "/articles/ecommerce-operations",
    },
    {
      number: "06",
      category: "Customer Service Excellence",
      title: "Architecting the Perfect Helpdesk: How to Boost First Contact Resolution (FCR) with Omnichannel Support VAs",
      description:
        "How to design an omnichannel helpdesk infrastructure that handles high-volume ticketing, automates queue management, and builds tier-structured consumer resolution ecosystems.",
      link: "/articles/customer-service-operations",
    },
  ];

  return (
    <main className="articles-newspaper article-page">

      <header className="articles-masthead">

        <p className="edition-label">
          REMOTE OPERATIONS &amp; SYSTEM STRATEGY • DIGITAL EDITION • 2026
        </p>

        <h1>
          THE OPERATIONS CHRONICLE
        </h1>

        <div className="masthead-line"></div>

        <p className="masthead-subtitle">
          Real-world insights, automated workflows, and structural blueprints from a 
          Specialized Virtual Assistant supporting high-growth brands, e-commerce storefronts, and modern healthcare practices.
        </p>

      </header>

      <section className="newspaper-grid">

        {articles.map((article) => (

          <article
            key={article.number}
            className="newspaper-card"
          >

            <div className="article-number">
              {article.number}
            </div>

            <span className="article-category">
              {article.category}
            </span>

            <h2>
              {article.title}
            </h2>

            <p>
              {article.description}
            </p>

            <Link to={article.link}>
              Read Full Story →
            </Link>

          </article>

        ))}

      </section>

    </main>
  );
}