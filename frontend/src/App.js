import "./css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import HomePages from "./pages/HomePages";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePages />} />
            <Route path="/menu" element={<Menu />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <HomePages />
      <Menu />
    </div>
  );
}

export default App;
