import "./NewsCard.css";
import savebtn from "../../assets/save__btn.svg";
import savedBtn from "../../assets/saved_btn.svg";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

const DEFAULT_CARD_COUNT = 3;

function NewsCard({ search, onSaveCards, count }) {
  const [counter, setCounter] = useState(DEFAULT_CARD_COUNT);
  const [style, setStyle] = useState("newscard__savebtn");
  const [title, setTitle] = useState(null);

  const saveCards = (event, item) => {
    if (
      event.target.className === "newscard__savebtn"
        ? setStyle("newscard__savedbtn")
        : setStyle("newscard__savebtn")
    );
    setTitle(item.title);
    onSaveCards(item);
  };

  const items =
    search &&
    search
      .filter((item) => {
        return item;
      })
      .slice(0, search.length < counter ? search.length : counter);

  const showMore = search && search.length > 3 && search.length - counter >= 3;

  useEffect(() => {
    setCounter(DEFAULT_CARD_COUNT);
  }, [search]);

  return (
    <>
      {search && search.length > 0 && (
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
                        <button
                          className={
                            item.title === title ? style : "newscard__savebtn"
                          }
                          onClick={(e) => saveCards(e, item)}
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

          {showMore && (
            <button
              onClick={() => setCounter(counter + 3)}
              type="button"
              className="newscard__show"
            >
              Show more
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default NewsCard;
