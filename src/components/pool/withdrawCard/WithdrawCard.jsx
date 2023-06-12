import React from "react";
import WithdrawCard_Header from "./WithdrawCard_Header";
import WithdrawCard_Content from "./WithdrawCard_Content";

const WithdrawCard = () => {
  return (
    <div className="h-full">
      <div className="flex justify-center items-center">
        <div className="mt-10 w-1/2 bg-white bg-opacity-30 rounded-xl shadow-xl flex-col p-4">
          <WithdrawCard_Header />
          <WithdrawCard_Content />
        </div>
      </div>
    </div>
  );
};

export default WithdrawCard;
