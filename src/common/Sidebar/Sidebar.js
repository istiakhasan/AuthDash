import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoleWiseMenu } from "../../data/data";
import "./Sidebar.css";
import SidebarChildNode from "./SidebarChildNode";
import MuiCommonIcon from "../MuiCommonIcon";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [click, setIsClick] = useState();
  const { role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login/admin");
  };
  return (
    <div
      style={{ position: "relative" }}
      className="custom-scroll sidebar-container-scroll"
    >
      <div>
        {getRoleWiseMenu(role)?.map((item, index) => (
          <SidebarChildNode
            click={click}
            data={getRoleWiseMenu(role)}
            setClick={setIsClick}
            index={index}
            key={index}
            item={item}
          />
        ))}
      </div>
      <div
        onClick={handleLogout}
        style={{
          position: "absolute",
          bottom: "0",
          left: "22px",
          cursor: "pointer",
        }}
      >
        <MuiCommonIcon size="small" name="logout" />{" "}
        <span className="profile-submenu">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
