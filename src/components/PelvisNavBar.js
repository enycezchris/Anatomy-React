import { NavLink } from "react-router-dom";
import styles from "../styles/PelvisNavBar.module.css";

function PelvisNavBar() {
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
            <NavLink to="male" className={handleNavLinkClassNames}>
              Male
            </NavLink>
          </li>
          <li>
            <NavLink to="female" className={handleNavLinkClassNames}>
              Female
            </NavLink>
          </li>
          <li>
            <NavLink to="comparison" className={handleNavLinkClassNames}>
              Comparison
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default PelvisNavBar;
