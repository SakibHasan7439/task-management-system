const HeroSection = () => {
  return (
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-headline">
                Stay on top of your team's tasks with ease
              </h1>
              <p className="hero-subtext">
                Streamline your team's workflow with our intuitive task tracker.
                Assign tasks, track progress, and collaborate seamlessly in one
                powerful platform.
              </p>
              <div className="hero-actions">
                <button className="cta-button primary">Get Started Free</button>
                <button className="cta-button secondary">Try Now</button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="dashboard-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="mockup-title">TaskFlow Dashboard</div>
                </div>
                <div className="mockup-content">
                  <div className="task-board">
                    <div className="task-column">
                      <div className="column-header">To Do</div>
                      <div className="task-card">
                        <div className="task-title">Design new feature</div>
                        <div className="task-assignee">John Doe</div>
                      </div>
                      <div className="task-card">
                        <div className="task-title">Review code</div>
                        <div className="task-assignee">Jane Smith</div>
                      </div>
                    </div>
                    <div className="task-column">
                      <div className="column-header">In Progress</div>
                      <div className="task-card">
                        <div className="task-title">API development</div>
                        <div className="task-assignee">Mike Johnson</div>
                      </div>
                    </div>
                    <div className="task-column">
                      <div className="column-header">Done</div>
                      <div className="task-card">
                        <div className="task-title">User testing</div>
                        <div className="task-assignee">Sarah Wilson</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
