// export default function MultiActionAreaCard() {
//     return (
//       <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
//         <h3>Featured Providers</h3>
//         <p>Loading technology companies and startups offering digital services</p>
//         <div className="cursor-pointer">
//           <img
//             className="w-full h-36 object-cover"
//             src="/static/images/cards/contemplative-reptile.jpg"
//             alt="green iguana"
//           />
//           <div className="p-4">
//             <h5 className="text-xl font-semibold">Lizard</h5>
//             <p className="text-gray-600 text-sm mt-2">
//               Lizards are a widespread group of squamate reptiles, with over 6,000
//               species, ranging across all continents except Antarctica.
//             </p>
//           </div>
//         </div>
//         <div className="p-4 border-t flex justify-end">
//           <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
//             Share
//           </button>
//         </div>
//       </div>
//     );
//   }
  



// export default function MultiActionAreaCard() {
//     // Card data
//     const cards = [
//       {
//         title: "Pezesha",
//         description:
//           "Pezesha enables SMEs & institutions with access to affordable credit & other financial services through our embedded finance infrastructure.",
//         image: "images/pezesha_logo.png",
//       },
//       {
//         title: "IPSL",
//         description:
//           "IPSL is a leading provider of financial services APIs, catering to the banking industry. PesaLink enables realtime transfer of funds from one bank account to another.",
//         image: "images/pesalink.png",
//       },
//       {
//         title: "NSE",
//         description:
//           "NSE is a leading African securities exchange, providing a platform for trading of securities and derivatives operating the Capital Markets Authority of Kenya.",
//         image: "images/nse_logo.png",
//       },
//       {
//         title: "Pezesha",
//         description:
//           "Pezesha enables SMEs & institutions with access to affordable credit & other financial services through our embedded finance infrastructure.",
//         image: "images/lipachat_logo.png",
//       },
//     ];
  
//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="w-[274.62px] h-[253.89px] bg-white border border-black rounded-2xl shadow-md flex flex-col justify-between"
//           >
//             {/* Image */}
//             <div className="w-full h-36 flex justify-center items-center">
//               <img
//                 className="w-[170.24px] h-[48.55px] object-cover rounded-t-2xl"
//                 src={card.image}
//                 alt={card.title}
//               />
//             </div>
  
//             {/* Text Content */}
//             <div className="text-center px-4 py-2">
//               <h5 className="text-xl font-semibold">{card.title}</h5>
//               <p className="text-gray-600 text-sm">{card.description}</p>
//             </div>
  
//             {/* Button */}
//             <div className="flex justify-center pb-4">
//               <button className="flex items-center gap-2 border border-black text-black px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition text-[#6366ff]">
//                 Discover Products
//                 <span>→</span>
//               </button>
//             </div>
//           </div>
//         ))}


//         <h3>Browse By Category</h3>
//         <p>Grouping of the APIs Based on Business Needs</p>
        


//       </div>
//     );
//   }



import { ArrowRight, ChevronRight } from "lucide-react"; // Import Next Icon

export default function MultiActionAreaCard() {
  // Card data
  const cards = [
    {
      title: "Pezesha",
      description:
        "Pezesha enables SMEs & institutions with access to affordable credit & other financial services through our embedded finance infrastructure.",
      image: "images/pezesha_logo.png",
    },
    {
      title: "IPSL",
      description:
        "IPSL is a leading provider of financial services APIs, catering to the banking industry. PesaLink enables realtime transfer of funds from one bank account to another.",
      image: "images/pesalink.png",
    },
    {
      title: "NSE",
      description:
        "NSE is a leading African securities exchange, providing a platform for trading of securities and derivatives operating the Capital Markets Authority of Kenya.",
      image: "images/nse_logo.png",
    },
    {
      title: "Pezesha",
      description:
        "Pezesha enables SMEs & institutions with access to affordable credit & other financial services through our embedded finance infrastructure.",
      image: "images/lipachat_logo.png",
    },
  ];

  // Second set of cards with varying services availability text
  const moreCards = [
    {
      title: "Finance and banking",
      description: "Pezesha enables SMEs & institutions with access to affordable credit & other financial services through our embedded finance infrastructure.",
      image: "images/card1.png",
      services: "50 services available",
    },
    {
      title: "Mobile Money ",
      description: "Pezesha enables SMEs & institutions with access to affordable credit & other financial services through our embedded finance infrastructure..",
      image: "images/card2.png",
      services: "100 services available",
    },
    {
      title: "Communications",
      description: "Pezesha enables SMEs & institutions with access to affordable credit & other financial services through our embedded finance infrastructure..",
      image: "images/card3.png",
      services: "10 services available",
    },
    {
      title: "Fintechs",
      description: "Pezesha enables SMEs & institutions with access to affordable credit & other financial services through our embedded finance infrastructure..",
      image: "images/card4.png",
      services: "10 services available",
    },
  ];

  return (
    <div className="p-4  mt-[50px]">
      <div className="flex gap-[560px]">
        <div>
          <h3 className="font-bold text-[20px]">Featured Providers</h3>
          <p>Leading technology companies and startups offering digital services</p>
        </div>
        <div>
          <button className="w-[168px] h-[36px] text-[#6366F1] border border-[#6366F1] text-[14px] font-semibold rounded">
            Get Featured
          </button>
        </div>
      </div>

      {/* First set of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-[55px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[284.62px] h-[283.89px] bg-white border border-[#E2E5F1] rounded-lg shadow-md flex flex-col justify-between"
          >
            {/* Image */}
            <div className="w-full h-36 flex justify-center items-center">
              <img
                className="w-[164.76px] h-[52.55px] object-cover rounded-t-2xl"
                src={card.image}
                alt={card.title}
              />
            </div>

            {/* Text Content */}
            <div className="text-center px-4 py-2">
              <h5 className="text-xl font-semibold">{card.title}</h5>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>

            {/* Button */}
            <div className="w-[228.74px] border-t border-[#E2E5F1] mx-auto mb-[15px]"></div>
            <div className="flex items-center justify-center text-[#6366F1] mb-[20px] text-sm font-semibold cursor-pointer">
              Discover products <ArrowRight size={16} className="ml-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Paragraph */}
      <h3 className="font-bold text-[20px] mt-[88px]">Browse By Category</h3>
      <p className="text-[14px]">Grouping of the APIs Based on Business Needs</p>

      {/* Second set of cards */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-[15px]">
          {moreCards.map((card, index) => (
            <div
              key={index}
              className="w-[274.62px] h-[291.87px] bg-white border border-[#E2E5F1] rounded-2xl shadow-md flex flex-col justify-between"
            >
              {/* Image */}
              <div className="w-full h-36 flex justify-center items-center">
                <img
                  className="w-[158.8px] h-[80.76px] mt-[14px] object-cover rounded-2xl"
                  src="images/manylogos.png"
                  alt={card.title}
                />
              </div>

              {/* Text Content */}
              <div className="text-center px-4 py-2">
                <h5 className="text-xl font-semibold">{card.title}</h5>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>

              {/* Services Available */}
              <div className="mb-[28px]">
                <div className="w-[228.74px] border-t border-[#E2E5F1] mx-auto mb-[15px]"></div>
                <div className="flex items-center justify-center text-[#6366F1] mb-[20px] text-sm font-semibold cursor-pointer">
                  {card.services} <ArrowRight size={16} className="ml-1 text-[#6366F1]"  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators (Three Dots) */}
        <div className="flex justify-center items-center mt-[48px] space-x-2">
          <span className="w-3 h-3 bg-[#6366F1] rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>

        {/* Next Button with Rounded Background */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-3 rounded-full mb-[10px]">
          <ChevronRight size={24} className="text-black" />
        </button>
      </div>
    </div>
  );
}
