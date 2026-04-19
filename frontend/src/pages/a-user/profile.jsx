import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User, MapPin, Mail, LogOut, ShoppingBag,
  Heart, Settings, ChevronRight, Leaf
} from "lucide-react";
import Header from "../../components/Header";

export default function Profile() {
  const navigate = useNavigate();

  const role = localStorage.getItem("role") || "user";

  const user = {
    name: role === "admin" ? "Admin User" : "Plant Lover",
    email: role === "admin" ? "admin@verdanthaven.com" : "user@verdanthaven.com",
    location: "Quezon City, Philippines",
    joined: "January 2024",
    role: role,
    orders: 12,
    wishlist: 5,
  };

  const handleLogout = () => {
    localStorage.removeItem("role");   
    navigate("/login");               
  };

  const MENU_ITEMS = [
    { icon: <ShoppingBag size={18} />, label: "My Orders",   desc: `${user.orders} orders placed`,  action: () => {} },
    { icon: <Heart size={18} />,       label: "Wishlist",    desc: `${user.wishlist} saved items`,  action: () => {} },
    { icon: <Settings size={18} />,    label: "Settings",    desc: "Account preferences",           action: () => {} },
  
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <div className="max-w-2xl mx-auto px-6 py-12">

        {/* PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-5">
          {/* Green banner */}
          <div className="h-24 bg-green-600 relative">
            <div className="absolute -bottom-10 left-6">
              <div className="w-20 h-20 rounded-full bg-green-100 border-4 border-white flex items-center justify-center shadow-sm">
                <User size={36} className="text-green-600" />
              </div>
            </div>
          </div>

          {/* User info */}
          <div className="pt-14 px-6 pb-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-xl font-bold text-gray-800">{user.name}</h1>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full mt-1 inline-block ${
                  user.role === "admin"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-green-100 text-green-700"
                }`}>
                  {user.role === "admin" ? "Admin" : "Member"}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Joined {user.joined}</p>
            </div>

            {/* Details */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Mail size={15} className="text-green-500" />
                {user.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={15} className="text-green-500" />
                {user.location}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-green-600">{user.orders}</p>
                <p className="text-xs text-gray-500 mt-0.5">Total Orders</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-green-600">{user.wishlist}</p>
                <p className="text-xs text-gray-500 mt-0.5">Wishlist Items</p>
              </div>
            </div>
          </div>
        </div>

        {/* MENU ITEMS */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-5">
          {MENU_ITEMS.map(({ icon, label, desc, action }, i) => (
            <button
              key={label}
              onClick={action}
              className={`w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition text-left ${
                i !== MENU_ITEMS.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                {icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">{label}</p>
                <p className="text-xs text-gray-400">{desc}</p>
              </div>
              <ChevronRight size={16} className="text-gray-300" />
            </button>
          ))}
        </div>

        {/* LOGOUT */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-6 py-4 hover:bg-red-50 transition text-left group"
          >
            <div className="w-9 h-9 bg-red-100 rounded-full flex items-center justify-center text-red-500 flex-shrink-0 group-hover:bg-red-200 transition">
              <LogOut size={18} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-red-500">Logout</p>
              <p className="text-xs text-gray-400">Sign out of your account</p>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8 text-gray-300">
          <Leaf size={14} />
          <span className="text-xs">Naldo's Garden © {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
}