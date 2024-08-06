import "./Header.css";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">NewsExplorer</h1>
      <NavBar />
    </header>
  );
}

export default Header;
