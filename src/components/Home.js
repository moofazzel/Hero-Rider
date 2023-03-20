import React from "react";

import img1 from "../assets/banner/img1.jpg";
import img3 from "../assets/banner/img3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const bannerData = [
    {
      img: img1,
      title: "Remarkable Network",
      subTitle:
        "VolunteerMatch is the largest network in the nonprofit world, with the most volunteers, nonprofits and opportunities to make a difference.",
    },

    {
      img: img3,
      title: "Remarkable Network",
      subTitle:
        "VolunteerMatch matches inspired people with inspiring causes. It's how volunteers and nonprofits connect to achieve remarkable outcomes.",
    },
  ];
  return (
    <section className="mb-12 w-full">
      <Swiper
        loop={true}
        autoplay={{ delay: 2500 }}
        speed={1200}
        spaceBetween={30}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
      >
        {bannerData.map((banner, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="text-center banner">
                <div className="img-gradient">
                  <img
                    className="h-[600px] xl:h-[800px] w-full rounded-md object-cover filter brightness-75"
                    alt="bannerImage"
                    src={banner.img}
                  />
                </div>

                <div className="text-white absolute flex-col justify-evenly transform -translate-y-1/2 right-5 left-5 top-1/2">
                  <h1 className="text-3xl md:text-6xl lg:text-7xl tracking-wide font-Anton mb-4">
                    {banner.title}
                  </h1>
                  <p className="w-[98%] lg:w-[60%] mx-auto tracking-wider">
                    {banner.subTitle}
                  </p>
                  <a href="#volunteer">
                    <button className="text-white tracking-[0.04rem] text-lg bg-[#F36A4F] px-6 py-2 mt-4 rounded-lg hover:bg-[#c2513b] transition-all duration-300">
                      Become Volunteer
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Banner;
