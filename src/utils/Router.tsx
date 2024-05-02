import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, OurTeam, Services } from "@pages";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/services" element={<Services />} />

      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  </BrowserRouter>
);

export { Router };
