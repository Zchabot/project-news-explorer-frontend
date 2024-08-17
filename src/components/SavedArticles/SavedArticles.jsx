import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import "./SavedArticles.css";
import Cards from "../Cards/Cards";

function SavedArticles() {
  const { savedItems, userData } = useContext(AppContext);

  const keyWords = savedItems.map((item) => {
    return item.keyword;
  });

  const sortByOcurrences = () => {
    let sortList = [];
    let sortedKeywords = [];

    keyWords.forEach((keyword) => {
      const keyWordTimes = keyWords.filter((compareWord) => {
        return keyword === compareWord;
      });
      sortList.push([keyWordTimes[0], keyWordTimes.length]);
    });

    const sortedWords = sortList
      .sort((a, b) => {
        return a[1] - b[1];
      })
      .reverse();

    sortedWords.map((word) => {
      sortedKeywords.push(word[0]);
    });
    return sortedKeywords;
  };

  const filteredKeyWords = [...new Set(sortByOcurrences())];

  const keywordsText = `${
    filteredKeyWords.length > 3
      ? `${filteredKeyWords[0]}, ${filteredKeyWords[1]}, and ${
          filteredKeyWords.length - 2
        } other`
      : filteredKeyWords.join(", ")
  }`;

  const userFirstName = userData.name.split(" ")[0];

  return (
    <div className="saved">
      <div className="saved__title-section">
        <h2 className="saved__title">Saved articles</h2>
        <p className="saved__info">
          {userFirstName}, you have {savedItems.length} saved articles
        </p>
        <p className="saved__keywords">
          By keywords:{" "}
          <span className="saved__keywords_span">{keywordsText}</span>
        </p>
      </div>
      <div className="saved__cards-container">
        <Cards cards={savedItems} />
      </div>
    </div>
  );
}

export default SavedArticles;
