import React from "react";
import driver from "../../public/driver.png";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="padding-container max-container text-white bg-black ">
      <div className="pb-5 md:pt-10">
        <h4 className="text-5xl font-black text-white md:hidden">
          Why Choose <span className="text-red">Us</span>
        </h4>
      </div>

      <div className="flex flexCenter flex-col md:grid md: grid-cols-2">
        <div>
          <Image src={driver} alt="sideImg" />
        </div>

        <div className="py-8 ">
          <h4 className="text-3xl font-bold text-white max-md:hidden pb-10">
            Why Choose <span className="text-red">Us</span>
          </h4>
          

          <div className="bg-red p-6 ">
            <p className="regular-24 flex items-start gap-2">
              <span className="mt-[2px]">•</span>Proven Track Record of
              Excellence
            </p>
            <p>
              At Apex Loads, we pride ourselves on our proven track record of
              excellence in the logistics industry. With years of experience and
              a deep understanding of Africa’s unique logistical challenges, we
              have established ourselves as a trusted partner for businesses
              across the continent.
            </p>
          </div>
          <div className="bg-red p-6 mt-6 ">
            <p className="regular-24 flex items-start gap-2">
              <span className="mt-[2px]">•</span>Comprehensive Solutions
              Tailored to Your Needs
            </p>

            <p>
              We offer comprehensive logistics solutions tailored to meet the
              specific needs of cargo owners, brokers, and shippers. Whether you
              are looking to optimize your supply chain, streamline operations,
              or enhance visibility and control, Apex Loads has the expertise
              and technology to deliver results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
