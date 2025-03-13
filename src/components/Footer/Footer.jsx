import { Link } from "react-router-dom";
import "./Footer.css";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";
import { useContext } from "react";

import gitavatar from "../../assets/git_avatar.svg";
import facebook from "../../assets/facebook.svg";

function Footer() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <footer className="footer">
      <p className="footer__name">
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <div className="footer__container">
        {!currentUser && (
          <Link to="/" className="footer__link">
            <p className="footer__home">Home</p>
          </Link>
        )}
        <div className="footer__leftside">
          {currentUser && (
            <div className="footer__nav-link">
              <div className="footer__user-containter">
                <Link to="/" className="footer__link">
                  <p className="footer__home">Home</p>
                </Link>
              </div>{" "}
            </div>
          )}

          <a href="https://tripleten.com/" className="footer__tripleten">
            TripleTen
          </a>
        </div>

        <a href="https://github.com/Babitha-Vaithy">
          <img src={gitavatar} alt="Git Avatar" className="footer__gitavatar" />
        </a>
        <img src={facebook} alt="" className="footer__facebook" />
      </div>
    </footer>
  );
}

export default Footer;
