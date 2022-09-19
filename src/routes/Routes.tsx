import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function NavigationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={""} />
      <Route path="/customer/:id" element={""} />
      <Route path="/register/purchase" element={""} />
      <Route path="/register/payment" element={""} />
      <Route path="/purchases" element={""} />
      <Route path="/purchase/:id" element={""} />
      <Route path="/payment/purchase/:id" element={""} />
      <Route path="/treatments" element={""} />
      <Route path="/treatment/:id" element={""} />
      <Route path="*" element={"NotFound"} />
    </Routes>
  );
}
