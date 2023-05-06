import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import App from "../App";
import { Switch } from "../components/Switch";
import { Exchange } from "../components/Exchange";
import { Pools } from "../components/Pools";
import { Found } from "../components/Found";
import Main from "../components/Main";
import WhitePaper from "../components/WhitePaper";

export function BaseRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route path="/otc" element={<Switch />} /> */}
          {/* <Route path="/Exchange" element={<Exchange />} /> */}
          {/* <Route path="/Pools" element={<Pools />} /> */}
          {/* <Route path="/Found" element={<Found />} /> */}
          <Route path="/Main" element={<Main />} />
          <Route path="/whitepaper" element={<WhitePaper />} />
        </Route>
      </Routes>
    </Router>
  );
}
