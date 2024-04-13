import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "@pages";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  </BrowserRouter>
);

export { Router };
