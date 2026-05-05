import React from "react";
import YellowSquare from "../../assets/img/svg/yellow-square-frame.svg";
import BlackDotSvg from "../../assets/img/svg/black-dots.svg";
import Chetan from "../../assets/img/chetan.jpeg";
import Lohith from "../../assets/img/lohith.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevArrowImg from "../../assets/img/svg/pre-arrow.svg";
import nextArrowImg from "../../assets/img/svg/next-arrow.svg";

class Testimonial extends React.Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
    };
    return (
      <>
        <div className="position-relative">
          <div className="yellow_circle"></div>
          <h2 className="about-text" data-aos="fade-up">
            Testimonial
          </h2>

          <div className="dots-square2">
            <img
              className="dots-img1 object"
              data-value="1"
              src={BlackDotSvg}
              alt="dots-img"
            />
            <img
              className="yellow-square-frame2 object"
              data-value="-2"
              src={YellowSquare}
              alt="yellow-square-frame"
            />
          </div>
        </div>
        <Slider {...settings} className="testimonial_slider">
          <div>
            <div className="left-right-space">
              <p className="slider-text">
                Pramod is an extremely valuable person to have in your network.
                His responses are timely, value-added, and he’s opened to
                working with new people. We worked together in building webpage
                for a startup he's is highly creative and a very easy-going
                person to work with.
                <br />
                Pramod has helped me facilitate introductions for others in my
                network on multiple occasions. I highly recommend him!
              </p>
            </div>
            <div className="emoji-img-main">
              <img className="emoji" src={Chetan} alt="Chetan" />
            </div>
            <h3 className="requel">Chetan K S</h3>
            <h4 className="ceo">Staff Engineer, Flowserve Corporation</h4>
          </div>

          <div>
            <div className="left-right-space">
              <p className="slider-text">
                Pramod is a joy to work with. He handled our Web page assignment
                with aplomb and diligence, displaying the ability to follow
                creative direction while adding his own creative input in a
                diplomatic and useful way. His work led to an increase in
                click-troughs. I recommend him to anyone who needs design and
                Website work.
              </p>
            </div>
            <div className="emoji-img-main">
              <img className="emoji" src={Lohith} alt="Lohith" />
            </div>
            <h3 className="requel">LOHITH R S</h3>
            <h4 className="ceo">Senior Software Developer , IdentityNest</h4>
          </div>

        </Slider>
        <img
          className="singal-dots-img object"
          data-value="3"
          src={BlackDotSvg}
          alt="dots-img"
        />
      </>
    );
  }
}
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <span className={className} onClick={onClick}>
      <img src={prevArrowImg} alt="Previous" />
    </span>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <span className={className} onClick={onClick}>
      <img src={nextArrowImg} alt="Next" />
    </span>
  );
};
export default Testimonial;
