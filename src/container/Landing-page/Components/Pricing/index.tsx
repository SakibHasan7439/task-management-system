
const Pricing = () => {
    return (
        <section className="pricing-section">
        <div className="section-container">
          <div className="pricing-header">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">
              Choose the plan that fits your team's needs
            </p>
          </div>
          
          <div className="pricing-grid">
            {/* Free Plan */}
            <div className="pricing-card">
              <div className="plan-header">
                <h3 className="plan-name">Free</h3>
                <div className="plan-price">
                  <span className="price-amount">$0</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="plan-description">Perfect for small teams getting started</p>
              </div>
              
              <div className="plan-features">
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Up to 5 team members</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Unlimited personal tasks</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Basic collaboration tools</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Mobile app access</span>
                </div>
                <div className="feature-item disabled">
                  <span className="feature-cross">✗</span>
                  <span>Advanced analytics</span>
                </div>
                <div className="feature-item disabled">
                  <span className="feature-cross">✗</span>
                  <span>Custom integrations</span>
                </div>
              </div>
              
              <button className="plan-button secondary">
                Get Started Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="pricing-card featured">
              <div className="plan-badge">Most Popular</div>
              <div className="plan-header">
                <h3 className="plan-name">Pro</h3>
                <div className="plan-price">
                  <span className="price-amount">$12</span>
                  <span className="price-period">/user/month</span>
                </div>
                <p className="plan-description">For growing teams that need more power</p>
              </div>
              
              <div className="plan-features">
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Unlimited team members</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Advanced project templates</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Time tracking & reporting</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Calendar integrations</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Advanced analytics dashboard</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Priority support</span>
                </div>
              </div>
              
              <button className="plan-button primary">
                Start 14-Day Trial
              </button>
            </div>
          </div>

          <div className="pricing-footer">
            <p className="pricing-note">
              ✨ All plans include: SSL security, 99.9% uptime, and our happiness guarantee
            </p>
          </div>
        </div>
      </section>

    );
};

export default Pricing;