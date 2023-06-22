import React from "react";

const assetsData = [
  {
    image: "path_to_image1",
    subtitle: "Subtitle 1",
    price: "10",
    title: "Title 1",
  },
  {
    image: "path_to_image2",
    subtitle: "Subtitle 2",
    price: "20",
    title: "Title 2",
  },
];

const AssetsSharedConn = () => {
  return (
    <div className="mt-20 container mx-auto bg-white rounded-md">
      <div className="p-20">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-black">Assets Shared</h2>
            <svg
              className="w-6 h-6 text-gray-700 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </div>
          <p className="text-sm font-light text-gray-400">
            7 July 2022, 6:39 PM
          </p>
        </div>
        <div className="mt-22">
          {assetsData.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="mt-15 p-8 bg-white rounded border border-gray-200 shadow"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt="Asset"
                  className="w-48 h-36 object-cover"
                />
                <div className="ml-9 flex-grow">
                  <h4 className="text-base font-bold text-black">
                    {item.subtitle || "no value"}
                  </h4>
                  <div className="mt-5 flex items-center">
                    <img
                      src="images/wallet/eth_2.png"
                      alt="ETH"
                      className="w-7"
                    />
                    <p className="ml-5 text-base text-black">
                      {item.price || "no value"} ETH
                    </p>
                  </div>
                </div>
                <div className="ml-2">
                  <div className="bg-primaryColor rounded-full w-70 py-2 px-5">
                    <p className="text-sm font-bold text-white text-center">
                      {item.title || "no value"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetsSharedConn;
