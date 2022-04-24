import Home from "./pages/Home";
import ProductLists from "./pages/ProductLists";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Routes, Route, Link, Navigate } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products/:category" element={<ProductLists />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/register" element={user? <Navigate to="/"/>:<Register />} />
    <Route path="/login" element={ user? <Navigate to="/"/>: <Login />} />
  </Routes>
  );
};

export default App;