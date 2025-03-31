import "./SavedArticles.css";
import { useEffect, useState } from "react";
import { getItems } from "../../utils/auth";

function Savedarticles() {
  const [savedArticles, setSavedArticles] = useState(null);
  const [keyword, setKeyword] = useState(null);

  const onDelete = (_id) => {
    let deleteCards = savedArticles.reduce((data, item) => {
      if (item._id !== _id) {
        data.push(item);
      }
      return data;
    }, []);
    setSavedArticles(deleteCards);
  };

  useEffect(() => {
    let key = "";
    getItems().then((data) => {
      setSavedArticles(data);
      if (data && data.length <= 2) {
        data.map((item) => (key = key + "," + item));
      } else {
        if (data) {
          data.filter((item, index) => {
            if (index <= 1) {
              key = key + "," + item.keyword;
            }
          });
          key = `${key} and ${data.length - 2} others`;
        }
      }
      let newKeyword = key.slice(1);
      setKeyword(newKeyword);
    });
  }, []);

  return (
    <div className="savedarticles">
      <div className="savedarticles__container">
        <p className="savedarticles__name">Saved articles</p>
        <h1 className="savedarticles__title">
          Elise, you have {savedArticles && savedArticles.length} saved articles
        </h1>
        <p className="savedarticles__keywords">
          By keywords:
          <span className="savedarticles__keyword">{keyword}</span>
        </p>
        <ul className="savedarticles__cards">
          {savedArticles &&
            savedArticles.map((item, index) => {
              {
                return (
                  <li key={index} className="savedarticles__card">
                    <img
                      src={item.urlToImage}
                      alt="Newscard Image"
                      className="savedarticles__image"
                    />
                    <h2 className="savedarticles__imagetext">{item.keyword}</h2>
                    <div className="savedarticles__deletecontainer">
                      <button
                        className="savedarticles__deletebtn"
                        onClick={() => onDelete(item._id)}
                      />

                      <h3 className="savedarticles__hovertext">
                        Remove from saved
                      </h3>
                    </div>

                    <p className="savedarticles__date">{item.publishedAt}</p>

                    <h3 className="savedarticles__caption">{item.title}</h3>
                    <p className="savedarticles__content">{item.description}</p>
                    <p className="savedarticles__author">{item.author}</p>
                  </li>
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
}

export default Savedarticles;
