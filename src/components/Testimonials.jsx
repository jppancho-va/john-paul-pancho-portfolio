import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="client-feedback">

      {/* Section Header WRAPPER ADDED ONLY FOR ALIGNMENT */}
      <div className="feedback-header">

        <p className="feedback-subtitle">— CLIENT FEEDBACK</p>

        <h2 className="feedback-title">
          RESULTS CLIENTS CAN'T STOP TALKING ABOUT
        </h2>

      </div>

      <div className="feedback-grid">

        <div className="feedback-card">
          <div className="stars">★★★★★</div>
          <p className="testimonial">
            "JP closed more in 2 weeks than most closers do in a month. His conversion rate is unreal — 75% on inbound, consistent, every single month. He's not a VA, he's a revenue machine."
          </p>
          <p className="client">
            <strong>Michael R.</strong> <span>Director of Sales, HotelPlanner</span>
          </p>
        </div>

        <div className="feedback-card">
          <div className="stars">★★★★★</div>
          <p className="testimonial">
            "Having someone manage 1,000+ member interactions monthly while staying fully HIPAA compliant is rare. John Paul brought that, plus an 18% improvement in our retention numbers. Exceptional."
          </p>
          <p className="client">
            <strong>Dr. Amanda L.</strong> <span>Healthcare Operations, Optum</span>
          </p>
        </div>

        <div className="feedback-card">
          <div className="stars">★★★★★</div>
          <p className="testimonial">
            "He built our entire online gown business from scratch and scaled it to 200+ monthly orders. The Facebook Live strategy alone grew our quarterly revenue by 30%. Incredibly driven and creative."
          </p>
          <p className="client">
            <strong>Grace T.</strong> <span>E-Commerce Partner</span>
          </p>
        </div>

      </div>

      <div className="feedback-footer">
        <p>Ready to get results like these?</p>

        <a href="#book" className="feedback-btn">
          Book Your Free Discovery Call →
        </a>
      </div>

    </section>
  );
}