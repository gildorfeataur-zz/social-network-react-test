import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

function Header({ login, isLogin }) {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
        <NavLink to="/dialogs">Dialogs</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
      <aside className={styles.aside}>
        {isLogin ? (
          <span>{login}</span>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </aside>
    </header>
  );
}

export default Header;
