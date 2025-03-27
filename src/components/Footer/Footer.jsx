import { Link } from "react-router-dom";
import "./Footer.css";

import gitavatar from "../../assets/git_avatar.svg";
import facebook from "../../assets/facebook.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__name">
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>

      <nav className="footer__container">
        <ul className="footer__leftside">
          <Link to="/" className="footer__link">
            Home
          </Link>

          <a
            href="https://tripleten.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            TripleTen
          </a>
        </ul>
        <ul className="footer__rightside">
          <a
            href="https://github.com/Babitha-Vaithy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gitavatar}
              alt="Git Avatar"
              className="footer__gitavatar"
            />
          </a>

          <img src={facebook} alt="Facebook" className="footer__facebook" />
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
