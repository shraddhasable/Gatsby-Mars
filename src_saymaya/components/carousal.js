import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={require('../images/dog1.jpg')} />
        </div>
        <div>
        <img src={require('../images/dog2.jpg')} />
        </div>
        <div>
        <img src={require('../images/dog3.jpg')} />
        </div>
        <div>
        <img src={require('../images/dog4.jpg')} />
        </div>
        <div>
        <img src={require('../images/dog1.jpg')} />
        </div>
        <div>
        <img src={require('../images/dog1.jpg')} />
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider