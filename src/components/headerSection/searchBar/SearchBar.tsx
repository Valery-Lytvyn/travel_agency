import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceBtn from "../../serviceBtn/ServiceBtn";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routing/routes";
import { PLACEHOLDER_VALUE } from "../../../constant/searchResultsData";
import search from "../../../assets/icon/search-64.png";
import "./searchBar.scss";

interface SearchBarProps {
  isVisible: boolean;
  closeSearchBar: () => void;
}

function SearchBar({ isVisible, closeSearchBar }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const [placeholderMessage, setPlaceholderMessage] = useState(
    PLACEHOLDER_VALUE.initial
  );
  const navigate = useNavigate();

  const searchClickHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const searchRequest = inputValue.trim().toLowerCase();
    if (searchRequest.length > 0) {
      if (/^[A-Za-z]+$/.test(searchRequest)) {
        closeSearchBar();
        navigate(ROUTES.search(searchRequest));
      } else {
        setPlaceholderMessage(PLACEHOLDER_VALUE.error);
      }
    }
    setInputValue("");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <form
            onSubmit={(e) => {
              searchClickHandler(e);
            }}
            className="search_bar_container"
          >
            <input
              autoFocus
              type="search"
              className={
                placeholderMessage === PLACEHOLDER_VALUE.error
                  ? "search_bar search_bar_error"
                  : "search_bar"
              }
              placeholder={placeholderMessage}
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button style={{ background: "transparent" }} type="submit">
              <ServiceBtn src={search} alt="search" />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchBar;
