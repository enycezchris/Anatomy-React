import React from "react";
import { Outlet } from "react-router-dom";
import CraniumNavBar from "./CraniumNavBar";

const CraniumLayout = () => {
  return (
    <>
      <CraniumNavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default CraniumLayout;
