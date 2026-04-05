import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { href, useNavigate } from "react-router-dom";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLink = (id) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0b1a3a] to-[#0a1630] border-b border-white/10">

      {/* GRID LAYOUT FIX */}
      <div className="max-w-7xl mx-auto px-6 h-[80px] grid grid-cols-3 items-center wholeBar">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-9 h-9 p-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <span className="text-white font-semibold text-lg tracking-wide cursor-pointer">
            ContentPilot
          </span>
        </div>

        {/* CENTER: Links */}
        <div className="hidden md:flex justify-center gap-12">
          <button
            // onClick={() => handleLink("features")}
            onClick={() => {
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm text-gray-400 hover:text-white transition cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => {
              document
                .getElementById("howItWork")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm text-gray-400 hover:text-white transition cursor-pointer"
          >
            How it works
          </button>
          <button
            onClick={() => handleLink("cta")}
            className="text-sm text-gray-400 hover:text-white transition cursor-pointer"
          >
            Pricing
          </button>
        </div>

        {/* RIGHT: Actions */}
        <div className="hidden md:flex justify-end items-center gap-6">
          <button
            className="text-gray-400 hover:text-white text-sm transition cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>

          <button
            className="bg-gradient-to-r from-orange-500 cursor-pointer to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
            onClick={() => navigate("/dashboard")}
          >
            Get started
          </button>
        </div>

        {/* MOBILE BUTTON (absolute so it doesn't break grid) */}
        <div className="md:hidden flex justify-end menuBtn fixed right-[12px]">
          <button
            className="text-gray-300 hover:text-white p-1 cursor-pointer "
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0b1a3a] border-t border-white/10 px-6 py-6 space-y-4">

          <button
            onClick={() => handleLink("features")}
            className="block text-sm text-gray-400 hover:text-white py-2 w-full text-left"
          >
            Features
          </button>

          <button
            onClick={() => handleLink("how-it-works")}
            className="block text-sm text-gray-400 hover:text-white py-2 w-full text-left"
          >
            How it works
          </button>

          <button
            onClick={() => handleLink("cta")}
            className="block text-sm text-gray-400 hover:text-white py-2 w-full text-left"
          >
            Pricing
          </button>

          <button
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold"
            onClick={() => { navigate("/dashboard"); setOpen(false); }}
          >
            Get started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;