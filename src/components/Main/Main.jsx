import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsCard from "../NewsCard/NewsCard.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import About from "../About/About";

function Main({
  onSearch,
  handleSignInClick,
  handleSavedArticles,
  loader,
  search,
  onSaveCards,
  onSignOut,
  handleMenu,
}) {
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
