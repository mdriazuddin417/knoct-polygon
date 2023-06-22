import React, { useState } from "react";
import { countryData } from "../../../Data/CountryData";
import { FiActivity } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const CloudRecovery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [country, setCountry] = useState({});

  const navigation = useNavigate();

  const handleCountryChange = (index) => {
    setCountry(countryData[index]);
    setModalOpen(false);
  };

  return (
    <div className="w-full  h-screen flex flex-col m-auto justify-center items-center ">
      <div className="gap-14 max-w-[400px] px-5 py-8 border border-gray-100 rounded-xl flex flex-col m-auto justify-center items-center shadow-xl ">
        <div className="">
          <h1 className="text-[24px] font-bold text-smallBlack">
            Cloud Recovery
          </h1>
          <p className="text-sm text-gray-700 mt-2">
            Recover your wallet password using the recovery phrase you set
            during the signup. Make sure that you do not forget or share the
            recovery phrase for your own security.
          </p>
        </div>
        <div className="">
          <h2 className="text-sm font-medium text-gray-700">
            Enter wallet recovery phrase
          </h2>
          <div className="flex items-center mt-2">
            <div className="w-10 h-8 mr-2 rounded border border-gray-200 flex items-center justify-center">
              <FiActivity size={15} color={"grey"} />
            </div>
            <input
              type="text"
              className="flex-grow bg-gray-100 rounded border border-gray-100 py-1 outline-none shadow px-2 w-full"
              placeholder="Enter recovery phrase"
            />
          </div>
        </div>
        <div className=" w-full">
          <div className="bg-gray-100 rounded border border-gray-200 shadow p-3">
            <h3 className="text-gray-600 font-medium text-sm ">Region</h3>
            <div className="flex justify-between items-center mt-3 ">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                  <img
                    src={country.img || countryData[0].img}
                    alt="Flag"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-bold text-gray-700">
                  {country.name || countryData[0].name}
                </p>
              </div>
              <button
                className="btn btn-sm btn-primary text-white"
                onClick={() => setModalOpen(true)}
              >
                Change
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-[100px]">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded w-[291px]"
            onClick={() => {
              navigation("/");
            }}
          >
            Recovery wallet
          </button>
        </div>
        {modalOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center h-">
            <div className="bg-white rounded p-4 h-[500px ] w-[400px] overflow-y-auto">
              <h3 className="text-lg font-bold text-gray-700 mb-4">
                Select a Country
              </h3>
              <ul>
                {countryData.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 py-2 justify-between"
                  >
                    <div className="flex justify-start items-center gap-4">
                      <div className="w-6 h-6 rounded-full overflow-hidden">
                        <img
                          src={item.img}
                          alt="Flag"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm font-bold text-gray-700">
                        {item.name}
                      </p>
                    </div>
                    <button
                      className="btn btn-sm btn-primary text-white"
                      onClick={() => handleCountryChange(index)}
                    >
                      Select
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CloudRecovery;
