
import Menu from "@mui/material/Menu";
import MuiCommonIcon from "./MuiCommonIcon";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";
import { useDispatch } from "react-redux";
export default function CommonSubMenu({ setAnchorEl, open, anchorEl }) {
  const dispatch = useDispatch();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
    const handleLogout = () => {
      dispatch(logout());
      navigate('/login/admin');
    };
  
  return (
    <div>
      <Menu
        id="submenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div
          style={{
            height: "auto",
            width: "200px",
            padding: "5px",
          }}
        >
          <p
            style={{ borderBottom: ".5px solid #CCD0D5", cursor: "pointer" }}
            className="mb-2 submenu-wrapper"
          >
            <img
              style={{
                width: "20px",
                height: "20px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "1px solid #66bfbf",
                padding: "1px",
                cursor: "pointer",
              }}
              className="img-fluid"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctBcqMcFNJLixeaxBbPovatcYynLgmda33w&usqp=CAU"
              alt=""
            />
            <span className="profile-submenu">
              { "Unknown"}
            </span>
          </p>

          <p
            style={{ cursor: "pointer" }}
           onClick={handleLogout}
            className="d-flex align-items-center mb-2 submenu-wrapper mt-2"
          >
            <MuiCommonIcon size="small" name="logout" />{" "}
            <span className="profile-submenu">Logout</span>
          </p>
        </div>
      </Menu>
    </div>
  );
}
