import { useState, useEffect } from "react";
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const loadCart = () => {
  try { return JSON.parse(localStorage.getItem("cart")) || []; }
  catch { return []; }
};

export default function Cart() {
  const [cart, setCart] = useState(loadCart);

  // Persist changes back to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item)
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) => item.id === id ? { ...item, qty: item.qty - 1 } : item)
        .filter((item) => item.qty > 0)  // remove if qty hits 0
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalQty    = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalAmount = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header cartCount={totalQty} />

      {cart.length === 0 ? (
        /* EMPTY STATE */
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-73px)]">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag size={36} className="text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h1>
          <p className="text-gray-400 text-sm mb-8">Looks like you haven't added any plants yet.</p>
          <Link
            to="/shop"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        /* CART WITH ITEMS */
        <div className="max-w-3xl mx-auto px-6 py-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Your Cart <span className="text-green-500 text-lg font-medium">({totalQty} items)</span>
          </h1>

          {/* CART ITEMS */}
          <div className="space-y-3 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                {/* Image */}
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.category}</p>
                  <p className="text-green-600 font-bold text-sm mt-0.5">₱{item.price.toLocaleString()}</p>
                </div>

                {/* Qty Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="text-sm font-semibold w-5 text-center">{item.qty}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
                  >
                    <Plus size={12} />
                  </button>
                </div>

                {/* Subtotal */}
                <p className="text-sm font-bold text-gray-700 w-20 text-right">
                  ₱{(item.price * item.qty).toLocaleString()}
                </p>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-300 hover:text-red-400 transition ml-1"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm text-gray-500 mb-4">
              <div className="flex justify-between">
                <span>Subtotal ({totalQty} items)</span>
                <span className="text-gray-700 font-medium">₱{totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-800">
              <span>Total</span>
              <span className="text-green-600 text-lg">₱{totalAmount.toLocaleString()}</span>
            </div>

            <button className="w-full mt-5 bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition">
              Checkout
              <ArrowRight size={16} />
            </button>

            <Link
              to="/shop"
              className="block text-center text-sm text-gray-400 hover:text-green-600 mt-3 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}

      <footer className="border-t border-gray-100 bg-white py-8 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Naldo's Garden. All rights reserved.
      </footer>
    </div>
  );
}