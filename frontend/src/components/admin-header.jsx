import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Leaf, LogOut } from "lucide-react";

const AdminHeader = () => {
    const navigate = useNavigate();

    const linkClass = "text-gray-700 hover:text-green-600 transition font-medium";

    const activeClass = "text-green-600 font-semibold";

    const handleLogout = () => {
        localStorage.removeItem("role");
        navigate("/login");
    }

    return (
        <div className="bg-gray-50 shadow-md">
            <div className="max-w-full flex justify-between items-center px-6 py-5">
                <div className="flex items-center space-x-2">
                    <div className="bg-green-600 text-white p-2 rounded-full">
                        <Leaf size={24} />
                    </div>
                    <h1 className="text-green-700 font-bold text-xl">Naldo's Garden</h1>
                </div>

                <div className="flex justify-center items-center gap-10">

                    <div className="space-x-8 text-sm">
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) => (isActive ? activeClass : linkClass)}
                        >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/inventory"
                            className={({ isActive }) => (isActive ? activeClass : linkClass)}
                        >
                            Inventory
                        </NavLink>

                        <NavLink
                            to="/addproduct"
                            className={({ isActive }) => (isActive ? activeClass : linkClass)}
                        >
                            Add Product
                        </NavLink>

                        <NavLink
                            to="/shop"
                            className={({ isActive }) => (isActive ? activeClass : linkClass)}
                        >
                            Back to Shop
                        </NavLink>



                    </div>
                    <div>
                        <button className="text-red-600 cursor-pointer"
                            onClick={handleLogout}
                        >
                            <LogOut size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminHeader;