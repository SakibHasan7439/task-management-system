
const Benefits = () => {
    return (
         <section className="benefits-section">
        <div className="section-container">
          <div className="benefits-header">
            <h2 className="section-title">Why Teams Love TaskFlow</h2>
            <p className="section-subtitle">
              Real benefits that transform how your team works together
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#1890ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9L15 9M9 13L13 13" stroke="#1890ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Faster Team Communication</h3>
              <p className="benefit-description">
                Stop endless email chains and scattered messages. Everything your team needs to discuss happens directly on tasks with context and clarity.
              </p>
              <div className="benefit-stat">
                <span className="stat-value">3x</span>
                <span className="stat-text">Faster communication</span>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="#52c41a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12L16 16M16 12L12 16" stroke="#52c41a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Less Missed Deadlines</h3>
              <p className="benefit-description">
                Smart notifications and visual timeline views ensure nothing falls through the cracks. Your team stays on schedule, every time.
              </p>
              <div className="benefit-stat">
                <span className="stat-value">85%</span>
                <span className="stat-text">Fewer missed deadlines</span>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#722ed1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">More Accountability</h3>
              <p className="benefit-description">
                Clear task ownership and transparent progress tracking creates natural accountability. Everyone knows who's doing what and when.
              </p>
              <div className="benefit-stat">
                <span className="stat-value">100%</span>
                <span className="stat-text">Task transparency</span>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V21H21M7 16L12 11L16 15L21 10" stroke="#faad14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 10V14H17" stroke="#faad14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="benefit-title">Better Productivity</h3>
              <p className="benefit-description">
                Streamlined workflows and reduced context switching mean your team gets more done in less time with higher quality results.
              </p>
              <div className="benefit-stat">
                <span className="stat-value">40%</span>
                <span className="stat-text">Productivity increase</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Benefits;