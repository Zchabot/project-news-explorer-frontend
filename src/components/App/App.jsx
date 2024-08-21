import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedArticles from "../SavedArticles/SavedArticles";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegisteredModal from "../RegisteredModal/RegisteredModal";
import { MobileNavModal } from "../MobileNavModal/MobileNavModal";
import AppContext from "../../contexts/AppContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { getResults } from "../../utils/newsApi";
import { getItems, addItem, deleteItem, getUserInfo } from "../../utils/api";
import * as auth from "../../utils/auth";
import { setToken, getToken, removeToken } from "../../utils/token";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [resultsHidden, setResultsHidden] = useState(true);
  const [resultsNumber, setResultsNumber] = useState(3);
  const [userData, setUserData] = useState({ email: "empty", name: "empty" });
  const [savedItems, setSavedItems] = useState([]);
  const [formError, setFormError] = useState({});
  const [searching, setSearching] = useState(false);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const setFormErrorMessage = ({ form, err }) => {
    if (err === "Error: 409") {
      setFormError({ ...formError, [form]: "This email is not available" });
    } else {
      if (err === "Error: 400") {
        setFormError({ ...formError, [form]: "Invalid data provided" });
      } else {
        if (err === "Error: 401") {
          setFormError({ ...formError, [form]: "Incorrect email or password" });
        } else {
          setFormError({
            ...formError,
            [form]: "An error has occurred on the server",
          });
        }
      }
    }
  };

  function handleSubmit(request, form, then) {
    setIsLoading(true);
    request()
      .then(() => {
        closeActiveModal();
        setSubmitSuccess(true);
        setFormError({});
      })
      .then(then)
      .catch((err) => {
        console.error;
        setFormErrorMessage({ form, err });
      })
      .finally(() => setIsLoading(false));
  }

  function convertDate(date) {
    const originalDate = new Date(date);
    const month = originalDate.toLocaleString("default", {
      month: "long",
    });
    const year = originalDate.getFullYear();
    const day = originalDate.getDate();
    const newDate = `${month} ${day}, ${year}`;
    return newDate;
  }

  const handleSearch = (keyword, form) => {
    const stopPreloader = () => {
      setSearching(false);
    };
    setSearching(true);
    const makeRequest = () => {
      return getResults(keyword).then((res) => {
        const filteredResults = res.articles
          .filter((item) => {
            return item.title !== "[Removed]" && item.urlToImage;
          })
          .map((item) => {
            return {
              keyword: keyword,
              title: item.title,
              text: item.description,
              date: convertDate(item.publishedAt),
              source: item.source.name,
              link: item.url,
              image: item.urlToImage,
            };
          });
        setSearchResults(filteredResults);
        setResultsNumber(3);
        localStorage.setItem("search_results", JSON.stringify(filteredResults));
      });
    };
    handleSubmit(makeRequest, form, stopPreloader);
  };

  const handleSaveItem = (newItem) => {
    const itemSaved = () => {
      setSaving(false);
    };
    setSaving(true);
    const token = getToken();
    const makeRequest = () => {
      return addItem(newItem, token).then((res) => {
        setSavedItems([res, ...savedItems]);
      });
    };
    handleSubmit(makeRequest, "", itemSaved);
  };

  const handleDeleteItem = (deletedItem) => {
    const token = getToken();
    const makeRequest = () => {
      return deleteItem(deletedItem._id, token).then(() => {
        const filteredItems = savedItems.filter((item) => {
          return item._id !== deletedItem._id;
        });
        setSavedItems(filteredItems);
      });
    };
    handleSubmit(makeRequest);
  };

  const handleLogin = ({ email, password }, form) => {
    if (!email || !password) {
      return;
    }
    const makeRequest = () => {
      return auth.authorize({ email, password }).then((res) => {
        if (res.token) {
          setToken(res.token);
          setIsLoggedIn(true);
          getUserInfo(res.token).then((data) => {
            setUserData(data);
          });
          const redirectPath = location.state?.from?.pathname || "/";
          navigate(redirectPath);
        }
      });
    };
    handleSubmit(makeRequest, form);
  };

  const handleRegistration = (data, form) => {
    const makeRequest = () => {
      return auth.register(data);
    };
    const openRegistered = () => {
      setActiveModal("registered");
    };
    handleSubmit(makeRequest, form, openRegistered);
  };

  const handleLogOut = () => {
    removeToken();
    setIsLoggedIn(false);
    setUserData({
      name: "empty",
      email: "empty",
    });
    setSavedItems([]);
    navigate("/");
  };

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      setActiveModal("sign-in");
      return;
    }
    getUserInfo(jwt)
      .then((data) => {
        setUserData(data);
        setIsLoggedIn(true);
      })
      .then(() => {
        getItems(jwt)
          .then((data) => {
            setSavedItems(data.reverse());
          })
          .then(() => {
            const redirectPath = location.state?.from?.pathname || "/";
            navigate(redirectPath);
          })
          .catch(console.error);
      })
      .catch(console.error);
  }, [isLoggedIn]);

  useEffect(() => {
    const storedItems =
      JSON.parse(localStorage.getItem("search_results")) || [];
    setSearchResults(storedItems);
    if (storedItems.length > 0) {
      setResultsHidden(false);
      const storedResultsNumber = localStorage.getItem("results_number") || 3;
      setResultsNumber(storedResultsNumber);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        setActiveModal,
        activeModal,
        closeActiveModal,
        isLoading,
        searchResults,
        isLoggedIn,
        setIsLoggedIn,
        setSubmitSuccess,
        submitSuccess,
        resultsHidden,
        setResultsHidden,
        handleSaveItem,
        handleDeleteItem,
        savedItems,
        handleLogOut,
        userData,
        formError,
        setFormError,
        resultsNumber,
        setResultsNumber,
        searching,
        saving,
      }}
    >
      <div className="page">
        <div className="page__content">
          <Header isLoggedIn={isLoggedIn} />
          <Routes>
            <Route path="/" element={<Main handleSearch={handleSearch} />} />
            <Route
              path="/saved-articles"
              element={
                <ProtectedRoute>
                  <SavedArticles />
                </ProtectedRoute>
              }
            />
          </Routes>
          <LoginModal
            isOpen={activeModal === "sign-in"}
            handleLogin={handleLogin}
          />
          <RegisterModal
            isOpen={activeModal === "sign-up"}
            handleRegistration={handleRegistration}
          />
          <RegisteredModal isOpen={activeModal === "registered"} />
          <MobileNavModal isOpen={activeModal === "mobile-nav"} />
          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
