import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.png";
import profile from "../../public/profile.svg";
import menu from "../../public/menu.svg";
import downArrow from "../../public/down-arrow.svg";
import {
  INFO_NAV_TRANSPORTERS,
  INFO_NAV_Service,
  INFO_NAV_BROKERS,
} from "../constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="padding-container max-container flexBetween text-white bg-black">
      <div className="flexCenter gap-[26px]">
        <Link href={"/"}>
          <Image src={logo} alt="logo"  />
        </Link>

        <div className="hidden text-white regular-16 lg:flex">
          <details className="dropdown inline-block">
            <summary className=" flex gap-2 btn m-1 cursor-pointer">
              {INFO_NAV_TRANSPORTERS[0].title}
              <Image src={downArrow} alt="arrow" />
            </summary>

            <ul className="menu absolute top-full bg-base-100 rounded-box z-50 w-32 bg-black p-2 shadow">
              {INFO_NAV_TRANSPORTERS[0].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </details>
          <details className="px-4 dropdown inline-block">
            <summary className=" flex gap-2 btn m-1 cursor-pointer">
              {INFO_NAV_Service[0].title}
              <Image src={downArrow} alt="arrow" />
            </summary>

            <ul className="menu absolute top-full bg-base-100 rounded-box z-50 w-32 bg-black p-2 shadow">
              {INFO_NAV_Service[0].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </details>
          <details className="dropdown inline-block">
            <summary className=" flex gap-2 btn m-1 cursor-pointer">
              {INFO_NAV_BROKERS[0].title}
              <Image src={downArrow} alt="arrow" />
            </summary>

            <ul className="menu absolute top-full bg-base-100 rounded-box z-50 w-32 bg-black p-2 shadow">
              {INFO_NAV_BROKERS[0].links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>

      <div className="flexCenter lg:hidden gap-4 pr-3">
        <Image src={profile} alt="profile" />
        <Image src={menu} alt="menu" className="text-white" />
      </div>

      <div className="hidden lg:flexCenter gap-4">
        <Button title="Pricing" className="btn_white" />
        <Button title="Book A Free Demo" className="btn_red" />
      </div>
    </nav>
  );
};

export default Navbar;
