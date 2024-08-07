import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import arrow from "../../assets/arrow.svg";
import blackArrow from "../../assets/arrow-black.svg";

function NavBar() {
  const location = useLocation().pathname;

  return (
    <nav className="navBar">
      <NavLink to="/" type="button" className="navBar__home">
        Home
      </NavLink>
      <NavLink to="/saved-articles" className="navBar__saved-articles">
        Saved articles
      </NavLink>
      <button
        type="button"
        className={`navBar__sign-out ${
          location === "/saved-articles" ? "navBar__sign-out_black" : ""
        }`}
      >
        Elise
        <img
          src={`${location === "/saved-articles" ? blackArrow : arrow}`}
          alt="=>"
        />
      </button>
    </nav>
  );
}

export default NavBar;
