const Testimonials = () => {
    return (
        <section className="testimonials-section">
        <div className="section-container">
          <div className="testimonials-header">
            <h2 className="section-title">Trusted by Teams Worldwide</h2>
            <p className="section-subtitle">
              See what teams are saying about TaskFlow
            </p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "TaskFlow transformed our chaotic project management into a well-oiled machine. We've never been more organized and productive."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">S</div>
                  <div className="author-info">
                    <div className="author-name">Sarah Chen</div>
                    <div className="author-role">Product Manager, TechFlow</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-rating">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "The real-time collaboration features are incredible. Our remote team feels more connected than ever before."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">M</div>
                  <div className="author-info">
                    <div className="author-name">Mark Rodriguez</div>
                    <div className="author-role">Engineering Lead, DevCorp</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-rating">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "We cut our project delivery time by 30% after switching to TaskFlow. The insights dashboard is a game-changer."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">E</div>
                  <div className="author-info">
                    <div className="author-name">Emily Watson</div>
                    <div className="author-role">Creative Director, DesignHub</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-rating">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>

          <div className="social-proof">
            <div className="proof-item">
              <span className="proof-number">10,000+</span>
              <span className="proof-text">Teams using TaskFlow</span>
            </div>
            <div className="proof-item">
              <span className="proof-number">50+</span>
              <span className="proof-text">Countries worldwide</span>
            </div>
            <div className="proof-item">
              <span className="proof-number">4.9/5</span>
              <span className="proof-text">Average rating</span>
            </div>
          </div>

          <div className="trusted-by">
            <p className="trusted-text">Trusted by teams in:</p>
            <div className="industry-tags">
              <span className="industry-tag">Technology</span>
              <span className="industry-tag">Marketing</span>
              <span className="industry-tag">Consulting</span>
              <span className="industry-tag">Design</span>
              <span className="industry-tag">Startups</span>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Testimonials;