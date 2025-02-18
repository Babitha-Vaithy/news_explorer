import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__name">
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>
    </footer>
  );
}

export default Footer;
