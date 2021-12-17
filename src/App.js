import logo from "./assets/shared/logo.svg";
import iconClose from "./assets/shared/icon-close.svg";
import iconOpen from "./assets/shared/icon-hamburger.svg";
import "./App.scss";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import Technology from "./components/Technology/Technology";
import Home from "./components/Home/Home";
import { useState } from "react";

function App() {
  const [isShowing, setIsShowing] = useState(false);
  let location = useLocation();
  return (
    <>
      <header>
        <div
          className="navbar-outside"
          onClick={() => setIsShowing(!isShowing)}
          style={isShowing ? { display: "block" } : { display: "none" }}
        ></div>
        <div className="logo">
          <img src={logo} alt="logo" />
          <hr />
        </div>
        <div
          className="bars-navbar"
          style={isShowing ? { display: "block" } : { display: "none" }}
        >
          <img src={iconOpen} alt="iconOpen" />
        </div>
        <ul
          className="navbar"
        >
          <div
            className="close"
            style={isShowing ? { display: "block" } : { display: "none" }}
          >
            <img
              src={iconClose}
              alt="iconClose"
              onClick={() => setIsShowing(!isShowing)}
            />
          </div>
          <li>
            <Link
              to="/"
              style={
                location.pathname === "/"
                  ? { borderBottom: "2px solid white" }
                  : { borderBottom: "2px solid transparent" }
              }
            >
              <strong>0 0</strong>&nbsp;H O M E
            </Link>
          </li>
          <li>
            <Link
              to="/destination"
              style={
                location.pathname === "/destination"
                  ? { borderBottom: "2px solid white" }
                  : { borderBottom: "2px solid transparent" }
              }
            >
              <strong>0 1</strong>&nbsp;D E S T I N A T I O N
            </Link>
          </li>
          <li>
            <Link
              to="/crew"
              style={
                location.pathname === "/crew"
                  ? { borderBottom: "2px solid white" }
                  : { borderBottom: "2px solid transparent" }
              }
            >
              <strong>0 2</strong>&nbsp;C R E W
            </Link>
          </li>
          <li>
            <Link
              to="/technology"
              style={
                location.pathname === "/technology"
                  ? { borderBottom: "2px solid white" }
                  : { borderBottom: "2px solid transparent" }
              }
            >
              <strong>0 3</strong>&nbsp;T E C H N O L O G Y
            </Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/technology" element={<Technology />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
