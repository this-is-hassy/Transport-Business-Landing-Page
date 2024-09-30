import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { USEFUL_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="padding-container max-container py-12 flex flex-col lg:flex-row lg:gap-20 text-white bg-[#171715]">
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
        <p className="text-stone-300 ">
          The first free end-to-end analytics service for the site, designed to
          work with enterprises of various levels and business segments.
        </p>
        <p className="py-3 text-orange-700 text-[10px]">FEEDBACK</p>
        <p className="text-stone-300 text-lg">Seeking personalized support?</p>
        <p className="text-lg">Request a call from our team</p>
        <div>
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered input-md w-full max-w-xs bg-transparent border-stone-600 placeholder-stone-300 border rounded-md px-2 py-2 mt-3"
          />
          <br />
          <input
            type="text"
            placeholder="Phone number"
            className="input input-bordered input-md w-full max-w-xs bg-transparent border-stone-600 placeholder-stone-300 border rounded-md px-2 py-2 mt-3"
          />
          <Button title="Send a request" className="btn_red mt-4" />
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 space-x-10 lg:space-x-20 mt-12">
          <div>
            <h4 className="text-red">Useful links</h4>
            <ul>
              {USEFUL_LINKS[0].links.map((link, index) => (
                <Link key={index} href={link.href} className="text-stone-300">
                  {link.title} <br />
                </Link>
              ))}
            </ul>
            <p className="my-4 text-[10px] text-stone-600">CONTACT US</p>

            <div className="text-stone-300">
              <p>+254 (0) 709 677 400</p>
              <p>info@apexloads.com</p>
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
            </div>
            <p className="text-red text-[10px] mt-1">Call me back</p>
            <p className="my-4 text-[10px] text-stone-600">FOLLOW US</p>
            <div className="text-stone-300">
              <p>Telegram</p>
              <p>Whatsapp</p>
              <p>Instagram</p>
            </div>

            <div className="flexBetween mt-12 lg:flex-col lg:items-start">
              <p className="  text-stone-600">© 2024 — Copyright </p>
              <p className="text-stone-600">Privacy</p>
            </div>
          </div>

          <div>
            <h4 className="text-red">Services</h4>
            <div>
              <p className="pt-5 pb-2 font-bold">Transporters</p>
              <p className="text-stone-300">
                Post Trucks <br />
                Search For Loads
              </p>
            </div>

            <div>
              <p className="pt-5 pb-2 font-bold">Shippers</p>
              <p className="text-stone-300">
                Post Trucks <br />
                Search For Loads
              </p>
            </div>

            <div>
              <p className="pt-5 pb-2 font-bold">
                Brokers / Freight-Forwarders
              </p>
              <p className="text-stone-300">
                Post Trucks <br /> Search For Loads
              </p>
            </div>

            <div>
              <p className="pt-5 pb-2 font-bold">Full-Service Brokers</p>
              <p className="text-stone-300">
                Post Trucks <br />
                Search For Loads
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
