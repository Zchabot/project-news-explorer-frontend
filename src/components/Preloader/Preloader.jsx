import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import "./Preloader.css";

function Preloader() {
  const { isLoading } = useContext(AppContext);

  const preloaderContainerClass = `preloader__container ${
    isLoading === false ? "preloader__container_hidden" : ""
  }`;

  return (
    <div className={preloaderContainerClass}>
      <div className="preloader__element" />
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
}

export default Preloader;
