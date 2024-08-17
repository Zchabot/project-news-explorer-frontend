import { useState, useContext, useEffect } from "react";
import "./Results.css";
import Cards from "../Cards/Cards";
import AppContext from "../../contexts/AppContext";

function Results() {
  const {
    isLoading,
    searchResults,
    formError,
    resultsNumber,
    setResultsNumber,
  } = useContext(AppContext);

  const cards = searchResults.filter((item, index) => {
    return index < resultsNumber;
  });

  const setCards = () => {
    const newResultsNumber = Number(resultsNumber) + Number(3);
    setResultsNumber(newResultsNumber);
    localStorage.setItem("results_number", newResultsNumber);
  };

  const resultsClass = `results__container ${
    isLoading || searchResults.length === 0 || "search" in formError
      ? "results__container_hidden"
      : ""
  }`;

  const showMoreClass = `results__show-more ${
    resultsNumber >= searchResults.length ? "results__show-more_hidden" : ""
  }`;

  return (
    <div className={resultsClass}>
      <h2 className="results__title">Search Results</h2>
      <Cards cards={cards} />
      <button type="button" className={showMoreClass} onClick={setCards}>
        Show More
      </button>
    </div>
  );
}

export default Results;
