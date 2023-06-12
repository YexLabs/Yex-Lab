//@xiaochen
import React from "react";
import logo from "../assets/images/yexlab.png";

export default function Footer() {
  return (
    <div className="px-32 pb-16">
      <div className="grid grid-cols-5 gap-8">
        <img src={logo} className="w-14 h-14" />
        <div className="flex flex-col gap-4">
          <p className=" text-gray-500">Community</p>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href="https://discord.gg/93fkRv5DgB"
              target="_blank"
              rel="noreferrer"
            >
              <p>Discord</p>
            </a>
            <p></p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className=" text-gray-500">News</p>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="https://twitter.com/yex_lab"
              target="_blank"
              rel="noreferrer"
            >
              <p>Twitter</p>
            </a>
            <a href="#">
              <p>Mirror</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-gray-500">Resources</p>
          <div className="flex flex-col gap-2 text-sm">
            <a href="/whitepaper" target="_blank">
              <p>Docs</p>
            </a>
            <a
              href="https://github.com/yexlab"
              target="_blank"
              rel="noreferrer"
            >
              <p>Github</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-gray-500">Links</p>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="https://scroll.io/alpha/bridge"
              target="_blank"
              rel="noreferrer"
            >
              <p>Bridge</p>
            </a>
            <a
              href="https://blockscout.scroll.io/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Explorer</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
