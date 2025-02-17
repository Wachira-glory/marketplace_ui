

// "use client"; // ✅ Fix React hook error
// import Image from 'next/image';


// import { useEffect, useState } from "react";
// import { fetchPlugginsAndAddons } from "@/app/utils/fetchPlugginsAndAddons";
// import { ArrowRight } from "lucide-react"; // Import Arrow Icon

// const PlugginsAndAddons = () => {
//   const [cards, setCards] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getCards = async () => {
//       setLoading(true);
//       const fetchedCards = await fetchPlugginsAndAddons();
//       setCards(fetchedCards);
//       setLoading(false);
//     };

//     getCards();
//   }, []);

//   return (
//     <>
//       <h2 className="text-xl ml-20 font-semibold mb-4 text-[28px]">Plugins & Addons</h2>
//       <p className="ml-20 text-[14px] ">Enhance your integration capability with our custom plugins and addons</p>

//       <div className="p-6 bg-[#F3F6FF] flex flex-col items-center">
//         {loading ? (
//           <p>Loading...</p>
//         ) : cards.length === 0 ? (
//           <p>No plugins available.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className="w-[356px] h-[385.87px] bg-white p-4 rounded-lg shadow-lg relative"
//               >
//                 {/* Buttons */}
//                 <div className="flex justify-between items-center mt-4 mb-6">
//                   <button className="w-[51px] h-[19px] bg-[#4C82F7] text-[#4C82F7] text-xs font-semibold rounded-md ml-8">
//                     Plugin
//                   </button>
//                   <button className="w-[100px] h-[19px] bg-[#E2E5F1] text-black text-xs font-semibold rounded-md mr-8">
//                     Reconciliation
//                   </button>
//                 </div>

//                 {/* Static Image */}
//                 <div className="w-[250px] h-[122.31px] mx-auto bg-gray-300 flex items-center justify-center">
//                   <Image src="/images/sapandequity.png" alt="Plugin" />
//                 </div>

//                 {/* Title & Description */}
//                 <h3 className="mt-4 text-lg font-bold text-center">{card.title}</h3>
//                 <p className="mt-2 text-sm text-center text-gray-700 w-[312px] h-[52px]">
//                   {card.description}
//                 </p>

//                 {/* Line + Integrate Plugin */}
//                 <div className="w-[228.74px] border-t border-[#E2E5F1] mx-auto mt-4"></div>
//                 <div className="flex items-center justify-center text-[#6366F1] mt-2 text-sm font-semibold cursor-pointer">
//                   Integrate plugin <ArrowRight size={16} className="ml-1" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default PlugginsAndAddons;




"use client"; // ✅ Fix React hook error

import { useEffect, useState } from "react";
import Image from "next/image"; 
import { fetchPlugginsAndAddons } from "@/app/utils/fetchPlugginsAndAddons";
import { ArrowRight } from "lucide-react"; 

// ✅ Define a proper type for cards instead of `any`
type PluginCard = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const PlugginsAndAddons = () => {
  const [cards, setCards] = useState<PluginCard[]>([]); // ✅ Use PluginCard[] instead of any[]
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCards = async () => {
      setLoading(true);
      const fetchedCards = await fetchPlugginsAndAddons();
      setCards(fetchedCards);
      setLoading(false);
    };

    getCards();
  }, []);

  return (
    <>
      <h2 className="text-xl ml-20 font-semibold mb-4 text-[28px]">Plugins & Addons</h2>
      <p className="ml-20 text-[14px]">Enhance your integration capability with our custom plugins and addons</p>

      <div className="p-6 bg-[#F3F6FF] flex flex-col items-center">
        {loading ? (
          <p>Loading...</p>
        ) : cards.length === 0 ? (
          <p>No plugins available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-[356px] h-[385.87px] bg-white p-4 rounded-lg shadow-lg relative"
              >
                {/* Buttons */}
                <div className="flex justify-between items-center mt-4 mb-6">
                  <button className="w-[51px] h-[19px] bg-[#4C82F7] text-[#4C82F7] text-xs font-semibold rounded-md ml-8">
                    Plugin
                  </button>
                  <button className="w-[100px] h-[19px] bg-[#E2E5F1] text-black text-xs font-semibold rounded-md mr-8">
                    Reconciliation
                  </button>
                </div>

                {/* ✅ Use Next.js Image component */}
                <div className="w-[250px] h-[122.31px] mx-auto bg-gray-300 flex items-center justify-center">
                  <Image
                    src={card.imageUrl || "/images/sapandequity.png"} // ✅ Ensure image URL is valid
                    alt="Plugin"
                    width={250}
                    height={122}
                    className="object-contain"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="mt-4 text-lg font-bold text-center">{card.title}</h3>
                <p className="mt-2 text-sm text-center text-gray-700 w-[312px] h-[52px]">
                  {card.description}
                </p>

                {/* Line + Integrate Plugin */}
                <div className="w-[228.74px] border-t border-[#E2E5F1] mx-auto mt-4"></div>
                <div className="flex items-center justify-center text-[#6366F1] mt-2 text-sm font-semibold cursor-pointer">
                  Integrate plugin <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PlugginsAndAddons;


