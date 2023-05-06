//@xiaochen
import React from "react";
import { useBlockNumber } from "wagmi";

export default function Network() {
  const { data, isError, isLoading, isSuccess } = useBlockNumber({
    watch: true,
  });
  return (
    <div className=" fixed flex justify-between w-full bg-none bottom-0 z-10 px-5 pb-5">
      <span></span>
      <div className="flex items-center">
        <div className></div>
        <a
          href="https://blockscout.scroll.io/block/1181353"
          target="_blank"
          className={`flex items-center ${isSuccess ? "" : "hidden"} `}
        >
          <span className=" fade-in">
            <p className="text-sm">{data || ""}</p>
          </span>
          <div className="ml-2 polling-dot network-health"></div>
        </a>
      </div>
    </div>
  );
}
