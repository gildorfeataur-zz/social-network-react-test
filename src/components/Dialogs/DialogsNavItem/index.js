import React from "react";
import { NavLink } from "react-router-dom";

function DialogsNavItem({ id, name, className }) {
  return (
    <div className={className}>
      <NavLink to={"/dialogs/" + id}>{name}</NavLink>
    </div>
  );
}

export default DialogsNavItem;
