
import Sidebar from "./Sidebar/Sidebar";
import TopMenuBar from "./TopMenu/TopMenuBar";

const MainLayout = ({ children }) => {


  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "100%",

        }}
      >
        <TopMenuBar />
      </div>
      <div style={{ display: "flex" }}>
        <div
          id="sidebar-wrapper"
          style={
            false
              ? {
                  width: 0,
                  position: "absolute",
                  zIndex: -22,
                  transition: "1s ease ",
                  overflow: "hidden",
                }
              : {
                  width: "250px",
                  transition: "1s ease ",
                  left: "0%",
                  overflow: "hidden",
                  zIndex: 222,
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
