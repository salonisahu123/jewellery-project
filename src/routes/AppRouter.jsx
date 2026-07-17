import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import UsersLike from "../pages/UsersLike";
import ContactUs from "../pages/ContactUs";
import LoginModal from "../pages/LoginModal"
import Diamonds from "../pages/Diamonds";

const AppRouter = () => {
  return (
    <Routes>
      {/* Navbar sab pages par rahega */}
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<UsersLike />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/diamonds" element={<Diamonds />} />

      </Route>

      {/* Login page */}
      <Route path="/login" element={<LoginModal />} />
    </Routes>
  );
};

export default AppRouter;
