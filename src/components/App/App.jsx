import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";

function App() {
  return (
    <div className="page__root">
      <div className="page">
        <div className="page__content">
          <Header />
          <Main />
          <SearchForm />
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
