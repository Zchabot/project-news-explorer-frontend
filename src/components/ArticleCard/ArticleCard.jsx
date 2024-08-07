import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ArticleCard.css";
import SavedArticles from "../SavedArticles/SavedArticles";

function ArticleCard({ item }) {
  const [isSaved, setIsSaved] = useState(false);
  const [hoverDelete, setHoverDelete] = useState(false);
  const location = useLocation().pathname;

  const saveCard = () => {
    if (isSaved === false) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  };

  const deleteCard = () => {
    console.log("deleted");
  };

  const buttonClass = () => {
    if (location === "/saved-articles") {
      return "card__button card__button-delete";
    }
    return `card__button ${isSaved ? "card__button-saved" : ""}`;
  };

  const onMouseEnter = () => {
    if (location === "/saved-articles") {
      setHoverDelete(true);
    }
  };

  const onMouseLeave = () => {
    if (location === "/saved-articles") {
      setHoverDelete(false);
    }
  };

  const onclick = location === "/saved-articles" ? deleteCard : saveCard;

  const removalNoticeClass = `card__removal-notice ${
    hoverDelete === false ? "card__removal-notice_hidden" : ""
  }`;
  const keywordClass = `card__keyword ${
    location !== "/saved-articles" ? "card__keyword_hidden" : ""
  }`;

  return (
    <li className="card">
      <p className={keywordClass}>Nature</p>
      <p className={removalNoticeClass}>Remove from saved</p>
      <button
        type="button"
        className={buttonClass()}
        onClick={onclick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <img className="card__image" src={item.urlToImage} alt={item.title} />
      <div className="card__info">
        <p className="card__date">{item.publishedAt}</p>
        <h2 className="card__title">{item.title}</h2>
        <p className="card__description">{item.description}</p>
        <p className="card__source">{item.source}</p>
      </div>
    </li>
  );
}

export default ArticleCard;
