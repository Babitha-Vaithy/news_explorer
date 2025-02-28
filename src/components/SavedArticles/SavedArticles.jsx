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

  useEffect(() => {
    getItems().then((data) => {
      setSavedArticles(data);
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
          <span className="keywords">Nature, Yellowstone, and 2 other</span>
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
                    <h2 className="keywords__image-text">sample</h2>
                    <div className="delete__container">
                      <img
                        src={deleteicon}
                        alt="Delete Button"
                        className="saved__deletebtn"
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
