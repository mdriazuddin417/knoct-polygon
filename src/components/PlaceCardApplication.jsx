import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const PlaceCardApplication = ({ selectedItems, handleCheckboxChange }) => {
  const [data, setData] = useState([
    {
      title: "Identity Verification",
      subTitle: "Passport is required",
    },
    {
      title: "Ethereum Address",
      subTitle: "Your Ethereum address where the token will be transferred.",
    },
    {
      title: "Generate zero knowledge proof",
      subTitle: "Complete all the steps to generate cryptographic proof.",
    },
  ]);

  const progress = (selectedItems.length / data.length) * 100;

  return (
    <div className="border border-primary rounded-lg space-y-5 p-5 my-5 bg-green-100 ">
      <h2 className="text-[16px] text-secondary font-semibold">Application</h2>
      <h2 className="text-[16px] text-semiBlack font-semibold">
        Trade Empowa token
      </h2>
      <progress
        className="progress progress-primary w-full bg-gray-200 h-[5px]"
        value={progress}
        max="100"
      ></progress>
      <div>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white px-4 py-5 mb-4 rounded-lg"
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className={`form-checkbox h-4 w-4 text-green-500 ${
                    selectedItems.includes(index) ? "bg-green" : ""
                  }`}
                  checked={selectedItems.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
                <span className="text-base font-semibold">{item.title}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceCardApplication;
