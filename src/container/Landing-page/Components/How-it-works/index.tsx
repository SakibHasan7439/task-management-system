const HowItsWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="section-container">
        <div className="how-it-works-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Get started in just 3 simple steps and transform your team's
            productivity
          </p>
        </div>

        <div className="steps-container">
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                  stroke="#1890ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="step-title">Create a Team</h3>
            <p className="step-description">
              Set up your team in seconds. Invite members via email and define
              roles and permissions for seamless collaboration.
            </p>
            <div className="step-demo">
              <div className="demo-team-creation">
                <div className="team-input">
                  <span className="input-label">Team Name:</span>
                  <div className="input-field">Marketing Team</div>
                </div>
                <div className="team-members">
                  <div className="member-item">
                    <div className="member-avatar">A</div>
                    <span className="member-name">Alice Johnson</span>
                  </div>
                  <div className="member-item">
                    <div className="member-avatar">B</div>
                    <span className="member-name">Bob Smith</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="step-arrow">
            <svg
              width="48"
              height="24"
              viewBox="0 0 24 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6H21M21 6L16 1M21 6L16 11"
                stroke="#1890ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#52c41a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="step-title">Assign Tasks</h3>
            <p className="step-description">
              Create tasks, set deadlines, and assign them to team members. Add
              descriptions, priorities, and attachments with ease.
            </p>
            <div className="step-demo">
              <div className="demo-task-assignment">
                <div className="task-item">
                  <div className="task-checkbox">✓</div>
                  <div className="task-content">
                    <div className="task-name">Design new landing page</div>
                    <div className="task-assignee-info">
                      <span className="assignee-avatar">D</span>
                      <span className="assignee-name">Designer</span>
                      <span className="task-due">Due: Tomorrow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="step-arrow">
            <svg
              width="48"
              height="24"
              viewBox="0 0 24 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6H21M21 6L16 1M21 6L16 11"
                stroke="#1890ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3V21H21M7 16L12 11L16 15L21 10"
                  stroke="#722ed1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 10V14H17"
                  stroke="#722ed1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="step-title">Track Progress</h3>
            <p className="step-description">
              Monitor your team's progress in real-time. Get insights, view
              analytics, and celebrate milestones together.
            </p>
            <div className="step-demo">
              <div className="demo-progress-tracking">
                <div className="progress-overview">
                  <div className="progress-stat">
                    <span className="stat-number">75%</span>
                    <span className="stat-label">Complete</span>
                  </div>
                  <div className="progress-chart">
                    <div
                      className="mini-chart-bar"
                      style={{ height: "40%" }}
                    ></div>
                    <div
                      className="mini-chart-bar"
                      style={{ height: "70%" }}
                    ></div>
                    <div
                      className="mini-chart-bar"
                      style={{ height: "85%" }}
                    ></div>
                    <div
                      className="mini-chart-bar"
                      style={{ height: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="how-it-works-cta">
          <button className="cta-button primary large">
            Start Your Free Trial Now
          </button>
          <p className="cta-subtext">
            No credit card required • Setup in under 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItsWorks;
