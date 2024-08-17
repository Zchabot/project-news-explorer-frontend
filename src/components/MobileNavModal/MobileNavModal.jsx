import { useLocation } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import { Modal } from "../Modal/Modal";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import "./MobileNavModal.css";

export const MobileNavModal = ({ isOpen }) => {
  const location = useLocation().pathname;
  const { isLoggedIn } = useContext(AppContext);

  const savedClass = "mobile-nav__saved-articles";
  const homeClass = "mobile-nav__home";

  const getLinkList = () => {
    if (isLoggedIn && location === "/") {
      return [
        {
          path: "/saved-articles",
          customClass: savedClass,
          text: "Saved Articles",
        },
      ];
    }
    return [{ path: "/", customClass: homeClass, text: "Home" }];
  };

  const linkList = getLinkList();

  return (
    <Modal
      isOpen={isOpen}
      containerClass="mobile-nav__container"
      closeButtonClass="mobile-nav__close"
    >
      <Header />
      <NavBar
        linkList={linkList}
        navBarClass="mobile-nav__navbar"
        buttonClass="mobile-nav__button"
      />
    </Modal>
  );
};
