import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute";
import Error from "./Components/Error";
import ErrorBoundary from "./Components/ErrorBoundary";
import FeaturedProducts from "./Components/FeaturedProducts";
import items from "./Components/data";
import Product from "./Components/Product";

function App() {
  const [menuItems, setMenuItems] = useState(items);

  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/product"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          >
            <Route
              path="featured"
              element={<FeaturedProducts items={menuItems} />}
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
