import { useState, useEffect } from "react";
import { Plus, Filter, Search, Star, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";


import kawa from '../../assets/image/kawa.jpg';
import stonevase from '../../assets/image/stonevase.jpg';
import ceramicpot from '../../assets/image/ceramicpot.jpg';
import claypot from '../../assets/image/claypot.jpg';
import mont from '../../assets/image/mont.jpg';
import snake from '../../assets/image/snake.jpg';
import peace from '../../assets/image/peace.jpg';


const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "Plants", label: "Plants" },
  { id: "Paso", label: "Paso" },
  { id: "Kawa", label: "Kawa" },
  { id: "Base", label: "Base" },

];

const TYPE_STYLES = {
  Plant: "bg-green-100 text-green-700",
  Tool: "bg-amber-100 text-amber-700",
  Accessory: "bg-blue-100 text-blue-700",
  Pot: "bg-purple-100 text-purple-700",
  Fertilizer: "bg-orange-100 text-orange-700",
};

const BADGE_STYLES = {
  Sale: "bg-red-500 text-white",
  Bestseller: "bg-amber-400 text-white",
  New: "bg-blue-500 text-white",
};

const PRODUCTS = [
  {
    id: 1,
    img: mont,
    name: "Monstera",
    price: 450,
    stock: 15,
    visible: true,
    category: "Plants",
    rating: 4.8,
    badge: null,
  },
  {
    id: 2,
    img: snake,
    name: "Snake Plant",
    price: 220,
    stock: 5,
    visible: true,
    category: "Plants",
    rating: 4.9,
    badge: null,
  },
  {
    id: 3,
    img: peace,
    name: "Peace Lily",
    price: 280,
    stock: 12,
    visible: true,
    category: "Plants",
    rating: 4.8,
    badge: null,
  },
  {
    id: 4,
    img: claypot,
    name: "Clay Pot",
    price: 150,
    stock: 20,
    visible: true,
    category: "Paso",
    rating: 4.9,
    badge: "Bestseller",
  },
  {
    id: 5,
    img: ceramicpot,
    name: "Ceramic Pot",
    price: 300,
    stock: 8,
    visible: true,
    category: "Paso",
    rating: 4.8,
    badge: null,
  },
  {
    id: 6,
    img: kawa,
    name: "Big Kawa",
    price: 1200,
    stock: 3,
    visible: true,
    category: "Kawa",
    rating: 4.7,
    badge: null,
  },
  {
    id: 7,
    img: stonevase,
    name: "Stone Base",
    price: 500,
    stock: 6,
    visible: true,
    category: "Base",
    rating: 4.6,
    badge: null,
  },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [addedId, setAddedId] = useState(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("role")));

  useEffect(() => {
    const sync = () => setIsLoggedIn(Boolean(localStorage.getItem("role")));
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleAdd = (id) => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      return;
    }
    setCart((prev) => [...prev, id]);
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header cartCount={cart.length} />

      {/*  LOGIN PROMPT MODAL */}
      {showLoginPrompt && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
          onClick={() => setShowLoginPrompt(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogIn size={24} className="text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Login to Continue</h3>
            <p className="text-gray-500 text-sm mb-6">
              You need an account to add items to your cart and make purchases. Browsing is always free!
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLoginPrompt(false)}
                className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition"
              >
                Keep Browsing
              </button>
              <button
                onClick={() => navigate("/login")}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl text-sm font-semibold transition"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PAGE HEADER */}
      <section className="py-12 text-center px-6 bg-white">
        <h1 className="text-6xl font-bold text-green-600 mb-3">Our Collection</h1>
        <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
          Discover our carefully curated selection of plants, tools, and accessories perfect for your gardening needs.
        </p>
      </section>

      {/* PRODUCT TYPE LEGEND */}
      <div className="max-w-full justify-center mx-auto px-6 pt-4 pb-2 flex flex-wrap gap-2 items-center">
        <span className="text-xs text-gray-400 font-medium mr-1">Product types:</span>
        {Object.entries(TYPE_STYLES).map(([type, cls]) => (
          <span key={type} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cls}`}>
            {type}
          </span>
        ))}
      </div>

      <div className="flex max-w-7xl mx-auto px-6 pt-3 pb-5">

        {/* FILTER BAR */}
        <div className="flex-1 flex items-center gap-3">
          <div className="relative flex-1 max-w-xs">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-green-400 bg-white"
            />
          </div>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Filter size={13} /> Filter by Category
          </span>
        </div>
        {/* CATEGORY */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all border ${activeCategory === id
                ? "bg-green-500 text-white border-green-500 shadow-sm"
                : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:text-green-600"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <p className="text-xs text-gray-400 mb-4">Showing {filtered.length} products</p>
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-sm">No products found.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="relative h-44 bg-gray-100 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                  {product.badge && (
                    <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${BADGE_STYLES[product.badge]}`}>
                      {product.badge}
                    </span>
                  )}
                  <span className={`absolute top-2 right-2 text-[10px] font-semibold px-2 py-0.5 rounded-full ${TYPE_STYLES[product.type]}`}>
                    {product.type}
                  </span>
                </div>

                <div className="p-3">
                  <p className="text-[11px] text-gray-400 capitalize mb-0.5">{product.category.replace("-", " ")}</p>
                  <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-1 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <Star size={11} className="fill-amber-400 text-amber-400" />
                    <span className="text-[11px] text-gray-500">{product.rating} ({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-green-600 font-bold text-sm">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-gray-300 text-xs line-through ml-1">${product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAdd(product.id)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${addedId === product.id
                        ? "bg-green-100 text-green-600"
                        : "bg-green-500 hover:bg-green-600 text-white"
                        }`}
                    >
                      <Plus size={11} />
                      {addedId === product.id ? "Added!" : "Add"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="border-t border-gray-100 bg-white py-8 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Naldo's Garden. All rights reserved.
      </footer>
    </div>
  );
}