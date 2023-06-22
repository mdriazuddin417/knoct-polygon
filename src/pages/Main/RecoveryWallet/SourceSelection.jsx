import React from "react";
import { recovery } from "../../../assets/image";
import { useNavigate } from "react-router-dom";

const SourceSelection = () => {
  const navigation = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8  max-w-[400px] px-5 py-8 border border-gray-100 rounded-xl m-auto shadow-xl">
        <div className="p-8 ">
          <h1 className="text-[24px] font-bold text-smallBlack">
            Source Selection
          </h1>
          <p className="text-gray-700 text-sm mt-2">
            Knoct uses backup to store your credentials. Using on device storage
            lets you access credentials whenever required while Cloud backup
            lets you store credentials more securely.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={recovery} alt="Recover" className="w-64" />
        </div>

        <div className="pt-[200px]">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded w-[291px]"
            onClick={() => {
              navigation("/recovery");
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SourceSelection;
