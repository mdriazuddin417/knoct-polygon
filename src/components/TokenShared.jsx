import React from "react";

const TokenShared = () => {
  return (
    <div className="mt-20 container mx-auto bg-white rounded-md">
      <div className="p-20">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-black">Tokens Shared</h2>
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
        <div className="mt-27">
          <div className="bg-white rounded border border-gray-200 shadow w-full h-60 px-11 py-10 mb-10 flex justify-between">
            <div className="border border-black rounded-full w-40 h-40 p-3">
              <img
                src="images/wallet/eth.png"
                alt="ETH"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="ml-10 flex-grow">
              <div className="flex justify-between">
                <h4 className="text-base font-bold text-black">ETH</h4>
                <h4 className="text-base font-bold text-black">0</h4>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Etherium</p>
                <p className="text-sm font-bold text-gray-600">$ 1,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenShared;
