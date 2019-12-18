import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React from "react"
import Slider from "react-slick"
import "./carousal.css"
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
          <img src={require('../images/carousel-header_1280x506.jpg')}  className="banner-img" alt="" />
        </div>
        <div>
        <img src={require('../images/small-dogs-live-large.jpg')}   className="banner-img" alt=""/>
        </div>
        <div>
        <img src={require('../images/little-pouch.jpg')}   className="banner-img" alt="" />
        </div>
        <div>
        <img src={require('../images/puppy-basketball.jpg')}  className="banner-img" alt="" />
        </div>
        <div>
        <img src={require('../images/feed-the-good-tug-of-war.jpg')}   className="banner-img"  alt=""/>
        </div>
        <div>
        <img src={require('../images/puppy-bowl-carousel-image_1280x506.jpg')}  className="banner-img" alt="" />
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider