import React from "react";
import { Outlet } from "react-router-dom";
import SpineNavBar from "./SpineNavBar";

const SpineLayout = () => {
  return (
    <>
      <SpineNavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SpineLayout;
