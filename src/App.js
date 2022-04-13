import "./App.css";
import React from "react";
import Home from "./components/RoutingComponent/home";
import About from "./components/RoutingComponent/about";
import Contact from "./components/RoutingComponent/contact";
import { Route, Link, Routes, NavLink, Navigate } from "react-router-dom";
import MyData from "./components/RoutingComponent/myData";
import NotFound from "./components/RoutingComponent/notFound";
import Television from './components/RoutingComponent/tv';

function App() {
  const navLinkStyle = (params) => {
    const { isActive } = params;
    return getActiveCss(isActive);
  };

  const getActiveCss = (isActive) => {
    if (isActive) {
      return {
        color: "green",
        backgroundColor: "red",
      };
    } else {
      return { color: "" };
    }
  };

  return (
    <>
      <div className="App">
        <>
          {/* <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Link to="/">My Data</Link>
        </div>
        <div>
          <a href="/contact">Contact With Anchor tag</a>
        </div> */}
        </>
        <ul>
          <li>
            <NavLink to="/home" style={navLinkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={navLinkStyle}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={navLinkStyle}>
              About
            </NavLink>
          </li>
        </ul>

        <Routes>
          <Route exact path="/" element={<MyData />} />
          <Route exact path="/tv/:name/:type" element={<Television />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
