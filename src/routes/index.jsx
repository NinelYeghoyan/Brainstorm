import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const Home = lazy(() => import("../pages/Home"));
const NewUser = lazy(() => import("../pages/NewUser"));
const EditUser = lazy(() => import("../pages/EditUser"));

const AppRoutes = () => (
    <Routes>
        <Route path={routes.home.path} element={<Home />} />
        <Route path={routes.newUser.path} element={<NewUser />} />
        <Route path={routes.editUser.path} element={<EditUser />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

export default AppRoutes;
