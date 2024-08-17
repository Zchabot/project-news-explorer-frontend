import { useLocation } from "react-router-dom";
import { useContext } from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import AppContext from "../../contexts/AppContext";

function Header() {
  const location = useLocation().pathname;

  const { setActiveModal, activeModal, isLoggedIn } = useContext(AppContext);

  const handleMenuButton = () => {
    setActiveModal("mobile-nav");
  };

  const headerClass = `header ${
    activeModal === "mobile-nav" ? "header_mobile-nav" : ""
  }`;

  const headerContentClass = `header__content ${
    activeModal === "mobile-nav"
      ? "header__content_mobile-nav"
      : activeModal === "sign-in" || activeModal === "register"
      ? "header__content_hidden"
      : ""
  }`;

  const headerTitleClass = `header__title ${
    location === "/saved-articles" ? "header__title_black" : ""
  } ${activeModal === "mobile-nav" ? "header__title_mobile-nav" : ""}`;

  const menuButtonClass = `header__menu-button ${
    location === "/saved-articles" ? "header__menu-button-black" : ""
  } ${
    activeModal === "mobile-nav" ||
    activeModal === "sign-in" ||
    activeModal === "register"
      ? "header__menu-button_hidden"
      : ""
  }`;

  const savedClass = `header__saved-articles-link`;
  const homeClass = `header__home-link`;

  const getLinkList = () => {
    if (isLoggedIn) {
      return [
        { path: "/", customClass: homeClass, text: "Home" },
        {
          path: "/saved-articles",
          customClass: savedClass,
          text: "Saved Articles",
        },
      ];
    }
    return [{ path: "/", customClass: homeClass, text: "Home" }];
  };

  const linkList = getLinkList();

  return (
    <header className={headerClass}>
      <div className={headerContentClass}>
        <h1 className={headerTitleClass}>NewsExplorer</h1>
        <NavBar linkList={linkList} />
        <button
          type="button"
          className={menuButtonClass}
          onClick={handleMenuButton}
        />
      </div>
    </header>
  );
}

export default Header;
