import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Catalogue from "./pages/Catalogue";
import ArrowType from "./pages/ArrowType";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/type/:id" element={<ArrowType />} />
      </Routes>
    </BrowserRouter>
  );
}
