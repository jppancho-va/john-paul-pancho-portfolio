import React from "react";
import { InlineWidget } from "react-calendly";

export default function BookCall() {
  return (
    <section id="book" className="book-section">

      {/* LEFT COLUMN */}
      <div className="book-left">

        <p className="book-subtitle">— LET'S TALK</p>

        <h2 className="book-title">
          BOOK YOUR FREE DISCOVERY CALL
        </h2>

        <p className="book-desc">
          We’ll map your biggest operational bottlenecks together and identify
          where I can immediately increase conversions, efficiency, and revenue.
        </p>

        <ul className="book-bullets">
          <li>✔ We'll identify your Biggest Revenue Leaks</li>
          <li>✔ Zero obligation. 100% Value-Driven Session</li>
          <li>✔ Clear action plan tailored to your business</li>
          <li>✔ Systems, Sales, and Automation Opportunities Uncovered</li>
        </ul>

        <div className="book-footer-icons">

          <a href="tel:+639812011240">📞 +63 981 201 1240</a>

          <a href="mailto:imyours10202022@gmail.com">
            ✉️ imyours10202022@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/john-paul-pancho-837a66286/"
            target="_blank"
            rel="noreferrer"
          >
            🔗 LinkedIn Profile
          </a>

        </div>

      </div>

      {/* RIGHT COLUMN (REAL CALENDLY) */}
      <div className="book-right">

        <InlineWidget
          url="https://calendly.com/imyours10202022/30min"
          styles={{
            width: "100%",
            height: "700px"
          }}
        />

      </div>

    </section>
  );
}