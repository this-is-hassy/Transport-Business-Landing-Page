import React from "react";
import member_one from "../../public/member-1.svg";
import member_two from "../../public/member-2.svg";
import member_three from "../../public/member-3.svg";
import member_four from "../../public/member-4.svg";
import Image from "next/image";

const Members = () => {
  return (
    <div className="max-container padding-container flex-col items-center pt-20">
      <h1 className="text-center text-white font-black text-6xl max-sm:text-4xl">Member Of</h1>

      <div className="flex justify-center gap-6 padding-container">
        <Image src={member_one} alt="brands" className="max-md:w-16"/>
        <Image src={member_two} alt="brands" className="max-md:w-16"/>
        <Image src={member_three} alt="brands" className="max-md:w-16"/>
        <Image src={member_four} alt="brands" className="max-md:w-16"/>
      </div>
    </div>
  );
};

export default Members;
