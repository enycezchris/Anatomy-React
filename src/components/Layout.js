import React from "react";
import { Outlet } from "react-router-dom";
// Outlet marks where to render the child routes (children:[] from createBrowserRouter in App.js)
import MainNavBar from "./MainNavBar";

const Layout = () => {
  return (
    <>
      <MainNavBar />
      <main>
        {/* Outlet marks where the children routes will be rendered (Home page / Products Page) */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
