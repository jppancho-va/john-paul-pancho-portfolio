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
          Real-world insights, Automated Workflows, and Structural Blueprints from a 
          Specialized Virtual Assistant supporting High-Growth Brands, E-commerce Storefronts, and Modern Healthcare Practices.
        </p>

      </header>

      <section className="newspaper-grid">

        {articles.map((article) => (

          <article
            key={article.number}
            className="newspaper-card"
          >

            <div className="article-header">
              <div className="article-number">
                {article.number}
              </div>
              <button 
                className="share-btn" 
                onClick={() => {
                  const shareUrl = `${window.location.origin}${article.link}`;
                  if (navigator.share) {
                    navigator.share({
                      title: article.title,
                      text: `Check out this article: ${article.title}`,
                      url: shareUrl
                    }).catch((err) => console.log("Share canceled or failed", err));
                  } else {
                    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
                    window.open(facebookShareUrl, '_blank', 'width=600,height=400,noopener,noreferrer');
                  }
                }}
                aria-label="Share article"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  <polyline points="16 6 12 2 8 6"></polyline>
                  <line x1="12" y1="2" x2="12" y2="15"></line>
                </svg>
              </button>
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