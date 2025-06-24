import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <h4>We use LLMs for powerful summarization.</h4>
    </div>
  );
};

export default Layout;
