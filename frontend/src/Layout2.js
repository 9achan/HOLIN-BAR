import React from "react";

import Navbar2 from "./components/Navbar2";
import { Outlet } from "react-router-dom";

const Layout2 = () => {
  return (
    <div>
      <Navbar2 />
      <Outlet />
    </div>
  );
};

export default Layout2;