import { useEffect, useState } from "react";
import DidProfile from "../../../components/DidProfile";
import SingleHomeGoal from "../../../components/SingleHomeGoal";
import Hero from "./Hero";

const Home = () => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setValue(true);
    }, 3000);
  }, []);

  return (
    <div className="space-y-12  lg:px-[100px] sm:px-80 px-5 py-8">
      <DidProfile />
      {!value ? (
        <SingleHomeGoal />
      ) : (
        <div className="px-5 py-8 rounded space-y-8 bg-[#F4F4F9]">
          <p className="text-[18px] text-smallBlack font-bold">
            Capture Voter ID
          </p>
          <div className="bg-white p-5 rounded-xl shadow sm:w-[500px]">
            <p className="text-[12px] text-gray-500">
              Open Voter id on the data page and take a picture{" "}
            </p>
            <p className="text-[12px]  text-gray-500">
              Avoid glare and make sure all 4 corners are visible{" "}
            </p>
          </div>
          <div to={"/"} className="flex justify-center items-center my-5">
            <button className="btn btn-md btn-primary px-8 text-white disabled:bg-gray-200">
              {" "}
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
