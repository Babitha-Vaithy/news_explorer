import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";

function Main({ onSearch }) {
  return (
    <main>
      <p className="cards__title">What's going on in the world?</p>
      <p className="cards__text">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm onSearch={onSearch} />
    </main>
  );
}

export default Main;
