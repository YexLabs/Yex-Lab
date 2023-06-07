//@xiaochen
import React from "react";
import {
  useAccount,
  useContractRead,
  useContractReads,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import {
  Mumbai_tokenA_address,
  Mumbai_tokenB_address,
} from "../contracts/addresses";
import { Mumbai_faucet_abi } from "../contracts/abis";
import { message } from "antd";
import { ethers } from "ethers";

export default function Faucet_Mumbai() {
  const { address } = useAccount();
  const [isFaucted_A, setIsFaucted_A] = React.useState(false);
  const [isFaucted_B, setIsFaucted_B] = React.useState(false);
  const [ableFaucted_A, setAbleFaucted_A] = React.useState(false);
  const [ableFaucted_B, setAbleFaucted_B] = React.useState(false);
  const [isLoading_A, setIsLoading_A] = React.useState(false);
  const [isLoading_B, setIsLoading_B] = React.useState(false);
  const [tokenA_balance, setTokenABalance] = React.useState(0);
  const [tokenB_balance, setTokenBBalance] = React.useState(0);
  const [hash, setHash] = React.useState("");
  const faucetClick_A = () => {
    if (isFaucted_A) {
      message.error("You have already got tokenA");
    } else {
      setIsLoading_A(true);
      faucetAConfigWrite?.()
        .then((res) => {
          console.log(res);
          setHash(res.hash);
        })
        .catch((err) => {
          setIsLoading_A(false);
        });
    }
  };
  const faucetClick_B = () => {
    if (isFaucted_B) {
      message.error("You have already got tokenB");
    } else {
      setIsLoading_B(true);
      faucetBConfigWrite?.()
        .then((res) => {
          console.log(res);
          setHash(res.hash);
        })
        .catch((err) => {
          setIsLoading_B(false);
        });
    }
  };

  // confirmation
  const confirmation = useWaitForTransaction({
    hash: hash,
    onSuccess(data) {
      setIsLoading_A(false);
      setIsLoading_B(false);
      message.success({
        content: "success",
        duration: 1,
        className: "mt-3",
      });
    },
  });

  const faucetTokenA_Config = {
    address: Mumbai_tokenA_address,
    abi: Mumbai_faucet_abi,
  };

  const faucetTokenB_Config = {
    address: Mumbai_tokenB_address,
    abi: Mumbai_faucet_abi,
  };
  // 获取两种测试币的状态
  const getRouterInfo = useContractReads({
    contracts: [
      {
        ...faucetTokenA_Config,
        functionName: "faucetedList",
        args: [address],
      },
      {
        ...faucetTokenB_Config,
        functionName: "faucetedList",
        args: [address],
      },
      {
        ...faucetTokenA_Config,
        functionName: "balanceOf",
        args: [address],
      },
      {
        ...faucetTokenB_Config,
        functionName: "balanceOf",
        args: [address],
      },
    ],
    watch: true,
    enabled: true,
    onSuccess(data) {
      setIsFaucted_A(data[0]);
      setIsFaucted_B(data[1]);
      setAbleFaucted_A(!data[0]);
      setAbleFaucted_B(!data[1]);
      setTokenABalance(
        Number(ethers.utils.formatUnits(data[2], "ether"))
          .toFixed(6)
          .replace(/\.?0+$/, "")
      );

      setTokenBBalance(
        Number(ethers.utils.formatUnits(data[3], "ether"))
          .toFixed(6)
          .replace(/\.?0+$/, "")
      );
    },
  });

  // get tokenD balance
  // const getTokeDBalance = useContractRead({
  //   address: Mumbai_tokenA_address,
  //   abi: Mumbai_faucet_abi,
  //   functionName: "balanceOf",
  //   args: [address],
  //   watch: true,
  //   onSuccess(data) {
  //     const amount = ethers.utils.formatUnits(data, "ether");
  //     setTokenABalance(amount);
  //   },
  // });

  // Faucet config
  const { config: faucetAConfig } = usePrepareContractWrite({
    address: Mumbai_tokenA_address,
    abi: Mumbai_faucet_abi,
    functionName: "faucet",
    args: [],
    account: address,
    enabled: ableFaucted_A,
  });
  // Faucet
  const {
    data: faucetConfigData,
    isSuccess,
    writeAsync: faucetAConfigWrite,
  } = useContractWrite({
    ...faucetAConfig,
    onError(error) {
      console.log("Error", error);
    },
  });

  // Faucet config
  const { config: faucetBConfig } = usePrepareContractWrite({
    address: Mumbai_tokenB_address,
    abi: Mumbai_faucet_abi,
    functionName: "faucet",
    args: [],
    account: address,
    enabled: ableFaucted_B,
  });
  // Faucet
  const { writeAsync: faucetBConfigWrite } = useContractWrite({
    ...faucetBConfig,
    onError(error) {
      console.log("Error", error);
    },
  });

  return (
    <div>
      <button
        className={`btn btn-outline btn-ghost btn-sm fade-in ${
          address ? "" : "hidden"
        } ${isLoading_A ? " loading" : ""} `}
        onClick={faucetClick_A}
      >
        {"Faucet" + " : " + tokenA_balance + " " + "$A"}
      </button>
      <button
        className={`btn btn-outline ml-2 btn-ghost btn-sm fade-in ${
          address ? "" : "hidden"
        } ${isLoading_B ? " loading" : ""} `}
        onClick={faucetClick_B}
      >
        {"Faucet" + " : " + tokenB_balance + " " + "$B"}
      </button>
    </div>
  );
}
