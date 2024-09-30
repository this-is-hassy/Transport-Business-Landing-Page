import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from '../components/Button'
import whatsapp from "../../public/whatsApp.svg";
import downArrow from "../../public/down-arrow.svg";
import phone from "../../public/phone.svg";
import gmail from "../../public/gmail.svg";
import { INFO_NAV_PRODUCTS, INFO_NAV_RESOURCES } from "../constants";

const InfoHeader = () => {
  return (
    <header className="max-lg:hidden bg-red max-container padding-container py-2 flex justify-between">
      <div className="flexCenter gap-8 text-white">
        <Link href={"/"} className="flex gap-[5px]">
          <Image src={whatsapp} alt="whatsapp" />
          <p className="font-poppins regular-16">+254 (0) 709 677 400</p>
        </Link>
        <Link href={"/"} className="flex gap-[5px]">
          <Image src={phone} alt="call" />
          <p className="font-poppins regular-16">+254 (0) 709 677 400</p>
        </Link>
        <Link href={"/"} className="flex gap-[5px]">
          <Image src={gmail} alt="mail" />
          <p className="font-poppins regular-16">info@apexloads.com</p>
        </Link>
      </div>

      <div className="flexCenter gap-6">
        <div className="relative text-white regular-16">
          <details className="dropdown inline-block">
            <summary className=" flex gap-2 btn m-1 cursor-pointer">
              {INFO_NAV_PRODUCTS[0].title} <Image src={downArrow} alt="arrow" />
            </summary>

            <ul className="menu absolute top-full  rounded-box z-50 w-32 bg-red p-2 shadow">
              {INFO_NAV_RESOURCES[0].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </details>
        </div>

        <Link href={"/"} className="text-white regular-16">About Us</Link>

        <div className="relative bg-none text-white regular-16 ">
          <details className="dropdown  inline-block">
            <summary className=" flex gap-2 btn  cursor-pointer">
              {INFO_NAV_RESOURCES[0].title}
              <Image src={downArrow} alt="arrow" />
            </summary>

            <ul className="menu absolute top-full  rounded-box z-50 w-32 bg-red p-2 shadow">
              {INFO_NAV_RESOURCES[0].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>

      <Button
      title="Login"
      className="btn_white"
       />
    </header>
  );
};

export default InfoHeader;
