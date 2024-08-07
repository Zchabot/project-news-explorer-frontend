import "./Main.css";
import SearchSection from "../SearchSection/SearchSection";
import ResultsSection from "../ResultsSection/ResultsSection";
import AuthorSection from "../AuthorSection/AuthorSection";

function Main() {
  return (
    <main className="main">
      <SearchSection />
      <ResultsSection />
      <AuthorSection />
    </main>
  );
}

export default Main;
