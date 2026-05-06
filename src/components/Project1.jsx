import React, { useState, useEffect } from "react";
import MenuSection from "./colijala/MenuSection";
import MainPageSection from "./colijala/MainPageSection";
import headerLogo from "../assets/img/svg/logo.svg";
import ChallengeSection from "./colijala/ChallengeSection";
import FormSection from "./home/FormSection";
import Loader from "./home/Loader";
import { Link } from "react-router-dom";

const Project1 = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <header className="menu">
        <div className="logo_main">
          <Link to="/">
            <img className="logo" src={headerLogo} alt="logo" />
          </Link>
        </div>
        <nav className="nav_item">
          <ul className="list">
            <li className="menu-btn">
              <Link to="/">
                HOME
                <span className="yellow-line"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="wrapper" id="wrapper">
        <MenuSection />
      </div>
      <div className="main-page-space overflow-hidden">
        <MainPageSection data={"DeKoder"}/>
      </div>
    
      <section className="overflow-hidden">
        <ChallengeSection  data={"DeKoder"}/>
      </section>

      <section id="contact">
        <div className="all-page-border2">
          <div className="row">
            <FormSection />
          </div>
        </div>
      </section>
    </>
  );
};
export default Project1;
