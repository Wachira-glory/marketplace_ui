"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const FeatureIntegration = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-left py-16 gap-12 px-6">
      {/* Text Section */}
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold w-[333px] h-[68px] leading-tight">
          Want to feature your products and services?
        </h2>
        <p className="text-gray-600 w-[500px] mt-4 mt-8">
          Join other innovative companies using our platform to reach thousands of
          developers.
        </p>

        {/* Button */}
        <button className="flex items-center justify-start gap-2 whitespace-nowrap text-white bg-[#6366F1] border border-[#6366F1] px-4 w-[220px] h-[33.5px] rounded-md text-sm font-semibold mt-6 text-[10.5px]">
  <span className="truncate">Add your integration service</span>
  <ArrowRight size={18} />
</button>


      </div>

      {/* Image Section */}
      <div>
        <Image
          src="/images/featureproductsandservices.jpeg" 
          alt="Feature Image"
          width={415}
          height={297}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default FeatureIntegration;
