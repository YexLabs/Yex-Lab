import { ethers } from "ethers";
import * as React from "react";
import {
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  erc20ABI,
  useAccount,
} from "wagmi";

import {
  tokenD_address,
  tokenF_address,
  buysell_address,
  vault_address,
  pools_address,
} from "../contracts/addresses";

import { pools_abi } from "../contracts/abis";
import { message } from "antd";

// For Css
import "../components/Exchange.css";
import stars from "../assets/images/switch/stars.png";
import moon from "../assets/images/switch/moon.png";
import m_behind from "../assets/images/switch/mountains_behind.png";
import m_front from "../assets/images/switch/mountains_front.png";
import { useEffect, useState } from "react";

export function Exchange() {
  const { address } = useAccount();
  const [hash, setHash] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isApproved, setIsApproved] = React.useState(false);
  const [approvedAmount, setApprovedAmount] = React.useState(0);
  const amountInRef = React.useRef();

  const confirmation = useWaitForTransaction({
    hash: hash,
    onSuccess(data) {
      setIsLoading(false);
      message.success("交易成功");
      // alert('交易成功')
    },
  });

  // 根据选中状态不同, 改变From状态值
  const [selectValueFrom, setSelectValueFrom] = useState(tokenD_address);
  const handleChangeFrom = (event) => {
    if (selectValueTo === event.target.value) {
      setSelectValueTo(selectValueFrom);
    }
    setSelectValueFrom(event.target.value);
  };

  // 根据选中状态不同, 改变To状态值
  const [selectValueTo, setSelectValueTo] = useState(tokenF_address);
  const handleChangeTo = (event) => {
    if (selectValueFrom === event.target.value) {
      setSelectValueFrom(selectValueTo);
    }
    setSelectValueTo(event.target.value);
  };

  // 获取vault已授权的tokenD数量
  const getTokenDApproved = useContractRead({
    address: tokenD_address,
    abi: erc20ABI,
    functionName: "allowance",
    args: [address, buysell_address],
    watch: true,
    onSuccess(data) {
      const amount = ethers.utils.formatUnits(data, "ether");
      setApprovedAmount(amount);
      setIsApproved(true);
    },
  });
  // // 获取可兑换出的token数量
  // const getAmountOut = useContractRead({
  //   address: pools_address,
  //   abi: pools_abi,
  //   functionName: "calculateNetAmountOut",
  //   args: [
  //     ethers.utils.parseEther(amountInRef.current?.value || "0"),
  //     [selectValueFrom, selectValueTo],
  //   ],
  //   watch: true,
  //   onSuccess(data) {
  //     const amount = ethers.utils.formatUnits(data, "ether");
  //     //   setApprovedAmount(amount);
  //   },
  // });
  // tokenD授权config
  const { config: approveTokenDConfig } = usePrepareContractWrite({
    address: tokenD_address,
    abi: erc20ABI,
    functionName: "approve",
    args: [buysell_address, ethers.utils.parseEther("100")],
  });
  // tokenD授权
  const {
    data: approveTokenDData,
    isSuccess,
    writeAsync: approveTokenDWrite,
  } = useContractWrite({
    ...approveTokenDConfig,
    onError(error) {
      console.log("Error", error);
    },
  });

  // pool swap config
  const { config: poolSwapConfig } = usePrepareContractWrite({
    address: pools_address,
    abi: pools_abi,
    functionName: "swap",
    args: [
      ethers.utils.parseEther(amountInRef.current?.value || "0"),
      [selectValueFrom, selectValueTo],
      address,
    ],
  });
  // pool swap
  const { data: poolSwapData, writeAsync: poolSwapWrite } = useContractWrite({
    ...poolSwapConfig,
    onError(error) {
      console.log("Error", error);
    },
  });

  const approveTokenDClick = () => {
    setIsLoading(true);
    if (selectValueFrom === tokenD_address) {
      // tokenD - F
      if (approvedAmount < Number(amountInRef.current?.value)) {
        approveTokenDWrite?.()
          .then((res) => {
            setHash(res.hash);
          })
          .catch((err) => {
            setIsLoading(false);
          });
      } else {
        poolSwapWrite?.()
          .then((res) => {
            setHash(res.hash);
          })
          .catch((err) => {
            setIsLoading(false);
          });
        //   alert("已授权");
      }
    }

    // poolSwapWrite?.().then((res) => {
    //   console.log(res);
    //   setHash(res.hash);
    // });
  };

  // ↓垃圾代码, 别看
  // 默认选中
  let [focusedElement, setFocusedElement] = useState(null);
  useEffect(() => {
    if (focusedElement !== null) {
      if (focusedElement.id === "ChangeFrom") {
        document.getElementById("ClickTo").style.outline = "none";
        document.getElementById("ClickFrom").style.outlineStyle = "solid";
        document.getElementById("ClickFrom").style.outlineWidth = "1px";
        document.getElementById("ClickFrom").style.outlineColor = "#d1d5db";
      } else if (focusedElement.id === "ChangeTo") {
        document.getElementById("ClickFrom").style.outline = "none";
        document.getElementById("ClickTo").style.outlineStyle = "solid";
        document.getElementById("ClickTo").style.outlineWidth = "1px";
        document.getElementById("ClickTo").style.outlineColor = "#d1d5db";
      }
    } else {
      document.getElementById("ClickTo").style.outline = "none";
      document.getElementById("ClickFrom").style.outline = "none";
    }
  }, [focusedElement]);

  // 检测是否点击(对全界面)
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  const handleClick = (event) => {
    if (isHoveringFrom === false) {
      document.getElementById("ClickFrom").style.outline = "none";
    }
    if (isHoveringTo === false) {
      document.getElementById("ClickTo").style.outline = "none";
    }
    if (!isHoveringTo && !isHoveringFrom) {
      setFocusedElement(null);
    }
  };

  // 检测是否悬停
  // 对输入
  const [isHoveringFrom, setIsHoveringFrom] = useState(false);
  function handleMouseEnterFrom() {
    setIsHoveringFrom(true);
  }
  function handleMouseLeaveFrom() {
    setIsHoveringFrom(false);
  }
  // 对输出
  const [isHoveringTo, setIsHoveringTo] = useState(false);
  function handleMouseEnterTo() {
    setIsHoveringTo(true);
  }
  function handleMouseLeaveTo() {
    setIsHoveringTo(false);
  }
  // ↑至此垃圾代码结束

  // option选项
  let [optionsfrom] = useState([
    { value: tokenD_address, label: "TST", disabled: false },
    { value: tokenF_address, label: "GLD", disabled: false },
  ]);

  let [optionsto] = useState([
    { value: tokenF_address, label: "GLD", disabled: false },
    { value: tokenD_address, label: "TST", disabled: false },
  ]);

  // 检测输入栏的值
  const [inputValue, setInputValue] = useState("");
  const [saluteValue, setSaluteValue] = useState("");
  // 根据输入栏的值, 基于输出栏的值
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSaluteValue(event.target.value);
  };

  return (
    <div id="Switch-body" className="h-full justify-center items-center flex">
      <section>
        <img src={stars} alt="" id="stars" />
        <img src={moon} alt="" id="moon" />
        <img src={m_behind} alt="" id="mountain_behind" />
        <div className="flex  content-center  justify-center h-full">
          <div id="exchange" className="card w-96 h-96 bg-base-100 shadow-xl">
            <div className="card-body p-7">
              <div className="bg-[#3d4451] border-black rounded-lg w-24 h-9 mb-2 text-xl font-sans text-white justify-center items-center flex">
                Convert
              </div>
              <div className="rounded-lg relative">
                <div
                  id="ClickFrom"
                  className="w-full rounded-lg border-none h-16 bg-[#F0F0F0] mb-2 hover:outline hover:outline-1 hover:outline-[#d1d5db]"
                  onMouseEnter={handleMouseEnterFrom}
                  onMouseLeave={handleMouseLeaveFrom}
                >
                  <input
                    id="ChangeFrom"
                    placeholder="Token you have"
                    ref={amountInRef}
                    value={inputValue}
                    className="input input-bordered border-none h-16 bg-[#F0F0F0] mb-2 focus:outline-none"
                    onFocus={(e) => setFocusedElement(e)}
                    onChange={(e) => handleInputChange(e)}
                  />
                  <select
                    className="select focus:outline focus:outline-1"
                    value={selectValueFrom}
                    onChange={handleChangeFrom}
                  >
                    {optionsfrom.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div id="From-To-Change">
                  <button className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-8 w-8 border-4 bg-[#F0F0F0] border-white rounded-lg border-color text-slate-400">
                    ↓
                  </button>
                </div>
                <div
                  id="ClickTo"
                  className="w-full rounded-lg border-none h-16 bg-[#F0F0F0] mb-2 hover:outline hover:outline-1 hover:outline-[#d1d5db]"
                  onMouseEnter={handleMouseEnterTo}
                  onMouseLeave={handleMouseLeaveTo}
                >
                  <input
                    id="ChangeTo"
                    value={saluteValue}
                    className="input input-bordered border-none h-16 bg-[#F0F0F0] focus:outline-none"
                    placeholder="Token you want"
                    onFocus={(e) => setFocusedElement(e.target)}
                  />
                  <select
                    className="select focus:outline focus:outline-1"
                    value={selectValueTo}
                    onChange={handleChangeTo}
                  >
                    {optionsto.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="card-actions justify-end mt-2">
                <button
                  className="btn btn-primary w-full"
                  onClick={() => approveTokenDClick()}
                >
                  {isLoading ? "Loading..." : !isApproved ? "Approve" : "Swap"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <img src={m_front} alt="" id="mountain_front" />
      </section>
    </div>
  );
}
