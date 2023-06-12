import React, { useState, useEffect } from "react";
import PoolList from "../components/pool/PoolList";
import ethicon from "../assets/images/pools/eth.png";
import scrollIcon from "../assets/images/scroll.png";
import DepositCard from "../components/pool/depositCard/DepositCard";
import Sidebar from "../components/pool/Sidebar";
import WithdrawCard from "../components/pool/withdrawCard/WithdrawCard";

import {
  Mumbai_yexExample_address,
  Mumbai_yexExample_pool2_address,
} from "../contracts/addresses";
import { useContractRead } from "wagmi";
import { Mumbai_yexExample_abi } from "../contracts/abis";
import { ethers } from "ethers";

const mockData = [
  {
    tokenAIcon: ethicon,
    tokenBIcon: ethicon,
    statusIcon: scrollIcon,
    tokenAName: "ETH",
    tokenBName: "USDT",
    status: "Status",
    liquidity: "123,123,123",
    apr: "22.9%",
  },
  {
    tokenAIcon: ethicon,
    tokenBIcon: ethicon,
    statusIcon: scrollIcon,
    tokenAName: "BTC",
    tokenBName: "USDT",
    status: "Status",
    liquidity: "234,234,234",
    apr: "33.3%",
  },
  {
    tokenAIcon: ethicon,
    tokenBIcon: ethicon,
    statusIcon: scrollIcon,
    tokenAName: "BTC",
    tokenBName: "USDT",
    status: "Status",
    liquidity: "234,234,234",
    apr: "33.3%",
  },
  {
    tokenAIcon: ethicon,
    tokenBIcon: ethicon,
    statusIcon: scrollIcon,
    tokenAName: "BTC",
    tokenBName: "USDT",
    status: "Status",
    liquidity: "234,234,234",
    apr: "33.3%",
  },
];

const Demo1_Pool = () => {
  const [currentComponent, setCurrentComponent] = useState("PoolList");
  const [pool1Reserve0, setPool1Reserve0] = useState(0);
  const [pool1Reserve1, setPool1Reserve1] = useState(0);

  const [pool2Reserve0, setPool2Reserve0] = useState(0);
  const [pool2Reserve1, setPool2Reserve1] = useState(0);

  console.log(pool1Reserve0, "pool1Reserve0");
  console.log(pool1Reserve1, "pool1Reserve1");

  console.log(pool2Reserve0, "pool2Reserve0");
  console.log(pool2Reserve1, "pool2Reserve1");

  // get pool1 Reserves
  const { data: reservesPool1Data } = useContractRead({
    address: Mumbai_yexExample_address,
    abi: Mumbai_yexExample_abi,
    functionName: "getReserves",
    args: [],
    onError: (error) => {
      console.log("Error", error);
    },
  });

  // get pool2 Reserves
  const { data: reservesPool2Data } = useContractRead({
    address: Mumbai_yexExample_pool2_address,
    abi: Mumbai_yexExample_abi,
    functionName: "getReserves",
    args: [],
    onError: (error) => {
      console.log("Error", error);
    },
  });

  useEffect(() => {
    if (reservesPool1Data) {
      const reserves = reservesPool1Data.map((reserve) =>
        ethers.utils.formatUnits(reserve, "ether")
      );
      setPool1Reserve0(reserves[0]);
      setPool1Reserve1(reserves[1]);
    }
  }, [reservesPool1Data]);

  useEffect(() => {
    if (reservesPool2Data) {
      const reserves = reservesPool2Data.map((reserve) =>
        ethers.utils.formatUnits(reserve, "ether")
      );
      setPool2Reserve0(reserves[0]);
      setPool2Reserve1(reserves[1]);
    }
  }, [reservesPool2Data]);

  return (
    <div className="flex flex-row gap-2 justify-center mt-20 min-h-screen">
      <div>
        <Sidebar onSelectComponent={setCurrentComponent} />
      </div>
      <div className="w-3/4">
        <div>{currentComponent === "DepositCard" && <DepositCard />}</div>
        <div>
          <div className="justify-center items-center flex flex-col">
            {currentComponent === "PoolList" && (
              // mockData.map((data, index) => (
              //   <PoolList
              //     key={index}
              //     tokenAIcon={data.tokenAIcon}
              //     tokenBIcon={data.tokenBIcon}
              //     statusIcon={data.statusIcon}
              //     tokenAName={data.tokenAName}
              //     tokenBName={data.tokenBName}
              //     status={data.status}
              //     liquidity={data.liquidity}
              //     apr={data.apr}
              //   />
              // ))
              <div className="bg-white bg-opacity-30 mt-10 rounded-xl shadow-xl flex-col p-4">
                <div className="p-1 hover:cursor-pointer rounded-xl">
                  <p>Pool Lists</p>
                </div>
                <PoolList
                  tokenAIcon={ethicon}
                  tokenBIcon={ethicon}
                  tokenAName={"TokenA"}
                  tokenBName={"TokenB"}
                  status={"Openning"}
                  liquidity={Number(pool1Reserve0) + Number(pool1Reserve1)}
                />
                <PoolList
                  tokenAIcon={ethicon}
                  tokenBIcon={ethicon}
                  tokenAName={"TokenA"}
                  tokenBName={"TokenB"}
                  status={"Openning"}
                  liquidity={Number(pool2Reserve0) + Number(pool2Reserve1)}
                />
              </div>
            )}
          </div>
        </div>
        <div>{currentComponent === "WithdrawCard" && <WithdrawCard />}</div>
      </div>
    </div>
  );
};

export default Demo1_Pool;
