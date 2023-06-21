import React, { useEffect, useState } from "react";
import { connections } from "../Data/HomeData";
import SingleConnection from "./SingleConnection";
import { connection } from "../assets/image";

const Connections = () => {
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
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-5">
          {connections.map((item, index) => (
            <SingleConnection data={item} key={index} />
          ))}
        </div>
      </div>
    );
  } else {
    content = (
      <div className="mx-auto">
        <div className="flex flex-col items-center gap-10 px-30 max-w-[500px] mx-auto mt-[100px]">
          <img src={connection} alt="Connections" className="w-178" />
          <p className="text-center text-base font-medium text-gray-700">
            Others can request from you through a proof request. You control
            what and with whom you share your information.
          </p>
        </div>
      </div>
    );
  }

  return <div className="mt-10">{content}</div>;
};

export default Connections;
