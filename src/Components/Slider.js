import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    };
    return (
      <Slider {...settings}>
        <div>
          <img src="https://i.imgur.com/c0pKMeL.jpg" width="100%" alt="Autumn Check Jacket banner"></img>
        </div>
        <div>
          <img src="https://i.imgur.com/s3VOM21.jpg" width="100%" alt="Girl Power printed shirt banner"></img>
        </div>
        <div>
          <img src="https://i.imgur.com/clnlaVH.jpg" width="100%" alt="Romantic Nandamade banner"></img>
        </div>
        <div>
          <img src="https://i.imgur.com/bNQXKM8.jpg" width="100%" alt="Monotoned leggings banner"></img>
        </div>
        <div>
          <img src="https://i.imgur.com/wsVnpZW.jpg" width="100%" alt="Demin banner"></img>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;