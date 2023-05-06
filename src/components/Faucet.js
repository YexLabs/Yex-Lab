//@xiaochen
import React from "react";
import {
  useAccount,
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { tokenD_address } from "../contracts/addresses";
import { tokenD_abi } from "../contracts/abis";
import { message } from "antd";
import { ethers } from "ethers";

export default function Faucet() {
  const { address } = useAccount();
  const [isLoading, setIsLoading] = React.useState(false);
  const [tokenD_balance, setTokenDBalance] = React.useState(0);
  const [hash, setHash] = React.useState("");
  const faucetClick = () => {
    setIsLoading(true);
    faucetConfigWrite?.()
      .then((res) => {
        console.log(res);
        setHash(res.hash);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  // confirmation
  const confirmation = useWaitForTransaction({
    hash: hash,
    onSuccess(data) {
      setIsLoading(false);
      message.success({
        content: "success",
        duration: 1,
        className: "mt-3",
      });
    },
  });

  // get tokenD balance
  const getTokeDBalance = useContractRead({
    address: tokenD_address,
    abi: tokenD_abi,
    functionName: "balanceOf",
    args: [address],
    watch: true,
    onSuccess(data) {
      const amount = ethers.utils.formatUnits(data, "ether");
      setTokenDBalance(amount);
    },
  });

  // Faucet config
  const { config: faucetConfig } = usePrepareContractWrite({
    address: tokenD_address,
    abi: tokenD_abi,
    functionName: "faucet",
    args: [],
  });
  // Faucet
  const {
    data: faucetConfigData,
    isSuccess,
    writeAsync: faucetConfigWrite,
  } = useContractWrite({
    ...faucetConfig,
    onError(error) {
      console.log("Error", error);
    },
  });

  return (
    <div>
      <button
        className={`btn btn-outline btn-ghost btn-sm fade-in ${
          address ? "" : "hidden"
        } ${isLoading ? " loading" : ""} `}
        onClick={faucetClick}
      >
        {"Faucet" + " : " + tokenD_balance + " " + "$D"}
      </button>
    </div>
  );
}
