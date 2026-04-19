import { Leaf, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Admin", path: "/admin" },
];

export default function Header({ cartCount = 0 }) {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center">
            <Leaf size={18} className="text-white" />
          </div>
          <span className="font-bold text-gray-800 text-lg tracking-tight">
            Verdant Haven
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={`text-sm font-medium transition-colors ${
                isActive(path)
                  ? "text-green-600 border-b-2 border-green-500 pb-0.5"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-green-600 relative"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}