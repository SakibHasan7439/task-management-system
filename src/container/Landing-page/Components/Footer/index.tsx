const Footer = () => {
  return (
    <footer className="footer">
      <div className=" footer-container">

        {/* Brand / Logo */}
        <div className="footer-brand">
          <h3 className="footer-logo">TaskFlow</h3>
          <p className="footer-tagline">
            Simplify teamwork, track progress, and achieve more together.
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-title">Product</h4>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4 className="footer-title">Stay Updated</h4>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
        <div className="footer-socials">
          <a href="#">🌐</a>
          <a href="#">🐦</a>
          <a href="#">💼</a>
          <a href="#">📸</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
