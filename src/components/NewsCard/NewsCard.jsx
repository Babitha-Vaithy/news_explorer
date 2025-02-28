import "./NewsCard.css";
import savebtn from "../../assets/save__btn.svg";
import savedBtn from "../../assets/saved_btn.svg";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";

function NewsCard({ search, loader }) {
  const [counter, setCounter] = useState(3);

  const items =
    search &&
    search
      .filter((item) => {
        return item;
      })
      .slice(0, search.length < counter ? search.length : counter);

  const showitems =
    (search && !search.length <= 3) || (search && search.length - counter) <= 3;

  return (
    <div className="newscard">
      <div className="newscard__container">
        <p className="newscard__title">Search results</p>
        <div className="newscard__cards">
          {items &&
            items.map((item) => {
              return (
                <li className="newscard__list">
                  <img
                    src={item.urlToImage}
                    alt="Newscard Image"
                    className="newscard__image"
                  />
                  <div className="savedbtn__container">
                    <img
                      src={savebtn}
                      alt="Newscard Save Button"
                      className="newscard__savebtn"
                    />

                    <h3 className="hover__image-text">
                      Sign in to save articles
                    </h3>
                  </div>
                  <p className="newscard__date">{item.publishedAt}</p>

                  <h3 className="newscard__caption">{item.title}</h3>
                  <p className="newscard__content">{item.description}</p>
                  <p className="newscard__name">{item.author}</p>
                </li>
              );
            })}
        </div>
      </div>

      {showitems && (
        <button
          onClick={() => setCounter(counter + 3)}
          type="button"
          className="newscard__show"
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default NewsCard;
