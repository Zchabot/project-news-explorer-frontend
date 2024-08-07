import "./SavedArticles.css";
import { initialCards } from "../../utils/contstants";
import Cards from "../Cards/Cards";

function SavedArticles() {
  const savedCards = initialCards;

  return (
    <div className="saved">
      <div className="saved__title-section">
        <h2 className="saved__title">Saved articles</h2>
        <p className="saved__info">Elise, you have 5 saved articles</p>
        <p className="saved__keywords">
          By keywords:{" "}
          <span className="saved__keywords_span">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
      <Cards cards={savedCards} />
    </div>
  );
}

export default SavedArticles;
