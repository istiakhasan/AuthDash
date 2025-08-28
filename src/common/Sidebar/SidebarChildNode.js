import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SidebarChildNode = ({ item: element, index, click, setClick, data }) => {
  const navigate=useNavigate()
  useEffect(() => {
    const urlPath = window.location.pathname;
    const firstLayerTitle = urlPath.split("/")[1];
    
    const getSignleItem = data.find(
      (dt) => dt.title.toLowerCase() === firstLayerTitle
    );
    if (getSignleItem) {
      setClick(getSignleItem.id);
    }

    if (urlPath === element.path) {
      setClick(element.id);
    }
  }, []);
  const isMatch = localStorage.getItem("data");

  return (
    <ul className="parent-menu-item">
      <li
        onClick={() => {
          navigate(element?.path)
          localStorage.setItem("data", element.title);
          if (click === element.id) {
            setClick(null);
          } else {
            setClick(element.id);
          }
        }}
        style={{ cursor: "pointer", whiteSpace: "nowrap" }}
      >
        <span className={`${
            isMatch === element.title && "ismatch"
          }`}><i  className={element.icon}></i></span>
        <span
          className={`first-level-title ${
            isMatch === element.title && "ismatch"
          }`}
        >
          {element.title}
        </span>
      </li>
    </ul>
  );
};

export default SidebarChildNode;
