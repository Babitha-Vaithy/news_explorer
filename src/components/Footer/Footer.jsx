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
        <p className="footer__home">Home</p>
        <p className="footer__tripleten">TripleTen</p>
        <img src={gitavatar} alt="Git Avatar" className="footer__gitavatar" />
        <img src={facebook} alt="" className="footer__facebook" />
      </div>
    </footer>
  );
}

export default Footer;
