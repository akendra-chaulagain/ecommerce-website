import React from "react";
import "./Sidebar.css";
import {
  LineStyle,
  Person,
  PlayArrow,
  Menu,
  ExitToAppOutlined,
  Category,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  logOutfailure,
  logOutStart,
  logOutSuccess,
} from "../../redux/userRedux";
import { toast, Zoom } from "react-toastify";
import axios from "axios";

const Sidebar = () => {
  const dispatch = useDispatch();

  // logout
  const handlLogout = async () => {
    dispatch(logOutStart());
    try {
      await axios.post("/auth/logout", null).then(() => {
        dispatch(logOutSuccess());
      });
      toast.success(" Logout Success!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        transition: Zoom,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      dispatch(logOutfailure());
      toast.error(" Something went wrong. unable to update!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        transition: Zoom,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <div className=" sidebar">
        <div className="sidebar-box">
          <div className="sidebartitle">MAIN</div>
          <div className="sidebarList">
            {/* it render to home page folder in   */}
            <li className="sidebarItems mt-1">
              <Link className="link" to="/">
                <LineStyle
                  className="sidebarIcons"
                  style={{ marginRight: 8 }}
                />
                DashBoard
              </Link>
            </li>
          </div>

          <div className="sidebartitle mt-3">LISTS</div>
          <div className="sidebarList">
            {/* users link which render to userlist page */}
            <li className="sidebarItems mt-1">
              <Link className="link" to="/list">
                <Person className="sidebarIcons" style={{ marginRight: 8 }} />
                Users
              </Link>
            </li>

            {/* product link */}
            <Link className="link" to="/product">
              <li className="sidebarItems mt-1">
                <PlayArrow
                  className="sidebarIcons"
                  style={{ marginRight: 8 }}
                />
                Products
              </li>
            </Link>
            {/* List page */}
            <Link className="link" to="/order">
              <li className="sidebarItems mt-1">
                <Menu className="sidebarIcons" style={{ marginRight: 8 }} />
                Orders
              </li>
            </Link>
            {/* category */}
            <Link className="link" to="/category">
              <li className="sidebarItems mt-1">
                <Category className="sidebarIcons" style={{ marginRight: 8 }} />
                Category
              </li>
            </Link>
          </div>

          <div className="sidebartitle mt-3">USER</div>
          <div className="sidebarList">
            {/* feedback page */}
            <li
              className="sidebarItems mt-1"
              onClick={handlLogout}
              // onClick={() => dispatch(logOutSuccess())}
            >
              <ExitToAppOutlined
                className="sidebarIcons"
                style={{ marginRight: 8 }}
              />
              Logout
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
