import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Landing from './pages/a-user/landing'
import ScrollToTop from "./assets/toScrollTop";
import AuthPage from "./pages/authPage";
import About from "./pages/a-user/about";
import Shop from "./pages/a-user/shop";
import Cart from "./pages/a-user/cart";
import ProtectedRoute from "./assets/protectedRoute";
import Profile from "./pages/a-user/profile";
import Dashboard from "./pages/a-admin/dashboard";
import AddProduct from "./pages/a-admin/addproduct";
import Inventory from "./pages/a-admin/inventory";


function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="login" element={<AuthPage />} />
        {/* User */}
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element=
          {<ProtectedRoute>
            <Cart />
          </ProtectedRoute>} />
        <Route path="/profile" element=
          {<ProtectedRoute>
            <Profile />
          </ProtectedRoute>} />

        {/* Admin */}
        {/* dito yung admin routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/inventory" element={<Inventory />} />

      </Routes>
    </Router>
  )
}

export default App
