"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winSrcoll = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(winSrcoll,"sfkj")

    if (winSrcoll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={goToBtn}
          className=" md:fixed md:bottom-5 md:right-5  z-50 bg-red p-3 rounded-full shadow-lg transition-colors"
>
          <Image
            src={"/goto.svg"}
            alt="goto"
            width={60}
            height={60}
            className="animate-bounceVertical"
          />
        </button>
      )}
    </>
  );
};

export default GoToTop;
