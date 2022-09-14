import React from 'react'
import { Routes, Route } from "react-router-dom";

export default function NavigationRoutes() {
  return (
    <Routes>
      <Route path="/" element={ "HomePage" } />
      <Route path="/register" element={ "Registration" } />
      <Route path="/customer/:id" element={ "Customer" } />
      <Route path="/register/purchase" element={ "RegisterPurchase" } />
      <Route path="/register/payment" element={ "RegisterPayment" } />
      <Route path="/purchase/:id" element={ "PurchaseDetails" } />
      <Route path="/payment/purchase/:id" element={ "PaymentDetails" } />
      <Route path="*" element={ "NotFound" } />
    </Routes>
  );
}