import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import arrow from "../../assets/arrow.svg";
import blackArrow from "../../assets/arrow-black.svg";
import AppContext from "../../contexts/AppContext";

function NavBar({ navBarClass, buttonClass, linkList }) {
  const location = useLocation().pathname;
  const { isLoggedIn, setActiveModal, handleLogOut, userData, activeModal } =
    useContext(AppContext);

  const onSignInClick = () => {
    setActiveModal("sign-in");
  };

  const onNavClick = () => {
    setActiveModal("");
  };

  const signOutButtonClass = `nav-bar__sign-out ${buttonClass} ${
    location === "/saved-articles"
      ? "nav-bar__sign-out_black"
      : `${isLoggedIn === false ? "nav-bar__element_hidden" : ""}`
  }`;

  const signInButtonClass = `nav-bar__sign-in ${buttonClass} ${
    isLoggedIn ? "nav-bar__element_hidden" : ""
  }`;

  const navLinkClass = `nav-bar__page-link ${
    location === "/" ? "nav-bar__page-link-on-home" : ""
  }`;

  const userFirstName = userData.name.split(" ")[0];

  return (
    <nav className={`nav-bar ${navBarClass}`}>
      {linkList.map((linkItem) => {
        return (
          <NavLink
            key={linkItem.text}
            to={linkItem.path}
            type="button"
            className={`${navLinkClass} ${linkItem.customClass}`}
            onClick={onNavClick}
          >
            {linkItem.text}
          </NavLink>
        );
      })}
      <button
        onClick={handleLogOut}
        type="button"
        className={signOutButtonClass}
      >
        <span className="nav-bar__sign-out-text">{userFirstName}</span>
        <img
          src={`${
            location === "/" || activeModal === "mobile-nav"
              ? arrow
              : blackArrow
          }`}
          alt="=>"
        />
      </button>
      <button
        onClick={onSignInClick}
        type="button"
        className={signInButtonClass}
      >
        Sign in
      </button>
    </nav>
  );
}

export default NavBar;
