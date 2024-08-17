import { useContext } from "react";
import "./ResultsSection.css";
import AppContext from "../../contexts/AppContext";
import Preloader from "../Preloader/Preloader";
import Results from "../Results/Results";
import NoResults from "../NoResults/NoResults";
import SearchError from "../SearchError/SearchError";

function ResultsSection() {
  const { resultsHidden } = useContext(AppContext);

  const resultsSectionClass = `results__section ${
    resultsHidden ? "results__section_hidden" : ""
  }`;

  return (
    <section className={resultsSectionClass}>
      <Preloader />
      <Results />
      <NoResults />
      <SearchError />
    </section>
  );
}

export default ResultsSection;
