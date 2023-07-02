import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import { navBarList } from "../../constant/headerData";
import SearchBar from "./searchBar/SearchBar";
import ServiceBtn from "../serviceBtn/ServiceBtn";
import userBtn from "../../assets/icon/user-64.png";
import SearchBtn from "../../assets/icon/search-64.png";
import closeBtn from "../../assets/icon/close-64.png";
import { ROUTES } from "../../routing/routes";
import "./header.scss";

function Header() {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  useEffect(() => {
    return () => {
      setIsSearchBarVisible(false);
    };
  }, []);

  const showSearchBar = () => {
    setIsSearchBarVisible(true);
  };
  const closeSearchBar = () => {
    setIsSearchBarVisible(false);
  };

  return (
    <header className="header">
      <div className="header_visible">
        <p className="logo">
          <Link to={ROUTES.index}>
            <span>T</span>ravel
          </Link>
        </p>
        <NavBar navBarList={navBarList} />
        <div className="service_buttons">
          <Link to={"/login"}>
            <ServiceBtn src={userBtn} alt="login" />
          </Link>
          {isSearchBarVisible ? (
            <ServiceBtn src={closeBtn} alt="close" onClick={closeSearchBar} />
          ) : (
            <ServiceBtn src={SearchBtn} alt="search" onClick={showSearchBar} />
          )}
        </div>
      </div>
      <div className="header_hidden">
        <SearchBar
          isVisible={isSearchBarVisible}
          closeSearchBar={closeSearchBar}
        />
      </div>
    </header>
  );
}

export default Header;
