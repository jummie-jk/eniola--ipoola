import "./footer.css";

export const Footer = () => {
  return (
    <div>
      <div className="footer footer-section">
        <div className="">
          <p className="copyright">© 2024 Eniola Ipoola</p>
        </div>
        <div className="footer-socials">
          <p className="intro-mini">
            <a href="https://www.linkedin.com/in/eniolaipoola" target="_blank">
              Linkedln
            </a>
          </p>
          <p className="intro-mini">
            <a href="https://github.com/eniolaipoola" target="_blank">
              Github
            </a>
          </p>
          <p className="intro-mini">
            <a href="mailto:eniolaipoola@gmail.com">
              Email
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
