import { useState } from "react";
import { Leaf, ShoppingCart, Plus, Filter, Search, Star } from "lucide-react";
import { Link } from "react-router-dom";

const NAV_LINKS = ["Home", "Shop", "About", "Admin"];

const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "indoor", label: "Indoor Plants" },
  { id: "outdoor", label: "Outdoor Plants" },
  { id: "succulents", label: "Succulents" },
  { id: "ferns", label: "Ferns" },
  { id: "flowering", label: "Flowering Plants" },
  { id: "tools", label: "Gardening Tools" },
  { id: "accessories", label: "Accessories" },
  { id: "pots", label: "Pots & Planters" },
  { id: "fertilizers", label: "Fertilizers" },
];

// Product type badge styles
const TYPE_STYLES = {
  Plant: "bg-green-100 text-green-700",
  Tool: "bg-amber-100 text-amber-700",
  Accessory: "bg-blue-100 text-blue-700",
  Pot: "bg-purple-100 text-purple-700",
  Fertilizer: "bg-orange-100 text-orange-700",
};

const PRODUCTS = [
  // Plants
  { id: 1, name: "Monstera Deliciosa", category: "indoor", type: "Plant", price: 45.99, originalPrice: null, rating: 4.8, reviews: 124, img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80", badge: null },
  { id: 2, name: "Snake Plant", category: "indoor", type: "Plant", price: 29.99, originalPrice: null, rating: 4.9, reviews: 98, img: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400&q=80", badge: null },
  { id: 3, name: "Succulent Mix", category: "succulents", type: "Plant", price: 19.99, originalPrice: 24.99, rating: 4.7, reviews: 210, img: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&q=80", badge: "Sale" },
  { id: 4, name: "Fiddle Leaf Fig", category: "indoor", type: "Plant", price: 65.99, originalPrice: null, rating: 4.6, reviews: 76, img: "https://images.unsplash.com/photo-1583754946432-e0c2e2697b41?w=400&q=80", badge: null },
  { id: 5, name: "Golden Pothos", category: "indoor", type: "Plant", price: 24.99, originalPrice: null, rating: 4.9, reviews: 305, img: "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=400&q=80", badge: "Bestseller" },
  { id: 6, name: "Desert Cactus", category: "succulents", type: "Plant", price: 14.99, originalPrice: null, rating: 4.5, reviews: 88, img: "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?w=400&q=80", badge: null },
  { id: 7, name: "Peace Lily", category: "flowering", type: "Plant", price: 39.99, originalPrice: null, rating: 4.8, reviews: 142, img: "https://images.unsplash.com/photo-1596438459194-f275f413d6ff?w=400&q=80", badge: null },
  { id: 8, name: "Rubber Plant", category: "indoor", type: "Plant", price: 42.99, originalPrice: null, rating: 4.7, reviews: 93, img: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&q=80", badge: null },
  { id: 9, name: "Aloe Vera", category: "succulents", type: "Plant", price: 18.99, originalPrice: null, rating: 4.9, reviews: 412, img: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80", badge: "Bestseller" },
  { id: 10, name: "Boston Fern", category: "ferns", type: "Plant", price: 32.99, originalPrice: null, rating: 4.6, reviews: 67, img: "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=400&q=80", badge: null },
  { id: 11, name: "ZZ Plant", category: "indoor", type: "Plant", price: 38.99, originalPrice: null, rating: 4.8, reviews: 115, img: "https://images.unsplash.com/photo-1632820566313-6bab68a07a8b?w=400&q=80", badge: null },
  { id: 12, name: "Lavender", category: "outdoor", type: "Plant", price: 22.99, originalPrice: null, rating: 4.7, reviews: 189, img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&q=80", badge: null },

  // Tools
  { id: 13, name: "Premium Pruning Shears", category: "tools", type: "Tool", price: 24.99, originalPrice: null, rating: 4.8, reviews: 234, img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80", badge: null },
  { id: 14, name: "Gardening Hand Trowel Set", category: "tools", type: "Tool", price: 18.99, originalPrice: null, rating: 4.7, reviews: 156, img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80", badge: null },
  { id: 15, name: "Heavy Duty Garden Rake", category: "tools", type: "Tool", price: 32.99, originalPrice: null, rating: 4.6, reviews: 89, img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80", badge: null },
  { id: 16, name: "Watering Can – 2 Gallon", category: "accessories", type: "Accessory", price: 21.99, originalPrice: null, rating: 4.9, reviews: 302, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", badge: null },
  { id: 17, name: "Garden Kneeling Pad", category: "accessories", type: "Accessory", price: 15.99, originalPrice: null, rating: 4.5, reviews: 77, img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80", badge: null },
  { id: 18, name: "Gardening Gloves – Professional", category: "accessories", type: "Accessory", price: 12.99, originalPrice: null, rating: 4.8, reviews: 445, img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80", badge: "Bestseller" },
  { id: 19, name: "Moisture Meter 3-in-1", category: "tools", type: "Tool", price: 16.99, originalPrice: null, rating: 4.7, reviews: 198, img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80", badge: null },
  { id: 20, name: "Plant Misters – Set of 2", category: "accessories", type: "Accessory", price: 14.99, originalPrice: null, rating: 4.6, reviews: 123, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", badge: null },

  // Pots & Planters
  { id: 21, name: "Ceramic Pot – Modern", category: "pots", type: "Pot", price: 28.99, originalPrice: null, rating: 4.8, reviews: 167, img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80", badge: null },
  { id: 22, name: "Terracotta Pot Set – 3 Sizes", category: "pots", type: "Pot", price: 22.99, originalPrice: null, rating: 4.9, reviews: 289, img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80", badge: "Bestseller" },
  { id: 23, name: "Hanging Planter – Macramé", category: "pots", type: "Pot", price: 19.99, originalPrice: null, rating: 4.7, reviews: 201, img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80", badge: null },
  { id: 24, name: "Self-Watering Planter", category: "pots", type: "Pot", price: 34.99, originalPrice: null, rating: 4.8, reviews: 134, img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80", badge: "New" },
  { id: 25, name: "Woven Basket Planter – Natural", category: "pots", type: "Pot", price: 24.99, originalPrice: null, rating: 4.6, reviews: 88, img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80", badge: null },

  // Fertilizers
  { id: 26, name: "Organic Fertilizer – All Purpose", category: "fertilizers", type: "Fertilizer", price: 16.99, originalPrice: null, rating: 4.8, reviews: 312, img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80", badge: null },
  { id: 27, name: "Liquid Plant Food – Indoor", category: "fertilizers", type: "Fertilizer", price: 13.99, originalPrice: null, rating: 4.7, reviews: 178, img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80", badge: null },
  { id: 28, name: "Succulent & Cactus Fertilizer", category: "fertilizers", type: "Fertilizer", price: 11.99, originalPrice: null, rating: 4.6, reviews: 94, img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80", badge: null },
];

const BADGE_STYLES = {
  Sale: "bg-red-500 text-white",
  Bestseller: "bg-amber-400 text-white",
  New: "bg-blue-500 text-white",
};

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [addedId, setAddedId] = useState(null);

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleAdd = (id) => {
    setCart((prev) => [...prev, id]);
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center">
              <Leaf size={18} className="text-white" />
            </div>
            <span className="font-bold text-gray-800 text-lg tracking-tight">Verdant Haven</span>
          </Link>
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${
                  link === "Shop"
                    ? "text-green-600 border-b-2 border-green-500 pb-0.5"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {link}
              </Link>
            ))}
            <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-green-600 relative">
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO HEADER */}
      <section className="py-12 text-center px-6 bg-white">
        <h1 className="text-4xl font-bold text-green-600 mb-3">Our Collection</h1>
        <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
          Discover our carefully curated selection of plants, tools, and accessories perfect for your gardening needs.
        </p>
      </section>

      {/* PRODUCT TYPE LEGEND */}
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-2 flex flex-wrap gap-2 items-center">
        <span className="text-xs text-gray-400 font-medium mr-1">Product types:</span>
        {Object.entries(TYPE_STYLES).map(([type, cls]) => (
          <span key={type} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cls}`}>
            {type}
          </span>
        ))}
      </div>

      {/* FILTER BAR */}
      <div className="max-w-6xl mx-auto px-6 pt-3 pb-5">
        {/* Search */}
        <div className="flex items-center gap-3 mb-4">
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

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all border ${
                activeCategory === id
                  ? "bg-green-500 text-white border-green-500 shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:text-green-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-4">Showing {filtered.length} products</p>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-sm">No products found.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                {/* Image */}
                <div className="relative h-44 bg-gray-100 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  {/* Badge */}
                  {product.badge && (
                    <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${BADGE_STYLES[product.badge]}`}>
                      {product.badge}
                    </span>
                  )}
                  {/* Product Type Indicator */}
                  <span className={`absolute top-2 right-2 text-[10px] font-semibold px-2 py-0.5 rounded-full ${TYPE_STYLES[product.type]}`}>
                    {product.type}
                  </span>
                </div>

                {/* Info */}
                <div className="p-3">
                  <p className="text-[11px] text-gray-400 capitalize mb-0.5">{product.category.replace("-", " ")}</p>
                  <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-1 line-clamp-2">{product.name}</h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <Star size={11} className="fill-amber-400 text-amber-400" />
                    <span className="text-[11px] text-gray-500">{product.rating} ({product.reviews})</span>
                  </div>

                  {/* Price + Add */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-green-600 font-bold text-sm">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-gray-300 text-xs line-through ml-1">${product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAdd(product.id)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        addedId === product.id
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

      {/* FOOTER */}
      <footer className="border-t border-gray-100 bg-white py-8 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Verdant Haven. All rights reserved.
      </footer>
    </div>
  );
}