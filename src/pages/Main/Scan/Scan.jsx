import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import ScanBottomSheet from "../../../components/ScanBottomSheet";

const Scan = () => {
  const [qrData, setQrData] = useState("");
  const [open, setOpen] = useState(true);

  const handleScan = (data) => {
    if (data) {
      setQrData(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div className="flex flex-col items-center py-8  h-[calc(100vh-70px)] relative">
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        className=" w-[500px] h-[500px] border border-primary bg-primary rounded-lg "
      />
      {/* {qrData && (
        <p className="text-center mt-4">Scanned QR code data: {qrData}</p>
      )} */}
      <ScanBottomSheet />
    </div>
  );
};

export default Scan;
