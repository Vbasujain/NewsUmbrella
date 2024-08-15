import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoadingBar from "react-top-loading-bar";

const Layout = ({ progress }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <LoadingBar height={5} color="#f11946" progress={progress} />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
 