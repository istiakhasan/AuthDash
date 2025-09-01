import React from "react";
import CommonSubMenu from "../CommonSubMenu";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const TopMenuBar = ({ toggleMenu, setToggleMenu }) => {
  const { role } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <div className="navbar navbar-wraper">
        <span className="d-flex justify-content-between align-items-center d-inline-block h-100 ms-4 toggleIconWrapper">
          {/* Toggle Icon */}
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            {toggleMenu ? (
              <MenuIcon fontSize="large" />
            ) : (
              <CloseIcon fontSize="large" />
            )}
          </button>

          {/* Role text */}
          <h1 style={{ color: "white", fontSize: "20px", marginLeft: "14px" }}>
            {role}
          </h1>
        </span>

        {/* Profile Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              borderRadius: "50%",
              marginRight: "50px",
              cursor: "pointer",
              border: "2px solid white",
              padding: "4px",
            }}
            className="img-fluid"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctBcqMcFNJLixeaxBbPovatcYynLgmda33w&usqp=CAU"
            alt="Profile"
          />
        </div>
      </div>

      <CommonSubMenu open={open} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  );
};

export default TopMenuBar;
