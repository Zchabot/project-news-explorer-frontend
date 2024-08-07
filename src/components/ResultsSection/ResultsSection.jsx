import { useState } from "react";
import "./ResultsSection.css";
import { initialCards } from "../../utils/contstants";
import Cards from "../Cards/Cards";

function ResultsSection() {
  const [buttonText, setButtonText] = useState("Show more");

  const firstThreeCards = [initialCards[0], initialCards[1], initialCards[2]];

  const cards = buttonText === "Show more" ? firstThreeCards : initialCards;

  const setCards = () => {
    if (buttonText === "Show more") {
      setButtonText("Show less");
    } else {
      setButtonText("Show more");
    }
  };

  return (
    <section className="results__section">
      <h2 className="results__title">Search Results</h2>
      <Cards cards={cards} />
      <button type="button" className="results__show-more" onClick={setCards}>
        {buttonText}
      </button>
    </section>
  );
}

export default ResultsSection;
