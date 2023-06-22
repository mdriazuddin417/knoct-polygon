import React from "react";

const CommunicationRecord = () => {
  const data = [
    { title: "This is one communication about exchangedVishal Jah" },
    { title: "This is second communication about update" },
  ];

  return (
    <div className="mt-20 container mx-auto bg-white rounded-md">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-black">
              Communication Record
            </h2>
            <p className="text-sm font-normal text-gray-600">
              7 July 2022, 6:39 PM
            </p>
          </div>
          <div className="relative">
            <button
              className="flex items-center space-x-1 focus:outline-none"
              type="button"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <ul className="py-1">
                <li className="hover:bg-gray-100">
                  <button
                    className="flex items-center space-x-2 px-4 py-2 focus:outline-none"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3l6 6-6 6" />
                      <path d="M10 17l-6-6 6-6" />
                    </svg>
                    <span className="text-sm text-gray-800">Delete</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 p-3 mb-2 shadow-md"
            >
              <p className="text-sm font-normal text-gray-700">{item.title}</p>
            </div>
          ))}
          <div className="flex items-start">
            <div className="p-3 mb-2 shadow-md">
              <p className="text-sm font-normal text-gray-700">
                This is third communication about profile
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationRecord;
