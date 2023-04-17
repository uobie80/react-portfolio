import React from "react";
import "../../css/custom.css";

export default function Footer() {
  return (
  <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">&copy; 2023 React-Portfolio, Inc</p>

    <a href="mailto:uobicheta@hotmail.com" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"> Email: uobicheta@hotmail.com
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="https://github.com/uobie80" className="nav-link px-2 text-muted">Github</a></li>
      <li className="nav-item"><a href="https://www.linkedin.com/in/uchenna-obicheta-46762519" className="nav-link px-2 text-muted">LinkedIn</a></li>
      <li className="nav-item"><a href="https://www.frontendmentor.io/home" className="nav-link px-2 text-muted">Frontend Mentor</a></li>
    </ul>
  </footer>
</div>
  );
}
