import React from "react";
import { Outlet } from "react-router-dom";
import HumanNavBar from "./HumanNavBar";

const HumanLayout = () => {
  return (
    <>
      <HumanNavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HumanLayout;
