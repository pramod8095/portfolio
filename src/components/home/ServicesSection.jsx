import React from "react";
import Icon1 from "../../assets/img/svg/pc-icon.svg"
import Icon2 from "../../assets/img/svg/light-iocn.svg"
import Icon3 from "../../assets/img/svg/marketing-iocn.svg";
import BlackCircle from "../../assets/img/svg/black-circle.svg"
import YellowCircle from "../../assets/img/svg/yellow-circle.svg";


const ServicesSection = () => {
  return (
    <>
      <div className="all-page-border2">
        <div className="servies-spacer">
          <div className="position-relative">
            <div className="yellow_circle"></div>
            <h2 className="about-text" data-aos="fade-up">
              What I Do
            </h2>
            <p className="design_text creative_text" data-aos="fade-up">
              I build scalable, high-performance web applications with a focus on clean architecture and seamless user experience.
            </p>
            <div className="circle-frame">
              <img
                className="black-circle"
                src={BlackCircle}
                alt="black-circle"
              />
              <img
                className="yellow-circle"
                src={YellowCircle}
                alt="yellow-circle"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 p-0" data-aos="zoom-in">
              <div className="box1 box1-responsive">
                <div className="dev-iocns">
                  <img
                    className="pc-icon"
                    src={Icon1}
                    alt="pc-icon"
                  />
                  <div className="big-yellow-circle-services"></div>
                </div>
                <h3 className="developement-text">Frontend Engineering</h3>
                <p className="odio-text">
                 Building scalable, production-grade applications using React, modern JavaScript, and clean architecture principles.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0" data-aos="zoom-in">
              <div className="box1 box1-responsive">
                <div className="dev-iocns">
                  <img
                    className="light-icon"
                    src={Icon2}
                    alt="light-iocn"
                  />
                  <div className="big-yellow-circle-services"></div>
                </div>
                <h3 className="developement-text">Performance Optimization</h3>
                <p className="odio-text">
                 Optimizing load times, reducing bundle size, and delivering fast, responsive experiences across all devices.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0" data-aos="zoom-in">
              <div className="box1" id="box3-top-space">
                <div className="dev-iocns">
                  <img
                    className="marketing-icon"
                    src={Icon3}
                    alt="marketing-icon"
                  />
                  <div className="big-yellow-circle-services2"></div>
                </div>
                <h3 className="developement-text developement-text2">Scalable UI Systems
</h3>
                <p className="odio-text">
               Designing reusable components and maintainable frontend architectures that scale with product growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesSection;
