import { useEffect, useState } from "react";

const images = [
  "/images/weekly_performance1.jpg",
  "/images/weekly_performance2.jpg",
  "/images/weekly_performance3.jpg",
  "/images/weekly_performance4.jpg",
  "/images/global_ranking.jpg",
  "/images/actual_earnings1.jpg",
  "/images/actual_earnings2.jpg",
  "/images/daily_calls1.jpg",
  "/images/daily_calls2.jpg",
  "/images/client_feedback.jpg",
  "/images/customer_survey1.jpg",
  "/images/customer_survey2.jpg",
  "/images/customer_survey3.jpg",
];

export default function ProvenImpact() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      (prev + 1) % images.length
    );
  };

  return (
    <section className="proven-impact">
      <div className="wrap">

        <div className="section-header">
          <h2 className="section-title">
            PROVEN IMPACT
          </h2>
        </div>

        <div className="impact-frame">
          <img
            src={images[current]}
            alt={`Impact ${current + 1}`}
            className="impact-image"
          />
        </div>

        <div className="impact-controls">

          <button
            className="impact-btn"
            onClick={prevSlide}
            aria-label="Previous image"
          >
            ❮
          </button>

          <span className="impact-counter">
            {current + 1} / {images.length}
          </span>

          <button
            className="impact-btn"
            onClick={nextSlide}
            aria-label="Next image"
          >
            ❯
          </button>

        </div>

      </div>
    </section>
  );
}