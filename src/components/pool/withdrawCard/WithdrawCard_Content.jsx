import React, { useState } from 'react'
import ethicon from "../../../assets/images/pools/eth.png";
import usdcicon from "../../../assets/images/pools/usdc.png";

const WithdrawCard_Content = () => {
    const [inputValue, setInputValue] = useState(1781.84);
    return (
        <div className="flex-col mt-8">
            <div className=" bg-white  bg-opacity-50 rounded-xl p-4 relative">
                <div className="flex-col">
                    <div className="flex justify-between">
                        <div className="text-2xl">
                            <input
                                type="text"
                                placeholder="0.0"
                                className="bg-transparent border-none text-3xl outline-none "
                            />
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#494c91" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                        </div>
                    </div>
                    {/* Available */}
                    <div className="flex justify-between mt-3 text-gray-600 text-sm">
                        <div>
                            {"$" +
                                inputValue.toLocaleString("en-US", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                    useGrouping: true,
                                })}
                        </div>
                        <div className="">Available: 0.0</div>
                    </div>
                    {/* 百分比选择 */}
                    <div className="flex justify-start gap-7 mt-2 text-sm">
                        <div className="w-1/5 border-slate-200 border  rounded-xl text-center py-1 hover:cursor-pointer hover:border-slate-400 ripple-btn active:border-slate-600">
                            25%
                        </div>
                        <div className="w-1/5 border-slate-200 border  rounded-xl text-center py-1 hover:cursor-pointer hover:border-slate-400 ripple-btn active:border-slate-600">
                            50%
                        </div>
                        <div className="w-1/5 border-slate-200 border  rounded-xl text-center py-1 hover:cursor-pointer hover:border-slate-400 ripple-btn active:border-slate-600">
                            75%
                        </div>
                        <div className="w-1/5 border-slate-200 border  rounded-xl text-center py-1 hover:cursor-pointer hover:border-slate-400 ripple-btn active:border-slate-600">
                            100%
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-white  bg-opacity-50 rounded-xl p-4 relative mt-4">
                <div className="flex-col">
                    <div className='flex flex-row justify-between'>
                        <button className=" text-center w-full py-2 border border-indigo-500 rounded-xl ripple-btn text-indigo-400">
                            Single
                        </button><button className=" text-center w-full py-2 border border-indigo-500 rounded-xl ripple-btn text-indigo-400">
                            Balanced
                        </button>
                    </div>
                    <hr className='mt-4' />
                    <div className='flex flex-col'>
                        <p className='text-sm font-normal mt-4'>Expected to receive</p>
                        <div className='flex flex-row justify-between mt-4'>
                            <div className='flex flex-row'>
                                <div className='w-10 h-10 p-2'>
                                    <img src={ethicon} alt="" />
                                </div>
                                <p className='p-2'>ETH</p>
                            </div>
                            <p>0</p>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row'>
                                <div className='w-10 h-10 p-2'>
                                    <img src={usdcicon} alt="" />
                                </div>
                                <p className='p-2'>USDC</p>
                            </div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-white  bg-opacity-50 rounded-xl p-4 relative mt-4">
                <div className="flex-col">
                    <div className='flex flex-row justify-between'>
                        <p>Slippage</p>
                        <p>0%</p>
                    </div>
                    <button className=" text-center w-full mt-5 bg-indigo-400 py-2 rounded-xl ripple-btn text-white">
                        Withdraw
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WithdrawCard_Content