//@xiaochen
import React from "react";
import bg from "../assets/images/intro/bg.png";
import curve from "../assets/images/intro/curve.png";
import honypot from "../assets/images/intro/honypot.png";
import scroll from "../assets/images/intro/scroll.png";
import berachain from "../assets/images/intro/bera.png";

export default function Main() {
  return (
    <div class="box-border mx-auto mb-7 min-h-screen md:min-h-auto md:h-auto md:pt-7">
      <div className="mb-[100px] relative">
        <img
          className="absolute flex justify-center  w-full top-20 z-0 mt-48"
          src={curve}
          alt=""
          // style={{ zIndex: -1, backgroundImage: `url(${curve})` }}
        />
        <div className="flex flex-col box-border mx-auto w-full max-w-screen-lg pt-40">
          <div className="flex flex-col cursor-default">
            <div className="flex flex-col ml-24 text-left m-2 gap-8">
              <div className="flex flex-col max-w-1/2">
                <div>
                  <p class="font-medium text-4xl z-40">
                    DeFi Fund for Improved Liquidity{" "}
                  </p>
                </div>
                <div>
                  <p class="font-medium text-4xl z-40">
                    Trading on{" "}
                    <span className="scrollTextGradient z-40">
                      Scroll Testnet
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col fade-in  gap-1">
                <p className="text-lg font-medium z-40">
                  More efficient capital utilization. A safer way to provide
                  liquidity.
                </p>
                <p className=" w-1/2 text-left text-gray-500 mt-2 z-40">
                  Our DeFi fund provides LPers with improved survival
                  conditions: mining the alpha, hedging the beta and giving a
                  stable, deep, low-cost liquidity for the community.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-96 mx-2">
            <div className="flex flex-col gap-6 items-center">
              <p className=" text-4xl font-semibold z-40">Our Mission</p>
              <p className=" w-5/6 text-center z-40">
                y=e<sup>x</sup> Lab leads people to an easier and safer way to
                the DeFi world.
              </p>
              <a href="/whitepaper">
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
              </a>
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
                  <img src={honypot} className=" mx-4 w-52 h-16" />
                  <img src={scroll} className=" mx-4 w-52 h-16" />{" "}
                  <img src={berachain} className=" mx-4 w-52 h-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
