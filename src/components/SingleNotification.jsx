import React from "react";
import { bit } from "../assets/image";

const SingleNotification = ({ item }) => {
  const { img, title, desc, time, status } = item;
  return (
    <div>
      <div
        className={`flex items-center mt-7 border p-5 rounded-md ${
          status === "update"
            ? "border-[#FDBF5E] bg-[#FFF9EF]"
            : "border-[#C4C4C438] bg-[#F5FCF9]"
        }`}
      >
        <img src={img} alt="Bit" className="w-8 h-8 object-contain" />
        <div className="flex-1 ml-3">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-smallBlack font-bold">
              {status === "update" ? "Upload your document" : title}
            </h3>
            {status === "update" && (
              <button className="btn btn-xs btn-primary text-white">
                Upload
              </button>
            )}
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="text-gray-500 text-sm">
              {" "}
              {status === "update" ? "You still haven't updated" : desc}
            </p>
            <p className="text-gray-500 text-sm">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNotification;
