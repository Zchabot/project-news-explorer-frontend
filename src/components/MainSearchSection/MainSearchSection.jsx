import { useEffect, useContext, useState } from "react";
import "./MainSearchSection.css";
import { useFormAndValidation } from "../../utils/hooks/useFormAndValidation";
import AppContext from "../../contexts/AppContext";

function MainSearchSection({ handleSearch }) {
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
    <section className="main__search-section">
      <div className="main__search-section-content">
        <h2 className="main__search-title">
          What&apos;s going on in the world?
        </h2>
        <p className="main__search-description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="main__search-form" onSubmit={onFormSubmit}>
          <p className="main__search-no-keyword">{`${
            emptyField ? "Please enter a keyword" : ""
          }`}</p>
          <input
            id="search-input"
            type="text"
            placeholder="Enter topic"
            className="main__search-input"
            value={`${values.search ? `${values.search}` : ""}`}
            name="search"
            onChange={handleChange}
            autoComplete="on"
            maxLength={"500" || ""}
          />
          <button type="submit" className="main__search-button">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default MainSearchSection;
