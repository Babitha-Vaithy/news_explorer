import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import NewsCard from "../NewsCard/NewsCard.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import About from "../About/About";
import Footer from "../Footer/Footer";

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
      <section className="main__container">
        <div className="main__pagecontent">
          <Header
            handleSignInClick={handleSignInClick}
            styleColor="white"
            handleSavedArticles={handleSavedArticles}
            onSignOut={onSignOut}
            handleMenu={handleMenu}
          />
          <div className="main__searchlist">
            <h1 className="cards__title">What&apos;s going on in the world?</h1>
            <p className="cards__text">
              Find the latest news on any topic and save them in your personal
              account.
            </p>

            <SearchForm onSearch={onSearch} />
          </div>
        </div>

        <Preloader loader={loader} search={search} />
        {search && <NewsCard search={search} onSaveCards={onSaveCards} />}
        <About />
        <Footer />
      </section>
    </main>
  );
}

export default Main;
