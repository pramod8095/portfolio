import React, { useRef } from "react";
import BlackYellowSvg from "../../assets/img/resumeimg/black-yellow-circle.jpg";
import Pramod4 from "../../assets/img/pramod4.png";
import YellowFrameSvg from "../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../assets/img/svg/traingle-black-frame.svg";
import HalfCircleBlack from "../../assets/img/svg/black-half-circal.svg";
import HalfCircleYellow from "../../assets/img/svg/yellow-half-circle.svg";
import ProgressScroll from "./ProgressScroll";
import RevealOnScroll from "./RevealOnScroll";

const ResumeSection = () => {
  const progressBarRefs = useRef([]);

  return (
    <>
      <div className="all-page-border2">
        <div className="row">
          <div className="col-xl-6 col-lg-6 line p-0">
            <div className="resume-main">
              <h3 className="education-text" data-aos="fade-up">
                Education
              </h3>
              <h4 className="d-none">hidden</h4>
              <h5 className="d-none">hidden</h5>
              <p className="dignissim-text" data-aos="fade-up">
                My academic background built the foundation for problem-solving,
                systems thinking, and analytical skills that I apply in modern
                frontend engineering.
              </p>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <h6 className="resume-ed-text">
                    Bachelor in Electronics and communication Engineering
                  </h6>
                  <p className="sity">
                    Siddaganga Institute of Technology / 2012 - 2016
                  </p>
                  <p className="nibh">
                    Built a strong foundation in electronics, communication
                    systems, and signal processing—shaping a structured approach
                    to problem-solving and system design now applied in scalable
                    frontend engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 p-0">
            <div className="resume-main">
              <h3 className="education-text" data-aos="fade-up">
                Experience
              </h3>
              <h4 className="d-none">hidden</h4>
              <h5 className="d-none">hidden</h5>
              <p className="dignissim-text" data-aos="fade-up">
                Over 8+ years of experience building scalable, high-performance
                web applications, focusing on clean architecture, performance
                optimization, and delivering seamless user experiences.
              </p>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <div className="icons-set">
                    <div>
                      <h6 className="resume-ed-text">Engineer II</h6>
                      <p className="sity">American Express / 2025 - Current</p>
                    </div>
                  </div>
                  <p className="nibh">
                    <li>
                      Developed and maintained Resource Center web applications
                      based on business requirements
                      <br />
                    </li>
                    <li>
                      Ensured UI consistency, accessibility, and compliance with
                      brand standards
                    </li>
                    <li>
                      Collaborated with stakeholders to deliver features with
                      high quality and reliability
                    </li>
                  </p>
                </div>
              </div>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <div className="icons-set">
                    <div>
                      <h6 className="resume-ed-text">
                        Senior Design & Developemnt
                      </h6>
                      <p className="sity">
                        Robosoft Technologies / 2023 - 2024
                      </p>
                    </div>
                  </div>
                  <p className="nibh">
                    <li>
                      {" "}
                      Built frontend solutions for large-scale platforms
                      including Ikroya (Election Analytics) and Capra (OTT
                      platform)
                    </li>
                    <li>
                      Developed scalable UI systems and contributed to
                      CMS-driven architectures
                    </li>
                    <li>
                      Delivered cross-platform experiences across web and mobile
                    </li>
                  </p>
                </div>
              </div>

              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <div className="icons-set">
                    <div>
                      <h6 className="resume-ed-text">
                        Senior Software Developer
                      </h6>
                      <p className="sity">Coforge / 2022 - 2023</p>
                    </div>
                  </div>
                  <p className="nibh">
                    <li>
                      Led frontend development and mentored junior developers
                    </li>
                    <li>
                      Improved performance through code optimization and caching
                      strategies
                    </li>
                    <li>
                      Delivered solutions for education and e-commerce platforms
                    </li>
                  </p>
                </div>
              </div>

              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <div className="icons-set">
                    <div>
                      <h6 className="resume-ed-text">
                        Senior Software Developer
                      </h6>
                      <p className="sity">TCS/ 2021 - 2022</p>
                    </div>
                  </div>
                  <p className="nibh">
                    <li>
                      Built logistics and e-commerce solutions with focus on
                      performance and scalability
                    </li>
                    <li>
                      Developed React + Redux UI improving user experience by
                      30%
                    </li>
                    <li>
                      Created CMS tools for non-technical users and led code
                      quality initiatives
                    </li>
                  </p>
                </div>
              </div>

              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <div className="icons-set">
                    <div>
                      <h6 className="resume-ed-text">Application Developer</h6>
                      <p className="sity">Allstate India / 2017 - 2021</p>
                    </div>
                  </div>
                  <p className="nibh">
                    <li>
                      Developed web applications for insurance workflows and
                      policy management
                    </li>
                    <li>
                      Improved development efficiency by 30% through automation
                      and refactoring
                    </li>
                    <li>
                      Collaborated with cross-functional teams to deliver
                      scalable solutions
                    </li>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-page-border2 reveal progressbar">
        <div className="spacer">
          <div className="row">
            <div className="col-xl-4 col-lg-12 p-0">
              <div className="left-side-space" data-aos="fade-up">
                <div className="resume-img-main">
                  <img className="resume-img" src={Pramod4} alt="resume-img" />
                </div>
                <div className="s-frame-main"></div>
              </div>
              <br />
              <br />
              <div className="send-btn-main" data-aos="fade-up">
                <button className="send-btn1">
                  <a href={process.env.PUBLIC_URL + "/Resume.pdf"}
    download="Resume.pdf">DOWNLOAD CV</a>

                  <span className="send-span"></span>
                </button>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 position-relative">
              <h3 className="imagine" data-aos="fade-up">
                Technical Expertise
              </h3>
              <p className="visually-text" data-aos="fade-up">
                Focused on building scalable, high-performance frontend
                applications using modern technologies and clean architecture
                principles.
              </p>
              <div
                className="progress-bar reveal"
                data-percentage="84%"
                data-aos="fade-up"
                ref={(element) =>
                  element && progressBarRefs.current.push(element)
                }
              >
                <h4 className="progress-title-holder">
                  <span className="progress-title">
                    React · JavaScript · TypeScript · HTML · CSS · Tailwind
                  </span>
                  <span className="progress-number-wrapper"></span>
                </h4>
                <div className="progress-content-outter">
                  <div className="progress-content"></div>
                </div>
              </div>
              <ProgressScroll />
              <RevealOnScroll />
              <div
                className="progress-bar"
                data-percentage="90%"
                data-aos="fade-up"
                ref={(element) =>
                  element && progressBarRefs.current.push(element)
                }
              >
                <h4 className="progress-title-holder clearfix">
                  <span className="progress-title">
                    Web Vitals · lazy loading · bundle optimization
                  </span>
                  <span className="progress-number-wrapper"></span>
                </h4>
                <div className="progress-content-outter">
                  <div className="progress-content"></div>
                </div>
              </div>
              <ProgressScroll />
              <RevealOnScroll />
              <div
                className="progress-bar"
                data-percentage="78%"
                data-aos="fade-up"
                ref={(element) =>
                  element && progressBarRefs.current.push(element)
                }
              >
                <h4 className="progress-title-holder clearfix">
                  <span className="progress-title">
                    Git · CI/CD · Agile practices
                  </span>
                  <span className="progress-number-wrapper"></span>
                </h4>
                <div className="progress-content-outter">
                  <div className="progress-content"></div>
                </div>
              </div>
              <ProgressScroll />
              <RevealOnScroll />
              <div className="half2-cricle">
                <img
                  className="black-half-circal object"
                  data-value="1"
                  src={HalfCircleBlack}
                  alt="half-circle-black"
                />
                <img
                  className="yellow-half-circle object"
                  data-value="-2"
                  src={HalfCircleYellow}
                  alt="half-circle-yellow"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 p-0 position-relative know-lan">
              <div>
                <h4 className="knowledge-text" data-aos="fade-up">
                  Knowledge
                </h4>
                <div className="skill-list skill-list2" data-aos="fade-up">
                  <ul className="skill-list-main">
                    <li className="">
                      Frontend Architecture & Scalable UI Design
                    </li>
                    <li>Performance Optimization & Web Vitals</li>
                    <li>State Management Patterns (Redux, Context API)</li>
                    <li>Responsive Design & Cross-Browser Compatibility</li>
                    <li>Accessibility (a11y) & UI Consistency</li>
                    <li>API Integration & Data Handling</li>
                    <li>Component Reusability & Design Systems</li>
                    <li>Debugging, Testing & Code Quality Practices</li>
                  </ul>

                  <div className="traingle-frame">
                    <img
                      className="traingle-yellow-frame object"
                      data-value="-2"
                      src={YellowFrameSvg}
                      alt="traingle-yellow-frame"
                    />
                    <img
                      className="traingle-balck-frame object"
                      data-value="1"
                      src={BlackFrameSvg}
                      alt="traingle-balck-frame"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResumeSection;
