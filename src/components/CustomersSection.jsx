"use client";
import React from "react";
import CustomerCard from "./CustomerCard";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";

const CustomersSection = () => {
  return (
    <div className="">
      <h1 className="text-center md:text-5xl sm:text-4xl text-3xl font-bold">
        Our Happy Clients
      </h1>
      <div className="text-center text-slate-600 py-4">
        <p>We use only the best quality materials on the market in order to</p>
        <p>provide the best products to our patients.</p>
      </div>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 2.5,
            spaceBetween: 15,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        <SwiperSlide>
          <CustomerCard
            imgPath="/user1.png"
            imgAlt="user image"
            title="Thomas Daniel"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quod, at! Itaque quibusdam doloremque consectetur rerum suscipit vitae error rem voluptatem?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quod, at! Itaque quibusdam doloremque consectetur rerum suscipit vitae error rem voluptatem?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard
            imgPath="/user2.png"
            imgAlt="user2 image"
            title="Alena Alex"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quod, at! Itaque quibusdam doloremque consectetur rerum suscipit vitae error rem voluptatem?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quod, at! Itaque quibusdam doloremque consectetur rerum suscipit vitae error rem voluptatem?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard
            imgPath="/user3.png"
            imgAlt="user3 image"
            title="Thomas Edison"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quod, at! Itaque quibusdam doloremque consectetur rerum suscipit vitae error rem voluptatem?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quod, at! Itaque quibusdam doloremque consectetur rerum suscipit vitae error rem voluptatem?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard
            imgPath="/user2.png"
            imgAlt="user2 image"
            title="Alena Alex"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quod, at! Itaque quibusdam doloremque consectetur rerum suscipit vitae error rem voluptatem?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quod, at! Itaque quibusdam doloremque consectetur rerum suscipit vitae error rem voluptatem?"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomersSection;
