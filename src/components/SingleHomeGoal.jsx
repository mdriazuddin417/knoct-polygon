import React from "react";
import { moneyfold, profile } from "../assets/image";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleHomeGoal = () => {
  return (
    <div className=" border border-gray-50 shadow-lg p-5">
      <div className="">
        <div className="flex justify-start items-center gap-5">
          <div className="bg-white  p-1  w-[80px] border border-primary rounded-[5px]">
            <img src={moneyfold} alt="" className="w-full h-full" />
          </div>
          <div>
            <h1 className="text-[16px] font-bold text-[#242D28]">@Vedant</h1>
            <p className="text-[14px] font-medium text-[#242D28]">
              Score <span className="text-primary">400</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-7 items-center">
          <Link to={"/singleRegistration"}>
            <button className="btn btn-md btn-secondary text-white px-10">
              Get Voter ID
            </button>
          </Link>
          <button className="btn btn-md btn-outline btn-primary px-10">
            Visit website
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleHomeGoal;
