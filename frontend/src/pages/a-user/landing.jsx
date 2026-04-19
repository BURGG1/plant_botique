import { useState, useEffect } from "react";
import { Leaf, Heart, Truck, ArrowRight, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import background from '../../assets/image/background.jpg';

export default function LandingPage() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <div className="font-sans text-gray-800">
            {/* NAVBAR */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white shadow-md border-b border-gray-100"
                    : "backdrop-blur bg-white/10 border-b border-white/20"
                    }`}
            >
                <div className="max-w-full flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2 font-semibold text-lg">
                        <div className="bg-green-600 p-2 rounded-full text-white">
                            <Leaf size={25} />
                        </div>
                        <p className={`text-2xl transition-colors duration-300 ${scrolled ? "text-green-600" : "text-white"}`}>
                            Naldo's Garden
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-10">
                        {/* NAV LINKS */}
                        <nav className="hidden md:flex gap-8 text-sm">
                            <Link
                                to="/"
                                className={`font-medium border-b-2 transition-colors duration-300 ${scrolled ? "text-green-600" : "text-green-600"
                                    }`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/shop"
                                className={`transition-colors duration-300 ${scrolled ? "text-gray-600 hover:text-green-600" : "text-white/80 hover:text-white"
                                    }`}
                            >
                                Shop
                            </Link>
                            <Link
                                to="/about"
                                className={`transition-colors duration-300 ${scrolled ? "text-gray-600 hover:text-green-600" : "text-white/80 hover:text-white"
                                    }`}
                            >
                                About
                            </Link>
                        </nav>

                        {/* Login */}
                        <div className={`rounded-full p-2 transition-colors duration-300 ${scrolled ? "bg-green-50" : "bg-white"}`}>
                            <button
                                onClick={handleUserClick}
                                title={isLoggedIn ? "My Profile" : "Login"}
                                className="w-9 h-9 flex items-center justify-center rounded-full transition-colors hover:bg-green-50 text-gray-500 hover:text-green-600"
                            >
                                <User size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="h-screen relative flex items-center justify-center">
                <img
                    src={background}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="background"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-16 text-center max-w-xl shadow-lg">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Naldo's Garden
                    </h1>
                    <p className="text-white/80 mb-6">
                        Bringing Nature Closer to You
                    </p>

                    <div className="flex gap-4 justify-center">
                        <Link
                            to="/shop"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition"
                        >
                            Shop Now
                            <ArrowRight size={14} />
                        </Link>
                        <Link
                            to="/shop"
                            className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-800 transition"
                        >
                            Explore Plants
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHY SECTION */}
            <section className="py-20 bg-gray-100 text-center px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                    Why Choose Naldo's Garden?
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600 mb-12">
                    We're passionate about bringing the beauty of nature into your home with carefully curated plants and expert care guidance.
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        { icon: <Leaf className="text-green-600" />, title: "Premium Quality", desc: "Hand-selected plants from trusted growers, ensuring health and vitality." },
                        { icon: <Heart className="text-green-600" />, title: "Expert Care Tips", desc: "Detailed care instructions with every plant to help you succeed." },
                        { icon: <Truck className="text-green-600" />, title: "Fast Delivery", desc: "Ensuring your plants arrive safely and quickly." },
                    ].map(({ icon, title, desc }) => (
                        <div key={title} className="bg-white rounded-xl p-6 shadow hover:shadow-md hover:-translate-y-1 transition-all">
                            <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                                {icon}
                            </div>
                            <h3 className="font-semibold mb-2">{title}</h3>
                            <p className="text-sm text-gray-500">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="flex flex-col justify-center items-center bg-green-600 text-white py-20 text-center px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Transform Your Space?
                </h2>
                <p className="mb-8 text-white/80">
                    Discover our collection of beautiful plants and start your green journey today.
                </p>
                <Link
                    to="/shop"
                    className="bg-white text-green-600 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-50 transition"
                >
                    Browse Collection
                    <ArrowRight size={14} />
                </Link>
            </section>
        </div>
    );
}