import React, { useEffect } from "react";
import SwapCard from "../components/swap/SwapCard";
import { useNetwork, useSwitchNetwork } from "wagmi";

export default function Demo1_Swap() {
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork({
      chainId: 80001,
    });
  // demo1_swap目前只在80001上运行
  useEffect(() => {
    if (chain?.id !== 80001 && switchNetwork) {
      switchNetwork();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [switchNetwork]);
  return (
    <div className="mt-16 min-h-screen md:min-h-auto md:h-auto">
      <SwapCard />
    </div>
  );
}
