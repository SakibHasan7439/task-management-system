const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo">
            <span className="logo-text">TaskFlow</span>
          </div>

          {/* Navigation Items */}
          <div className="nav-items">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          {/* Sign In Button */}
          <div className="nav-auth">
            <button className="signin-btn">Sign In</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
