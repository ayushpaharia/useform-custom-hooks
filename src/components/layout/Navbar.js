import React, { useState } from "react";

import NavbarItem from "./NavbarItem";

import AcUnitIcon from "@material-ui/icons/AcUnit";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "../css/Navbar.css";

function Navbar() {
  const [options, setOptions] = useState([
    { name: "Home", dropdown: false, active: true },
    { name: "Elements", dropdown: true, active: false },
    { name: "Pages", dropdown: true, active: false },
    { name: "News", dropdown: true, active: false },
    { name: "Gallery", dropdown: true, active: false },
    { name: "Shop", dropdown: true, active: false },
    { name: "Donate", dropdown: false, active: false },
    { name: "Contacts", dropdown: false, active: false },
  ]);

  const setActive = (index) => {
    const newOptions = [...options];
    newOptions.forEach((option) => (option.active = false));
    newOptions[index].active = true;
    setOptions([...newOptions]);
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = (index) => {
    if (options[index].dropdown) {
      setDropdownVisible(!isDropdownVisible);
    }
  };
  return (
    <div className="navbar__outer">
      <div className="navbar">
        <div className="navbar__left">
          <AcUnitIcon style={{ fontSize: "30px", color: "var(--active)" }} />
        </div>
        <div className="navbar__right">
          {options.map(({ dropdown, name, active }, index) => {
            return (
              <NavbarItem
                dropdown={dropdown}
                name={name}
                key={index}
                active={active}
                clicked={() => {
                  setActive(index);
                  toggleDropdown(index);
                }}
              />
            );
          })}
          <SearchIcon className="navbar__icon pt-2" />
          <span className="navbar__icon">
            <ShoppingCartIcon />
            <strong>2</strong>
          </span>
        </div>
      </div>
      <div className={`dropdown ${!isDropdownVisible && "hidden"}`}>
        <div className="dropdown__container">
          <div className="dropdown__column">
            <h2>Programs</h2>
            <span>Academic</span>
          </div>
          <div className="dropdown__column">
            <h2>Pages</h2>
            <span>Academic</span>
            <span>Academic</span>
            <span>Academic</span>
            <span>Academic</span>
            <span>Academic</span>
            <span>Academic</span>
            <span>Academic</span>
          </div>
          <div className="dropdown__column">
            <h2>Layouts</h2>
            <span>Academic</span>
            <span>Academic</span>
            <span>Academic</span>
            <span>Academic</span>
            <span>Academic</span>
            <span>Academic</span>
            <span>Academic</span>
          </div>
          <div className="dropdown__column">
            <div className="dropdown__column__half">
              <h2>About</h2>
              <span>Academic</span>
              <span>Academic</span>
              <span>Academic</span>
            </div>
            <div className="dropdown__column__half mt-2">
              <h2>Event Calendar</h2>
              <span>Academic</span>
              <span>Academic</span>
              <span>Academic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
