import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pramod from "../../assets/img/mainpageimg/pramod.jpeg"
import Pramod2 from "../../assets/img/pramod2.png"

class MainImageSlider extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 10000,
      fade: true,
      autoplay: true,
      arrows: false,
    };

    return (
      <Slider {...settings} className="main_image_slider">
        <div>
          <img className="nairobi_img1" src={Pramod} alt="Slide 1" />
        </div>
        <div>
          <img className="nairobi_img1" src={Pramod2} alt="Slide 2" />
        </div>
      </Slider>
    );
  }
}

export default MainImageSlider;
