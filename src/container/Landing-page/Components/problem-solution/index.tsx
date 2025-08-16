
const ProblemSolutions = () => {
    return (
         <section className="problem-solution-section">
        <div className="section-container">
          <div className="problem-solution-content">
            
            {/* Problem Side */}
            <div className="problem-side">
              <div className="problem-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="problem-title">The Problem</h2>
              <p className="problem-description">
                Teams struggle with scattered tasks and missed deadlines.
              </p>
              <div className="problem-list">
                <div className="problem-item">
                  <span className="problem-bullet">❌</span>
                  <span>Tasks scattered across emails, messages, and sticky notes</span>
                </div>
                <div className="problem-item">
                  <span className="problem-bullet">❌</span>
                  <span>Missed deadlines due to poor visibility</span>
                </div>
                <div className="problem-item">
                  <span className="problem-bullet">❌</span>
                  <span>Team members working in silos</span>
                </div>
                <div className="problem-item">
                  <span className="problem-bullet">❌</span>
                  <span>No clear progress tracking</span>
                </div>
              </div>
            </div>

            {/* VS Divider */}
            <div className="vs-divider">
              <div className="vs-circle">VS</div>
              <div className="divider-line"></div>
            </div>

            {/* Solution Side */}
            <div className="solution-side">
              <div className="solution-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="solution-title">Our Solution</h2>
              <p className="solution-description">
                Our tracker helps keep everything in one place.
              </p>
              <div className="solution-list">
                <div className="solution-item">
                  <span className="solution-bullet">✅</span>
                  <span>Centralized task management dashboard</span>
                </div>
                <div className="solution-item">
                  <span className="solution-bullet">✅</span>
                  <span>Real-time deadline tracking and notifications</span>
                </div>
                <div className="solution-item">
                  <span className="solution-bullet">✅</span>
                  <span>Seamless team collaboration tools</span>
                </div>
                <div className="solution-item">
                  <span className="solution-bullet">✅</span>
                  <span>Visual progress tracking and analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ProblemSolutions;