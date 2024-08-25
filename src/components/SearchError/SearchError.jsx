import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import noResultsIcon from "../../assets/not-found-icon.svg";
import "./SearchError.css";

function SearchError() {
  const { isLoading, formError } = useContext(AppContext);

  const searchErrorClass = `search-error__container ${
    isLoading === false && "search" in formError
      ? ""
      : "search-error__container_hidden"
  }`;

  return (
    <div className={searchErrorClass}>
      <img
        src={noResultsIcon}
        alt="frowning face"
        className="search-error__icon"
      />
      <p className="search-error__title">Error!</p>
      <p className="search-error__message">
        Sorry, something went wrong during the request. There may be a
        connection issue or the server may be down. Please try again later.
      </p>
    </div>
  );
}

export default SearchError;
