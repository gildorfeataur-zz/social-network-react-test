import React from "react";
import logo from "./../../logo.svg";

import styles from "./index.module.scss";

function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className={styles.link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Header;
