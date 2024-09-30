import React from "react";
import Button from "./Button";
import {SERVICES} from '../constants/index'
import Image from "next/image";

const Services = () => {
  return (
    <div className="padding-container  text-white py-10 max-container">
      <div className="pb-5 md:pt-10 flexBetween ">
        <h4 className="text-5xl font-black text-white">
          Services We <span className="text-red">Offer</span>
        </h4>
        <Button title="Book A Free Demo" className="btn_red max-md:hidden" />
      </div>

      <div className="lg:grid lg:grid-cols-3 grid-cols-1 gap-8 pt-3 overflow-x-auto hide-scrollbar flex lg:flex-none flex-row">
  {SERVICES.map((service) => (
    <div key={service.title} className="w-full min-w-[250px] lg:min-w-0">
      <div className="bg-white">
        <Image
          src={service.ServImg}
          alt="service"
          width={282}
          height={312}
          className="w-full"
        />
        <div className="text-start py-4 px-4">
          <h6 className="font-bold text-xl text-black">{service.title}</h6>
          <p className="font-normal text-sm text-black">
            {service.description}
          </p>
          <Button title="Know more" className="btn_red my-6" />
        </div>
      </div>
    </div>
  ))}
</div>

      <div className="pt-6 flexBetween ">
        <Button title="Book A Free Demo" className="btn_red md:hidden" />
      </div>
    </div>
  );
};

export default Services;
