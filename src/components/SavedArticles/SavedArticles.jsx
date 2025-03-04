import "./SavedArticles.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { useEffect, useState } from "react";
import { getItems } from "../../utils/auth";
import deleteicon from "../../assets/deletebtn.svg";
import trash from "../../assets/trash.svg";

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
      <Header className="Header__saved-page" styleColor="black" />
      <div className="saved__container">
        <p className="saved__name">Saved articles</p>
        <h1 className="saved__title">
          Elise, you have {savedArticles && savedArticles.length} saved articles
        </h1>
        <p className="saved__keywords">
          By keywords:
          <span className="keywords">{keyword}</span>;
        </p>
        <div className="saved__cards">
          {savedArticles &&
            savedArticles.map((item) => {
              {
                return (
                  <li className="saved__list">
                    <img
                      src={item.urlToImage}
                      alt="Newscard Image"
                      className="saved__image"
                    />
                    <h2 className="keywords__image-text">{item.keyword}</h2>
                    <div className="delete__container">
                      <img
                        src={deleteicon}
                        alt="Delete Button"
                        className="saved__deletebtn"
                        onClick={() => onDelete(item._id)}
                      />

                      <h3 className="hover__text">Remove from saved</h3>
                    </div>

                    <p className="saved__date">{item.publishedAt}</p>

                    <h3 className="saved__caption">{item.title}</h3>
                    <p className="saved__content">{item.description}</p>
                    <p className="saved__author">{item.author}</p>
                  </li>
                );
              }
            })}
        </div>
      </div>
      {/* <Navigation /> */}
      <Footer />
    </div>
  );
}

export default Savedarticles;
