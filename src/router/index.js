import Layout from "components/Layout";
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
          <Route element={<Layout isMain />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<PrivateWrapper />}>
            <Route element={<Layout isDashboard />}>
              <Route path="/dashboard" element={<>dashboard</>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
