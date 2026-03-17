import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Catalogue from "./pages/Catalogue";
import ArrowType from "./pages/ArrowType";
import Timeline from "./pages/Timeline";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/type/:id" element={<ArrowType />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}
