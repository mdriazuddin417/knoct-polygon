import React, { useEffect, useRef } from "react";

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
        className="resizeable-box rounded-tl-[35px] rounded-tr-[35px] border border-gray-400 lg:w-[600px] md:w-[400px] w-[300px] shadow-inner bg-white"
      >
        <div className="sign "></div>
        Resize me from the top
      </div>
    </div>
  );
};

export default ScanBottomSheet;
