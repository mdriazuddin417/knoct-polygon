import React, { useEffect, useRef } from "react";
import { code, profile } from "../assets/image";
import { FaCopy } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";

const ScanBottomSheet = () => {
  const refBox = useRef(null);
  const startY = useRef(null);
  const startHeight = useRef(null);

  useEffect(() => {
    const resizeableElement = refBox.current;

    const onMouseDown = (event) => {
      startY.current = event.clientY;
      startHeight.current = parseInt(
        window.getComputedStyle(resizeableElement).height,
        10
      );
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (event) => {
      const deltaY = startY.current - event.clientY;
      const newHeight = startHeight.current + deltaY;
      if (newHeight > 0) {
        resizeableElement.style.height = newHeight + "px";
      }
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const resizer = document.createElement("div");
    resizer.className = "resizer";
    resizer.style.cursor = "row-resize";
    resizer.addEventListener("mousedown", onMouseDown);
    resizeableElement.appendChild(resizer);

    return () => {
      resizer.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <div>
      <div
        ref={refBox}
        className="resizeable-box rounded-tl-[35px] rounded-tr-[35px] border border-b-0 border-gray-400 lg:w-[600px] md:w-[400px] w-[300px] shadow-inner bg-white"
      >
        <div className="w-full bg-green-100 rounded-2xl mx-[10%] my-[10%] shadow-lg p-5 overflow-y-auto">
          <div className="flex justify-center items-center gap-5 flex-col">
            <div className="bg-primary p-1 rounded-full w-[90px] h-[90px]">
              <img src={profile} alt="" className="w-full h-full" />
            </div>
            <h1 className="text-smallBlack text-[18px] font-bold">@Vedant</h1>
            <div className="flex justify-center gap-5 items-center">
              <p className="text-smallBlack text-[16px] font-bold">Knoct ID</p>
              <p className="text-gray-500 text-[14px] font-medium">
                did135416135166241641
              </p>
              <FaCopy
                size={20}
                className="text-gray-700 hover:text-black cursor-pointer"
              />
            </div>
            <div className="w-[150px] aspect-[1] bg-white rounded p-2">
              <img src={code} alt="" className="w-full " />
            </div>
            <div className="flex justify-center gap-7 items-center flex-col ">
              <button className="btn btn-md btn-secondary text-white px-10 flex items-center gap-3">
                <IoMdRefresh size={20} /> Refresh
              </button>

              <button className="btn btn-md btn-outline btn-primary px-10 flex items-center gap-3">
                <BsShare size={20} /> Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanBottomSheet;
