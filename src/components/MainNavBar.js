import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/MainNavBar.module.css";

const MainNavBar = () => {
  // function to handle the NavLink className. NavLink className takes a function instead of string.
  const handleNavLinkClassNames = ({ isActive }) => {
    // className prop in NavLink takes an object argument with the property "isActive"
    const navLinkClassNameToAdd = isActive === true ? styles.active : undefined;
    // If the isActive is true/false (when the link is clicked). If true, add the className active, if false, don't add anything
    return navLinkClassNameToAdd;
  };
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            {/* NavLink is the same as Link but it can also set whether the link is active or not. The className property takes a function instead of a string. It has the argument object with "isActive" property. It listens to the "clicked" event and sets the "isActive" to true or false */}
            <NavLink to="/" className={handleNavLinkClassNames} end>
              {/* The end property is a boolean and sets whether a NavLink is active or not. If the current URL ends with "/" with nothing after then Home will be set to active. */}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/human" className={handleNavLinkClassNames} end>
              {/* The end property is a boolean and sets whether a NavLink is active or not. If the current URL ends with "/products" then Products will be set to active. */}
              Human
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavBar;
