import { ethers } from "ethers";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import {
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  erc20ABI,
  useAccount,
} from "wagmi";
import { utils } from "ethers";
import { message } from "antd";

import {
  tokenD_address,
  buysell_address,
  vault_address,
  tokenF_address,
} from "../contracts/addresses";

import "../components/Switch.css";
import stars from "../assets/images/switch/stars.png";
import moon from "../assets/images/switch/moon.png";
import m_behind from "../assets/images/switch/mountains_behind.png";
import m_front from "../assets/images/switch/mountains_front.png";
import { buysell_abi } from "../contracts/abis";

export function Switch() {
  const [to, setTo] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isApprovedD, setIsApprovedD] = React.useState(false);
  const [isApprovedF, setIsApprovedF] = React.useState(false);
  const [debouncedTo] = useDebounce(to, 500);

  const [amount, setAmount] = React.useState("");
  const [debouncedAmount] = useDebounce(amount, 500);

  const { address } = useAccount();
  const [hash, setHash] = React.useState("");
  const [approvedDAmount, setApprovedDAmount] = React.useState(0);
  const [approvedFAmount, setApprovedFAmount] = React.useState(0);
  const amountRef = React.useRef();

  // 切换状态栏的按钮组件
  const [Buyon, setBuyon] = useState(true); // 设置默认值, 'true'为买, 'false'为卖

  useEffect(() => {
    document.getElementById("buy").style.background = Buyon
      ? "rgb(79 70 229)"
      : "rgb(61,68,81)";
    document.getElementById("sell").style.background = Buyon
      ? "rgb(61,68,81)"
      : "rgb(79 70 229)";
  }, [Buyon]);

  const ToSell = () => {
    setBuyon(false);
  };
  const ToBuy = () => {
    setBuyon(true);
    // console.log('AfterBuy', Buyon)
  };

  const confirmation = useWaitForTransaction({
    hash: hash,
    onSuccess(data) {
      console.log("Success", data);
      message.success("success");
      setIsLoading(false);
      // alert('交易成功')
    },
  });

  // 获取vault已授权的tokenD数量
  const getTokenDApproved = useContractRead({
    address: tokenD_address,
    abi: erc20ABI,
    functionName: "allowance",
    args: [address, buysell_address],
    watch: true,
    onSuccess(data) {
      console.log("GetTokenDApproved", data);
      const amount = ethers.utils.formatUnits(data, "ether");
      setApprovedDAmount(amount);
      if (amount >= Number(amountRef.current?.value)) {
        setIsApprovedD(true);
      } else {
        setIsApprovedD(false);
      }
      console.log("isApprovedD", isApprovedD);
    },
  });
  // tokenD授权config
  const { config: approveTokenDConfig } = usePrepareContractWrite({
    address: tokenD_address,
    abi: erc20ABI,
    functionName: "approve",
    args: [
      buysell_address,
      ethers.utils.parseEther(amountRef.current?.value || "0"),
    ],
  });
  // tokenD授权
  const { data: approveTokenDData, writeAsync: approveTokenDWrite } =
    useContractWrite({
      ...approveTokenDConfig,
      onError(error) {
        console.log("Error", error);
      },
    });
  // 获取vault已授权的tokenF数量
  const getTokenFApproved = useContractRead({
    address: tokenF_address,
    abi: erc20ABI,
    functionName: "allowance",
    args: [address, vault_address],
    watch: true,
    onSuccess(data) {
      console.log("GetTokenFApproved", data);
      const amount = ethers.utils.formatUnits(data, "ether");
      setApprovedFAmount(amount);
      if (amount >= Number(amountRef.current?.value)) {
        setIsApprovedF(true);
      } else {
        setIsApprovedF(false);
      }
    },
  });
  // tokenF授权config
  const { config: approveTokenFConfig } = usePrepareContractWrite({
    address: tokenF_address,
    abi: erc20ABI,
    functionName: "approve",
    args: [
      vault_address,
      ethers.utils.parseEther(amountRef.current?.value || "0"),
    ],
  });
  // tokenF授权
  const {
    data: approveTokenFData,
    isSuccess,
    writeAsync: approveTokenFWrite,
  } = useContractWrite({
    ...approveTokenFConfig,
    onError(error) {
      console.log("Error", error);
    },
  });
  // tokenD申购config
  const { config: depositTokenDConfig } = usePrepareContractWrite({
    address: buysell_address,
    abi: buysell_abi,
    functionName: "subscribe",
    args: [
      tokenD_address,
      ethers.utils.parseEther(amountRef.current?.value || "0"),
    ],
  });
  // tokenD申购
  const { data: depositTokenDData, writeAsync: depositTokenDWrite } =
    useContractWrite({
      ...depositTokenDConfig,
      onError(error) {
        console.log("Error", error);
      },
    });

  // tokenF赎回config
  const { config: withdrawTokenDConfig } = usePrepareContractWrite({
    address: buysell_address,
    abi: buysell_abi,
    functionName: "redeem",
    args: [
      tokenD_address,
      ethers.utils.parseEther(amountRef.current?.value || "0"),
    ],
  });
  // tokenF赎回
  const { data: withdrawTokenDData, writeAsync: withdrawTokenDWrite } =
    useContractWrite({
      ...withdrawTokenDConfig,
      onError(error) {
        console.log("Error", error);
      },
    });

  const buyClick = () => {
    setIsLoading(true);
    console.log("buy");
    if (approvedDAmount < Number(amountRef.current?.value)) {
      approveTokenDWrite?.()
        .then((res) => {
          console.log(res);
          setHash(res.hash);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    } else {
      console.log("授权数量已足够");
      if (depositTokenDWrite) {
        depositTokenDWrite?.()
          .then((res) => {
            console.log(res);
            setHash(res.hash);
          })
          .catch((err) => {
            setIsLoading(false);
          });
      } else {
        setIsLoading(false);
        message.error("network failed");
      }
    }
  };

  const sellClick = () => {
    setIsLoading(true);
    if (approvedFAmount < Number(amountRef.current?.value)) {
      approveTokenFWrite?.()
        .then((res) => {
          console.log(res);
          setHash(res.hash);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    } else {
      console.log("授权数量已足够");
      if (withdrawTokenDWrite) {
        withdrawTokenDWrite?.()
          .then((res) => {
            console.log(res);
            setHash(res.hash);
          })
          .catch((err) => {
            setIsLoading(false);
          });
      } else {
        setIsLoading(false);
        message.error("network failed");
      }
    }
  };

  return (
    <div id="Switch-body" className="h-full justify-center items-center flex">
      <section>
        {/* <img src={stars} alt="" id="stars" />
        <img src={moon} alt="" id="moon" />
        <img src={m_behind} alt="" id="mountain_behind" /> */}
        <div id="BuySell" className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body p-7">
            <div id="button-group" className="mb-3">
              <button
                id="buy"
                className="h-11 w-16 bg-indigo-600 rounded-l-lg text-white text-xl pl-0.5 duration-100"
                onClick={() => ToBuy()}
              >
                Buy
              </button>
              <button
                id="sell"
                className="h-11 w-16 bg-[#3d4451] rounded-r-lg text-white text-xl pr-0.5 duration-100"
                onClick={() => ToSell()}
              >
                Sell
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // sendTransaction?.();
              }}
            >
              {/* <input
                type="text"
                className="input bg-slate-100 min-h-16 w-full max-w-xs mb-5"
                aria-label="Recipient"
                onChange={(e) => setTo(e.target.value)}
                placeholder="0xA0Cf…251e"
                value={to}
              /> */}
              <input
                type="text"
                className="input bg-slate-100 min-h-16 w-full max-w-xs mb-5"
                aria-label="Amount (ether)"
                ref={amountRef}
                placeholder="0.05"
              />
              {Buyon ? (
                <button
                  className="btn w-full"
                  disabled={false}
                  onClick={() => {
                    buyClick();
                  }}
                >
                  {isLoading ? "Loading..." : isApprovedD ? "Buy" : "Approve"}
                </button>
              ) : (
                <button
                  className="btn w-full"
                  disabled={false}
                  onClick={() => {
                    sellClick();
                  }}
                >
                  {isLoading ? "Loading..." : isApprovedF ? "Sell" : "Approve"}
                </button>
              )}
              {/* {isSuccess && (
                <div>
                  Successfully sent {amount} ether to {to}
                  <div>
                    {checknetwork(chain.name) ? (
                      <a
                        href={`https://${chain.name}.etherscan.io/tx/${data?.hash}`}
                      >
                        Etherscan
                      </a>
                    ) : (
                      <a href={`https://etherscan.io/tx/${data?.hash}`}>
                        Etherscan
                      </a>
                    )}
                  </div>
                </div>
              )} */}
            </form>
          </div>
        </div>
        {/* <img src={m_front} alt="" id="mountain_front" /> */}
      </section>
    </div>
  );
}
