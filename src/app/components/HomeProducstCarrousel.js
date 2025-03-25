"use client";
import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowForwardIosOutlined,
  ArrowRight,
  ArrowRightAltOutlined,
} from "@mui/icons-material";

export default function HomeProducstCarrousel() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent:'center',
        alignItems:'center',
        width: "100%",
        height: "auto",
      }}
    >
      {/* <Typography variant='h4' ml={2} mt={2}>Products</Typography> */}
      <Box
      sx={{
      backgroundColor:'red',
      display:'flex',
      width:'100%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      }}>
        <Swiper
          slidesPerView={4}
          spaceBetween={300}
          // centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1, // mobile < 640px
            },
            824: {
              slidesPerView: 3, // small tablets
              spaceBetween:10
            },
            1024: {
              slidesPerView: 4, // desktops
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <SwiperSlide>
              <Image
                src="/chairs/chair1.jpg"
                alt="carrousel image"
                height={300}
                width={300}
              //  fill={true}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50%, 33%"
                objectFit="contain"
              />
              {/* <Box sx={{display:'flex',alignItems:'center',gap:1}}>
          <Link href='/'>Title</Link>
          <ArrowForwardIosOutlined fontSize='small'/>
         </Box> */}
            </SwiperSlide>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/coffee-tables/ctable2.jpg"
              alt="carrousel image"
              height={300}
              width={300}
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/chairs/chair2.jpg"
              alt="carrousel image"
              height={300}
              width={300}
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/coffee-tables/ctable4.jpg"
              alt="carrousel image"
              height={300}
              width={300}
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/coffee-tables/ctable1.jpg"
              alt="carrousel image"
              height={300}
              width={300}
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/dining-tables/dtable1.jpg"
              alt="carrousel image"
              height={300}
              width={300}
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/sofas/sofa9.jpg"
              alt="carrousel image"
              height={300}
              width={300}
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/dining-tables/dtable4.jpg"
              alt="carrousel image"
              height={300}
              width={300}
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/sofas/sofa1.jpg"
              alt="carrousel image"
              height={300}
              width={300}
              objectFit="cover"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}
