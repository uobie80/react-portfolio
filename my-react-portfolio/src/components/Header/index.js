import React from "react";
import Navigation from "../Header/Navigation/index";
import Content from "../Header/Navigation/Content";

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
