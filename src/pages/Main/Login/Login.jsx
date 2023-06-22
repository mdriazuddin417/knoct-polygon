import React from "react";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { onBoards } from "../../../Data/onBoards";
import { google } from "../../../assets/image";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

export default function Login() {
  const navigation = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const onGetStarted = () => {
    // Handle "Get Started" button press
  };
  const handleSignIn = async () => {
    await signInWithGoogle();

    navigation("/");
  };

  return (
    <div className=" flex justify-center items-center flex-col h-[100vh]">
      <div className=" max-w-[700px] ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {onBoards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center mt-5">
                <div className="w-80 h-80">
                  <img
                    src={item.img}
                    alt="Slide"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="px-8 my-5">
                  <h2 className="text-[24px] font-bold text-center mb-3">
                    {item.title}
                  </h2>
                  <p className="text-[16px] font-semibold text-[#4F4F4F] text-center pb-5">
                    {item.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col justify-center items-center mt-7 max-w-[291px] mx-auto gap-3">
          <div className=" w-full">
            <button
              className="w-full text-black rounded-md duration-300  py-4 flex gap-4 bg-gray-300 hover:bg-gray-400 px-4 shadow"
              onClick={handleSignIn}
            >
              <img src={google} alt="Google Logo" className="w-6 h-6 mr-4" />
              <span className="text-lg font-medium">
                Google login with Knoct
              </span>
            </button>
          </div>
          <Link to={"/source"}>
            <button
              className="bg-transparent hover:text-gray-500 text-gray-700  duration-300  font-bold py-3 px-6 rounded-lg text-lg  w-full "
              onClick={onGetStarted}
            >
              Recovery wallet
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
