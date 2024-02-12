import "bootstrap/dist/css/bootstrap.min.css";
import "./css/signup.css";
import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Layout2 from "./Layout2";

import HomePages from "./pages/HomePages";
import Booking from "./pages/Booking";
import Menu from "./pages/Menu";
import SignUp from "./pages/SignUp";
import News from "./pages/News";
import BookingJumpPage from "./pages/BookingJumpPage";

import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePages />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/news" element={<News />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
        <Route path="/" element={<Layout2 />}>
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/booking/jumppage" element={<BookingJumpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
