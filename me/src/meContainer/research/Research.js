import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import data from "../../data.json";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";

import "swiper/css";
import "swiper/css/pagination";
import "./Research.css";

export default function Research() {
  return (
    <section className="research-section" id="research">
       <ScreenHeading
        title="Research & Publications"
        subHeading="Selected works and technical investigations"
      />

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="research-swiper"
      >
        {data.researchList.researchDetails.map((item, index) => (
          <SwiperSlide key={index} className="research-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="tags">
              {item.tags.map((tag, i) => (
                <span className="tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>
            <a
              className="btn download-btn"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Research
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
