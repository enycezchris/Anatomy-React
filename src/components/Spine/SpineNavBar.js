import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/SpineNavBar.module.css";

const SpineNavBar = () => {
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
            <NavLink to="cervical" className={handleNavLinkClassNames}>
              Cervical
            </NavLink>
          </li>
          <li>
            <NavLink to="thoracic" className={handleNavLinkClassNames}>
              Thoracic
            </NavLink>
          </li>
          <li>
            <NavLink to="lumbar" className={handleNavLinkClassNames}>
              Lumbar
            </NavLink>
          </li>
          <li>
            <NavLink to="sacral" className={handleNavLinkClassNames}>
              Sacral
            </NavLink>
          </li>
          <li>
            <NavLink to="coccyx" className={handleNavLinkClassNames}>
              Coccyx
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SpineNavBar;
