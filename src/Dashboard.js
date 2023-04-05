import React, { useState } from "react";
import { Link } from "react-router-dom";

import './Dashboard.css';
import Sidebar from "./Sidebar";
import Content from "./Content";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState('')
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleMenu = (item) => {
    setItemSelected(item);
    console.log(item)
  }
  return (
    <div className="dashboard">
      <header class="main-header-top hidden-print">
        <div className="header-logo">
          <div class="header-section" className="logo">
            <img
              src="https://s3-alpha-sig.figma.com/img/b079/030c/4972f8d743d4ee60546f484eb4d3ab9b?Expires=1681689600&Signature=bwsaPUAm~fW3IqNHZ-7uPGns8mX61KnM0ewuYr5hqr6c7R3Isf7Dd2ZQ9Frt1C4RPTraqNz-hkoAh6gPLfjKV0c-CrtudWiv2YYgOgAfEEQWU5cJ4tGni1eZBPWAzsdRtVP31h8Rx9cBpdsYYAfMKb~M7PfrLismlgIfUY2W8UNwcjJaHx-ygC2O8p~HxCdRHld6Xn0E5PpU3S2fS4b44BOirLUj2zzN2j5sPxccqUkNOdYE5ECY9oUEjSs6k3LRKHcl2StRCvv75AplEH3A5oMteX-L73xHmRWtV9OFx7hnq6vaVAQrTVG-FPnVAy3fBpNli6soCw1PyB1qf1FTMQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="60" height="40" alt="Logo" />
            <div class="text-bottom-right"><span>i</span>ToConnect</div>

          </div>

        </div>
        <div className="header-right">
          <button className="hamburger" onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </header >
      <div className="dashboard-main-section">
        <Sidebar handleMenu={handleMenu} />
        <Content itemSelected={itemSelected}/>
      </div>
    </div >
  );
}

export default Dashboard;
