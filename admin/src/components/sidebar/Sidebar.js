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

const Sidebar = () => {
  const dispatch = useDispatch();

  // logout
  const handlLogout = () => {
    dispatch(logOutStart());
    try {
      dispatch(logOutSuccess());
      alert("Logout success...");
    } catch (error) {
      dispatch(logOutfailure());
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
