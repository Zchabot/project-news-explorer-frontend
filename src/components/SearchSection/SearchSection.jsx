import "./SearchSection.css";

function SearchSection() {
  return (
    <section className="search__section">
      <h2 className="search__title">What's going on in the world?</h2>
      <p className="search__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form className="search__form">
        <input
          type="text"
          placeholder="Enter topic"
          className="search__input"
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchSection;
