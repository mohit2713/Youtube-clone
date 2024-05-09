import React from "react";
import NavbarMenu from "./NavbarMenu";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <NavbarMenu />
      <Outlet />
    </div>
  );
};

export default Body;
