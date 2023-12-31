import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home"> Home </a>
    </p>
    <p>
      <a href="#wgpt3"> What is GPT? </a>
    </p>
    <p>
      <a href="#possibility"> Open AI </a>
    </p>
    <p>
      <a href="#features"> Case Studies </a>
    </p>
    <p>
      <a href="#blog"> Library </a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1050);
    };

    // Add event listener to detect window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize on mount to set initial screen size
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        {isSmallScreen ? null : (
          <div className="gpt3__navbar-links_container">
            <Menu />
          </div>
        )}
      </div>
      <div className="gpt3__navbar-sign">
        <p> Sign in </p>
        <button type="button"> Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && isSmallScreen && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links">
                <p> Sign in </p>
                <button type="button"> Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
