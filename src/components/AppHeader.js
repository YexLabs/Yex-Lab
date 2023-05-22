// @xiaochen
import { ConnectKitButton, ConnectKitProvider } from "connectkit";
import React from "react";
import logo from "../assets/images/yexlab.png";
import Faucet from "./Faucet";
import { useState } from "react";

export default function AppHeader() {
  const [isPoolHovered, setIsPoolHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsPoolHovered(true);
  };

  const handleMouseLeave = () => {
    setIsPoolHovered(false);
  };

  return (
    <header className="box-border fixed flex flex-col top-0 left-0 w-full h-[80px] z-30 border-b-0">
      <div class="flex fade-in bg-blue-500 backdrop-blur-md items-center">
        <div class="mx-auto py-[2px] ">
          <p class="m-0 font-inter font-normal leading-5 text-xs text-white">
            Scroll's Alpha Testnet is now live.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="box-border px-3 py-2 pl- absolute w-full backdrop-blur-md ">
          <div class="row2 flex flex-row justify-between items-center flex-wrap gap-y-10 max-w-full">
            <div class="flex flex-row items-center gap-6">
              <div className="mb-[2px]">
                <div className=" relative">
                  <div>
                    <a
                      href="/main"
                      className="text-current no-underline cursor-default"
                    >
                      <div className="cursor-pointer">
                        <img src={logo} className="h-[32px] w-[32px] z-1" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 md:space-x-6 mb-[2px]">
                <div className="relative">
                  <div>
                    <a
                      href="main"
                      class="no-underline text-current cursor-default"
                    >
                      <div class="flex items-center gap-1 md:gap-4 py-2 cursor-pointer">
                        <p class="m-0 font-inter leading-6 text-base font-medium text-gray-500 opacity-90">
                          Main
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* Pool */}
                {/* <div className="relative">
                  <div>
                    <a
                      href="#"
                      class="no-underline text-current cursor-default"
                    >
                      <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        class="dropdown dropdown-hover"
                      >
                        <div
                          tabindex="0"
                          class="flex items-center gap-1 md:gap-1 py-2 cursor-pointer flex-row"
                        >
                          <div class="m-0 font-inter leading-6 text-base font-medium text-gray-500 opacity-90">
                            Pool
                          </div>
                          <div class="mt-1">
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              xmlns="http://www.w3.org/2000/svg"
                              class={isPoolHovered ? "rotate-180" : "rotate-0"}
                            >
                              <path
                                fill="#5155a6"
                                fill-rule="nonzero"
                                d="M4.036 6.571.5 3.036l.786-.786L4.037 5l2.748-2.75.786.786z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <ul
                          tabindex="0"
                          class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-80 mt-0"
                        >
                          <li>
                            <a>
                              <div class="flex">
                                <div className="flex items-center">
                                  <img
                                    src={logo}
                                    className="h-[24px] w-[24px] z-1"
                                  />
                                </div>
                                <div className="flex flex-col ml-3">
                                  <p>Pool</p>
                                  <p className=" text-xs">
                                    Explore all pools on yexdex
                                  </p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a>
                              <div class="flex">
                                <div className="flex items-center">
                                  <img
                                    src={logo}
                                    className="h-[24px] w-[24px] z-1"
                                  />
                                </div>
                                <div className="flex flex-col ml-3">
                                  <p>Pool</p>
                                  <p className=" text-xs">
                                    Explore all pools on yexdex
                                  </p>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div> */}
                {/* <div className="relative">
                  <div>
                    <a
                      href="#"
                      class="no-underline text-current cursor-default"
                    >
                      <div class="flex items-center gap-1 md:gap-4 py-2 cursor-pointer">
                        <p class="m-0 font-inter leading-6 text-base font-medium text-gray-500 opacity-90">
                          Otc
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div>
                    <a
                      href="#"
                      class="no-underline text-current cursor-default"
                    >
                      <div class="flex items-center gap-1 md:gap-4 py-2 cursor-pointer">
                        <p class="m-0 font-inter leading-6 text-base font-medium text-gray-500 opacity-90">
                          Pool
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div>
                    <a
                      href="#"
                      class="no-underline text-current cursor-default"
                    >
                      <div class="flex items-center gap-1 md:gap-4 py-2 cursor-pointer">
                        <p class="m-0 font-inter leading-6 text-base font-medium text-gray-500 opacity-90">
                          Launch
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div>
                    <a
                      href="#"
                      class="no-underline text-current cursor-default"
                    >
                      <div class="flex items-center gap-1 md:gap-4 py-2 cursor-pointer">
                        <p class="m-0 font-inter leading-6 text-base font-medium text-gray-500 opacity-90">
                          Protfolio
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div>
                    <a
                      href="https://scroll.io/alpha/bridge"
                      class="no-underline text-current cursor-default"
                      target="_blank"
                    >
                      <div class="flex items-center gap-1 md:gap-4 py-2 cursor-pointer">
                        <p class="m-0 font-inter leading-6 text-base font-medium text-gray-500 opacity-90">
                          Bridge
                        </p>
                      </div>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div class="flex flex-row items-center gap-3">
              <Faucet />
              <div className=" relative">
                <div className="">
                  <ConnectKitProvider>
                    <ConnectKitButton />
                  </ConnectKitProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
