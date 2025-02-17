"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const DeveloperSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote:
        "Developers are leveraging African service providers to build transformative solutions for SMEs and consumers.",
      name: "Osiloke",
      position: "CTO, Tutadoo",
      image: "/osiloke.png", // Replace with actual image path
    },
    {
      quote: "Innovation is driven by developers creating platforms that impact millions.",
      name: "Jane Doe",
      position: "Lead Engineer, FinTech Inc.",
      image: "/jane.png", // Replace with actual image path
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-[1200px] h-[507.63px] bg-[#F3F6FF] p-8 flex flex-col items-center mx-auto rounded-lg">
      <h2 className="text-3xl font-semibold flex items-center gap-2">
        We ❤️ Developers
      </h2>
      <div className="flex gap-8 mt-6">
        {/* Black Card */}
        <div className="w-[397.5px] h-[270.63px] bg-black text-white p-6 rounded-lg">
          <h3 className="text-5xl font-bold">100k</h3>
          <p className="mt-4 text-sm font-gray w-[337.5px] h-[120px]">
            <span className="font-bold">developers</span> are building platforms and products using <span className="font-bold">Services, Tools,
            APIs, and Integrations </span>from African service providers to reach over
            1 million SMEs and 1 billion customers with transformative,
            innovative solutions.
          </p>
        </div>

        {/* White Card - Carousel */}
        <div className="relative w-[397.5px] h-[270.63px] bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex items-center">
            <div className="bg-blue-500 text-white p-2 rounded-full">
              <Quote size={24} />
            </div>
            <button onClick={handlePrev} className="ml-auto p-2">
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNext} className="p-2">
              <ChevronRight size={24} />
            </button>
          </div>
            <p className="text-sm mt-4">
    &apos;Through Quikk, I was able to launch payments in days, not months. Quikk&apos;s security gives us peace of mind over our payments.&apos;
    </p>          <div className="flex items-center mt-4">
            <Image
              src="/images/cto.jpeg"
              alt={testimonials[activeIndex].name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="ml-3">
              <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
              <p className="text-sm text-gray-500">{testimonials[activeIndex].position}</p>
            </div>
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 ${index === activeIndex ? 'w-6 bg-blue-500' : 'w-2 bg-gray-400'} rounded-full mx-1`}
              ></div>
            ))}
          </div>
        </div>

        
      </div>
      {/* Button */}
      <button className="mt-6 w-[305px] h-[50px] border-2 border-[#6366F1] text-[#6366F1] font-semibold rounded-md flex items-center justify-center gap-2">
        Discover and start building now →
      </button>
    </div>
  );
};

export default DeveloperSection;
