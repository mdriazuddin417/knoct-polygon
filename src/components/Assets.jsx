import React, { useEffect, useState } from "react";
import SingleAssets from "./SingleAssets";
import { assets } from "../assets/image";
import { assetsData } from "../Data/assetsData";

const Assets = () => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setValue(true);
    }, 1000);
  }, []);

  let content;
  if (value) {
    content = (
      <div className="">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5">
          {assetsData.map((item, index) => (
            <SingleAssets key={index} data={item} />
          ))}
        </div>
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col items-center justify-center gap-10  mt-16 max-w-[500px] mx-auto ">
        <img src={assets} alt="Assets" className="w-[178px]" />
        <p className="text-center text-base font-medium text-gray-700">
          There are no Assets added to your wallet. Once you add your assets,
          they will appear here.
        </p>
      </div>
    );
  }

  return <div className="mt-10">{content}</div>;
};

export default Assets;
