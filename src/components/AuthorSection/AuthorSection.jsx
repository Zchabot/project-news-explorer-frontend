import "./AuthorSection.css";
import authorImage from "../../assets/author-image.jpg";

function AuthorSection() {
  return (
    <div className="author__section">
      <div className="author__section-content">
        <img src={authorImage} alt="Author" className="author__image" />
        <div className="author__about">
          <h2 className="author__title">About the author</h2>
          <div className="author__description"></div>
          <p className="author__description-paragraph">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.{" "}
          </p>
          <p className="author__description-paragraph">
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthorSection;
