import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ColijalaImg3 from "../../assets/img/colijala/colijala3.jpg";

class ColijalaImageSlider extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1000,
      fade: true,
      autoplay: true,
      arrows: false,
    };

    return (
      <Slider {...settings} className="main_image_slider">
        
        <div>
          <img className="nairobi_img1" src={ColijalaImg3} alt="Slide 3" />
        </div>
      </Slider>
    );
  }
}

export default ColijalaImageSlider;
