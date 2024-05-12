import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, ErrorPage, OurTeam, OurServices, Reviews } from "@pages";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/services" element={<OurServices />} />
      <Route path="/reviews" element={<Reviews />} />
      {/* ERROR 404 Page */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export { Router };
