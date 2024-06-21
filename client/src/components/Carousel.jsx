import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { IoFootball } from "react-icons/io5";
import { TbTrekking } from "react-icons/tb";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { MdVolunteerActivism } from "react-icons/md";

const Testimonials = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      icon: <IoFootball />,
      company: "Games",
    },
    {
      id: 2,
      icon: <TbTrekking />,
      company: "Trekking",
    },
    {
      id: 3,
      icon: <GiFullMotorcycleHelmet />,
      company: "Motorcycle Ride",
    },
    {
      id: 4,
      icon: <MdVolunteerActivism />,
      company: "Volunteer",
    },
  ];

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const interval = setInterval(() => {
      if (swiper) {
        swiper.slideNext();
      }
    }, 3000); // Change autoplay interval as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="myReview">
      <section className="wellwishers-contain">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          loop={true}
          speed={2000}
          spaceBetween={30}
          className="h-[20rem]"
        >
          {testimonials.map((item) => (
            <SwiperSlide className="flex justify-center items-center" key={item.id}>
              <div
                className="bg-white flex justify-center items-center p-10 px-24 mt-10 mx-40 shadow-xl rounded-lg hover:bg-sky-100 hover:scale-110 cursor-pointer transition duration-200 ease-in  transform                         hover:-translate-y-1 shadow-blue-200  w-fit "
              >
                <div className="flex flex-col justify-center items-center">
                  <p className="scale-150 text-[#6522ad] ">{item.icon}</p>
                  <h5 className="font-semibold mt-5 text-[#352f36] sm:text-lg text-xs">
                    {item.company}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
