import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, Mail, Lock } from "lucide-react";
import background from "../assets/image/background.jpg";

export default function AuthPage() {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleLogin = () => {
        if (form.email === "user" && form.password === "user") {
            localStorage.setItem("role", "user");
            navigate("/");
        } else {
            localStorage.setItem("role", "admin");
            navigate("/dashboard");
        }
    };

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });


    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleLogin();
    };

    return (
        <section className="h-screen relative flex items-center justify-center">

            {/* BACKGROUND */}
            <img
                src={background}
                className="absolute inset-0 w-full h-full object-cover"
                alt="background"
            />

            <div className="absolute inset-0 bg-black/40" />

            {/* GLASS CARD */}
            <div className="relative backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-10 w-full max-w-md shadow-lg text-center">

                {/* LOGO */}
                <div className="flex flex-col items-center mb-6">
                    <Leaf className="text-white mb-2" size={32} />
                    <h1 className="text-2xl font-bold text-white">
                        Naldo's Garden
                    </h1>
                    <p className="text-white/70 text-sm">
                        Bringing Nature Closer to You
                    </p>
                </div>

                {/* FORM */}
                <div className="space-y-4 text-left">

                    {/* EMAIL */}
                    <div>
                        <label className="text-white text-sm">Email</label>
                        <div className="flex items-center gap-2 bg-white/30 rounded-lg px-3 py-2 mt-1">
                            <Mail size={16} className="text-white" />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full bg-transparent outline-none text-white placeholder-white/70"
                            />
                        </div>
                    </div>

                    {/* PASSWORD */}
                    <div>
                        <label className="text-white text-sm">Password</label>
                        <div className="flex items-center gap-2 bg-white/30 rounded-lg px-3 py-2 mt-1">
                            <Lock size={16} className="text-white" />
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full bg-transparent outline-none text-white placeholder-white/70"
                            />
                        </div>
                    </div>

                    {/* BUTTON */}
                    <button
                        onClick={handleLogin}
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition mt-4"
                    >
                        Login
                    </button>

                    {/* FORGOT */}
                    <p className="text-sm text-white/70 text-center mt-2">
                        Forgot your password?{" "}
                        <span className="text-green-300 cursor-pointer">
                            Reset here
                        </span>
                    </p>

                    <Link
                        to="/"
                    >
                        <p className="text-sm text-green-500 text-center mt-2">
                            Back to Home page?{" "}

                        </p>
                    </Link>



                </div>
            </div>
        </section>
    );
}