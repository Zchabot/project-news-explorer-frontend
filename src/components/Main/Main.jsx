import "./Main.css";

function Main() {
  return (
    <main className="main">
      <section className="main__search-section">
        <h2 className="main__title">What's going on in the world?</h2>
        <p className="main__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="main__search-form">
          <input
            type="text"
            placeholder="Enter topic"
            className="main__search-input"
          />
          <button type="submit" className="main__search-button">
            Search
          </button>
        </form>
      </section>
    </main>
  );
}

export default Main;
