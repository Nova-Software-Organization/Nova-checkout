import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../Layout/defaultLayout/index";
import { Cart } from "../pages/Cart";
import { ConfirmedOrder } from "../pages/ConfirmedOrder";

export function Router() {
    return (
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Cart/ConfirmedOrder" element={<ConfirmedOrder />} />
        </Route>
      </Routes>
    )
}