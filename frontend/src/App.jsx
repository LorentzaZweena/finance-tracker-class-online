import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Laporan from "./pages/Laporan";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/laporan" element={<Laporan />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
