import { useContext } from "react";
import "./MainResultsSection.css";
import AppContext from "../../contexts/AppContext";
import Preloader from "../Preloader/Preloader";
import Results from "../Results/Results";
import NoResults from "../NoResults/NoResults";
import SearchError from "../SearchError/SearchError";

function MainResultsSection() {
  const { resultsHidden } = useContext(AppContext);

  const resultsSectionClass = `main__results-section ${
    resultsHidden ? "main__results-section_hidden" : ""
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

export default MainResultsSection;
