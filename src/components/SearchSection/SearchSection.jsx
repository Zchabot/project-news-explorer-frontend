import { useEffect, useContext, useState } from "react";
import "./SearchSection.css";
import { useFormAndValidation } from "../../utils/hooks/useFormAndValidation";
import AppContext from "../../contexts/AppContext";

function SearchSection({ handleSearch }) {
  const { values, handleChange, resetForm } = useFormAndValidation();
  const { submitSuccess, setResultsHidden, searchResults } =
    useContext(AppContext);
  const [emptyField, setEmptyField] = useState(false);

  const form = "search";

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    if ("search" in values === false || values.search === "") {
      setEmptyField(true);
    } else {
      setEmptyField(false);
      handleSearch(values.search, form);
      setResultsHidden(false);
    }
  };

  useEffect(() => {
    if (submitSuccess === true) {
      resetForm();
    }
  }, [submitSuccess]);

  useEffect(() => {
    if ("search" in values && emptyField === true) {
      setEmptyField(false);
    }
  }, [values]);

  useEffect(() => {
    if (searchResults.length > 0) {
      setResultsHidden(false);
    }
  }, []);

  return (
    <div className="search__section">
      <div className="search__section-content">
        <h2 className="search__title">What&apos;s going on in the world?</h2>
        <p className="search__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="search__form" onSubmit={onFormSubmit}>
          <p className="search__no-keyword">{`${
            emptyField ? "Please enter a keyword" : ""
          }`}</p>
          <input
            id="search-input"
            type="text"
            placeholder="Enter topic"
            className="search__input"
            value={`${values.search ? `${values.search}` : ""}`}
            name="search"
            onChange={handleChange}
            autoComplete="on"
            maxLength={"500" || ""}
          />
          <button type="submit" className="search__button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchSection;
