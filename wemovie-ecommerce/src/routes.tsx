import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { RoutesPath } from "./constants/routes";
import { Purchase } from "./pages/purchase";

export function RoutesApp(){
    return <Routes>
        <Route Component={Home} path={RoutesPath.HOME} />
        <Route Component={Cart} path={RoutesPath.CART} />
        <Route Component={Purchase} path={RoutesPath.PURCHASE} />
    </Routes>
}