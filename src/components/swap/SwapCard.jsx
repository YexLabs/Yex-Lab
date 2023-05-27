import React from "react";
import "./SwapCard.css";
import SwapCard_Header from "./swapCard/SwapCard_Header";
import SwapCard_Content from "./swapCard/SwapCard_Content";

export default function SwapCard() {
  return (
    <div className="h-full">
      {/* 写一个swap卡片样式,上下左右都居中 */}
      <div className="flex justify-center items-center">
        <div className="mt-10  w-1/2  bg-white  bg-opacity-30 rounded-xl shadow-xl flex-col p-4">
          <SwapCard_Header />
          <SwapCard_Content />
        </div>
      </div>
    </div>
  );
}
