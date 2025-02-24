import "./NewsCard.css";
import savebtn from "../../assets/save__btn.svg";
import nature from "../../assets/nature1.svg";

function NewsCard({ search }) {
  return (
    <div className="newscard">
      <div className="newscard__container">
        <p className="newscard__title">Search results</p>
        <div className="newscard__cards">
          {search &&
            search.map((item) => {
              return (
                <li className="newscard__list">
                  <img
                    src={item.urlToImage}
                    alt="Newscard Image"
                    className="newscard__image"
                  />
                  <img
                    src={savebtn}
                    alt="Newscard Save Button"
                    className="newscard__savebtn"
                  />
                  <p className="newscard__date">{item.publishedAt}</p>

                  <h3 className="newscard__caption">{item.title}</h3>
                  <p className="newscard__content">{item.description}</p>
                  <p className="newscard__name">{item.author}</p>
                </li>
              );
            })}
        </div>
      </div>
      <button type="button" className="newscard__show">
        Show more
      </button>
    </div>
  );
}

export default NewsCard;
