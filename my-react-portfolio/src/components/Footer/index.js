import React from "react";
import "../../css/custom.css";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-primary">
      <div className="container">
        <span className="text-muted">
          <a
            href="https://www.linkedin.com/in/uchenna-obicheta-46762519"
            target="_blank"
            className="text-decoration-none"
          >
            Linkedin
          </a>
        </span>
        <span className="text-muted">
          <a
            href="https://github.com/uobie80"
            target="_blank"
            className="text-decoration-none"
          >
            Github
          </a>
        </span>
      </div>
    </footer>
  );
}
