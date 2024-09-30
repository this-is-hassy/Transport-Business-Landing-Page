import Image from "next/image";
import React from "react";
import white_strip from "../../public/left-b-to-t.svg";
import red_strip from "../../public/right-b-to-t.svg";
import truck from "../../public/truck.png";
import Button from "./Button";

const AboutUs = () => {
  return (
    <div className="bg-map-bg-img max-container w-full min-h-[1064px] lg:min-h-[600px]  bg-no-repeat bg-cover flexCenter relative -z-10">
      <div className="absolute top-16 right-0">
        <Image src={red_strip} alt="side-img" />
      </div>
      <div className="absolute top-10 -right-44 ">
        <Image src={white_strip} alt="side-img" />
      </div>
      <div className="absolute top-20 -right-48">
        <Image src={truck} alt="truck" />
      </div>

      <div className="absolute md:-mt-[500px] lg:-mt-[50px] mt-[350px]">
        <div className="flex flex-col md:w-2/5 lg:w-3/5  lg:h-full padding-container text-white">
          <h4 className="text-5xl font-black text-white">
            About <span className="text-red">Us</span>
          </h4>
          <p className="regular-16">
            <span className="text-red font-bold text-2xl">Apexloads.com</span>{" "}
            <span className="font-bold text-2xl">
              is a premier digital platform designed to revolutionize the
              logistics and transportation industry,
            </span>{" "}
            with a special focus on the African market. We aim to bridge the gap
            between shippers and truck owners, providing a seamless and
            efficient solution to manage freight loads. Our platform is built on
            the principles of innovation, reliability, and accessibility,
            ensuring that all users, regardless of their location, can optimize
            their logistics operations and drive their businesses forward.
          </p>
          <Button
          title="Know more"
          className="btn_transparent w-fit mt-5"
        />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
