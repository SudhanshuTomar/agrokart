import "./App.css";
// import NavBar from "./components/NavBar";
// import Carousel from "./components/Carousel";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import BuyerHome from "./pages/BuyerHome";
import SellerHome from "./pages/SellerHome";
import Login from "./pages/Signin";
import Signup from "./pages/Signup";
import SellerDashboard from "./pages/SellerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import About from "./pages/About";
import SideBar from "./components/Sidebar";
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
            <Route path="/home" exact index element={<Home />} />
            <Route path="/about" exact index element={<About />} />
            <Route path="/seller/home" exact index element={<SellerHome />} />
            <Route path="/buyer/home" exact index element={<BuyerHome />} />
            <Route path="/login" exact index element={<Login />} />
            <Route path="/signup" exact index element={<Signup />} />
            <Route
              path="/buyer/:username"
              exact
              index
              element={<BuyerDashboard />}
            />
            <Route
              path="/seller/:username"
              exact
              index
              element={<SellerDashboard />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
