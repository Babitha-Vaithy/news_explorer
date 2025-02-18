import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";

function App() {
  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main />
          <SearchForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
