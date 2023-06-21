import React from "react";
import SingleNotification from "./SingleNotification";
import { othersNoti, priorityData } from "../Data/notifications";

const Notifications = () => {
  return (
    <div className="mt-10">
      <div className="">
        <h2 className="text-xl font-bold text-smallBlack">
          Priority Notification
        </h2>
        <div>
          <ul>
            {priorityData.map((item, index) => (
              <SingleNotification key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
      <div className=" mt-10">
        <h2 className="text-xl font-bold text-smallBlack">
          Others Notification
        </h2>
        <div>
          <ul>
            {othersNoti.map((item, index) => (
              <SingleNotification key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
