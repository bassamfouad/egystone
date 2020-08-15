import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./about.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
class AboutSlider extends React.Component {
  constructor(Props) {
    super(Props);
  }
  componentDidMount() {}
  render() {
    const slides = [];
    const names = ["mai", "bassam", "fouad"];
    for (let i = 0; i < 3; i += 1) {
      slides.push(
        <SwiperSlide key={`slide=${i}`} tag="li">
          <div className="image">
            <img
              src={`https://picsum.photos/id/${i + 5}/500/300`}
              alt=""
              srcset=""
            />
          </div>
          <div className="titl">{names[i]}</div>
        </SwiperSlide>
      );
    }

    return (
      <div>
        <div id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div>
                  <Swiper
                    className="team-member img-fluid"
                    spaceBetween={50}
                    slidesPerView={1}
                    loop
                    tag="section"
                    wrapperTag="ul"
                    id="main"
                    navigation
                    EffectCoverflow
                    pagination>
                    {slides}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutSlider;
