export default function PhotoShowcase() {
  return (
    <section id="showcase" className="showcase-section">
      <div className="wrap">

        <div className="showcase-header">

          <div>
            <div className="about-eyebrow">
            —  PHOTO SHOWCASE
            </div>

            <h2 className="showcase-title">
              THE PERSON
              <br />
              BEHIND THE RESULTS
            </h2>

          </div>

        </div>

        <div className="showcase-grid">

          {/* LEFT IMAGE */}

          <div className="showcase-photo">
            <img
              src="/images/laptop2.png"
              alt="John Paul Pancho"
            />
          </div>

          {/* CENTER QUOTE */}

          <div className="showcase-quote-card">

            <blockquote>
          I treat every client's business like it's my own.
              <br /><br />
              Your growth is my reputation.
            </blockquote>

            <div className="quote-author">
              — JOHN PAUL PANCHO
            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="showcase-photo">
            <img
              src="/images/laptop3.png"
              alt="John Paul Pancho"
            />
          </div>

        </div>

      </div>
    </section>
  );
}