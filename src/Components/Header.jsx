import React from "react";
import { ReactComponent as Logo } from "../images/github-logo.svg";
// import link

const Header = (props) => {
  return (
    <header className="Header">
      <span>
        <Logo />
      </span>
      <label htmlFor="search">
        <input
          type="search"
          name="search"
          placeholder="Search or Jump to..."
        />
        <i>/</i>
      </label>
      <nav>
        <a href="/">Pull Request</a>
        <a href="/">Issues</a>
        <a href="/">Marketplace</a>
        <a href="/">Explore</a>
      </nav>
    </header>
  );
};

export default Header;
