import React, { useState } from "react"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 1. Ensure data import
import PRODUCTS from "./data/products"; 

// 2. Component imports
import Navbar from "./components/Navbar"; 
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [view, setView] = useState("products");
  const [cart, setCart] = useState([]);

  const handleBuy = (product) => {
    const cartKey = Date.now();
    setCart((prev) => [...prev, { ...product, cartKey }]);
    toast.success(`"${product.name}" added to cart! 🛒`);
  };

  const handleRemove = (cartKey) => {
    const item = cart.find((i) => i.cartKey === cartKey);
    setCart((prev) => prev.filter((i) => i.cartKey !== cartKey));
    if (item) toast.error(`"${item.name}" removed from cart`);
  };

  const handleCheckout = () => {
    toast.success("✅ Order placed! Thank you for your purchase.");
    setCart([]);
    setView("products"); 
  };

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer position="top-right" autoClose={2800} />
      
      {/* Navbar এ cartCount এর সাথে setView ও পাঠিয়ে দিলাম */}
      <Navbar cartCount={cart.length} setView={setView} />
      
      <Banner />
      <Stats />

      <section className="py-16 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">
            Premium Digital Tools
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Choose from our curated collection to boost your productivity.
          </p>

          {/* Tab Buttons */}
          <div className="flex justify-center mb-10">
            <button
              onClick={() => setView("products")}
              className={`px-9 py-2.5 text-sm font-semibold rounded-l-full border transition-all cursor-pointer ${
                view === "products"
                  ? "bg-violet-600 text-white border-violet-600"
                  : "bg-white text-gray-500 border-gray-200 hover:border-violet-400"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setView("cart")}
              className={`px-9 py-2.5 text-sm font-semibold rounded-r-full border-t border-b border-r transition-all cursor-pointer ${
                view === "cart"
                  ? "bg-violet-600 text-white border-violet-600"
                  : "bg-white text-gray-500 border-gray-200 hover:border-violet-400"
              }`}
            >
              Cart {cart.length > 0 && `(${cart.length})`}
            </button>
          </div>

          {/* Content Rendering */}
          {view === "products" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS && PRODUCTS.length > 0 ? (
                PRODUCTS.map((product) => (
                  <ProductCard key={product.id} product={product} onBuy={handleBuy} />
                ))
              ) : (
                <p className="text-center col-span-full">No products found.</p>
              )}
            </div>
          ) : (
            <Cart items={cart} onRemove={handleRemove} onCheckout={handleCheckout} />
          )}
        </div>
      </section>

      <Steps />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;