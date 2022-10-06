import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="productDetails/:id" element={<ProductDetails />} />
        <Route path="about" element={<Products />} />
        <Route path="contact" element={<Products />} />
        <Route path="login" element={<Products />} />
        <Route path="register" element={<Products />} />
        <Route path="cart" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
