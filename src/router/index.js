import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import App from "../App";
import { Switch } from "../pages/Switch";
import { Exchange } from "../pages/Exchange";
import { Pools } from "../pages/Pools";
import { Found } from "../pages/Found";
import Main from "../pages/Main";
import WhitePaper from "../pages/WhitePaper";
import Demo1_Swap from "../pages/Demo1_Swap";
import Demo1_Pool from "../pages/Demo1_Pool";
import Demo2_ILO from "../pages/Demo2_ILO";

export function BaseRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route path="/otc" element={<Switch />} /> */}
          {/* <Route path="/Exchange" element={<Exchange />} /> */}
          {/* <Route path="/Pools" element={<Pools />} /> */}
          {/* <Route path="/Found" element={<Found />} /> */}
          <Route path="/main" element={<Main />} />
          <Route path="/whitepaper" element={<WhitePaper />} />
          <Route path="/demo1_swap" element={<Demo1_Swap />} />
          <Route path="/demo1_pool" element={<Demo1_Pool />} />
          <Route path="/demo2_ilo" element={<Demo2_ILO />} />
        </Route>
      </Routes>
    </Router>
  );
}
