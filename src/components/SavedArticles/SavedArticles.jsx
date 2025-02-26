import "./SavedArticles.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { useEffect, useState } from "react";
import { getItems } from "../../utils/auth";

function Savedarticles() {
  const [saved, setSaved] = useState();

  useEffect((data) => {
    getItems();
    setSaved(data);
  });

  return (
    <div className="savedarticles">
      <Header />
      <Navigation />
      <Footer />
    </div>
  );
}

export default Savedarticles;
