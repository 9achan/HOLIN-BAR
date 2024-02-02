import "bootstrap/dist/css/bootstrap.min.css";
import "./css/signup.css"
import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import HomePages from "./pages/HomePages";
import Booking from "./pages/Booking";
import Menu from "./pages/Menu";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePages />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
