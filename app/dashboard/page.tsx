import React, { useEffect } from "react";
import DashCards from "../components/Dashboard/DashCards";
import DashNavbar from "../components/Dashboard/DashNavbar";
import DashSideNav from "../components/Dashboard/DashSideNav";
import DashUserDiv from "../components/Dashboard/DashUserDiv";
import OrderActivities from "../components/Dashboard/OrderActivities";
import { CiMenuBurger } from "react-icons/ci";

const Dashboard = async () => {

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}

        <label htmlFor="my-drawer" className="btn drawer-button">
          <CiMenuBurger className="w-5 h-5" />
        </label>
        <DashUserDiv />
        <DashCards/>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <DashSideNav />
      </div>
    </div>
  );
};

export default Dashboard;
