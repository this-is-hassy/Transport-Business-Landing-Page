import Image from "next/image";
import React from "react";
import people_one from "../../public/people-1.png";
import people_two from "../../public/people-2.png";
import people_three from "../../public/people-3.png";
import rating from "../../public/rating.svg";

const Feedback = () => {
  return (
    <div className="max-container padding-container max-sm:mt-72 lg:mt-[430px] text-white">
      <h4 className="text-5xl font-black text-white text-center">
        What people <span className="text-red">say</span>
      </h4>

      <div className="flex overflow-x-auto space-x-8 pt-6 hide-scrollbar">
        <div className="bg-[#1B1B1B] flex flex-col p-6 min-w-[300px]">
          <div className="pb-4 flex flex-row justify-start items-center gap-4">
            <Image src={people_one} alt="dp" />
            <div>
              <h5 className="font-bold text-lg">Moses Smith</h5>
              <p>Transporter</p>
              <Image src={rating} alt="rating" />
            </div>
          </div>
          <p>
            I did not have to leave the house to find a load. It was so easy; I
            was watching the news while searching for my next load. Got the
            information, called the broker, got there and just loaded it up.
            This would otherwise have been a 5 hour wait or even much longer if
            the loads were not at a particular station. Did it in less than 1
            hour.
          </p>
        </div>

        <div className="bg-[#1B1B1B] flex flex-col p-8 min-w-[300px]">
          <div className="flex flex-row justify-start items-center gap-4 pb-4">
            <Image src={people_two} alt="dp" />
            <div>
              <h5 className="font-bold text-lg">Lora Kisa</h5>
              <p>Broker</p>
              <Image src={rating} alt="rating" />
            </div>
          </div>
          <p>
            I did not have to leave the house to find a load. It was so easy; I
            was watching the news while searching for my next load. Got the
            information, called the broker, got there and just loaded it up.
            This would otherwise have been a 5 hour wait or even much longer if
            the loads were not at a particular station. Did it in less than 1
            hour.
          </p>
        </div>

        <div className="bg-[#1B1B1B] flex flex-col p-8 min-w-[300px]">
          <div className="flex flex-row justify-start items-center gap-4 pb-4">
            <Image src={people_three} alt="dp" />
            <div>
              <h5 className="font-bold text-lg">Faith Mukasa</h5>
              <p>Shipper</p>
              <Image src={rating} alt="rating" />
            </div>
          </div>
          <p>
            I did not have to leave the house to find a load. It was so easy; I
            was watching the news while searching for my next load. Got the
            information, called the broker, got there and just loaded it up.
            This would otherwise have been a 5 hour wait or even much longer if
            the loads were not at a particular station. Did it in less than 1
            hour.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
