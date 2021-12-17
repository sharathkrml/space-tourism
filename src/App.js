import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import Technology from "./components/Technology/Technology";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/crew">Crew</Link>
            </li>
            <li>
              <Link to="/technology">Technology</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/technology" element={<Technology />}></Route>
          <Route path="/crew" element={<Crew />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
