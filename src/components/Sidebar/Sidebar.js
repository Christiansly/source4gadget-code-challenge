import React, { useEffect } from "react";
import styled from "styled-components";
import "./Sidebar.css";
import { FaHome } from "react-icons/fa";
import HomeIcon from "../../svgs/HomeIcon";
import SettingsIcon from "../../svgs/SettingsIcon";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Sidebar() {
  let location = useLocation();

  return (
    <SidebarContainer>
      <div className="flex flex-row items-center gap-1 w-full pl-4 pt-3 pb-12">
        {/* <div className="h-12 w-12 bg-gray-300 rounded-full"></div> */}
        <RoundedRectangle />
        <div className="text-left">
          <h1 className="font-bold text-base leading-5 text-white not-italic">
            User Groove
          </h1>
          <p className="small-text">by Christian</p>
        </div>
      </div>
      {/* <div className="ml-2"> */}
      <Menu icon={<HomeIcon />} label="Home" />
      {/* </div> */}

      <div className="pl-4 text-left pr-8">
        <div className="directory-text border-solid border-b pb-2">
          DIRECTORY
        </div>
        <div className="">
          <Link
            to="/"
            className={"pl-2 flex items-center font-normal text-sm text-white not-italic tracking-wide mt-2 h-6" + ((location?.pathname === "/") ? " active": "")}
          >
            Dashboard
          </Link>
          <Link
            to="search-post"
            className={"pl-2 flex items-center font-normal text-sm text-white not-italic tracking-wide mt-2 h-6" + ((location?.pathname === "/search-post") ? " active": "")}
          >
            Search posts
          </Link>
          <div className="pl-2 flex items-center font-normal text-sm text-white not-italic tracking-wide mt-2 h-6">
            Add user
          </div>
        </div>
      </div>

      <SidebarFooter className="pr-8">
        <div className="pl-4 w-full pb-3">
          <div className="border-solid border-t w-full"></div>
        </div>
        <Menu icon={<SettingsIcon />} label="Settings" />
      </SidebarFooter>
    </SidebarContainer>
  );
}

export default Sidebar;

const Menu = ({ icon, label }) => (
  <div className="flex flex-row items-center gap-2 pl-7 pb-6">
    {" "}
    {icon}{" "}
    <h1 className="font-normal text-sm text-white not-italic tracking-wide">
      {label}
    </h1>
  </div>
);

const SidebarContainer = styled.div`
  background: linear-gradient(
    182.81deg,
    rgba(53, 46, 77, 0) -3.48%,
    #9f96ef -3.47%,
    #5f5888 98.43%
  );
  height: 100vh;
  width: 251px;
`;

const RoundedRectangle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #c4c4c4;
`;

const SidebarFooter = styled.div`
  position: absolute;
  bottom: 24px;
  width: 251px;
`;
