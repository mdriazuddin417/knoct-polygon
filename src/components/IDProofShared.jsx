import React from "react";

const IDProofShared = () => {
  return (
    <div className="mt-20 container mx-auto bg-white rounded-md">
      <div className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-black">ID Proof Shared</h2>
            <svg
              className="w-6 h-6 text-gray-700 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </div>
          <p className="text-sm font-light text-gray-400">
            7 July 2022, 6:39 PM
          </p>
        </div>
        <div className="mt-6">
          <div className="border border-yellow-500 rounded-md p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-black">Aadhar Card</h3>
              <div className="bg-yellow-500 rounded-full px-4 py-1">
                <p className="text-xs font-medium text-white">Update</p>
              </div>
            </div>
            <p className="text-sm font-light text-gray-400">
              3023 2330 2332 1211
            </p>
          </div>
          <div className="mt-4 border border-primaryColor rounded-md p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-black">PAN Card</h3>
              <div className="bg-primaryColor rounded-full px-4 py-1">
                <p className="text-xs font-medium text-white">Verified</p>
              </div>
            </div>
            <p className="text-sm font-light text-gray-400">DA121AE1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDProofShared;
