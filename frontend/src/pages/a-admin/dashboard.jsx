import React from "react";
import { IoCubeOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { TbCurrencyPeso } from "react-icons/tb";
import { IoIosTrendingUp } from "react-icons/io";
import AdminHeader from "../../components/admin-header";

const products = [
  {
    id: 1,
    name: "Monstera",
    price: 450,
    stock: 15,
    visible: true,
    category: "Plants",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 220,
    stock: 5,
    visible: true,
    category: "Plants",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 280,
    stock: 12,
    visible: true,
    category: "Plants",
  },

  {
    id: 4,
    name: "Clay Pot",
    price: 150,
    stock: 20,
    visible: true,
    category: "Paso",
  },
  {
    id: 5,
    name: "Ceramic Pot",
    price: 300,
    stock: 8,
    visible: true,
    category: "Paso",
  },

  {
    id: 6,
    name: "Big Kawa",
    price: 1200,
    stock: 3,
    visible: true,
    category: "Kawa",
  },

  {
    id: 7,
    name: "Stone Base",
    price: 500,
    stock: 6,
    visible: true,
    category: "Base",
  },
];

export default function Dashboard() {
  const totalProducts = products.length;
  const visibleProducts = products.filter((p) => p.visible).length;
  const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
  const lowStock = products.filter((p) => p.stock < 10);

  const categories = ["Plants", "Paso", "Kawa", "Base"];

  const categoryCounts = categories.map((cat) => ({
    name: cat,
    count: products.filter((p) => p.category === cat).length,
  }));

  return (
    <div className="bg-stone-50 min-h-screen">
      <AdminHeader />
      <div className="px-6 py-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-1">
          Admin Dashboard
        </h1>
        <p className="text-gray-700 mb-8">
          Manage your plant inventory and storefront
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 transform flex flex-col justify-between h-full">
            <div className="bg-blue-500 text-white p-3 rounded-xl w-fit shadow-md">
              <IoCubeOutline className="text-2xl" />
            </div>

            <div className="mt-4">
              <p className="text-xs text-black tracking-wide">TOTAL PRODUCTS</p>
              <h2 className="text-4xl font-bold text-black mt-1">
                {totalProducts}
              </h2>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 transform flex flex-col justify-between h-full">
            <div className="bg-green-500 text-white p-3 rounded-xl w-fit shadow-md">
              <FiEye className="text-2xl" />
            </div>

            <div className="mt-4">
              <p className="text-xs text-black tracking-wide">
                VISIBLE PRODUCTS
              </p>
              <h2 className="text-4xl font-bold text-black mt-1">
                {visibleProducts}
              </h2>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 transform flex flex-col justify-between h-full">
            <div className="bg-purple-500 text-white p-3 rounded-xl w-fit shadow-md">
              <TbCurrencyPeso className="text-2xl" />
            </div>

            <div className="mt-4">
              <p className="text-xs text-black tracking-wide">TOTAL VALUE</p>
              <h2 className="text-4xl font-bold text-black mt-1">
                ₱{totalValue}
              </h2>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 transform flex flex-col justify-between h-full">
            <div className="bg-red-500 text-white p-3 rounded-xl w-fit shadow-md">
              <IoIosTrendingUp className="text-2xl" />
            </div>

            <div className="mt-4">
              <p className="text-xs text-black tracking-wide">LOW STOCK</p>
              <h2 className="text-4xl font-bold text-black mt-1">
                {lowStock.length}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Quick Actions</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <button className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-2xl text-left hover:scale-[1.02] transition">
              <IoCubeOutline className="text-4xl mb-3" />
              <p className="font-bold text-xl">Add New Plant</p>
              <p className="text-sm opacity-80">Add product to inventory</p>
            </button>

            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-2xl text-left hover:scale-[1.02] transition">
              <IoIosTrendingUp className="text-4xl mb-3" />
              <p className="font-bold text-xl">Manage Inventory</p>
              <p className="text-sm opacity-80">Edit product details</p>
            </button>

            <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-2xl text-left hover:scale-[1.02] transition">
              <FiEye className="text-4xl mb-3" />
              <p className="font-bold text-xl">Product Display</p>
              <p className="text-sm opacity-80">Toggle visibility</p>
            </button>
          </div>
        </div>

        {/* 🔥 NEW SECTION: LEFT + RIGHT */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT: CATEGORIES */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Product Categories</h2>

            <div className="grid grid-cols-2 gap-4">
              {categoryCounts.map((cat) => (
                <div
                  key={cat.name}
                  className="bg-stone-100 p-4 rounded-xl text-center"
                >
                  <p className="text-sm text-gray-500">{cat.name}</p>
                  <h3 className="text-2xl font-bold text-green-700">
                    {cat.count}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: LOW STOCK */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Low Stock Alert</h2>

            {lowStock.length === 0 ? (
              <p className="text-gray-400 text-center py-6">
                All products are well-stocked!
              </p>
            ) : (
              lowStock.map((item) => (
                <div key={item.id} className="flex justify-between py-2">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-red-500 font-bold">
                    {item.stock} left
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}