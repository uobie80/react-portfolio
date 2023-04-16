import React from "react";


export default function Navigation() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark fixed-top bg-primary"
      aria-label="Uchenna's Portfolio navigation header"
    >
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img
            src="../../images/avatar-circle.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt="Uchenna Avator Logo"
          />
          Uchenna Obicheta
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Inventory
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
