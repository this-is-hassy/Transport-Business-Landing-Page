import Image from "next/image";
import React from "react";
import user from "../../public/user.png";

const Stats = () => {
  return (
    <>
      <div className="padding-container lg:h-[600px] max-sm:max-h-[295px] max-md:max-h-[500px] bg-red max-container">
        <div className="flex-col items-center pt-16 w-full">
          <h2 className="text-[32px] font-black text-center text-white">
            Lorem ipsum dolor sit <br /> amet consectetur.
          </h2>
          <p className="max-sm:hidden flex text-center lg:px-96 text-gray-300">
            At Apex Loads, we pride ourselves on our proven track record of
            excellence in the logistics industry. With years of experience and a
            deep understanding of Africa’s unique logistical challenges, we have
            established ourselves as a trusted partner for businesses across the
            continent.
          </p>

          <div className="flex flex-col items-center">
           
            <Image src={user} alt="user" className=" mt-12 max-sm:mt-0 px-4" />

          

            <div className="flex pt-4 text-white max-sm:gap-2 gap-44">
              <div>
                <h1 className="text-3xl max-sm:text-xl font-black">4500+</h1>
                <p className="text-sm max-sm:text-xs">Users Signup</p>
              </div>
              <div >
                <h1 className=" text-3xl font-black max-sm:text-xl ">9988</h1>
                <p className="text-sm max-sm:text-xs">
                  Loads Posted <br />
                  and Covered
                </p>
                </div>
              <div >
                <h1 className="text-3xl font-black max-sm:text-xl ">500+</h1>
                <p className="text-sm max-sm:text-xs">Trucks Posted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
