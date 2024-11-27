import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import './reset.css'

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
