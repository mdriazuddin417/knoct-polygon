import React, { useEffect, useState } from "react";
import { credentialsData } from "../Data/credentialsData";
import SingleToken from "./SingleToken";
import { token } from "../assets/image";

const Token = () => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setValue(true);
    }, 1000);
  }, []);
  let content;
  if (value) {
    content = (
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        {credentialsData.map((item, index) => (
          <SingleToken item={item} key={index} />
        ))}
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col items-center justify-center gap-10 px-30 mt-16 max-w-[500px] mx-auto ">
        <img src={token} alt="Token" className="w-[178px]" />
        <p className="text-center text-base font-medium text-gray-700">
          There are no Tokens added to your wallet once you add your tokens it
          will appear here.
        </p>
      </div>
    );
  }

  return <div className="mt-10">{content}</div>;
};

export default Token;
