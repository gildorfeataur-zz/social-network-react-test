import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

function Header({ login, isLogin, handleLogout }) {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/profile/my-profile">My Profile</NavLink>
        <NavLink to="/dialogs">Dialogs</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
      <aside className={styles.aside}>
        {isLogin ? (
          <div>
            <span>{login}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </aside>
    </header>
  );
}

export default Header;
