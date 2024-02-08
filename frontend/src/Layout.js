import React from "react";

import Navbar2 from "./components/Navbar2";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar2 />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
