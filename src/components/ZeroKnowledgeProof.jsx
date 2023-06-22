import React from "react";
import { card } from "../assets/image";

const ZeroKnowledgeProof = () => {
  return (
    <div className="mt-22 bg-white rounded-md border border-yellow-50 p-10">
      <h4 className="text-black text-14 font-bold">Zero-Knowledge proof</h4>
      <p className="text-black text-14 font-bold mt-10">
        Anonymous access to crypto exchange
      </p>
      <div className="mt-10">
        <div className="flex flex-col">
          <p className="text-14 font-bold text-gray-700">
            Generated: 01 Aug 2023
          </p>
          <p className="mt-8 text-14 font-bold text-gray-700">
            Expiration: 01 Aug 2029
          </p>
        </div>
      </div>
      <div className="mt-15">
        <div className="bg-white border border-gray-500 rounded-md">
          <div className="px-5 py-10 flex items-center">
            <div className="w-50 h-40 border-5 border-gray-500 rounded">
              <img
                src={card}
                alt="Card"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="ml-10 text-14 font-semibold text-gray-800">
              Digital Proof
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZeroKnowledgeProof;
