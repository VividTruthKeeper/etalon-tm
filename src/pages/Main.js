// IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT COMPONENTS
import NewsTab from "../components/Main/NewsTab";
import DepartmentsTab from "../components/Main/DepartmentsTab";
import SitesTab from "../components/Main/SitesTab";

// IMPORT SWIPER MODULES
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

// IMPORT SWIPER STYLES
import "swiper/swiper.scss";

// IMPORT SLIDER IMAGES
import SliderIMG from "../img/sliderImg.jpg";
import SliderIMG_2 from "../img/secondSliderImg.jpg";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="main">
      <div className="slider">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Autoplay]}
          autoplay={({ delay: 3000 }, { disableOnInteraction: false })}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <div className="slider-img">
              <img src={SliderIMG} alt="ETALON" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-img">
              <img src={SliderIMG} alt="ETALON" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-img">
              <img src={SliderIMG} alt="ETALON" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="main-inner">
          <NewsTab />
          <div className="second-slider">
            <div className="tab-header">
              <h4 className="tab-header-text" id="tab-header-text">
                Объявления
              </h4>
              <div className="tab-header-line"></div>
            </div>
            <div className="slider">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y, Autoplay]}
                autoplay={({ delay: 3000 }, { disableOnInteraction: false })}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
              >
                <SwiperSlide className="swipe-slide">
                  <h2>Государственный эталонный центр</h2>
                  <div className="slider-img">
                    <img src={SliderIMG_2} alt="ETALON" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swipe-slide">
                  <h2>Государственный эталонный центр</h2>
                  <div className="slider-img">
                    <img src={SliderIMG_2} alt="ETALON" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swipe-slide">
                  <h2>Государственный эталонный центр</h2>
                  <div className="slider-img">
                    <img src={SliderIMG_2} alt="ETALON" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <DepartmentsTab />
          <SitesTab />
        </div>
      </div>
    </section>
  );
};

export default Main;
