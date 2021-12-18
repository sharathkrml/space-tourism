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
        <div className="logo">
          <img src={logo} alt="logo" />
          <hr />
        </div>
        <div onClick={() => setIsShowing(!isShowing)} className="bars-navbar">
          <img src={isShowing ? iconOpen : iconClose} alt="iconOpen" />
        </div>
        <ul className={`navbar ${isShowing && "open"}`}>
          <li>
            <Link to="/" className={location.pathname === "/" && "active"}>
              <strong>0 0</strong>&nbsp;H O M E
            </Link>
          </li>
          <li>
            <Link
              to="/destination"
              className={location.pathname === "/destination" && "active"}
            >
              <strong>0 1</strong>&nbsp;D E S T I N A T I O N
            </Link>
          </li>
          <li>
            <Link
              to="/crew"
              className={location.pathname === "/crew" && "active"}
            >
              <strong>0 2</strong>&nbsp;C R E W
            </Link>
          </li>
          <li>
            <Link
              to="/technology"
              className={location.pathname === "/technology" && "active"}
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
