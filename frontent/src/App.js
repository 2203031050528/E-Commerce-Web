import React from "react";
import "./App.css";
import Home from "./page/Home";
import LoginPage from "./page/LoginPage";
import SignPage from "./page/SignPage";
import CartPage from "./page/CartPage";
import Checkout from "./page/Checkout";
import ProductDetailsPage from "./page/ProductDetailsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from './features/auth/components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign",
    element: <SignPage />,
  },
  {
    path: "/cart",
    element: (
      <ProtectedRoute>
        <CartPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/checkout",
    element: (
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    ),
  },
  {
    path: "/product-detail",
    element: <ProductDetailsPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App; 