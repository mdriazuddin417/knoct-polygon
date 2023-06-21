import React from "react";
import { eth } from "../assets/image";

export default function SingleToken() {
  return (
    <div className="bg-white w-full rounded-md h-[90px]  border border-gray-50  px-[14px]  shadow-md flex justify-between items-center gap-4">
      <div className="border border-black p-3 rounded-full w-[40px] h-[40px] flex justify-center items-center">
        <img src={eth} alt="ETH" className="w-[30px]" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <p className="text-14 font-bold text-black">ETH</p>
          <p className="text-14 font-bold text-black">0</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-12 text-gray-600">Etherium</p>
          <p className="text-12 text-gray-600">
            $ <span className="text-12 font-bold text-gray-600">1</span>,00
          </p>
        </div>
      </div>
    </div>
  );
}
