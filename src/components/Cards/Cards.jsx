import ArticleCard from "../ArticleCard/ArticleCard";
import "./Cards.css";

function Cards({ cards }) {
  return (
    <ul className="cards">
      {cards.map((item, index) => {
        return <ArticleCard key={index} item={item} />;
      })}
    </ul>
  );
}

export default Cards;
