import React, { useState } from "react";
import Notifications from "../../../components/Notifications";
import Logs from "../../../components/Logs";

const Wallet = () => {
  const [activeTab, setActiveTab] = useState("Notifications");

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Notifications":
        return <Notifications />;
      case "Logs":
        return <Logs />;

      default:
        return null;
    }
  };

  return (
    <div className="lg:px-[100px] sm:px-[80px] px-5 py-8">
      <div className="flex justify-center">
        <div className="flex ">
          <div
            className={`px-4 py-2 cursor-pointer ${
              activeTab === "Notifications"
                ? "active-tab text-green-500 font-bold border-b-2 border-green-500"
                : "inactive-tab text-gray-500"
            }`}
            onClick={() => changeTab("Notifications")}
          >
            Notifications
          </div>
          <div
            className={`px-4 py-2 cursor-pointer ${
              activeTab === "Logs"
                ? "active-tab text-green-500 font-bold border-b-2 border-green-500"
                : "inactive-tab text-gray-500"
            }`}
            onClick={() => changeTab("Logs")}
          >
            Logs
          </div>
        </div>
      </div>
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default Wallet;
