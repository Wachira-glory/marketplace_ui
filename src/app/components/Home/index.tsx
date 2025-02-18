// import exp from "constants";
// import { MdOutlineAccountCircle } from "react-icons/md";

// const BlackDiv = () => {
//   return (
//     <div>
//       <div className="w-full h-16 bg-black">
//         <div className="flex items-center ml-16 gap-[515px]">
//           {/* Image on the left with margin */}
//           <img src="/images/quikklogo.svg" alt="Logo" className="w-12 h-12 mr-4 mt-[8px]" />



//           {/* Buttons on the right */}
//           <div className="flex space-x-4 items-center ml-64">
//             {/* Developer Portal Button */}
//             <button className="flex items-center bg-white text-black px-4 py-2 rounded-lg space-x-2 border border-black w-[193px] h-[36px]">
//               <span className="text-xl"><MdOutlineAccountCircle />              </span> {/* Icon for Developer Portal */}
//               <span className="text-[14px]">Developer Portal</span>
//             </button>

//             {/* Book a Call Button */}
//             <button className="flex items-center bg-[#6366f1] text-white px-4 py-2 rounded-lg space-x-2 border-black w-[136px] h-[36px]"><span className="text-xl">📞</span> {/* Call Icon */}
//             <span className="text-[14px]">Book a call</span></button>                      
          
//           </div>
//         </div>
//       </div>

//       {/* Rectangle with color #f3f6ff */}
//       <div className="mt-8 bg-white p-8 rounded-lg h-564 ml-8 relative">
//         {/* Content inside the rectangle */}
//         <span className="text-[#F6FA83] text-[24px]">Forge</span> <span  className="font-bold text-[24px]">Marketplace</span> <span>Quikk</span>

//         {/* Image with text on top */}
//         <div className="relative">
//           <img
//             src="/images/landingpage_bckground.jpeg"
//             alt="Logo"
//             className="w-[1200px] h-[448px] mr-4 rounded-lg opacity-70 grayscale"
//           />

//           {/* Overlay Text */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white space-y-4">
//           <div className="w-[950px]">

//           <h1 className="text-4xl md:text-5xl font-bold">
//               Discover <span className="text-[#F6FA83]">digital</span>  services needed to build your business in <span className="text-[#FFBA08] ">Africa</span> 
//             </h1>
          
           
//             <p className="text-lg md:text-xl">
//               A wide range of services and integrations available
//             </p>

//             {/* Browse Collection Button */}
           
//             </div>


//             <div className="ml-[354px] mb-[55px]">
//             <button className="flex items-center bg-[#6366f1] text-white px-6 py-2 rounded-lg mb-[72px] space-x-2 ">
//               <span className="text-xl">🔍</span> {/* Search Icon */}
//               <span >Browse Collection</span>
//             </button>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlackDiv;


// "use client"


// import { useState } from "react";
// import { MdOutlineAccountCircle } from "react-icons/md";
// import { CiSearch } from "react-icons/ci";
// import { ArrowRight, ArrowLeft } from "lucide-react";

// const BlackDiv = () => {
//   const slides = [
//     {
//       id: 1,
//       image: "/images/landingpage_bckground.jpeg",
//       title: (
//         <>
//           Discover <span className="text-[#F6FA83]">digital</span> services needed to build your business in {" "}
//           <span className="text-[#FFBA08]">Africa</span>
//         </>
//       ),
//       description: "A wide range of services and integrations available",
//       buttonGradient: "linear-gradient(to right, #6366F1, #8B5CF6, #D946EF)",
//       bgColor: "#F3F6FF",
//     },
//     {
//       id: 2,
//       image: "/images/second_image.jpeg",
//       title: (
//         <>
//           Empower <span className="text-[#3CA55C]">your business</span> with seamless payments
//         </>
//       ),
//       description: "Fast and secure transactions for your business growth",
//       buttonGradient: "linear-gradient(to right, #3CA55C, #B5AC49)",
//       bgColor: "#FFFFFF",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div>
//       {/* Top Black Bar */}
//       <div className="w-full h-16 bg-black">
//         <div className="flex items-center ml-16 gap-[515px]">
//           {/* Logo */}
//           <img src="/images/quikklogo.svg" alt="Logo" className="w-12 h-12 mr-4 mt-[8px]" />

//           {/* Buttons */}
//           <div className="flex space-x-4 items-center ml-64">
//             {/* Developer Portal Button */}
//             <button className="flex items-center bg-white text-black px-4 py-2 rounded-lg space-x-2 border border-black w-[193px] h-[36px]">
//               <span className="text-xl">
//                 <MdOutlineAccountCircle />
//               </span>
//               <span className="text-[14px]">Developer Portal</span>
//             </button>

//             {/* Book a Call Button */}
//             <button className="flex items-center bg-[#6366f1] text-white px-4 py-2 rounded-lg space-x-2 border-black w-[136px] h-[36px]">
//               <span className="text-xl">📞</span>
//               <span className="text-[14px]">Book a Call</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Section */}
//       <div className="mt-8 bg-white p-8 rounded-lg h-[564px] ml-8 relative">
//         <div className="flex items-center space-x-4">
//           <span className="text-[#6366F1] text-[24px]">Forge</span>
//           <span className="text-[24px]">Marketplace</span>
//           <span>
//             <img src="/images/Quikk.png" className="w-[36.03px] h-[19.31px]" />
//           </span>
//         </div>

//         {/* Image with Carousel */}
//         <div className="relative w-[1200px] h-[448px] mx-auto rounded-lg overflow-hidden" style={{ background: slides[currentIndex].bgColor }}>
//           <img
//             src={slides[currentIndex].image}
//             alt="Carousel"
//             className="w-full h-full object-cover rounded-lg absolute inset-0"
//             style={{ opacity: 0.1 }}
//           />

//           {/* Overlay Content */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white space-y-4">
//             <div className="w-[950px]">
//               <h1 className="text-4xl md:text-5xl font-bold">{slides[currentIndex].title}</h1>
//               <p className="text-lg md:text-xl mt-6">{slides[currentIndex].description}</p>
//             </div>

//             {/* Browse Collection Button */}
//             <div className="ml-[325px]">
//               <button className="flex items-center text-white px-6 py-2 rounded-lg space-x-2 mt-[90px]" style={{ background: slides[currentIndex].buttonGradient }}>
//                 <span className="text-xl">
//                   <CiSearch />
//                 </span>
//                 <span>Browse Collection</span>
//               </button>
//             </div>
//           </div>

//           {/* Navigation Arrows */}
//           <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 p-2 rounded-full" onClick={prevSlide}>
//             <ArrowLeft size={24} className="text-white" />
//           </button>
//           <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 p-2 rounded-full" onClick={nextSlide}>
//             <ArrowRight size={24} className="text-white" />
//           </button>

//           {/* Carousel Dots */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {slides.map((_, index) => (
//               <div key={index} className={`w-[9px] h-[9px] rounded-full ${index === currentIndex ? "bg-[#6366F1] w-[43.2px]" : "bg-gray-300"}`}></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlackDiv;






// "use client";
// import { MdOutlineAccountCircle } from "react-icons/md";
// import { CiSearch } from "react-icons/ci";
// import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
// import { useState } from "react";

// const carouselData = [
//   {
//     image: "/images/landingpage_bckground.jpeg",
//     heading: "Discover digital services needed to build your business in Africa",
//     subheading: "A wide range of services and integrations available",
//     buttonText: "Browse Collection",
//     buttonGradient: "linear-gradient(to right, #6366F1, #8B5CF6, #D946EF)"
//   },
//   {
//     image: "/images/second_carousel.jpeg",
//     heading: "Empowering businesses with seamless integrations",
//     subheading: "Get started with our easy-to-use API solutions",
//     buttonText: "Get Started",
//     buttonGradient: "linear-gradient(to right, #3CA55C, #B5AC49)"
//   }
// ];

// const BlackDiv = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselData.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
//   };

//   return (
//     <div>
//       {/* Top Black Bar */}
//       <div className="w-full h-16 bg-black flex items-center justify-between px-16">
//         {/* Logo */}
//         <img src="/images/quikklogo.svg" alt="Logo" className="w-12 h-12" />

//         {/* Buttons */}
//         <div className="flex space-x-4 items-center">
//           {/* Developer Portal Button */}
//           <button className="flex items-center bg-white text-black px-4 py-2 rounded-lg space-x-2 border border-black w-[193px] h-[36px]">
//             <MdOutlineAccountCircle className="text-xl" />
//             <span className="text-[14px]">Developer Portal</span>
//           </button>
          
//           {/* Book a Call Button */}
//           <button className="flex items-center bg-[#6366F1] text-white px-4 py-2 rounded-lg space-x-2 border-black w-[136px] h-[36px]">
//             📞 <span className="text-[14px]">Book a Call</span>
//           </button>
//         </div>
//       </div>

//       {/* Main Section */}
//       <div className="mt-8 bg-[#F3F6FF] p-8 rounded-lg h-[564px] ml-8 relative">
//         <div className="flex items-center space-x-4">
//           <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent text-[24px]">
//             Forge
//           </span>
//           <span className="text-[24px]">Marketplace</span>
//           <img src="/images/Quikk.png" className="w-[36.03px] h-[19.31px]" />
//         </div>

//         {/* Carousel */}
//         <div className="relative w-[1200px] h-[448px] mx-auto mt-6 overflow-hidden">
//           <img
//             src={carouselData[currentSlide].image}
//             alt="Carousel"
//             className="w-full h-full object-cover rounded-lg"
//             style={{ opacity: 0.2 }}
//           />
          
//           {/* Overlay Text */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white space-y-4">
//             <div className="w-[950px]">
//               <h1 className="text-4xl md:text-5xl font-bold">{carouselData[currentSlide].heading}</h1>
//               <p className="text-lg md:text-xl mt-4">{carouselData[currentSlide].subheading}</p>
//             </div>
            
//             <button
//               className="flex items-center text-white px-6 py-2 rounded-lg space-x-2 mt-6"
//               style={{ background: carouselData[currentSlide].buttonGradient }}
//             >
//               <CiSearch className="text-xl" />
//               <span>{carouselData[currentSlide].buttonText}</span>
//             </button>
//           </div>

//           {/* Navigation Arrows */}
//           <button onClick={prevSlide} className={`absolute top-1/2 left-4 transform -translate-y-1/2 p-2 text-white bg-gray-700 rounded-full ${currentSlide === 0 ? 'hidden' : ''}`}>
//             <FaChevronLeft size={24} />
//           </button>
//           <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 text-white bg-gray-700 rounded-full">
//             <FaChevronRight size={24} />
//           </button>

//           {/* Carousel Dots */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {carouselData.map((_, index) => (
//               <div
//                 key={index}
//                 className={`w-[9px] h-[9px] rounded-full ${index === currentSlide ? 'bg-[#6366F1] w-[43.2px]' : 'bg-gray-300'}`}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlackDiv;


"use client";

import { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

// Slide Data
const slides = [
  {
    id: 1,
    image: "/images/landingpage_bckground.jpeg",
    title: (
      <>
        Discover <span className="text-[#F6FA83]">digital</span> services needed to build your business in{" "}
        <span className="text-[#FFBA08]">Africa</span>
      </>
    ),
    description: "A wide range of services and integrations available",
    buttonGradient: "linear-gradient(to right, #6366F1, #8B5CF6, #D946EF)",
    bgColor: "#F3F6FF",
  },
  {
    id: 2,
    image: "/images/secondlandingpageimage.png",
    title: (
      <>
        Empower <span className="text-[#3CA55C]">your business</span> with seamless payments
      </>
    ),
    description: "Fast and secure transactions for your business growth",
    buttonGradient: "linear-gradient(to right, #3CA55C, #B5AC49)",
    bgColor: "#FFFFFF",
    gradient: "linear-gradient(to right, #00467F, #A5CC82)", // Add this line for the gradient

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
        <img src="/images/quikklogo.svg" alt="Logo" className="w-12 h-12" />

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
      <div className=" bg-[#F3F6FF] p-8 rounded-lg h-[564px] mx-auto relative">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <span className="text-[#6366F1] text-[24px]">Forge</span>
          <span className="text-[24px]">Marketplace</span>
          <img src="/images/Quikk.png" className="w-[36px] h-[19px]" alt="Quikk Logo" />
        </div>

        {/* Carousel */}
        <div
  className="relative w-[1200px] h-[448px] mx-auto rounded-lg overflow-hidden"
  style={{ background: slides[currentIndex].bgColor }}
>
  {/* Background Image */}
  <img
    src={slides[currentIndex].image}
    alt="Carousel"
    className="w-[1200px] h-[448px] object-cover rounded-lg t-[54px]"
  />
  {/* Blue Overlay with linear gradient and 40% opacity */}
  <div
    className="absolute inset-0"
    style={{
      background: "linear-gradient(to right, #2B5876, #4E4376)",
      opacity:0.9,
    }}
  ></div>

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
</div>


<div className="absolute inset-0 flex justify-between items-center px-4">
{currentIndex === 0 ? (
          <button
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 p-2 rounded-full"
            onClick={nextSlide}
          >
            <span className="text-black text-2xl">&gt;</span> {/* Greater than symbol */}
          </button>
        ) : (
          <>
            <button
              className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 p-2 rounded-full"
              onClick={prevSlide}
            >
              <span className="text-black text-2xl">&lt;</span> {/* Less than symbol */}
            </button>
            <button
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 p-2 rounded-full"
              onClick={nextSlide}
            >
              <span className="text-black text-2xl">&gt;</span> {/* Greater than symbol */}
            </button>
          </>
        )}
</div>





{/* Dots Indicator */}
<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
  {slides.map((_, index) => (
    <div
      key={index}
      className={`w-[9px] h-[9px] rounded-full ${index === 0 ? "w-[43px]" : "w-[9px]"} ${index === currentIndex ? "bg-[#6366F1]" : "bg-gray-300"}`}
    ></div>
  ))}
</div>


      </div>
    </div>
  );
};

export default BlackDiv;


