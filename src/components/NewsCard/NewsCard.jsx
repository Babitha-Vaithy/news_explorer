import "./NewsCard.css";
import savebtn from "../../assets/save__btn.svg";
import nature from "../../assets/nature1.svg";

function NewsCard({ title, urlToImage, description, publishedAt, author }) {
  return (
    <div className="newscard">
      <div className="newscard__container">
        <p className="newscard__title">Search results</p>
        <li className="newscard__list">
          <img
            src={urlToImage}
            alt="Newscard Image"
            className="newscard__image"
          />
          <img
            src={savebtn}
            alt="Newscard Save Button"
            className="newscard__savebtn"
          />
          <p className="newscard__date">{publishedAt}</p>

          <h3 className="newscard__caption">{title}</h3>
          <p className="newscard__content">{description}</p>
          <p className="newscard__name">{author}</p>
        </li>
        <button type="button" className="newscard__show">
          Show more
        </button>
      </div>
    </div>
  );
}

export default NewsCard;
