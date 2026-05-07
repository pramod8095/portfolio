import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Allstate from "../../assets/img/portfoliosection/allstate.jpg"
import Amex from "../../assets/img/portfoliosection/american_express.png"
import Dekoder from "../../assets/img/portfoliosection/dekoder.png"

class ColijalaImageSlider extends React.Component {
  render(...props) {
    const settings = {
      infinite: true,
      speed: 1000,
      fade: true,
      autoplay: true,
      arrows: false,
    };

    return (
      <Slider {...settings} className="main_image_slider">
        {console.log(this.props.data)}
        <div>
          <img className="nairobi_img1" src={(this.props.data === "Allstate"? Allstate : (this.props.data === "DeKoder" ? Dekoder : Amex))} alt="Slide 3" />
        </div>
      </Slider>
    );
  }
}

export default ColijalaImageSlider;
