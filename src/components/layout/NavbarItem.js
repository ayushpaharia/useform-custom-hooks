import React from "react";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "../css/NavbarItem.css";

function NavbarItem({ dropdown, name, active, clicked }) {
  return (
    <div className="navbar__item" onClick={clicked}>
      <div className={`navbar__item__heading ${active && "active"}`}>
        {name}
      </div>
      {dropdown && (
        <div className={`navbar__item__dropdown ${active && "active"}`}>
          <ExpandMoreIcon />
        </div>
      )}
    </div>
  );
}

export default NavbarItem;
