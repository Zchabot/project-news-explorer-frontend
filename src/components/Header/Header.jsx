import { useLocation } from "react-router-dom";
import "./Header.css";
import NavBar from "../NavBar/NavBar";

function Header() {
  const location = useLocation().pathname;

  return (
    <header className="header">
      <h1
        className={`header__title ${
          location === "/saved-articles" ? "header__title_black" : ""
        }`}
      >
        NewsExplorer
      </h1>
      <NavBar />
    </header>
  );
}

export default Header;
