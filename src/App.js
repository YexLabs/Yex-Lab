import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { goerli, scrollTestnet, polygonMumbai } from "@wagmi/chains";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import AppHeader from "./components/AppHeader";
import Network from "./components/Network";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const alchemyId = process.env.REACT_APP_ALCHEMY_ID;

const chains = [polygonMumbai, scrollTestnet, goerli];

const client = createClient(
  getDefaultClient({
    appName: "GLD DeFi",
    alchemyId,
    chains,
  })
);

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const BuySell = () => {
  //   navigate("/Switch");
  // };
  // const ExchangeClick = () => {
  //   navigate("/Exchange");
  // };
  // const PoolsClick = () => {
  //   navigate("/Pools");
  // };
  // const FoundClick = () => {
  //   navigate("/Found");
  // };
  const LogoClick = () => {
    navigate("/main");
  };
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/main");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen">
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <div className="fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-r from-purple-100 to-blue-100 overflow-y-auto overflow-x-hidden">
            <AppHeader />
            <Network />
            <Outlet />
            <Footer />
          </div>
          <ToastContainer />
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
};

export default App;
