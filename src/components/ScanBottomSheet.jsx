import React, { useState } from "react";

// Tailwind CSS classes
const buttonClasses =
  "show-modal bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors";
const bottomSheetClasses =
  "bottom-sheet fixed top-0 left-0 w-full h-full flex opacity-0 pointer-events-none items-center flex-col justify-end transition-opacity";
const sheetOverlayClasses =
  "sheet-overlay fixed top-0 left-0 z-0 w-full h-full bg-black opacity-20";
const sheetContentClasses =
  "content w-full relative bg-white max-h-screen h-1/2 max-w-3xl p-8 transform translate-y-full rounded-t-lg shadow-lg transition-transform";
const dragIconClasses = "drag-icon cursor-grab user-select-none p-4 -mt-4";
const dragIconSpanClasses = "block h-1 w-10 bg-gray-400 rounded-full";

const ScanBottomSheet = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const [sheetHeight, setSheetHeight] = useState(50);
  const [isSheetShown, setIsSheetShown] = useState(false);

  const showBottomSheet = () => {
    setIsSheetShown(true);
    document.body.style.overflowY = "hidden";
    updateSheetHeight(50);
  };

  const hideBottomSheet = () => {
    setIsSheetShown(false);
    document.body.style.overflowY = "auto";
  };

  const updateSheetHeight = (height) => {
    setSheetHeight(height);
  };

  const dragStart = (e) => {
    setIsDragging(true);
    setStartY(e.pageY || e.touches?.[0].pageY);
    setStartHeight(sheetHeight);
  };

  const dragging = (e) => {
    if (!isDragging) return;
    const delta = startY - (e.pageY || e.touches?.[0].pageY);
    const newHeight = startHeight + (delta / window.innerHeight) * 100;
    updateSheetHeight(newHeight);
  };

  const dragStop = () => {
    setIsDragging(false);
    const currentHeight = sheetHeight;
    if (currentHeight < 25) {
      hideBottomSheet();
    } else if (currentHeight > 75) {
      updateSheetHeight(100);
    } else {
      updateSheetHeight(50);
    }
  };

  return (
    <>
      <button className={buttonClasses} onClick={showBottomSheet}>
        Show Bottom Sheet
      </button>
      <div className={`${bottomSheetClasses} ${isSheetShown ? "show" : ""}`}>
        <div className={sheetOverlayClasses} onClick={hideBottomSheet}></div>
        <div
          className={sheetContentClasses}
          style={{ transform: `translateY(${isSheetShown ? "0%" : "100%"})` }}
        >
          <div className="header">
            <div
              className={dragIconClasses}
              onMouseDown={dragStart}
              onTouchStart={dragStart}
              onMouseMove={dragging}
              onTouchMove={dragging}
              onMouseUp={dragStop}
              onTouchEnd={dragStop}
            >
              <span className={dragIconSpanClasses}></span>
            </div>
          </div>
          <div className="body">
            <h2>Bottom Sheet Modal</h2>
            {/* Add the rest of the content here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScanBottomSheet;
