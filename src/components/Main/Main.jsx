import SearchSection from "../SearchSection/SearchSection";
import ResultsSection from "../ResultsSection/ResultsSection";
import AuthorSection from "../AuthorSection/AuthorSection";

function Main({ handleSearch }) {
  return (
    <main className="main">
      <SearchSection handleSearch={handleSearch} />
      <ResultsSection />
      <AuthorSection />
    </main>
  );
}

export default Main;
