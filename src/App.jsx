import "./App.css";
// import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import SideBar from "./components/SideBar";
import ResponsiveAppBar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <ResponsiveAppBar />
        <div className="container" id="container">
          {/* <SideBar /> */}
          <Routes>
            <Route path="/" exact index element={<Home />} />
            <Route path="/about" exact index element={<About />} />
            <Route path="/login" exact index element={<Login />} />
            <Route path="/signup" exact index element={<Signup />} />
            <Route
              path="/buyer/:username"
              exact
              index
              element={<Dashboard />}
            />
            <Route
              path="/seller/:username"
              exact
              index
              element={<Dashboard />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
