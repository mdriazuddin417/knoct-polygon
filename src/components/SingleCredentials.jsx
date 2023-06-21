import React from "react";
import { useNavigation } from "react-router-dom";

const SingleCredentials = ({ item }) => {
  const navigation = useNavigation();

  return (
    <div
      className="w-full h-[191px] rounded-10 bg-green-100 p-5 flex flex-col justify-between items-start shadow-md cursor-pointer"
      //   onClick={() => navigation.navigate("CredentialsDetails")}
    >
      <p className="text-[14px] font-medium text-gray-500">{item?.date}</p>
      <div className="w-full flex justify-between items-center mt-auto">
        <div>
          <p className="text-lg font-medium text-gray-700">{item?.title}</p>
          <p className="text-[12px] font-medium text-gray-500">
            {item?.attri} Attributes
          </p>
        </div>
        <div className="w-[60px] h-[60px] bg-green-200 rounded-full flex flex-col justify-center items-center">
          <img src={item?.img} alt={item?.title} className="w-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default SingleCredentials;
