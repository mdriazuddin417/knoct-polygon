import React from "react";
import SingleNotification from "./SingleNotification";
import { logsData } from "../Data/notifications";

const Notifications = () => {
  return (
    <div className="mt-10">
      <div>
        <ul>
          {logsData.map((item, index) => (
            <SingleNotification key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
