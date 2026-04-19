import React, { useState } from "react";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import AdminHeader from "../../components/admin-header";

const productsData = [
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

export default function Inventory() {
  const [search, setSearch] = useState("");

  const filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  const getCategoryColor = (category) => {
    switch (category) {
      case "Plants":
        return "bg-green-100 text-green-700";
      case "Paso":
        return "bg-yellow-100 text-yellow-700";
      case "Kawa":
        return "bg-blue-100 text-blue-700";
      case "Base":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      <AdminHeader />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-green-800 mb-2">
          Inventory Management
        </h1>
        <p className="text-gray-700 mb-6">
          Manage your product inventory and visibility
        </p>

        <input
          type="text"
          placeholder="Search products..."
          className="w-full mb-6 p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-black text-sm">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg" />
                    <span className="font-medium text-black">
                      {product.name}
                    </span>
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                        product.category,
                      )}`}
                    >
                      {product.category}
                    </span>
                  </td>

                  <td className="p-4 font-medium text-black">
                    ₱{product.price}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        product.stock < 10
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {product.visible ? "Visible" : "Hidden"}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center items-center gap-3 text-lg w-full">
                      <FiEye className="text-green-600 cursor-pointer hover:scale-110" />
                      <FiEdit className="text-blue-600 cursor-pointer hover:scale-110" />
                      <FiTrash2 className="text-red-500 cursor-pointer hover:scale-110" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredProducts.length === 0 && (
            <p className="text-center py-6 text-gray-400">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}