import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import noResultsIcon from "../../assets/not-found-icon.svg";
import "./NoResults.css";

function NoResults() {
  const { isLoading, searchResults, formError } = useContext(AppContext);

  const noResultsClass = `no-results__container ${
    isLoading || searchResults.length > 0 || "search" in formError
      ? "no-results__container_hidden"
      : ""
  }`;

  return (
    <div className={noResultsClass}>
      <img
        src={noResultsIcon}
        alt="frowning face"
        className="no-results__icon"
      />
      <p className="no-results__title">Nothing found</p>
      <p className="no-results__message">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NoResults;
