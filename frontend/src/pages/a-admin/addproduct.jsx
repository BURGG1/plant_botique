import React, { useState } from "react";
import AdminHeader from "../../components/admin-header";
import { FiUpload } from "react-icons/fi";
//import toast from "react-hot-toast";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "Plants",
    image: "",
    description: "",
    care: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.stock || !form.image) {
      toast.error("Please fill in all required fields!");
      return;
    }

    console.log("Saved product:", form);
    //  toast.success("Product added successfully! 🌱");

    setForm({
      name: "",
      price: "",
      stock: "",
      category: "Plants",
      image: "",
      description: "",
      care: "",
    });
  };

  const inputStyle =
    "w-full bg-white border-2 border-gray-300 rounded-xl p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500";

  return (
    <div className="bg-stone-50 min-h-screen">
      <AdminHeader />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-green-800 mb-1">
          Add New Product
        </h1>
        <p className="text-gray-700 mb-8">
          Add a new product to your inventory
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md space-y-6"
        >
          <div>
            <label className="block text-sm text-black mb-1 font-bold">
              Product Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g., Monstera Deliciosa"
              value={form.name}
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-black mb-1 font-bold">
                Price (₱) *
              </label>
              <input
                type="number"
                name="price"
                placeholder="0.00"
                value={form.price}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>

            <div>
              <label className="block text-sm text-black mb-1 font-bold">
                Stock *
              </label>
              <input
                type="number"
                name="stock"
                placeholder="0"
                value={form.stock}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-black mb-1 font-bold">
              Category *
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className={inputStyle}
            >
              <option>Plants</option>
              <option>Paso</option>
              <option>Kawa</option>
              <option>Base</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-black mb-1 font-bold">
              Image URL *
            </label>

            <div className="relative">
              <input
                type="text"
                name="image"
                placeholder="https://example.com/image.jpg"
                value={form.image}
                onChange={handleChange}
                className={`${inputStyle} pr-10`}
              />

              <FiUpload className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-black mb-1 font-bold">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Describe the product..."
              value={form.description}
              onChange={handleChange}
              className={`${inputStyle} h-28`}
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1 font-bold">
              Care/Usage Instructions
            </label>
            <textarea
              name="care"
              placeholder="Provide care or usage instructions..."
              value={form.care}
              onChange={handleChange}
              className={`${inputStyle} h-28`}
            />
          </div>

          <div className="flex gap-5 pt-4">
            <button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-medium transform hover:scale-105 transition duration-200"
            >
              + Add Product
            </button>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="w-32 font-bold bg-white border-2 border-gray-300 rounded-xl p-4 text-gray-700 text-center hover:bg-gray-100 transform hover:scale-105 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}