import React, { useContext } from "react";
import "./nav.css";
import { Link, HashRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import { ThemeContext, LanguageContext } from "../../theme";
import Home from "../Home";
import HomeTeacher from "../school/teacher";
import HomeNews from "../fbNews/index";
import HomeContact from "../contact/contact";
import mgl from "../../assets/icons/mgl.png";
import eng from "../../assets/icons/eng.png";
import logo from "../../assets/images/mandakh.png";
import light from "../../assets/images/mandakh-light.png";
import logoeng from "../../assets/images/englogo.png";
import lighteng from "../../assets/images/light-eng-logo.png";
import ScrollToTop from "react-scroll-up";
function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (
      x.className ===
      "topnav bg-white dark:bg-gray-800 shadow-lg flex justify-center mt-0 fixed w-full z-10 top-0 "
    ) {
      x.className =
        "topnav responsive bg-white dark:bg-gray-800 shadow-lg mt-0 fixed w-full z-10 top-0 ";
    } else {
      x.className =
        "topnav bg-white dark:bg-gray-800 shadow-lg flex justify-center mt-0 fixed w-full z-10 top-0 ";
    }
  };
  return (
    <>
      <nav
        className="topnav bg-white dark:bg-gray-800 shadow-lg flex justify-center mt-0 fixed w-full z-10 top-0 "
        id="myTopnav"
      >
        <Link to="/home">
          {" "}
          {theme === "dark" ? (
            language === "eng" ? (
              <img src={logoeng} className="h-14 select-none" alt="logo" />
            ) : (
              <img src={logo} className="h-14 select-none" alt="logo" />
            )
          ) : language === "eng" ? (
            <img src={lighteng} className="h-14 select-none" alt="logo" />
          ) : (
            <img src={light} className="h-14 select-none" alt="logo" />
          )}
        </Link>
        
        <Link
          to="/home/News"
          className="text-gray-800 font-semibold pt-0 my-auto dark:text-white "
        >
          {language === "eng" ? "News" : "Мэдээ"}
        </Link>
        <Link
          to="/home/Teacher"
          className="text-gray-800 font-semibold pt-0 my-auto dark:text-white"
        >
          {language === "eng" ? "About" : "Бидний тухай"}
        </Link>
        <Link
          to="/home/Contact"
          className="text-gray-800 font-semibold pt-0 my-auto dark:text-white"
        >
          {language === "eng" ? "Contact us" : "Холбоо Барих"}
        </Link>
        
        
        <span
          className="my-auto pl-3 py-1"
          onClick={() => {
            setLanguage(language === "eng" ? "mn" : "eng");
          }}
        >
          {" "}
          {language === "eng" ? (
            <img
              src={eng}
              alt="eng"
              width="32px"
              className="transform  hover:scale-110"
            />
          ) : (
            <img
              src={mgl}
              alt="eng"
              width="29px"
              className="transform  hover:scale-110"
            />
          )}
        </span>
        <span
          className="my-auto px-5 py-2"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {" "}
          {theme === "dark" ? (
            <i className="fa fa-sun-o text-yellow-300 transform scale-110 hover:scale-125"></i>
          ) : (
            <i
              className="fa fa-moon-o fill-current text-gray-800 transform scale-110 hover:scale-125 "
              aria-hidden="true"
            ></i>
          )}
        </span>
        <span
          className="icon my-auto"
          onClick={() => {
            myFunction();
          }}
        >
          <i className="fa fa-bars text-gray-800  dark:text-white"></i>
        </span>
      </nav>

      <div className="margint w-full font-serif">
        <ScrollToTop showUnder={100} />
        <HashRouter>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/home/News" exact component={HomeNews} />
            <Route path="/home/Teacher" exact component={HomeTeacher} />
            <Route path="/home/Contact" exact component={HomeContact} />
          </Switch>
        </HashRouter>
      </div>
    </>
  );
}


export default NavBar;
