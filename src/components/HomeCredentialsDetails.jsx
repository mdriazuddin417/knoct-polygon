import React from "react";
import { passport } from "../assets/image";

const HomeCredentialsDetails = () => {
  const data = [
    { title: "Name", value: "Vishal Jah" },
    { title: "Passport Number", value: "T712345" },
    { title: "DOB", value: "02/01/1998" },
    { title: "Issue Date", value: "02/01/2012" },
    { title: "Expiry Date", value: "02/01/2019" },
    { title: "Address", value: "Jcolony Mumbai, Maharashtra, 20646" },
  ];

  return (
    <div>
      <div className=" mx-auto max-w-[600px]">
        <div className=" flex flex-col justify-center items-center mt-5">
          <h2 className="text-[14px] font-semibold text-smallBlack">
            Issued by
          </h2>
          <p className="text-[18px] font-bold text-smallBlack">
            What is my goal ?
          </p>
          <div className="w-[100px] h-[100px] bg-green-100 rounded-full p-2 mt-4 flex items-center justify-center">
            <img src={passport} alt="Passport" className="w-[50px]" />
          </div>
          <h2 className="text-[16px] font-bold text-smallBlack mt-4">
            Passport Details
          </h2>
        </div>
        <div className="p-4 bg-white rounded shadow-lg border border-gray-100 my-8">
          {data.map((item, index) => (
            <div key={index} className="pb-4">
              <p className="border-b border-gray-300 text-gray-700 pb-2">
                {item.title}
              </p>
              <p className="text-black font-bold text-base">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCredentialsDetails;
