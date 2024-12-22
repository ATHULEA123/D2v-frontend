import { Button, Col } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { Logo } from "../../assets/constant";
import { RiUserLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronRight,BsChevronLeft} from "react-icons/bs";

import {
  moodboardone,
  moodboardtwo,
  moodboardthree,
  moodboardfour,
  moodboardfive,
  carosuel,
} from "../../assets/constant";

const UsersideUpdate = () => {
  // Define visible and hidden images
  const visibleImages = [moodboardone, moodboardtwo, moodboardthree, moodboardfour];
  const hiddenImages = [carosuel,moodboardfive, moodboardthree];
  const allImages = [...visibleImages, ...hiddenImages];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  // Function to handle image changes
  const changeImage = (direction) => {
    const newIndex = (currentIndex + direction + allImages.length) % allImages.length;
    setCurrentIndex(newIndex);
  };

  // Open Carousel
  const openCarousel = (startIndex = 0) => {
    setCurrentIndex(startIndex);
    setIsCarouselOpen(true);
  };

  // Close Carousel
  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  return (
    <>
      {/* Header Section */}
      <Header className="container ant-header flex-row align-middle px-12">
        <Col span={10} className="px-12 py-3">
          <Logo />
        </Col>
        <Col className="flex items-center ">
          <Button className="primary-btn-active btn-logout">
            <span className="text-lg">
              <RiUserLine />
            </span>
            Logout
          </Button>
        </Col>
      </Header>

      {/* Main Content */}
      <div className="container mx-auto">
        <div className="pt-10 md:pt-20 pb-7">
          <h2 className="text-[24px] font-[600] text-[#996830cc] sm:ml-16 leading-[20px] tracking-widest">
            <span className="border-t-2 border-[#996830cc] w-14 inline-block mr-2 mb-1.5"></span>
            Moodboard Design
          </h2>
        </div>

        {/* Image Grid */}
        <div className="flex flex-col justify-center items-center mb-10 relative">
          <div className="flex">
            {/* First Image */}
            <div className="w-[660px] h-[360px] rounded-lg flex justify-center items-center">
              <img
                src={visibleImages[0]}
                alt="Moodboard 1"
                className="object-cover w-full h-full"
                onClick={() => openCarousel(0)}
              />
            </div>

            {/* Second Image */}
            <div className="w-[440px] h-[360px] rounded-lg flex justify-center items-center">
              <img
                src={visibleImages[1]}
                alt="Moodboard 2"
                className="object-cover w-full h-full"
                onClick={() => openCarousel(1)}
              />
            </div>
          </div>

          <div className="flex relative">
            {/* Third Image */}
            <div className="w-[500px] h-[320px] rounded-lg ">
              <img
                src={visibleImages[2]}
                alt="Moodboard 3"
                className="object-cover w-full h-full"
                onClick={() => openCarousel(2)}
              />
            </div>

            {/* Fourth Image */}
            <div className=" w-[380px] h-[320px] rounded-lg ">
              <img
                src={visibleImages[3]}
                alt="Moodboard 4"
                className="object-cover w-full h-full"
                onClick={() => openCarousel(3)}
              />
            </div>

            {/* Hidden Image */}
            <div className="w-[220px] h-[320px]  ">
              <img
                src={hiddenImages[0]}
                alt="Hidden Moodboard"
                className=" object-cover w-full h-full brightness-[.2] contrast-50 "
                onClick={() => openCarousel(4)}
              />
              <span
                className="absolute right-[97px] bottom-[145px] text-white text-[34px] leading-[20px] font-normal"
              >
                +{hiddenImages.length}
              </span>
            </div>
          </div>
        </div>

        {/* Full-Screen Carousel */}
        {isCarouselOpen && (
          <div className="fixed inset-0 bg-white  z-50 flex justify-center items-center">
            <button
              className="absolute top-4 right-4 text-white text-lg"
              onClick={closeCarousel}
            >
              <span className=" font-[500] text-[28px] text-black mr-32 mt-32"><AiOutlineClose /></span>
            </button>
            <div className="flex justify-center items-center">
              {/* Previous Button */}
              <button
                className="text-[44px] text-[#996830] p-2 rounded-full "
                onClick={() => changeImage(-1)}
              >
                <BsChevronLeft />
              </button>

              {/* Carousel Image */}
              <div className="shadow-lg rounded-lg overflow-hidden">
                <img
                  src={allImages[currentIndex]}
                  alt="Carousel"
                  className="w-[900px] h-[600px] object-cover"
                />
              </div>

              {/* Next Button */}
              <button
                className="text-[44px] text-[#996830] p-2 rounded-full "
                onClick={() => changeImage(1)}
              >
               <BsChevronRight />
              </button>
            </div>
          </div>
        )}

        {/* Assigned Architect Section */}
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="font-[400] text-[24px] leading-[32px] mb-8">
            Assigned Architect : Sivakumar P S
          </h1>
          <p className="font-[400] text-[20px] leading-[32px] mb-4">
            For clarifications and remarks :
          </p>
          <Button className="primary-btn-active btn-contact py-6 px-16 font-[500] text-[20px] leading-[32px] rounded-md">
            <span className="font-[500] text-[20px] leading-[32px]">
              <FiPhoneCall />
            </span>
            CONTACT
          </Button>
        </div>
      </div>
    </>
  );
};

export default UsersideUpdate;
