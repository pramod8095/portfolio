import React, { useState, useEffect } from "react";
import headerLogo from "../../assets/img/svg/logo.jpeg";

const MenuSection = () => {
  //Navbar Nav menu onscroll active functionality
  useEffect(() => {
    const handleScroll = () => {
      const menuButtons = document.querySelectorAll(".menu-btn");
      const sections = document.querySelectorAll(".active_menus");
      let len = sections.length;
      while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
      menuButtons.forEach((button) => button.classList.remove("active"));
      menuButtons[len].classList.add("active");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isWrapperClass, setIsWrapperClass] = useState(false);

  const handleCheckboxChange = () => {
    setIsWrapperClass(!isWrapperClass);
  };

  const handleNavbarItemClick = () => {
    setIsWrapperClass(false);
  };
  return (
    <>
      <header className="menu">
        <div className="logo_main">
          <a href="/">
            <img className="logo" src={headerLogo} alt="Pramod Header Logo" /> 
          </a>
          
        </div>
        <nav className="nav_item">
          <ul className="list">
            <li className="menu-btn">
              <a href="/">
                HOME
                <span className="yellow-line"></span>
              </a>
            </li>
            <li className="menu-btn">
              <a href="#about">
                ABOUT
                <span className="yellow-line"></span>
              </a>
            </li>
            <li className="menu-btn">
              <a href="#resume">
                RESUME
                <span className="yellow-line"></span>
              </a>
            </li>
            <li className="menu-btn">
              <a href="#portfolio">
                Projects
                <span className="yellow-line"></span>
              </a>
            </li>
            <li className="menu-btn">
              <a href="#testimonial">
                TESTIMONIAL
                <span className="yellow-line"></span>
              </a>
            </li>
            
          </ul>
        </nav>
      </header>

      <div
        className={isWrapperClass ? "wrapper wrapper_Class" : "wrapper"}
        id="wrapper"
      >
        <nav className="mobile-nav">
          <input
            className="m-menu__checkbox"
            id="menu"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <div className="mobile-hub">
            <label className="m-menu__toggle" htmlFor="menu">
              <svg
                className="hub"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="butt"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </label>
            <div className="">
              <a href="/">
                <img className="mobile-view-logo" src={headerLogo} alt="logo" />
              </a>
            </div>
          </div>
          <div className="open-mobile-menu">
            <label className="m-menu__overlay" htmlFor="menu"></label>
            <div className="m-menu" id="run">
              <div className="m-menu__header">
                <a href="/">
                  <img
                    className="mobile-view-logo"
                    src={headerLogo}
                    alt="logo"
                  />
                </a>
                <label className="m-menu__toggle close" htmlFor="menu">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="butt"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </label>
              </div>
              <ul className="navbar-collapse">
  <li className="icon-menu sub-icon-menu">
    <label>
      <a href="/">HOME</a>
    </label>
  </li>

  <li className="icon-menu">
    <label>
      <a href="#about" onClick={handleNavbarItemClick}>
        ABOUT
      </a>
    </label>
  </li>

  <li className="icon-menu">
    <label>
      <a href="#resume" onClick={handleNavbarItemClick}>
        RESUME
      </a>
    </label>
  </li>

  <li className="icon-menu">
    <label>
      <a href="#portfolio" onClick={handleNavbarItemClick}>
        PROJECTS
      </a>
    </label>
  </li>

  <li className="icon-menu">
    <label>
      <a href="#testimonial" onClick={handleNavbarItemClick}>
        TESTIMONIAL
      </a>
    </label>
  </li>
</ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default MenuSection;
