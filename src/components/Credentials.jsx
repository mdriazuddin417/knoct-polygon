import React, { useState, useEffect } from "react";

import credentialsImage from "../assets/wallet/credentials.png";
import { credentialsData } from "../Data/credentialsData";
import SingleCredentials from "./SingleCredentials";

const Credentials = () => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  let content;
  if (value) {
    content = (
      <div className=" mt-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
          {credentialsData.map((item, index) => (
            <SingleCredentials key={index} item={item} />
          ))}
        </div>
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col items-center justify-center space-y-10 px-30 mt-16 max-w-[500px] mx-auto ">
        <img src={credentialsImage} alt="Credentials" className="w-[178px]" />
        <p className="text-center text-base font-medium text-gray-700">
          There are no credentials in your wallet. Once you receive a
          credential, it will appear here.
        </p>
      </div>
    );
  }

  return <>{content}</>;
};

export default Credentials;
