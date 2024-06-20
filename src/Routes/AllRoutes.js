import { Route, Routes } from "react-router-dom"

import { Products, Cart } from "../Pages"

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Products title="Home"/>} />
        <Route path="cart" element={<Cart title="Cart" />} />
    </Routes>
  )
}
