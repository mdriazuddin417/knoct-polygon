import React from "react";

import { BiLockAlt } from "react-icons/bi";

const DetailSharedTo = () => {
  return (
    <div className="mt-20 bg-white rounded-md border p-4">
      <div className="mb-20 ml-18">
        <h4 className="text-black text-16 font-bold">Details Shared To</h4>
      </div>
      <div className="pb-4 border-b border-gray-300">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p className="text-black text-13 font-normal">ABC Company</p>
            <div className="ml-2">
              {[...Array(3)].map((_, index) => (
                <span key={index} className="text-gray-500">
                  <BiLockAlt name="lock" color="#4F4F4F" size={15} />
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-500 text-12">7 July 2022</p>
        </div>
      </div>
      <div className="pt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p className="text-black text-13 font-normal">XYZ Company</p>
            <div className="ml-2">
              {[...Array(3)].map((_, index) => (
                <span key={index} className="text-gray-500">
                  <BiLockAlt name="lock" color="#4F4F4F" size={15} />
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-500 text-12">7 July 2022</p>
        </div>
      </div>
    </div>
  );
};

export default DetailSharedTo;
