import React from "react";
import { Outlet } from "react-router-dom";
import MalePelvisNavBar from "./MalePelvisNavBar";

const PelvisMaleLayout = () => {
  return (
    <>
      <MalePelvisNavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PelvisMaleLayout;
