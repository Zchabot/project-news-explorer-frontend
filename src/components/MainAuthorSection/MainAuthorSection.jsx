import "./MainAuthorSection.css";
import authorImage from "../../assets/author-image.png";

function MainAuthorSection() {
  return (
    <section className="main__author-section">
      <div className="main__author-section-content">
        <img src={authorImage} alt="Author" className="main__author-image" />
        <div className="main__author-about">
          <h2 className="main__author-title">About the author</h2>
          <div className="main__author-description"></div>
          <p className="main__author-description-paragraph">
            My name is Zachary Chabot. I am a full stack software engineer with
            experience building web applications using a MERN stack.
          </p>
          <p className="main__author-description-paragraph">
            At Triple Ten I used technologies including HTML5, CSS, Javascript,
            JSX, React.js, Node.js, Express.js, and MongoDB.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainAuthorSection;
