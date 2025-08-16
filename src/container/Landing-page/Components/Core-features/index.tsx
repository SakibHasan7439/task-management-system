
const CoreFeatures = () => {
    return (
        <section className="features-section">
        <div className="section-container">
          <div className="features-header">
            <h2 className="section-title">Core Features</h2>
            <p className="section-subtitle">
              Everything you need to manage your team's tasks efficiently
            </p>
          </div>
          
          <div className="features-grid">
            {/* Task Assignment & Tracking */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#1890ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">✅ Task Assignment & Tracking</h3>
              <p className="feature-description">
                Easily assign tasks to team members and track their progress in real-time with our intuitive interface.
              </p>
              <div className="feature-demo">
                <div className="demo-task">
                  <span className="demo-status assigned">Assigned</span>
                  <span className="demo-text">Design homepage</span>
                </div>
              </div>
            </div>

            {/* Calendar Integration */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="#52c41a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">📅 Calendar Integration</h3>
              <p className="feature-description">
                Sync with your favorite calendar apps to never miss important deadlines and meetings.
              </p>
              <div className="feature-demo">
                <div className="demo-calendar">
                  <div className="calendar-date">15</div>
                  <div className="calendar-event">Team Review</div>
                </div>
              </div>
            </div>

            {/* Notifications & Reminders */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#faad14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#faad14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">🔔 Notifications & Reminders</h3>
              <p className="feature-description">
                Stay on top of deadlines with smart notifications and customizable reminders.
              </p>
              <div className="feature-demo">
                <div className="demo-notification">
                  <div className="notification-dot"></div>
                  <span className="notification-text">Due in 2 hours</span>
                </div>
              </div>
            </div>

            {/* Progress Tracking */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V21H21M7 16L12 11L16 15L21 10" stroke="#722ed1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 10V14H17" stroke="#722ed1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">📊 Progress Tracking</h3>
              <p className="feature-description">
                Visualize project progress with detailed analytics and reporting tools.
              </p>
              <div className="feature-demo">
                <div className="demo-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '75%'}}></div>
                  </div>
                  <span className="progress-text">75% Complete</span>
                </div>
              </div>
            </div>

            {/* Team Collaboration */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#eb2f96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">👥 Team Collaboration</h3>
              <p className="feature-description">
                Foster seamless teamwork with comments, file sharing, and real-time updates.
              </p>
              <div className="feature-demo">
                <div className="demo-team">
                  <div className="team-avatars">
                    <div className="avatar">J</div>
                    <div className="avatar">M</div>
                    <div className="avatar">S</div>
                  </div>
                  <span className="team-text">3 members</span>
                </div>
              </div>
            </div>

            {/* Bonus Feature - Analytics */}
            <div className="feature-card featured">
              <div className="feature-badge">Popular</div>
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" stroke="#f5222d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature-title">⚡ Smart Analytics</h3>
              <p className="feature-description">
                Get insights into team productivity with advanced analytics and performance metrics.
              </p>
              <div className="feature-demo">
                <div className="demo-chart">
                  <div className="chart-bar" style={{height: '60%'}}></div>
                  <div className="chart-bar" style={{height: '80%'}}></div>
                  <div className="chart-bar" style={{height: '40%'}}></div>
                  <div className="chart-bar" style={{height: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CoreFeatures;