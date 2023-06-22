import React from "react";
import { netflix } from "../assets/image";
import PersonalInformationConn from "./PersonalInformationConn";
import CommunicationRecord from "./CommunicationRecord";
import IDProofShared from "./IDProofShared";
import AssetsSharedConn from "./AssetsSharedConn";
import TokenShared from "./TokenShared";
import ZeroKnowledgeProof from "./ZeroKnowledgeProof";
import DetailSharedTo from "./DetailSharedTo";
import RoleOfPerson from "./RoleOfPerson";

const SingleSocialConnection = () => {
  return (
    <div className="safe-area min-h-screen bg-gray-100">
      <div className="h-163 bg-gradient-to-b from-red-500 to-red-900">
        <div className="flex justify-between px-6 pb-6 pt-2">
          <div className="flex flex-col">
            <div className="w-36 h-36 bg-white rounded-full">
              <img
                src={netflix} // Replace with the actual image path
                alt="Netflix"
                className="object-contain h-full w-full"
              />
            </div>
            <p className="text-white text-2xl font-bold mt-2">Netflix: IK07A</p>
            <p className="text-yellow-500 text-sm font-bold">
              Requires Updated
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="mb-20 ml-18">
          <h4 className="text-black text-2xl font-bold">
            Personal Information
          </h4>
        </div>
        <div>
          <PersonalInformationConn />
          <CommunicationRecord />
          <IDProofShared />
          <AssetsSharedConn />
          <TokenShared />
          <ZeroKnowledgeProof />
          <DetailSharedTo />
          <RoleOfPerson />
        </div>
      </div>
    </div>
  );
};

export default SingleSocialConnection;
