import React from "react";
import BlackDotSvg from "../../assets/img/svg/black-dots.svg";
import YellowSquare from "../../assets/img/svg/yellow-square-frame.svg";
import YellowFrameSvg from "../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../assets/img/svg/traingle-black-frame.svg";

import DekoderImg from "../../assets/img/portfoliosection/img-2.png";
import AllstateImg from "../../assets/img/portfoliosection/img-6.png";
import AmexImg from "../../assets/img/portfoliosection/img-7.png";

const ChallengeSection = ({ data }) => {
  console.log("data");

  return (
    <>
      <div className="all-page-border2">
        <div className="container">
          {data === "DeKoder" ? (
            <div>
              <div className="challenge-spacer">
                <div className="position-relative">
                  <div className="yellow_circle"></div>
                  <h2 className="about-text" data-aos="fade-up">
                    About Project
                  </h2>

                  <p className="unconventional" data-aos="fade-up">
                    DeKoder is an AI-powered digital media and election
                    intelligence platform that delivers data-driven insights
                    across politics, global affairs, finance, environment, and
                    technology. The platform combines large-scale analytics,
                    multilingual content delivery, and modern digital
                    experiences to simplify complex information for a wider
                    audience.
                  </p>
                  <div className="challenge-dots-square">
                    <img
                      className="challenge-black-dots"
                      src={BlackDotSvg}
                      alt="black-dots"
                    />
                    <img
                      className="challenge-squre-frame"
                      src={YellowSquare}
                      alt="yellow-square-frame"
                    />
                  </div>
                </div>
                <div className="row challenge-box">
                  <div className="col-xl-6" data-aos="fade-up">
                    <p className="integer integer1">
                      Developed scalable and responsive frontend experiences for
                      DeKoder using Next.js, focusing on modern UI architecture,
                      performance optimization, multilingual content delivery,
                      and seamless user experience across devices.
                    </p>
                    <p className="integer">
                      Built and maintained scalable frontend applications for
                      DeKoder using Next.js, focusing on responsive UI
                      development, reusable component architecture, and
                      optimized content delivery. Worked extensively on
                      improving application performance, enhancing user
                      experience, and implementing multilingual content
                      workflows across devices and platforms. Collaborated
                      closely with cross-functional teams to develop modern,
                      maintainable, and high-performance interfaces capable of
                      handling content-rich digital experiences and large-scale
                      user engagement. Emphasized clean architecture, seamless
                      navigation, and efficient rendering to ensure fast,
                      accessible, and consistent user interactions throughout
                      the platform.**
                    </p>
                    <br />
                    <h4>Key Contrubition </h4>
                    <br />
                    <div className="skill-list">
                      <ul className="skill-list-main">
                        <li>
                          Built scalable frontend architecture using Next.js
                        </li>
                        <li>Developed responsive and reusable UI components</li>
                        <li>
                          Optimized rendering performance and page load speed
                        </li>
                        <li>
                          Implemented multilingual content delivery and dynamic
                          routing
                        </li>
                        <li>
                          Improved user experience across desktop and mobile
                          devices
                        </li>
                      </ul>
                    </div>
                    <div className="challenge-traingle-frame">
                      <img
                        className="ch-traingle-yellow-frame"
                        src={YellowFrameSvg}
                        alt="traingle-yellow-frame"
                      />
                      <img
                        className="ch-traingle-black-frame"
                        src={BlackFrameSvg}
                        alt="traingle-black-frame"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="challenge-img-main">
                      <img
                        className="challenge-img"
                        src={DekoderImg}
                        alt="Dekoder"
                      />
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          ) : data === "Amex" ? (
            <div>
              <div className="challenge-spacer">
                <div className="position-relative">
                  <div className="yellow_circle"></div>
                  <h2 className="about-text" data-aos="fade-up">
                    About Project
                  </h2>

                  <p className="unconventional" data-aos="fade-up">
                    American Express is a global financial services company
                    offering payment, credit, and travel-related solutions. The
                    organization focuses on digital innovation and scalable
                    enterprise platforms to deliver secure, reliable, and
                    seamless customer experiences worldwide.
                  </p>
                  <div className="challenge-dots-square">
                    <img
                      className="challenge-black-dots"
                      src={BlackDotSvg}
                      alt="black-dots"
                    />
                    <img
                      className="challenge-squre-frame"
                      src={YellowSquare}
                      alt="yellow-square-frame"
                    />
                  </div>
                </div>
                <div className="row challenge-box">
                  <div className="col-xl-6" data-aos="fade-up">
                    <p className="integer integer1">
                      Contributed to enterprise-grade frontend applications at
                      American Express, focusing on scalable UI development,
                      responsive design, and reliable content management
                      workflows. Worked in a fast-paced environment
                      collaborating with cross-functional teams to deliver
                      secure, production-ready solutions aligned with enterprise
                      standards and user experience goals. Emphasized
                      performance, maintainability, and consistency while
                      supporting business-critical digital platforms.
                    </p>
                    <h4>Key Contributions</h4>
                    <br />{" "}
                    <div className="skill-list">
                      <ul className="skill-list-main">
                        <li>
                          {" "}
                          Developed and maintained Resource Center web pages
                          based on business-submitted change requests
                        </li>
                        <li>
                          Ensured content accuracy, UI consistency, and
                          adherence to enterprise brand and compliance
                          guidelines
                        </li>
                        <li>
                          Built responsive and user-friendly frontend
                          experiences for internal enterprise platforms
                        </li>
                        <li>
                          Performed testing and validation before production
                          deployment to ensure quality and reliability
                        </li>

                        <li>
                          Collaborated closely with business stakeholders to
                          understand requirements and deliver timely solutions
                        </li>
                        <li>
                          Focused on maintainable UI architecture,
                          accessibility, and seamless user experience across
                          devices
                        </li>
                      </ul>
                    </div>
                    <div className="challenge-traingle-frame">
                      <img
                        className="ch-traingle-yellow-frame"
                        src={YellowFrameSvg}
                        alt="traingle-yellow-frame"
                      />
                      <img
                        className="ch-traingle-black-frame"
                        src={BlackFrameSvg}
                        alt="traingle-black-frame"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="challenge-img-main">
                      <img className="challenge-img" src={AmexImg} alt="Amex" />
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          ) : (
            <div>
              {" "}
              <div className="challenge-spacer">
                <div className="position-relative">
                  <div className="yellow_circle"></div>
                  <h2 className="about-text" data-aos="fade-up">
                    About Project
                  </h2>

                  <p className="unconventional" data-aos="fade-up">
                    Allstate is a leading U.S. insurance company providing auto,
                    home, and life insurance solutions. The organization focuses
                    on digital transformation, building scalable platforms that
                    enhance customer experience and streamline policy
                    management.
                  </p>
                  <div className="challenge-dots-square">
                    <img
                      className="challenge-black-dots"
                      src={BlackDotSvg}
                      alt="black-dots"
                    />
                    <img
                      className="challenge-squre-frame"
                      src={YellowSquare}
                      alt="yellow-square-frame"
                    />
                  </div>
                </div>
                <div className="row challenge-box">
                  <div className="col-xl-6" data-aos="fade-up">
                    <p className="integer integer1">
                      Contributed to enterprise insurance platforms at Allstate
                      focused on improving policy management and customer
                      experience through modern web applications. Worked on
                      scalable frontend solutions, automation workflows, and UI
                      enhancements that streamlined internal processes and
                      improved development efficiency. Collaborated closely with
                      teams across the organization to deliver reliable,
                      maintainable, and user-centric digital experiences.
                    </p>

                    <br />
                    <h4> Key Contrubutions </h4>
                    <br />
                    <div className="skill-list">
                      <ul className="skill-list-main">
                        <li>
                          Developed web-based insurance applications for
                          efficient policy management workflows
                        </li>
                        <li>
                          Built user-friendly interfaces enabling customers to
                          manage and modify policy details seamlessly
                        </li>
                        <li>
                          Collaborated with cross-functional teams to deliver
                          scalable and maintainable frontend solutions
                        </li>
                        <li>
                          Implemented frontend best practices to improve
                          application reliability and usability
                        </li>
                        <li>
                          Refactored existing workflows through automation,
                          reducing development time by 30%
                        </li>
                        <li>
                          Focused on responsive UI development, maintainability,
                          and performance optimization across enterprise
                          applications
                        </li>
                      </ul>
                    </div>
                    <div className="challenge-traingle-frame">
                      <img
                        className="ch-traingle-yellow-frame"
                        src={YellowFrameSvg}
                        alt="traingle-yellow-frame"
                      />
                      <img
                        className="ch-traingle-black-frame"
                        src={BlackFrameSvg}
                        alt="traingle-black-frame"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="challenge-img-main">
                      <img
                        className="challenge-img"
                        src={AllstateImg}
                        alt="Allstate"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="next-prev-buttons overflow-hidden">
            <div
              className="colijala-text-group colijala-text-group2"
              data-aos="zoom-out-left"
            >
              <div className="right-line">
                <h4 className="colijala-text">
                  {data === "Allstate" ? (
                    <a href="/dekoder">Dekoder</a>
                  ) : data === "Dekoder" ? (
                    <a href="/amex">AMEX</a>
                  ) : (
                    <a href="/colijala">Allstate</a>
                  )}
                </h4>
              </div>

              <div className="red">
                {data === "Allstate" ? (
                  <a href="/dekoder">
                    <div className="arrow-pro"></div>
                  </a>
                ) : data === "Dekoder" ? (
                  <a href="/amex">
                    <div className="arrow-pro"></div>
                  </a>
                ) : (
                  <a href="/colijala">
                    <div className="arrow-pro"></div>
                  </a>
                )}
              </div>
            </div>

            <div className="colijala-text-group" data-aos="zoom-out-right">
              <div className="right-line">
                <h4 className="colijala-text">
                  {data === "Allstate" ? (
                    <a href="/amex">AMEX</a>
                  ) : data === "Dekoder" ? (
                    <a href="/colijala">Allstate</a>
                  ) : (
                    <a href="/dekoder">Dekoder</a>
                  )}
                </h4>
              </div>

              <div className="red">
                {data === "Allstate" ? (
                  <a href="/amex">
                    <div className="arrow-pro"></div>
                  </a>
                ) : data === "Dekoder" ? (
                  <a href="/colijala">
                    <div className="arrow-pro"></div>
                  </a>
                ) : (
                  <a href="/dekoder">
                    <div className="arrow-pro"></div>
                  </a>
                )}
              </div>
            </div>
          </div>

          <br />
        </div>
      </div>
    </>
  );
};
export default ChallengeSection;
