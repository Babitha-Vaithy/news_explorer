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
      <div className="footer__container">
        <div className="footer__leftside">
          <Link to="/" className="footer__link">
            <nav>Home</nav>
          </Link>
          <nav>
            <a
              href="https://tripleten.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              TripleTen
            </a>
          </nav>
        </div>
        <div className="footer__rightside">
          <nav>
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
          </nav>
          <img src={facebook} alt="" className="footer__facebook" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
