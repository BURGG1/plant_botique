import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Landing from './pages/a-user/landing'
import ScrollToTop from "./assets/toScrollTop";
import AuthPage from "./pages/authPage";
import About from "./pages/a-user/about";
import Shop from "./pages/a-user/shop";


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
        
        {/* Admin */}
       
      </Routes>
    </Router>
  )
}

export default App
