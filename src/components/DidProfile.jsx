import React from "react";
import { profile } from "../assets/image";
import { FaArrowRight } from "react-icons/fa";

const DidProfile = () => {
  return (
    <>
      <div
        onClick={() => window.did.showModal()}
        className="max-w-1/2 mx-auto shadow-lg rounded-lg p-5 border-gray-50 border cursor-pointer"
      >
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-8">
            <div className="bg-primary p-1 rounded-full w-[70px] h-[70px]">
              <img src={profile} alt="" className="w-full h-full" />
            </div>
            <div>
              <h1 className="text-[16px] font-bold text-[#242D28]">@Vedant</h1>
              <p className="text-[14px] font-medium text-[#242D28]">
                Score <span className="text-primary">400</span>
              </p>
            </div>
          </div>
          <FaArrowRight size={20} color="#242D28" />
        </div>
      </div>

      <dialog id="did" className="modal">
        <form method="dialog" className="modal-box text-center">
          <h3 className="font-bold text-lg">DID: did1341541864357464</h3>
          <p className="py-4">Private Key: 135461681646548465341654165</p>
          <div className="modal-action flex justify-center ">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={() => console.log("first")}
              className="btn btn-sm  btn-primary text-white"
            >
              Download private key
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default DidProfile;
