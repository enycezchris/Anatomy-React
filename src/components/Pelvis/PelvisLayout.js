import React from "react";
import { Outlet } from "react-router-dom";
import PelvisNavBar from "./PelvisNavBar";

const PelvisLayout = () => {
  return (
    <>
      <PelvisNavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PelvisLayout;
