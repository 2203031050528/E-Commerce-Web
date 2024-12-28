import React from "react";
import "./App.css";
// import ProductList from './features/product-list/ProductList';
import Home from "./page/Home";
import LoginPage from "./page/LoginPage";
import SignPage from "./page/SignPage";
import Cart from "./features/cart/Cart";


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>

  },
  {
    path: "/Login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/Sign",
    element: <SignPage></SignPage>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
