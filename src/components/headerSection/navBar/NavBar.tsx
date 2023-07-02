import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import burgerBtn from "../../../assets/icon/burger_menu.png";
import closeBtn from "../../../assets/icon/close-64.png";
import useMatchMedia from "../../../hooks/useMatchMedia";
import ServiceBtn from "../../serviceBtn/ServiceBtn";
import "./navBar.scss";

interface NavBarProps {
  navBarList: string[];
}

function NavBar({ navBarList }: NavBarProps) {
  const [isShowBurgerBtn, setIsShowBurgerBtn] = useState(false);
  const isWideScreen = useMatchMedia("(max-width: 768px)");

  useEffect(() => {
    if (isWideScreen) {
      setIsShowBurgerBtn(true);
    }
  }, [isWideScreen]);

  return (
    <>
      {isWideScreen ? (
        <>
          {isShowBurgerBtn ? (
            <ServiceBtn
              src={burgerBtn}
              alt="burger log"
              onClick={() => setIsShowBurgerBtn(false)}
            />
          ) : (
            <ServiceBtn
              src={closeBtn}
              alt="burger log"
              onClick={() => setIsShowBurgerBtn(true)}
            />
          )}
        </>
      ) : (
        <ul className="navbar">
          {navBarList.map((navItem, index) => (
            <li key={navItem} className="navbar_item">
              <Link to={index === 0 ? "/" : `/${navItem}`}>{navItem}</Link>
            </li>
          ))}
        </ul>
      )}
      <AnimatePresence>
        {!isShowBurgerBtn && isWideScreen && (
          <motion.ul
            className="navbar"
            onClick={() => setIsShowBurgerBtn(true)}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {navBarList.map((navItem, index) => (
              <li key={navItem} className="navbar_item">
                <Link to={index === 0 ? "/" : `/${navItem}`}>{navItem}</Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
