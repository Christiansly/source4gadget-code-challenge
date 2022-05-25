import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

function Layout({children}) {
  return (
    <div className="flex flex-row">
      <div><Sidebar /></div>
      <div className="flex flex-col">
        <div><Header /></div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
