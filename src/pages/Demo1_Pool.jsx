import React, { useState, useEffect } from "react";
import PoolList from "../components/pool/PoolList";
import ethicon from "../assets/images/pools/eth.png";
import scrollIcon from "../assets/images/scroll.png";
import DepositCard from "../components/pool/depositCard/DepositCard";
import Sidebar from "../components/pool/Sidebar";
import WithdrawCard from "../components/pool/withdrawCard/WithdrawCard";

import { Mumbai_yexExample_address, } from "../contracts/addresses";
import { useContractRead, } from "wagmi";
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
  const [reserve0, setReserve0] = useState(0);
  const [reserve1, setReserve1] = useState(0);

  console.log(reserve0, 'reserve0')
  console.log(reserve1, 'reserve1')

  // getReserves
  const { data: reservesData } = useContractRead({
    address: Mumbai_yexExample_address,
    abi: Mumbai_yexExample_abi,
    functionName: "getReserves",
    args: [],
    onError: (error) => {
      console.log("Error", error);
    },
  });

  useEffect(() => {
    if (reservesData) {
      const reserves = reservesData.map((reserve) => ethers.utils.formatUnits(reserve, "ether"));
      setReserve0(reserves[0]);
      setReserve1(reserves[1]);
    }
  }, [reservesData]);

  return (
    <div className="flex flex-row gap-2 justify-center items-center mt-20 min-h-screen">
      <div>
        <Sidebar onSelectComponent={setCurrentComponent} />
      </div>
      <div className="w-3/4">
        <div>{currentComponent === "DepositCard" && <DepositCard />}</div>
        <div>
          <div className="justify-center items-center flex flex-col">
            {currentComponent === "PoolList" &&
              mockData.map((data, index) => (
                <PoolList
                  key={index}
                  tokenAIcon={data.tokenAIcon}
                  tokenBIcon={data.tokenBIcon}
                  statusIcon={data.statusIcon}
                  tokenAName={data.tokenAName}
                  tokenBName={data.tokenBName}
                  status={data.status}
                  liquidity={data.liquidity}
                  apr={data.apr}
                />
              ))}
          </div>
        </div>
        <div>{currentComponent === "WithdrawCard" && <WithdrawCard />}</div>
      </div>
    </div>
  );
};

export default Demo1_Pool;
