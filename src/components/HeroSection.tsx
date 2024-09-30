import Image from "next/image";
import React from "react";
import white_strip from "../../public/left-b-to-t.svg";
import red_strip from "../../public/right-b-to-t.svg";
import red_mini_strip from "../../public/mini-b-to-t.svg";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="relative max-container bg-hero-bg-img w-full min-h-[600px] bg-no-repeat bg-cover flexCenter">
      <div className="max-lg:hidden  absolute -z-0 bottom-20 left-0">
        <Image src={white_strip} alt="side-img" className="lg:mt-[100%] " />
        <Image src={red_strip} alt="side-img" className="lg:-mt-[110%]" />
        <Image
          src={red_mini_strip}
          alt="side-img"
          className="lg:-mt-[10%] lg:ml-[83px]"
        />
      </div>

      <div className="flex flex-col z-20">
        <h1 className="text-white text-5xl lg:regular-118 font-black uppercase text-wrap">
          Reliable <br /> Transport
        </h1>
        <div className="flex flex-col lg:items-end">
        <p className="text-2xl font-extrabold lg:regular-52  text-white uppercase lg:text-end pt-2">Solutions for <br /> Your Freight </p>
        <Button
          title="Book Your Free Trial"
          icon="/right-arrow.svg"
          className="btn_transparent w-fit mt-5"
        />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
