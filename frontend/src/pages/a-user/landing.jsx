import { Leaf, Heart, Truck, ArrowRight, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

import background from '../../assets/background.jpg'

export default function LandingPage() {
    return (
        <div className="font-sans text-gray-800">
            {/* NAVBAR */}
            <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/10 border-b border-white/20">
                <div className="max-w-full flex items-center justify-between px-6 py-4">

                    <div className="flex items-center gap-2 text-green-600 font-semibold text-lg">
                        <div className="bg-green-600 p-2 rounded-full text-white">
                            <Leaf size={25} />
                        </div>
                        <p className="text-green-600 text-2xl">Verdant Plant</p>
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        {/* NAV LINKS */}
                        <nav className="hidden md:flex gap-8 text-sm">
                            <Link to="/" className="text-green-600">Home</Link>
                            <Link to="/shop" className="text-white hover:text-green-600">Shop</Link>
                            <Link to="/about" className="text-white hover:text-green-600">About</Link>
                        </nav>

                        {/* Login */}
                        <div className="bg-white rounded-full p-2">
                            <Link to="/login">
                                <User className="text-green-600 cursor-pointer hover:scale-110 transition" />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="h-screen relative flex items-center justify-center">
                <img
                    src={background}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-16 text-center max-w-xl shadow-lg">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Verdant Haven
                    </h1>
                    <p className="text-white/80 mb-6">
                        Bringing Nature Closer to You
                    </p>

                    <div className="flex gap-4 justify-center">
                        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2">
                            Shop Now
                            <ArrowRight size={14} />
                        </button>
                        <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-800 transition">
                            Explore Plants
                        </button>
                    </div>
                </div>
            </section>

            {/* WHY SECTION */}
            <section className="py-20 bg-gray-100 text-center px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                    Why Choose Verdant Haven?
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600 mb-12">
                    We're passionate about bringing the beauty of nature into your home with carefully curated plants and expert care guidance.
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <div className="bg-white rounded-xl p-6 shadow">
                        <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                            <Leaf className="text-green-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Premium Quality</h3>
                        <p className="text-sm text-gray-500">
                            Hand-selected plants from trusted growers, ensuring health and vitality.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow">
                        <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                            <Heart className="text-green-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Expert Care Tips</h3>
                        <p className="text-sm text-gray-500">
                            Detailed care instructions with every plant to help you succeed.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow">
                        <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                            <Truck className="text-green-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Fast Delivery</h3>
                        <p className="text-sm text-gray-500">
                            Ensuring your plants arrive safely and quickly.
                        </p>
                    </div>
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

                <button className="bg-white text-green-600 px-6 py-3 rounded-full flex items-center gap-2">
                    Browse Collection
                    <ArrowRight size={14} />
                </button>
            </section>
        </div>
    );
}
