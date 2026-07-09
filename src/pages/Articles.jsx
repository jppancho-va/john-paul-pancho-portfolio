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
  ];

  return (
    <main className="articles-newspaper article-page">

      <header className="articles-masthead">

        <p className="edition-label">
          HEALTHCARE OPERATIONS • DIGITAL EDITION • 2026
        </p>

        <h1>
          THE MEDICAL VA CHRONICLE
        </h1>

        <div className="masthead-line"></div>

        <p className="masthead-subtitle">
          Real-world insights, workflows, and experiences from a
          Medical Virtual Assistant supporting modern healthcare practices.
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