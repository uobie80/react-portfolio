import React from "react";
import Navigation from "../Header/Navigation/index";
import Content from "../Content/index.js";

export default function Header() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
        <Content />
    </div>
  );
}
