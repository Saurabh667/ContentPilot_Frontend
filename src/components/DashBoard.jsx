

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { auth } from "../firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";

import {
  LayoutDashboard,
  Calendar,
  Upload,
  BarChart3,
  Settings,
  CheckCircle,
  Bell,
  Zap,
  ChevronLeft,
  LogOut,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Calendar, label: "Content Planner", path: "/planner" },
  { icon: Upload, label: "Media Library", path: "/media" },
  { icon: CheckCircle, label: "Approvals", path: "/approvals" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      } else {
        setUser(user);        // ✅ store user
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // ✅ loading screen
  if (loading) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0b1a3a] flex">

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-[#0a1630] border-r border-white/10 z-40 transition-all duration-300 flex flex-col ${collapsed ? "w-16" : "w-60"
          }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-4 gap-2 border-b border-white/10">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
            <Zap className="h-4 w-4 text-white" />
          </div>

          {!collapsed && (
            <span className="text-sm font-bold text-white">
              ReelPilot
            </span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 space-y-1 px-2 overflow-y-auto">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${active
                    ? "bg-orange-500/20 text-white"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-2 border-t border-white/10 space-y-2">
           {user && !collapsed && (
            <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">

              <img
                src={user.photoURL}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />

              <div className="text-sm">
                <p className="text-white font-medium">{user.displayName}</p>
                <p className="text-gray-400 text-xs">{user.email}</p>
              </div>

            </div>
          )}
          {user && collapsed && (
            <div className="flex justify-center py-3">
              <img
                src={user.photoURL}
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
          )}
          {/* Collapse */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-white/10 hover:text-white transition"
          >
            <ChevronLeft
              className={`h-5 w-5 transition-transform ${collapsed ? "rotate-180" : ""
                }`}
            />
            {!collapsed && <span>Collapse</span>}
          </button>
         

          {/* ✅ FIXED Logout */}
          <button
            onClick={async () => {
              await signOut(auth);
              navigate("/login");
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-white/10 hover:text-white transition"
          >
            <LogOut className="h-5 w-5" />
            {!collapsed && <span>Log out</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main
        className={`flex-1 transition-all duration-300 ${collapsed ? "ml-16" : "ml-60"
          }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 md:p-8 text-white"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};

export default DashboardLayout;