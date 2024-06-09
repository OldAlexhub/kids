import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Arabic Lessons</h5>
            <p>
              Learn Arabic with interactive lessons and quizzes. Improve your
              language skills in a fun and engaging way.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="/login" className="text-dark">
                  Login
                </a>
              </li>
              <li>
                <a href="/about" className="text-dark">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="mailto:support@arabiclessons.com"
                  className="text-dark"
                >
                  support@arabiclessons.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-dark">
                  +1 234 567 890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-white">
        © 2024 Arabic Lessons
      </div>
    </footer>
  );
};

export default Footer;
