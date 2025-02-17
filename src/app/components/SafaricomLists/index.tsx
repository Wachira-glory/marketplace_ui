
"use client";

import { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from 'next/image';


// Slide Data
const slides = [
  {
    id: 1,
    image: "/images/landingpage_bckground.jpeg",
    title: (
      <>
        Discover <span className="text-[#F6FA83]">digital</span> services needed to build your business in {" "}
        <span className="text-[#FFBA08]">Africa</span>
      </>
    ),
    description: "A wide range of services and integrations available",
    buttonGradient: "linear-gradient(to right, #6366F1, #8B5CF6, #D946EF)",
    bgColor: "#F3F6FF",
  },
  {
    id: 2,
    image: "/images/second_image.jpeg",
    title: (
      <>
        Empower <span className="text-[#3CA55C]">your business</span> with seamless payments
      </>
    ),
    description: "Fast and secure transactions for your business growth",
    buttonGradient: "linear-gradient(to right, #3CA55C, #B5AC49)",
    bgColor: "#FFFFFF",
  },
];

const BlackDiv = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);

  return (
    <div>
      {/* Top Black Bar */}
      <div className="w-full h-16 bg-black flex items-center justify-between px-16">
        {/* Logo */}
        <Image src="/images/quikklogo.svg" alt="Logo" className="w-12 h-12" />

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="flex items-center bg-white text-black px-4 py-2 rounded-lg border border-black w-[193px] h-[36px]">
            <MdOutlineAccountCircle className="text-xl" />
            <span className="text-[14px] ml-2">Developer Portal</span>
          </button>

          <button className="flex items-center bg-[#6366f1] text-white px-4 py-2 rounded-lg w-[136px] h-[36px]">
            <span className="text-xl">📞</span>
            <span className="text-[14px] ml-2">Book a Call</span>
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="mt-8 bg-white p-8 rounded-lg h-[564px] mx-auto relative">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <span className="text-[#6366F1] text-[24px]">Forge</span>
          <span className="text-[24px]">Marketplace</span>
          <Image src="/images/Quikk.png" className="w-[36px] h-[19px]" alt="Quikk Logo" />
        </div>

        {/* Carousel */}
        <div
          className="relative w-[1200px] h-[448px] mx-auto rounded-lg overflow-hidden"
          style={{ background: slides[currentIndex].bgColor }}
        >
          {/* Background Image */}
          <Image
            src={slides[currentIndex].image}
            alt="Carousel"
            className="w-full h-full object-cover rounded-lg absolute inset-0 opacity-30"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-8">
            <h1 className="text-4xl md:text-5xl font-bold">{slides[currentIndex].title}</h1>
            <p className="text-lg md:text-xl mt-6">{slides[currentIndex].description}</p>

            {/* Browse Collection Button */}
            <button
              className="flex items-center text-white px-6 py-2 rounded-lg mt-8"
              style={{ background: slides[currentIndex].buttonGradient }}
            >
              <CiSearch className="text-xl" />
              <span className="ml-2">Browse Collection</span>
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
            onClick={prevSlide}
          >
            <ArrowLeft size={24} className="text-white" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
            onClick={nextSlide}
          >
            <ArrowRight size={24} className="text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-[9px] h-[9px] rounded-full ${index === currentIndex ? "bg-[#6366F1] w-[43px]" : "bg-gray-300"}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackDiv;
