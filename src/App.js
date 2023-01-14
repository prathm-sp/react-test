import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SelectAd from "./pages/SelectAd";
import CreateAd from "./pages/CreateAd";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/select-ad-type" element={<SelectAd />} />
        <Route path="/create-ad" element={<CreateAd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
