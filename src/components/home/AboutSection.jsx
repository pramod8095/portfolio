import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmailSvg from "../../assets/img/svg/email.svg";
import PhoneSvg from "../../assets/img/svg/phone.svg";
import BlackDotSvg from "../../assets/img/svg/black-dots.svg";
import YellowSquare from "../../assets/img/svg/yellow-square-frame.svg";
import Pramod from "../../assets/img/pramod2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSection = () => {
  // About page 8+ year count functionality
  const [counted, setCounted] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const counterElement = document.getElementById("counter");
      const countElements = document.querySelectorAll(".count");

      if (counted === 0 && counterElement) {
        const oTop = counterElement.offsetTop - window.innerHeight;

        if (window.scrollY > oTop) {
          countElements.forEach((element) => {
            const countTo = parseInt(element.getAttribute("data-count"));
            const duration = 9000;
            const easing = "swing";

            animateCount(element, countTo, duration, easing);
          });

          setCounted(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [counted]);

  const animateCount = (element, countTo, duration, easing) => {
    let start = 0;
    const step = () => {
      const increment = Math.ceil(countTo / (duration / 15));
      start += increment;

      if (start > countTo) {
        element.innerText = countTo;
      } else {
        element.innerText = start;
        requestAnimationFrame(step);
      }
    };

    step();
  };
  return (
    <>
      <div className="all-page-border2">
        <div className="about_top-spacer">
          <div className="yellow_circle yellow_circle_about"></div>
          <h2 className="about-text" data-aos="fade-up">
            ABOUT ME
          </h2>
          <p className="design_text creative_text" data-aos="fade-up">
            Frontend Developer with over 8+ years of experience{" "}
          </p>
          <div className="row modern-techniques">
            <div className="col-xl-6 p-0" data-aos="fade-right">
              <div className="top-space">
                <h3 className="lobortgs">Code. Create. Optimize. Repeat.</h3>
                <h4 className="d-none">hidden</h4>
                <h5 className="d-none">hidden</h5>
                <p className="designer designer1">
                  I’m Pramod K, a frontend engineer with 8+ years of experience
                  building scalable, high-performance web applications. I
                  specialize in React, modern JavaScript, and state management
                  architectures that deliver fast, intuitive, and reliable user
                  experiences.<br/> <br/>
                  <span className="designer designer2">
                    Over the years, I’ve worked across diverse
                    projects—transforming complex requirements into clean,
                    maintainable, and production-ready interfaces. My focus goes
                    beyond just writing code; I optimize for performance,
                    accessibility, and long-term scalability.
                    <br /><br/>I actively stay aligned with evolving frontend
                    ecosystems and best practices, continuously refining my
                    approach to deliver efficient and future-proof solutions.
                    <br /><br/>
                    If you're looking for someone who can take ownership, write
                    clean code, and deliver impactful user experiences—I’d be
                    glad to collaborate and contribute to your product’s
                    success.
                  </span>
                </p>
                <div className="phone-email-icons">
                  <div className="phone-icon phone-icon1">
                    <div className="phone-email-svg-main">
                      <Link to="tel:+01(234)5678899">
                        <img
                          className="phone-email-svg"
                          src={PhoneSvg}
                          alt="phone"
                        />
                      </Link>
                    </div>
                    <div className="big-yellow-circle"></div>
                    <p className="mobile-email">
                      <Link to="tel:+01(234)5678899">+91 80957 07975</Link>
                    </p>
                  </div>
                  <div className="email-icon">
                    <div className="phone-email-svg-main2">
                      <Link to="mailto:hello@nairobi.com">
                        <img
                          className="phone-email-svg"
                          src={EmailSvg}
                          alt="email"
                        />
                      </Link>
                    </div>
                    <div className="big-yellow-circle"></div>
                    <p className="mobile-email">
                      <span>kpramod8095@gmail.com</span>
                    </p>
                  </div>
                </div>
              
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6  p-0 position-relative image8"
              data-aos="fade-left"
            >
              <div className="dots-main">
                <img
                  className="black-dots object"
                  data-value="1"
                  src={BlackDotSvg}
                  alt="black-dots"
                />
                <img
                  className="yellow-square-frame object"
                  data-value="-2"
                  src={YellowSquare}
                  alt="yellow-square-frame"
                />
              </div>
              <div className="right-space">
                <div className="badge">
                  <img src={Pramod} alt="pramod" className="nairobi_img1"/>
                  
                 
                  <div className="text">
                    <div className="dolly">
                      <div className="digit" id="counter">
                        <h4
                          className="eight-digit count percent"
                          data-count="8"
                        >
                          0
                        </h4>
                      </div>
                      <p className="yer-expi">Years Of Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
    </>
  );
};
export default AboutSection;
