import React, { useEffect, useState } from "react";

import "tailwindcss/tailwind.css";
import NotificationTabs from "./NotificationTabs";
import { document } from "../../../assets/image";

export default function Notification() {
  const [value, setValue] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setValue(true);
    }, 1000);
  }, []);

  let content;

  if (value) {
    content = <NotificationTabs />;
  } else {
    content = (
      <div className="flex flex-col items-center justify-center mt-24   max-w-[500px] mx-auto ">
        <img
          src={document}
          alt="Document"
          className="w-44 h-44 object-contain"
        />
        <p className="mt-6 text-gray-500 text-center">
          Others can request from you through a proof request. You control what
          and with whom you share your information.
        </p>
      </div>
    );
  }

  return <div className="">{content}</div>;
}
