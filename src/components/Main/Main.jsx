import SearchSection from "../SearchSection/SearchSection";
import ResultsSection from "../ResultsSection/ResultsSection";
import AuthorSection from "../AuthorSection/AuthorSection";

function Main({ handleSearch }) {
  return (
    <main className="main">
      <section className="main__search-section">
        <SearchSection handleSearch={handleSearch} />
      </section>
      <section className="main__results-section">
        <ResultsSection />
      </section>
      <section className="main__author-section">
        <AuthorSection />
      </section>
    </main>
  );
}

export default Main;
