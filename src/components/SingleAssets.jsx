import React from "react";

import { eth_2 } from "../assets/image";

const SingleAssets = ({ data }) => {
  const { image, title, subtitle, price } = data;
  return (
    <div className="rounded-md p-5  bg-white shadow">
      <div className="flex flex-col shadow">
        <img src={image} className="w-100 h-100 rounded-md" alt="" />
        <div className="flex flex-col px-4 py-5 gap-2">
          <p className="text-sm font-bold bg-gray-900 w-[35%] text-white py-1 px-3 rounded-full text-center ">
            {title}
          </p>
          <p className="text-base font-bold text-gray-700">{subtitle}</p>
          <div className="flex items-center">
            <img src={eth_2} className="w-[10px] h-[10px]" alt="" />
            <p className="text-base text-gray-700 ml-2">{price} ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAssets;
