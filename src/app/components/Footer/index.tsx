"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-12">
        {/* Quikk Logo & Description */}
        <div className="max-w-sm">
          <h2 className="text-3xl font-bold w-[82.58px] h-[35.83px]">Quikk</h2>
          <p className="text-gray-400 mt-4">
            Quikk helps technology enablers navigate opportunities for technology
            through API integrations, enabling Digital Service providers and App
            developers work together in building digital products for Africa.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About Us
          </Link>
          <Link href="/faqs" className="hover:text-gray-400">
            FAQs
          </Link>
         
        </div>

        {/* Legal Links */}
        <div className="flex flex-col gap-2">
          <Link href="/terms" className="hover:text-gray-400">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:text-gray-400">
            Privacy Policy
          </Link>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-2">
          <Link href="/contact" className="hover:text-gray-400">
            Contact Us
          </Link>
          <a href="mailto:hi@quikk.dev" className="text-blue-400 hover:underline">
            hi@quikk.dev
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// "use client";

// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-12 px-6">
//       <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-12">
//         {/* Quikk Logo & Description */}
//         <div className="max-w-sm">
//           <h2 className="w-[82.58px] h-[35.83px]">
//             <img src="/quikk-logo.png" alt="Quikk" />
//           </h2>
//           <p className="text-gray-400 mt-4">
//             Quikk helps technology enablers navigate opportunities for technology
//             through API integrations, enabling Digital Service providers and App
//             developers work together in building digital products for Africa.
//           </p>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-col gap-[6px] absolute left-[729px] top-[54px]">
//           <Link href="/" className="w-[53px] h-[69px] font-manrope font-semibold text-[12px] leading-[19.2px] flex items-center justify-center text-center">Home</Link>
//           <Link href="/about" className="w-[53px] h-[69px] font-manrope font-semibold text-[12px] leading-[19.2px] flex items-center justify-center text-center">About Us</Link>
//           <Link href="/faqs" className="w-[53px] h-[69px] font-manrope font-semibold text-[12px] leading-[19.2px] flex items-center justify-center text-center">FAQs</Link>
//         </div>

//         {/* Legal Links */}
//         <div className="flex flex-col gap-[6px] absolute left-[729px] top-[54px]">
//           <Link href="/terms" className="w-[53px] h-[69px] font-manrope font-semibold text-[12px] leading-[19.2px] flex items-center justify-center text-center">Terms & Conditions</Link>
//           <Link href="/privacy" className="w-[53px] h-[69px] font-manrope font-semibold text-[12px] leading-[19.2px] flex items-center justify-center text-center">Privacy Policy</Link>
//         </div>

//         {/* Contact Information */}
//         <div className="flex flex-col gap-[6px] absolute left-[729px] top-[54px]">
//           <Link href="/contact" className="w-[53px] h-[69px] font-manrope font-semibold text-[12px] leading-[19.2px] flex items-center justify-center text-center">Contact Us</Link>
//           <a href="mailto:hi@quikk.dev" className="w-[53px] h-[69px] font-manrope font-semibold text-[12px] leading-[19.2px] flex items-center justify-center text-center">hi@quikk.dev</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
