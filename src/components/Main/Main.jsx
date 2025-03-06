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
}) {
  return (
    <main>
      <div className="main__container">
        <div className="main__pagecontent">
          <Header
            handleSignInClick={handleSignInClick}
            styleColor="white"
            handleSavedArticles={handleSavedArticles}
            onSignOut={onSignOut}
          />
          <p className="cards__title">What's going on in the world?</p>
          <p className="cards__text">
            Find the latest news on any topic and save them in your personal
            account.
          </p>

          <SearchForm onSearch={onSearch} />
        </div>

        <Preloader loader={loader} search={search} />
        <NewsCard search={search} onSaveCards={onSaveCards} />
        <About />
        <Footer />
      </div>
    </main>
  );
}

export default Main;
