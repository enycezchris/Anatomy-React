import React from "react";
import { Outlet } from "react-router-dom";
import ThoraxNavBar from "./ThoraxNavBar";

const ThoraxLayout = () => {
  return (
    <>
      <ThoraxNavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ThoraxLayout;
