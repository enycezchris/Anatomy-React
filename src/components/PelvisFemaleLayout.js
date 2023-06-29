import React from "react";
import { Outlet } from "react-router-dom";
import FemalePelvisNavBar from "./FemalePelvisNavBar";

const PelvisFemaleLayout = () => {
  return (
    <>
      <FemalePelvisNavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PelvisFemaleLayout;
