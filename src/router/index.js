import { Home } from "pages";

const { Outlet, Navigate, Route, Routes, BrowserRouter } = require("react-router-dom");

const PrivateWrapper = () => {
  return true ? <Outlet /> : <Navigate to="/login" />;
};

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateWrapper />}>
            <Route path="/dashboard" element={<>dashboard</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
