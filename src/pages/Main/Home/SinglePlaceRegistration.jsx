import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { moneyfold } from "../../../assets/image";
import HelpsContact from "../../../components/HelpsContact";
import PlaceCardApplication from "../../../components/PlaceCardApplication";

const SinglePlaceRegistration = () => {
  const navigation = useNavigate();

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (value) => {
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  return (
    <div className="h-full lg:px-[100px] sm:px-80 px-5 py-8">
      <div className="">
        <div className=" bg-white rounded-lg border border-gray-50 shadow-lg p-5">
          <div className="">
            <div className="flex justify-start items-center gap-5">
              <div className="bg-white  p-1  w-[80px] border border-primary rounded-[5px]">
                <img src={moneyfold} alt="" className="w-full h-full" />
              </div>
              <div>
                <h1 className="text-[16px] font-bold text-[#242D28]">
                  What is my goal ?
                </h1>
                <p className="text-[14px] font-medium text-[#242D28]">
                  Build a better future through the what is my goal
                </p>
              </div>
            </div>
          </div>
        </div>
        <HelpsContact />
        <div className="bg-white rounded-lg border border-gray-50 shadow-lg p-5 mt-5">
          <h2 className="text-black text-2xl font-bold">About this app</h2>
          <p className="text-gray-700 text-sm font-normal flex-1">
            You will be required to take a photo of your photo ID and provide a
            selfie to match the picture on the document. Please follow
            instructions on the form to complete this verification.
          </p>
        </div>
        <PlaceCardApplication
          selectedItems={selectedItems}
          handleCheckboxChange={handleCheckboxChange}
        />

        <div className="bg-white rounded-lg border border-gray-50 shadow-lg p-5 mt-5">
          <h2 className="text-black text-2xl font-bold">About Emporwa</h2>
          <p className="text-gray-700 text-sm font-normal flex-1">
            Lorem ipsum dolor sit amet consectetur. Sapien quisque dui sed sit
            iaculis. Lectus gravida sit purus diam id duis convallis vitae
            ultricies. Nibh maecenas in odio elementum. Tempor pharetra massa id
            malesuada justo. Nibh magna non.
          </p>
        </div>
      </div>
      <Link to={"/"} className="flex justify-center items-center my-5">
        <button
          disabled={selectedItems.length === 3 ? false : true}
          className="btn btn-md btn-primary px-8 text-white disabled:bg-gray-200"
        >
          {" "}
          Request
        </button>
      </Link>
    </div>
  );
};

export default SinglePlaceRegistration;
