import React, { useEffect, useState } from "react";
import MenuSection from "./home/MenuSection";
import AboutSection from "./home/AboutSection";
import MainPageSection from "./home/MainPageSection";
import ServicesSection from "./home/ServicesSection";
import ResumeSection from "./home/ResumeSection";
import PortFolioSection from "./home/PortFolioSection";
import Testimonial from "./home/Testimonial";
import EmailSection from "./home/EmailSection";

import FooterSection from "./FooterSection";
import Loader from "./home/Loader";

const Home = () => {


  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="site_content">
        <div className="main_container">
          <MenuSection />
          <div className="all-page-border active_menus">
            <MainPageSection />
          </div>
          <section className="active_menus overflow-hidden" id="about">
            <AboutSection />
          </section>
          
          <section className="overflow-hidden">
            <ServicesSection />
          </section>
          <section className="active_menus overflow-hidden" id="resume">
            <div className="all-page-border2">
              <div className="resume-bg">
                <div className="servies-spacer">
                  <div className="yellow_circle"></div>
                  <h2 className="about-text" data-aos="fade-up">
                    Resume
                  </h2>
                 
                </div>
              </div>
            </div>
            <ResumeSection />
          </section>
          <section className="active_menus overflow-hidden" id="portfolio">
            <PortFolioSection />
          </section>
          <section className="active_menus overflow-hidden" id="testimonial">
            <div className="all-page-border2">
              <div className="spacer position-relative container">
                <Testimonial />
              </div>
            </div>
          </section>
          
          <section className="overflow-hidden">
            <div className="all-page-border2">
              <EmailSection />
            </div>
          </section>
          
          <FooterSection />
        </div>
      </div>
    </>
  );
};
export default Home;
