import "./AuthorSection.css";

function AuthorSection() {
  return (
    <section className="author__section">
      <img
        src="https://holidaygoddess.guide/wp-content/uploads/2021/09/lmf4ebys08c-e1631065318972.jpg"
        alt="Author"
        className="author__image"
      />
      <div className="author__about">
        <h2 className="author__title">About the author</h2>
        <p className="author__description">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. <br />
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default AuthorSection;
