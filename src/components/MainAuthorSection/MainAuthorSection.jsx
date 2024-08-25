import "./MainAuthorSection.css";
import authorImage from "../../assets/author-image.jpg";

function MainAuthorSection() {
  return (
    <section className="main__author-section">
      <div className="main__author-section-content">
        <img src={authorImage} alt="Author" className="main__author-image" />
        <div className="main__author-about">
          <h2 className="main__author-title">About the author</h2>
          <div className="main__author-description"></div>
          <p className="main__author-description-paragraph">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.{" "}
          </p>
          <p className="main__author-description-paragraph">
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainAuthorSection;
