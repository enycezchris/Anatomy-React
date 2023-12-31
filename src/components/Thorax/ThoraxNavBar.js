import { NavLink } from "react-router-dom";
import styles from "../../styles/ThoraxNavBar.module.css";

function ThoraxNavBar() {
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
            <NavLink to="anterior" className={handleNavLinkClassNames} end>
              Anterior
            </NavLink>
          </li>
          <li>
            <NavLink to="posterior" className={handleNavLinkClassNames} end>
              Posterior
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ThoraxNavBar;
