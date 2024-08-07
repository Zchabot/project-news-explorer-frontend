import ArticleCard from "../ArticleCard/ArticleCard";
import "./Cards.css";

function Cards({ cards }) {
  return (
    <ul className="cards">
      {cards.map((item) => {
        return <ArticleCard key={item._id} item={item} />;
      })}
    </ul>
  );
}

export default Cards;
