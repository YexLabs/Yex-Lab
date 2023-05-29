import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Card, Avatar, Badge, Button } from "antd";
import {
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  erc20ABI,
  useAccount,
} from "wagmi";
import ethicon from "../assets/images/pools/eth.png";
import { DownloadOutlined } from "@ant-design/icons";

import { message } from "antd";

// For Css
import "../components/Found.css";
import stars from "../assets/images/switch/stars.png";
import moon from "../assets/images/switch/moon.png";
import m_front from "../assets/images/switch/mountains_front.png";
import m_behind from "../assets/images/switch/mountains_behind.png";
import { purchase_address, tokenD_address } from "../contracts/addresses";
import { purchase_abi } from "../contracts/abis";
// Css Over

const { Meta } = Card;

export function Found() {
  const [loading, setLoading] = useState(true);
  const { address } = useAccount();
  const [hash, setHash] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const confirmation = useWaitForTransaction({
    hash: hash,
    onSuccess(data) {
      console.log("Success", data);
      message.success("success");
      setIsLoading(false);
      // alert('交易成功')
    },
  });

  // 用F采购config
  const { config: purchaseByFConfig } = usePrepareContractWrite({
    address: purchase_address,
    abi: purchase_abi,
    functionName: "purchaseByF",
    args: [tokenD_address, ethers.utils.parseEther("10")],
  });
  // 用F采购
  const { data: createPoolData, writeAsync: purchaseByFWrite } =
    useContractWrite({
      ...purchaseByFConfig,
      onError(error) {
        console.log("Error", error);
      },
    });
  const purchaseByFClick = () => {
    if (purchaseByFWrite) {
      purchaseByFWrite?.()
        .then((res) => {
          console.log(res);
          setHash(res.hash);
        })
        .catch((err) => {
          console.log(err);
          message.error("error");
        });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div id="Switch-body" className="h-full justify-center items-center flex">
      <section>
        <img src={stars} alt="" id="stars" />
        <img src={moon} alt="" id="moon" />
        <img src={m_behind} alt="" id="mountain_behind" />
        <div id="fund" className="card w-96 bg-base-100 shadow-xl h-24 mt-24">
          <div className="card-body p-7">
            <button
              className="btn w-full"
              onClick={() => {
                purchaseByFClick();
              }}
            >
              Purchase
            </button>
          </div>
        </div>
        <img src={m_front} alt="" id="mountain_front" />
      </section>
    </div>
  );
}
