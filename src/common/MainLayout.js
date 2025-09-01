import { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import TopMenuBar from "./TopMenu/TopMenuBar";

const MainLayout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const largeScreen = window.innerWidth >= 1024; 
      setIsLarge(largeScreen);
      setToggleMenu(!largeScreen); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ position: "fixed", width: "100%", zIndex: 1000 }}>
      <TopMenuBar setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
      <div style={{ display: "flex" }}>
        <div
          id="sidebar-wrapper"
          style={
            toggleMenu
              ? {
                  width: 0,
                  position: isLarge ? "relative" : "absolute",
                  zIndex: -22,
                  transition: "1s ease",
                  overflow: "hidden",
                }
              : {
                  width: "250px",
                  transition: "1s ease",
                  left: 0,
                  bottom: 0,
                  overflow: "hidden",
                  zIndex: 222,
                  position: isLarge ? "relative" : "absolute",
                }
          }
        >
          <Sidebar />
        </div>
        <div
          className="custom-scroll right-side"
          style={{
            flex: "1",
            padding: "5px 20px",
            height: "auto",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
