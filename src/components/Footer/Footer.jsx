import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          © 2024 Supersite, Powered by News API
        </p>
        <div className="footer__nav">
          <div className="footer__site-links">
            <Link to="/">
              <button type="button" className="footer__home">
                Home
              </button>
            </Link>
            <Link
              to="https://tripleten.com"
              target="blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="footer__triple-ten">
                Triple Ten
              </button>
            </Link>
          </div>
          <div className="footer__social-links">
            <Link
              to="https://github.com/Zchabot"
              target="blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="footer__github" />
            </Link>
            <Link
              to="https://www.facebook.com/tripleten.tech"
              target="blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="footer__facebook" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
