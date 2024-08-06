import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedArticles from "../SavedArticles/SavedArticles";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="page">
      <div className="page__content">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved-articles" element={<SavedArticles />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
