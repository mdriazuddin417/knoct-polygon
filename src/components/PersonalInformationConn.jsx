import React from "react";

const PersonalInformationConn = () => {
  const data = [
    { title: "Vishal Jah", label: "Name" },
    { title: "02/01/1998", label: "D.O.B" },
    { title: "Austria", label: "Country" },
  ];

  return (
    <div className="container mx-auto bg-white rounded-md p-4">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-black">Personal Information</h2>
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
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
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
                    <path d="M15 3l6 6-6 6"></path>
                    <path d="M10 17l-6-6 6-6"></path>
                  </svg>
                  <span className="text-sm text-gray-800">Edit</span>
                </button>
              </li>
              <li className="hover:bg-gray-100">
                <button
                  className="flex items-center space-x-2 px-4 py-2 focus:outline-none text-red-500"
                  type="button"
                >
                  <svg
                    className="w-4 h-4 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18"></path>
                    <path d="M6 6l12 12"></path>
                  </svg>
                  <span className="text-sm text-red-500">Delete</span>
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
            className="border border-gray-300 rounded-md p-3 mb-2 shadow-md"
          >
            <label className="block text-sm font-bold text-gray-700">
              {item.label}
            </label>
            <input
              className="block w-full mt-1 px-2 py-1 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              value={item.title}
              readOnly
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInformationConn;
