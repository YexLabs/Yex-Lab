//@xiaochen
import React from "react";
import curve from "../assets/images/intro/curve.png";
import stars from "../assets/images/intro/stars.png";
import honeypot_banner from "../assets/images/intro/honeypot.png";
import scroll_banner from "../assets/images/intro/scroll.png";
import berachain_banner from "../assets/images/intro/bera.png";
import splatter_banner from "../assets/images/intro/splatter.png";
import chainlink_banner from "../assets/images/intro/chainlink.png";
import honeypot_logo from '../assets/images/projects/honeypot.jpg';
import splatter_logo from '../assets/images/projects/splatter.jpg';
import "../components/Projects.css";

export default function Main() {
  return (
    <div class="box-border mx-auto mb-7 min-h-screen md:min-h-auto md:h-auto md:pt-7">
      <div className="mb-[100px] relative">
        <img
          className="absolute flex justify-center  w-full top-20 z-0 mt-48"
          src={curve}
          alt=""
          style={{ zIndex: -1, backgroundImage: `url(${stars})` }}
        />
        <div className="flex flex-col box-border mx-auto w-full max-w-screen-lg pt-40">
          <div className="flex flex-col cursor-default">
            <div className="flex flex-col ml-24 text-left m-2 gap-8">
              <div className="flex flex-col max-w-1/2">
                <div>
                  <p class="font-medium text-4xl z-40">
                    The first Core Contracts R&D team{" "}
                  </p>
                </div>
                <div>
                  <p class="font-medium text-4xl z-40">
                    Working on{" "}
                    <span className="scrollTextGradient z-40">
                      Cross-Projects
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col fade-in  gap-1">
                <p className="text-lg font-medium z-40">
                  y=e<sup>x</sup> Lab leads people to a democratic and decentralized Web 3.0 world.
                </p>
                <p className=" w-1/2 text-left text-gray-500 mt-2 z-40">
                We firmly believe that decentralization is community-centric. 
                The community chooses their development team, their front-end, 
                and their smart contracts to realize the products they want. 
                Instead of letting users hunt for products made by companies.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-96 mx-2">
            <div className="flex flex-col gap-6 items-center">
              <p className=" text-4xl font-semibold z-40">Our Mission</p>
              <p className=" w-5/6 text-center z-40">
                Committed to Contract 3.0, to a truly democratic DAO
                and to complete decentralization.
                See the projects we are contributing to below.
              </p>
              {/* white paper */}
              {/* <a href="/whitepaper">
                <button className="btn  btn-outline">
                  White Paper
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#5155a6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </span>
                </button>
              </a> */}
              <div id="Projects-body" className="h-full justify-center items-center flex">
                {/* Honeypot */}
                <div class="card">
                  <div class="img"> <img src={honeypot_logo} width="100%" height="100%" alt="" /> </div>
                  <span>Honeypot Finance</span>
                  <p class="info"> A native DEX on BERA.</p>
                  <div class="share">
                    <a href="https://github.com/honeypotfinance" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                      </path>
                    </svg></a>
                    <a href="https://twitter.com/honeypotfinance" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                      </path>
                    </svg></a>
                    <a href="https://discord.gg/pkh7shAPWB" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                      <path
                        d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                    </svg></a>
                  </div>
                  <a href="https://honeypot-front-end-ten.vercel.app/" target="_blank"><button> website </button></a>

                </div>
                {/* Splatter */}
                <div class="card" style={{ background: ' #5a9ff7' }}>
                  <div class="img"> <img src={splatter_logo} width="100%" height="100%" alt="" /> </div>
                  <span>Splatter Protocol</span>
                  <p class="info"> A native DEX on Scroll.</p>
                  <div class="share">
                    <a href="https://github.com/yexlab" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                      </path>
                    </svg></a>
                    <a href="https://twitter.com/Splatter_Proto" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                      </path>
                    </svg></a>
                    <a href="https://discord.gg/93fkRv5DgB" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                      <path
                        d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                    </svg></a>
                  </div>
                  <a href="https://www.splatterprotocol.xyz/" target="_blank"><button>website</button></a>

                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-2 mx-2">
            <div className="px-12">
              <img src={curve} />
            </div>
          </div>

          <div className="flex flex-col items-center mt-16 mx-2">
            <div className="flex flex-col gap-2 items-center">
              <p className=" text-4xl font-semibold">Built with the Best</p>
              <p className="  text-center">
                Thanks to our partners and the best builders in the Web3
                industry
              </p>
              <div>
                {" "}
                <div class=" grid grid-cols-3 grid-gap-4 grid-flow-row mt-8">
                  <img src={chainlink_banner} className=" mx-4 w-52 h-16" />
                  <img src={berachain_banner} className=" mx-4 w-52 h-16" />
                  <img src={scroll_banner} className=" mx-4 w-52 h-16" />
                  <img src={honeypot_banner} className=" mx-4 w-52 h-16" />
                  <img src={splatter_banner} className=" mx-4 w-52 h-16" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
