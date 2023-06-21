import React from "react";
import { BiLockAlt } from "react-icons/bi";

const SingleConnection = ({ data }) => {
  return (
    <div className=" rounded-[14px] flex flex-col justify-center items-center  bg-[#F8FBF9] border border-primary px-5 py-8 gap-2">
      <div>
        <img src={data?.icon} alt="Icon" className="w-[40px]" />
      </div>
      <p className="font-semibold text-[14px] text-gray-500">{data?.name}</p>
      <p className="font-bold text-[14px] text-gray-500">{data?.title}</p>
      <div className="gap-2 py-1 flex flex-row justify-center items-center">
        <BiLockAlt name="lock" color="#4F4F4F" size={15} />
        <BiLockAlt name="lock" color="#4F4F4F" size={15} />
        <BiLockAlt name="lock" color="#4F4F4F" size={15} />
      </div>
      <p className="text-base font-medium text-gray-600">{data?.date}</p>
    </div>
  );
};

export default SingleConnection;
