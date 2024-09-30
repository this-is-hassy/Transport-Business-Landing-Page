import Image from "next/image";
import React from "react";
import apple from "../../public/apple.svg";
import playstore from "../../public/playStore.svg";

const MobApp = () => {
  return (
    <div className="max-container pt-10 bg-getApp-img max-sm:bg-center  bg-no-repeat  max-sm:h-[600px] min-h-[750px] w-full flex flex-col">
      <h1 className="text-white max-sm:-mt-10 mt-6 text-center font-black text-6xl max-sm:text-base max-sm:px-16 max-sm:font-bold  text-wrap">
        DOWNLOAD THE APEXLOADS MOBILE APP
      </h1>

          <div className="flex mt-52 max-sm:hidden justify-around items-center">
            <div className="text-gray-200 bg-black border-[1px] border-stone-500 rounded-md w-fit">
              <button className="flex items-center gap-1 ">
                <Image src={apple} alt="app-store" />
                <div className="flex-col">
                  <p>Download on the</p>
                  <h6 className="text-2xl max-sm:text-lg font-semibold">App Store</h6>
                </div>
              </button>
            </div>
            <div className="text-gray-200 bg-black border-[1px] border-stone-500 rounded-md w-fit">
              <button className="flex items-center gap-1">
                <Image src={playstore} alt="playstore" />
                <div className="flex-col">
                  <p className="">GET IT ON</p>
                  <h6 className="text-2xl font-semibold">Google Play</h6>
                </div>
              </button>
            </div>
          </div>
    </div>

  );
};

export default MobApp;
