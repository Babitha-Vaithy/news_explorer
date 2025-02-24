import "./NewsCard.css";
import savebtn from "../../assets/save__btn.svg";
import nature from "../../assets/nature1.svg";

function NewsCard() {
  return (
    <div className="newscard">
      <div className="newscard__container">
        <p className="newscard__title">Search results</p>
        <li className="newscard__list">
          <img src={nature} alt="Newscard Image" className="newscard__image" />
          <img
            src={savebtn}
            alt="Newscard Save Button"
            className="newscard__savebtn"
          />
          <p className="newscard__date">{new Date().toDateString()}</p>

          <h3 className="newscard__caption">
            Everyone Needs a Special 'Sit Spot' in Nature
          </h3>
          <p className="newscard__content">
            Ever since I read Richard Louv's influential book, "Last Child in
            the Woods," the idea of having a special "sit spot" has stuck with
            me. This advice, which Louv attributes to nature educator Jon Young,
            is for both adults and children to find...
          </p>
          <p className="newscard__name">treehugger</p>
        </li>
        <button type="button" className="newscard__show">
          Show more
        </button>
      </div>
    </div>
  );
}

export default NewsCard;
