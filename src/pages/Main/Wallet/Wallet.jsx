import React, { useState } from "react";
import Credentials from "../../../components/Credentials";
import Connection from "../../../components/Connection";
import Assets from "../../../components/Assets";
import Token from "../../../components/Token";

const Wallet = () => {
  const [activeTab, setActiveTab] = useState("Credentials");

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Credentials":
        return <Credentials />;
      case "Connection":
        return <Connection />;
      case "Assets":
        return <Assets />;
      case "Token":
        return <Token />;
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
              activeTab === "Credentials"
                ? "active-tab text-green-500 font-bold border-b-2 border-green-500"
                : "inactive-tab text-gray-500"
            }`}
            onClick={() => changeTab("Credentials")}
          >
            Credentials
          </div>
          <div
            className={`px-4 py-2 cursor-pointer ${
              activeTab === "Connection"
                ? "active-tab text-green-500 font-bold border-b-2 border-green-500"
                : "inactive-tab text-gray-500"
            }`}
            onClick={() => changeTab("Connection")}
          >
            Connection
          </div>
          <div
            className={`px-4 py-2 cursor-pointer ${
              activeTab === "Assets"
                ? "active-tab text-green-500 font-bold border-b-2 border-green-500"
                : "inactive-tab text-gray-500"
            }`}
            onClick={() => changeTab("Assets")}
          >
            Assets
          </div>
          <div
            className={`px-4 py-2 cursor-pointer ${
              activeTab === "Token"
                ? "active-tab text-green-500 font-bold border-b-2 border-green-500"
                : "inactive-tab text-gray-500"
            }`}
            onClick={() => changeTab("Token")}
          >
            Token
          </div>
        </div>
      </div>
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default Wallet;
