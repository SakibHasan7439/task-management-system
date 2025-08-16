import { useState } from "react";


const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

    return (
        <section className="faq-section">
        <div className="section-container">
          <div className="faq-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about TaskFlow
            </p>
          </div>
          
          <div className="faq-container">
            <div className="faq-item">
              <div 
                className={`faq-question ${openFAQ === 0 ? 'active' : ''}`}
                onClick={() => toggleFAQ(0)}
              >
                <span>How quickly can my team get started with TaskFlow?</span>
                <div className="faq-icon">
                  {openFAQ === 0 ? '−' : '+'}
                </div>
              </div>
              {openFAQ === 0 && (
                <div className="faq-answer">
                  <p>
                    You can set up your team and start managing tasks in under 2 minutes! 
                    Simply sign up, invite your team members, and begin creating tasks immediately. 
                    Our intuitive interface requires no training or complex setup.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <div 
                className={`faq-question ${openFAQ === 1 ? 'active' : ''}`}
                onClick={() => toggleFAQ(1)}
              >
                <span>Can I integrate TaskFlow with my existing tools?</span>
                <div className="faq-icon">
                  {openFAQ === 1 ? '−' : '+'}
                </div>
              </div>
              {openFAQ === 1 && (
                <div className="faq-answer">
                  <p>
                    Yes! TaskFlow integrates seamlessly with popular tools like Google Calendar, 
                    Slack, Microsoft Teams, and many more. Our Pro plan includes advanced 
                    integrations and API access for custom connections.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <div 
                className={`faq-question ${openFAQ === 2 ? 'active' : ''}`}
                onClick={() => toggleFAQ(2)}
              >
                <span>Is my team's data secure with TaskFlow?</span>
                <div className="faq-icon">
                  {openFAQ === 2 ? '−' : '+'}
                </div>
              </div>
              {openFAQ === 2 && (
                <div className="faq-answer">
                  <p>
                    Absolutely! We use enterprise-grade security with SSL encryption, 
                    secure data centers, and regular security audits. Your data is backed up 
                    automatically and we maintain 99.9% uptime with redundant systems.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <div 
                className={`faq-question ${openFAQ === 3 ? 'active' : ''}`}
                onClick={() => toggleFAQ(3)}
              >
                <span>What happens if I want to cancel my subscription?</span>
                <div className="faq-icon">
                  {openFAQ === 3 ? '−' : '+'}
                </div>
              </div>
              {openFAQ === 3 && (
                <div className="faq-answer">
                  <p>
                    You can cancel anytime with no penalties. You'll continue to have access 
                    to your Pro features until the end of your billing period, then 
                    automatically switch to our free plan. You can also export all your data.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <div 
                className={`faq-question ${openFAQ === 4 ? 'active' : ''}`}
                onClick={() => toggleFAQ(4)}
              >
                <span>Do you offer support for larger teams or enterprises?</span>
                <div className="faq-icon">
                  {openFAQ === 4 ? '−' : '+'}
                </div>
              </div>
              {openFAQ === 4 && (
                <div className="faq-answer">
                  <p>
                    Yes! We offer enterprise solutions with advanced security, 
                    custom integrations, dedicated support, and volume pricing. 
                    Contact our sales team to discuss your specific needs and get a custom quote.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
};

export default FAQSection;