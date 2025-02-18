// "use client"; // ✅ Fix React hook error

// import { useEffect, useState } from "react";
// import { fetchCards } from "@/app/utils/fetchSafaricomCards";

// const SafaricomLists = () => {
//   const [cards, setCards] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const getCards = async () => {
//       setLoading(true);
//       const fetchedCards = await fetchCards();
//       setCards(fetchedCards);
//       setLoading(false);
//     };

//     getCards();
//   }, []);

//   const nextSlide = () => {
//     if (currentIndex < cards.length - 4) {
//       setCurrentIndex(currentIndex + 4);
//     } else {
//       setCurrentIndex(0); // Loop back to the first set of 4 cards
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 4);
//     } else {
//       setCurrentIndex(cards.length - 4); // Loop back to the last set of 4 cards
//     }
//   };

//   return (
//     <div className="relative w-[1440px] h-[611px] bg-[#F3F6FF] p-6">
//       <h2 className="text-2xl font-semibold mb-6">Safaricom Marketplace</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : cards.length === 0 ? (
//         <p>No cards available.</p>
//       ) : (
//         <div className="overflow-hidden">
//           {/* Carousel container */}
//           <div
//             className="flex transition-transform duration-500"
//             style={{
//               transform: `translateX(-${currentIndex * 306}px)`,
//             }}
//           >
//             {/* Render 4 cards at a time */}
//             {cards.map((card, index) => (
//               <div
//                 key={card.id}
//                 className="w-[306px] h-[228px] bg-white rounded-lg p-4 m-4 shadow-lg"
//               >
//                 {/* Card Content */}
//                 <div className="flex justify-between">
//                   <img
//                     src={card.logo_url} // Assuming logo_url field from Supabase
//                     alt="Logo"
//                     className="w-10 h-10 object-cover"
//                   />
//                   <button className="text-gray-400 hover:text-gray-600">❤️</button>
//                 </div>
//                 <h3 className="mt-2 text-xl font-bold">{card.title}</h3>
//                 <p className="mt-2 text-gray-700">{card.description}</p>
//                 <button
//                   className="mt-4 w-full py-2 px-4 rounded-md text-white"
//                   style={{
//                     backgroundColor: "#6366F1",
//                     opacity: "0.8",
//                   }}
//                 >
//                   <span style={{ color: "#6366F1", opacity: "0.8" }}>
//                     Mobile money
//                   </span>
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Navigation buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
//           >
//             {"<"}
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
//           >
//             {">"}
//           </button>

//           {/* Dots for carousel navigation */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {Array.from({ length: Math.ceil(cards.length / 4) }).map((_, index) => (
//               <div
//                 key={index}
//                 className={`w-3 h-3 rounded-full ${
//                   index === Math.floor(currentIndex / 4)
//                     ? "bg-[#6366F1]"
//                     : "bg-gray-300"
//                 }`}
//               ></div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SafaricomLists;




"use client"; // ✅ Fix React hook error

import { useEffect, useState } from "react";
import { fetchCards } from "@/app/utils/fetchSafaricomCards";

const SafaricomLists = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getCards = async () => {
      setLoading(true);
      const fetchedCards = await fetchCards();
      setCards(fetchedCards);
      setLoading(false);
    };

    getCards();
  }, []);

  const nextSlide = () => {
    if (currentIndex < cards.length - 4) {
      setCurrentIndex(currentIndex + 4);
    } else {
      setCurrentIndex(0); // Loop back to the first set of 4 cards
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4);
    } else {
      setCurrentIndex(cards.length - 4); // Loop back to the last set of 4 cards
    }
  };

  return (
<div className="relative w-[1280px] h-[611px] bg-[#F3F6FF] p-6 mt-[70px]">
<button
  className="w-[111px] h-[26px] rounded-2xl text-white text-sm font-medium flex items-center justify-center ml-[570px] mt-[30px]"
  style={{
    background: "linear-gradient(90deg, #8B5CF6, #6366F1, #D946EF)",
  }}
>
  Marketplace
</button>

  <h2 className="text-2xl font-semibold mt-[40px] ml-[255px]">Discover a range of digital services you can integrate with</h2>

  {loading ? (
    <p>Loading...</p>
  ) : cards.length === 0 ? (
    <p>No cards available.</p>
  ) : (
    <div className="flex justify-center">
      {/* Invisible wrapper div with fixed width and height */}
      <div className="w-[1200px] h-[347px] overflow-hidden mt-[30px] flex justify-center relative">
        
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute top-2 left-2 ml-[1100px] bg-[#B2B5B780] text-black p-2 rounded-full shadow-lg"
          style={{ width: '35.82732391357422px', height: '35.82732391357422px' }}
        >
          {"<"}
        </button>
        
        <button
  onClick={nextSlide}
  className="absolute top-2 right-2 bg-white text-black p-2 rounded-full shadow-lg"
  style={{ width: '35.82732391357422px', height: '35.82732391357422px' }}
>
  {">"}
</button>
          
        
  {/* Carousel container */}
<div
  className="flex transition-transform duration-500 mt-[80px]"
  style={{
    transform: `translateX(-${currentIndex * 306}px)`, 
    paddingRight: '158px',
  }}
>
  {/* Render 4 cards at a time */}
  {cards.map((card, index) => (
    <div
      key={card.id}
      className="w-[306px] h-[228px] bg-white rounded-lg p-4 m-4 shadow-lg"
    >
      {/* Card Content */}
      <div className="flex justify-between">
        <img
          src={card.logo_url} // Assuming logo_url field from Supabase
          alt="Logo"
          className="w-10 h-10 object-cover"
        />
        <button className="text-gray-400 hover:text-gray-600">❤️</button>
      </div>
      <h3 className="mt-2 text-xl font-bold">{card.title}</h3>
      <p className="mt-2 text-gray-700">{card.description}</p>

      <button
        className="mt-[8px] w-[81px] h-[20px] py-1 px-2 rounded-md text-white bg-[#6366F1] bg-opacity-20 flex items-center justify-center"
      >
        <span style={{ color: "#6366F1", fontSize: "9px", whiteSpace: "nowrap" }}>
          Mobile money
        </span>
      </button>
    </div>
  ))}
</div> 

{/* Pagination Dots - Add this below the carousel */}
<div className="flex justify-center mt-4">
  {[0, 1, 2].map((index) => (
    <div
      key={index}
      className={`w-3 h-3 mx-1 rounded-full ${
        index === Math.floor(currentIndex / 4) ? "bg-[#6366F1]" : "bg-gray-400"
      }`}
    ></div>
  ))}
</div>


        {/* Next Button */}
     
      </div>
    </div>
  )}
</div>

  );
};

export default SafaricomLists;
