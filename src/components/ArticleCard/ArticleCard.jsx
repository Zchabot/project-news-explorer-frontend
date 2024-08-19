import { useState, useContext, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import AppContext from "../../contexts/AppContext";
import "./ArticleCard.css";

function ArticleCard({ item }) {
  const [isSaved, setIsSaved] = useState(false);
  const [hoverButton, setHoverButton] = useState(false);
  const location = useLocation().pathname;
  const {
    isLoggedIn,
    handleSaveItem,
    handleDeleteItem,
    savedItems,
    searchResults,
  } = useContext(AppContext);

  const saveCard = () => {
    if (isLoggedIn) {
      if (isSaved === false) {
        handleSaveItem(item);
      } else {
        return;
      }
    } else {
      return;
    }
  };

  const deleteCard = () => {
    handleDeleteItem(item);
  };

  const buttonClass = () => {
    if (location === "/saved-articles") {
      return "card__button card__button-delete";
    }
    return `card__button ${isSaved ? "card__button-saved" : ""}`;
  };

  const onMouseEnter = () => {
    if (!isLoggedIn || location === "/saved-articles") {
      setHoverButton(true);
    }
  };

  const onMouseLeave = () => {
    if (!isLoggedIn || location === "/saved-articles") {
      setHoverButton(false);
    }
  };

  const onClick = location === "/saved-articles" ? deleteCard : saveCard;

  const buttonMessageClass = `card__button-message ${
    hoverButton === false ? "card__button-message_hidden" : ""
  }`;

  const buttonMessage = `${
    location === "/saved-articles"
      ? "Remove from saved"
      : "Sign in to save articles"
  }`;

  const keywordClass = `card__keyword ${
    location !== "/saved-articles" ? "card__keyword_hidden" : ""
  }`;

  useEffect(() => {
    const matchingItems = savedItems.filter((savedItem) => {
      return savedItem.title === item.title && savedItem.source === item.source;
    });
    if (matchingItems.length > 0) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [searchResults, savedItems]);

  return (
    <li className="card">
      <p className={keywordClass}>{item.keyword}</p>
      <p className={buttonMessageClass}>{buttonMessage}</p>
      <button
        type="button"
        className={buttonClass()}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Link
        to={item.link}
        target="blank"
        rel="noopener noreferrer"
        className="card__link"
      >
        <img className="card__image" src={item.image} alt={item.title} />
        <div className="card__info">
          <p className="card__date">{item.date}</p>
          <h2 className="card__title">{item.title}</h2>
          <p className="card__description">{item.text}</p>
          <p className="card__source">{item.source}</p>
        </div>
      </Link>
    </li>
  );
}

export default ArticleCard;
