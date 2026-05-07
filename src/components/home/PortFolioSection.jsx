import React, { useState } from "react";
import ColiJalaImg from "../../assets/img/portfoliosection/img-2.png";
import BolMija from "../../assets/img/portfoliosection/img-6.png";
import Moligo from "../../assets/img/portfoliosection/img-7.png";

import { Link } from "react-router-dom";

const PortFolioSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="all-page-border2">
        <div className="portfolio-bg">
          <div className="spacer">
            <div className="yellow_circle"></div>
            <h2 className="about-text" data-aos="fade-up">
              Projects
            </h2>
            <h3 className="d-none">hidden</h3>
            <p className="design_text creative_text" data-aos="fade-up">
              Real-world projects where I’ve built scalable, high-performance frontend solutions and delivered measurable impact.
            </p>
            
          </div>
        </div>
      </div>
      <div className="content_box overflow-hidden">
        <div className={activeTab === 0 ? "content active" : "content"}>
          <div className="row m-0">
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <div>
                    <figure>
                      <Link to="/dekoder">
                        <img
                          className="colijala-img"
                          src={ColiJalaImg}
                          alt="colijala"
                        />
                      </Link>
                    </figure> 
                  </div>
                </div>
              </div>
              <div className="colijala-text-group" style={{ border: "none" }}>
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/dekoder">Website</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/dekoder">DeKoder</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/dekoder">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <div>
                    <figure>
                      <Link to="/colijala">
                        <img
                          className="colijala-img"
                          src={BolMija}
                          alt="moligo"
                        />
                      </Link>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="colijala-text-group" style={{ border: "none" }}>
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/colijala">WEBSITE</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/colijala">Allstate</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/colijala">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <figure>
                    <Link to="/amex">
                      <img
                        className="colijala-img"
                        src={Moligo}
                        alt="bolmija"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group" style={{ border: "none" }}>
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/amex">WEBSITE</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/amex">Amex</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/amex">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
    </>
  );
};
export default PortFolioSection;
