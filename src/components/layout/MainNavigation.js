import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../store/auth-context";
import Hamburger from "./Hamburger";
const MainNavigation = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <header className={classes.header}>
      <div className={classes.flex}>
        <div className={classes.logo}>
          <NavLink to="/" activeClassName={classes.active}>
            Quotes App
          </NavLink>
        </div>
        <div className={classes.hamburger}>
          <Hamburger onClick={toggleHamburger} />{" "}
        </div>
      </div>
      {hamburgerOpen && (
        <nav className={classes.nav}>
          <ul>
            {!isLoggedIn && (
              <li>
                <NavLink to="/auth" activeClassName={classes.active}>
                  Login
                </NavLink>
              </li>
            )}

            <li>
              <NavLink to="/quotes" activeClassName={classes.active}>
                All Quotes
              </NavLink>
            </li>

            {isLoggedIn && (
              <li>
                <NavLink to="/new-quote" activeClassName={classes.active}>
                  New Quote
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <NavLink to="/profile" activeClassName={classes.active}>
                  Profile
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};
export default MainNavigation;
