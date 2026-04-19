import { Leaf, Heart, Truck, ShoppingCart, Sprout, Users, Award, Globe, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const NAV_LINKS = ["Home", "Shop", "About", "Admin"];

const STORY_PARAGRAPHS = [
  "Founded in 2020, Verdant Haven began with a simple mission: to make plant ownership accessible, enjoyable, and sustainable for everyone. What started as a small local shop has grown into a thriving community of plant lovers.",
  "We carefully source our plants from trusted growers who share our commitment to quality and sustainability. Each plant is hand-selected and inspected to ensure it arrives at your door healthy, vibrant, and ready to thrive.",
  "Our team of plant experts is passionate about helping you succeed. Whether you're a seasoned green thumb or just starting your plant journey, we're here to guide you every step of the way.",
];

const MISSION_VISION = [
  {
    icon: <Leaf size={22} />,
    label: "Our Mission",
    text: "To inspire and enable people to cultivate healthier, happier living spaces through the transformative power of plants. We believe that every home deserves the beauty, air-purifying benefits, and peace that plants bring.",
  },
  {
    icon: <Heart size={22} />,
    label: "Our Vision",
    text: "To become the most trusted and beloved plant boutique, known for our exceptional quality, expert guidance, and commitment to sustainability. We envision a world where every space is enriched with the life and vitality of plants.",
  },
];

const VALUES = [
  { icon: <Leaf size={20} />, label: "Sustainability", desc: "Eco-friendly practices in everything we do" },
  { icon: <Heart size={20} />, label: "Quality", desc: "Only the healthiest, most beautiful plants" },
  { icon: <Users size={20} />, label: "Community", desc: "Building connections through shared love of nature" },
  { icon: <Award size={20} />, label: "Integrity", desc: "Honest, transparent relationships with our customers" },
];

const SHOP_CATEGORIES = [
  {
    icon: <Sprout size={28} />,
    label: "Plants",
    desc: "Indoor, outdoor, succulents & rare finds",
    tag: "200+ varieties",
    color: "bg-green-50 border-green-200 text-green-700",
    iconBg: "bg-green-100",
  },
  {
    icon: <Globe size={28} />,
    label: "Landscaping Tools",
    desc: "Everything you need to care for your garden",
    tag: "50+ tools",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    iconBg: "bg-emerald-100",
  },
  {
    icon: <Leaf size={28} />,
    label: "Pots & Planters",
    desc: "Stylish homes for your beloved plants",
    tag: "Curated picks",
    color: "bg-teal-50 border-teal-200 text-teal-700",
    iconBg: "bg-teal-100",
  },
  {
    icon: <Heart size={28} />,
    label: "Plant Care",
    desc: "Fertilizers, soils, and nutrients",
    tag: "Expert-approved",
    color: "bg-lime-50 border-lime-200 text-lime-700",
    iconBg: "bg-lime-100",
  },
];

import background from '../../assets/background.jpg'


export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center">
              <Leaf size={18} className="text-white" />
            </div>
            <span className="font-bold text-gray-800 text-lg tracking-tight">Verdant Haven</span>
          </Link>
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${
                  link === "About"
                    ? "text-green-600 border-b-2 border-green-500 pb-0.5"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {link}
              </Link>
            ))}
            <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-green-600 relative">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* HERO HEADER */}
      <section className="py-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">About Verdant Haven</h1>
        <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
          Your trusted partner in bringing the beauty and benefits of nature into your home and workspace.
        </p>
      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="space-y-4">
            {STORY_PARAGRAPHS.map((p, i) => (
              <p key={i} className="text-gray-500 text-sm leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-md h-72 md:h-96 bg-gray-100">
          <img
            src="/plants-bg.jpg"
            alt="Our store"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-6">
        {MISSION_VISION.map(({ icon, label, text }) => (
          <div key={label} className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mb-5">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{label}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </section>

      {/* OUR VALUES */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">Our Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {VALUES.map(({ icon, label, desc }) => (
            <div key={label} className="border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-3">
                {icon}
              </div>
              <p className="font-semibold text-gray-800 text-sm mb-1">{label}</p>
              <p className="text-gray-400 text-xs leading-snug">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SHOP CATEGORIES — User-friendly product indicators */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Browse Our Shop
          </span>
          <h2 className="text-2xl font-bold text-gray-800 mt-3 mb-2">What We Offer</h2>
          <p className="text-gray-400 text-sm">Everything you need to grow and care for your green space</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {SHOP_CATEGORIES.map(({ icon, label, desc, tag, color, iconBg }) => (
            <Link
              to="/shop"
              key={label}
              className={`border rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer ${color}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}>
                {icon}
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-500 text-xs mt-0.5 leading-snug">{desc}</p>
              </div>
              <span className="text-xs font-medium px-2 py-0.5 bg-white/70 rounded-full self-start border border-current/10">
                {tag}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-green-600 rounded-3xl px-10 py-14 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Join Our Growing Community</h2>
          <p className="text-white/80 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Start your plant journey with Verdant Haven today and discover the joy of nurturing nature in your own space.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-green-600 transition-all"
          >
            Explore Our Collection
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-8 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Verdant Haven. All rights reserved.
      </footer>
    </div>
  );
}