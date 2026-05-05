import React, { useEffect } from "react";
import SlickImage from "./SlickImage";
import MultiplicationSvg1 from "../../assets/img/svg/black-multipliction.svg";
import MultiplicationSvg2 from "../../assets/img/svg/yellow-multiplication.svg";
import HalfCircleSvg1 from "../../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../../assets/img/svg/half-circle-black.svg";


const MainPageSection = ({ data }) => {
  console.log(data);
  // circle and multiplication moving functionality
  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".object").forEach((move) => {
        const movingValue = move.getAttribute("data-value");
        const x = (e.clientX * movingValue) / 250;
        const y = (e.clientY * movingValue) / 250;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);
  return (
    <>
      <div className="row top-img">
        <div className="col-xl-6 col-lg-6 col-md-12 p-0">
          <div className="main_image_slider">
            <SlickImage data={data} />
          </div>
          <div className="multiplication-frame-main">
            <img
              className="black-multiplication object"
              data-value="-1"
              src={MultiplicationSvg1}
              alt="black-multipliction"
            />
            <img
              className="yellow-multiplication object"
              data-value="2"
              src={MultiplicationSvg2}
              alt="yellow-multiplication"
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 main-text-box">
          <div className="half-circle-main">
            <img
              className="half-circle-yellow object"
              data-value="-1"
              src={HalfCircleSvg1}
              alt="half-circle-yellow"
            />
            <img
              className="half-circle-black object"
              data-value="2"
              src={HalfCircleSvg2}
              alt="half-circle-black"
            />
          </div>
          <div className="main_text2">
            <h1>
              {data === "DeKoder" ? (
                <p
                  className="nairobi_text colijala-main-text"
                  data-aos="fade-up"
                >
                  DeKoder
                </p>
              ) : data === "Amex" ? (
                <p
                  className="nairobi_text colijala-main-text"
                  data-aos="fade-up"
                >
                  American Express
                </p>
              ) : (
                <p
                  className="nairobi_text colijala-main-text"
                  data-aos="fade-up"
                >
                  Allstate
                </p>
              )}
            </h1>
            {
              data==="DeKoder" ? <p className="design_text colijala-second-main-text">
              DeKoder is a startup that aims to supply energy (starting with
              gas) to domestic household acrossthe UK. Create a very simple yet
              stunning logotype and promo site that sets the brand of Entice
              Energy apart from the competitors like a fresh take on an already
              saturated area.
            </p> : (data === "Amex" ? <p className="design_text colijala-second-main-text">
              Amex is a startup that aims to supply energy (starting with
              gas) to domestic household acrossthe UK. Create a very simple yet
              stunning logotype and promo site that sets the brand of Entice
              Energy apart from the competitors like a fresh take on an already
              saturated area.
            </p> : <p className="design_text colijala-second-main-text">
              Allstate is a startup that aims to supply energy (starting with
              gas) to domestic household acrossthe UK. Create a very simple yet
              stunning logotype and promo site that sets the brand of Entice
              Energy apart from the competitors like a fresh take on an already
              saturated area.
            </p>)
            }
            
          </div>
        </div>
      </div>
    </>
  );
};
export default MainPageSection;
