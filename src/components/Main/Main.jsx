import MainSearchSection from "../MainSearchSection/MainSearchSection";
import MainResultsSection from "../MainResultsSection/MainResultsSection";
import MainAuthorSection from "../MainAuthorSection/MainAuthorSection";

function Main({ handleSearch }) {
  return (
    <main>
      <MainSearchSection handleSearch={handleSearch} />
      <MainResultsSection />
      <MainAuthorSection />
    </main>
  );
}

export default Main;
