import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "../layout/AppBar";
import HomePageRoute from "./HomePageRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePageRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

const NotFoundPage = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <span className="font-extrabold text-2xl">
        {" "}
        404 - Oop Page Not Found !
      </span>
    </div>
  );
};
