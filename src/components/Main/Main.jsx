import "./Main.css";

import NewsCard from "../NewsCard/NewsCard.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import About from "../About/About";

function Main({ loader, search, onSaveCards }) {
  return (
    <main>
      <div className="main__container">
        <Preloader loader={loader} search={search} />
        <section>
          {search && <NewsCard search={search} onSaveCards={onSaveCards} />}
        </section>
        <section>
          <About />
        </section>
      </div>
    </main>
  );
}

export default Main;
