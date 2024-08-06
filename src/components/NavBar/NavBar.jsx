import { Link } from "react-router-dom";
import "./NavBar.css";
import arrow from "../../assets/arrow.svg";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <button type="button" className="navBar__home">
          Home
        </button>
      </Link>
      <Link to="/saved-articles">
        <button type="button" className="navBar__saved-articles">
          Saved articles
        </button>
      </Link>
      <button type="button" className="navBar__sign-out">
        Elise<img src={arrow}></img>
      </button>
    </div>
  );
}

export default NavBar;
