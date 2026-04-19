import { useState, useEffect } from "react";
import { Leaf, ShoppingCart, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
];

export default function Header({ cartCount = 0 }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("role")));

  useEffect(() => {
    const sync = () => setIsLoggedIn(Boolean(localStorage.getItem("role")));
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleUserClick = () => {
    const role = localStorage.getItem("role");

    if (!role) {
      navigate("/login");
    } else if (role === "admin") {
      navigate("/dashboard");
    } else if (role === "user") {
      navigate("/profile");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-full px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-green-600 font-semibold text-lg">
            <div className="bg-green-600 p-2 rounded-full text-white">
              <Leaf size={25} />
            </div>
            <p className="text-green-600 text-2xl">Naldo's Garden</p>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={`text-sm font-medium transition-colors ${isActive(path)
                  ? "text-green-600 border-b-2 border-green-500 pb-0.5"
                  : "text-gray-500 hover:text-gray-800"
                }`}
            >
              {label}
            </Link>
          ))}

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

          <button
            onClick={handleUserClick}
            title={isLoggedIn ? "My Profile" : "Login"}
            className="w-9 h-9 flex items-center justify-center rounded-full transition-colors hover:bg-green-50 text-gray-500 hover:text-green-600"
          >
            <User size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}