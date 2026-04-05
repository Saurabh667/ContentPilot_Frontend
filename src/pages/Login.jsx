

// import { useState } from "react";
// import { auth, provider } from "../firebase";
// import { signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false); // ✅ added

//   const handleLogin = async () => {
//     try {
//       setLoading(true); // ✅ start loading

//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       console.log("USER:", user);

//       // ✅ Send data to Django backend
//       const response = await fetch("http://127.0.0.1:8000/api/save-user/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           uid: user.uid,
//           name: user.displayName,
//           email: user.email,
//           photo: user.photoURL,
//         }),
//       });

//       console.log("STATUS:", response.status);

//       if (response.ok) {
//         const data = await response.json();
//         console.log("RESPONSE:", data);

//         navigate("/dashboard"); // ✅ only after success
//       } else {
//         console.log("Backend error");
//       }

//     } catch (error) {
//       console.log("ERROR:", error);
//     } finally {
//       setLoading(false); // ✅ stop loading
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center">
//       <button
//         onClick={handleLogin}
//         disabled={loading}
//         className="px-6 py-3 bg-white text-black rounded-lg shadow-md hover:scale-105 transition disabled:opacity-50"
//       >
//         {loading ? "Logging in..." : "Continue with Google 🚀"}
//       </button>
//     </div>
//   );
// };

// export default Login;

import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await fetch("http://127.0.0.1:8000/api/save-user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }),
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1a3a] flex items-center justify-center px-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-[#0a1630] border border-white/10 rounded-2xl p-8 shadow-xl">

        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-3">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <h1 className="text-white text-xl font-semibold">Welcome to ReelPilot</h1>
          <p className="text-gray-400 text-sm mt-1 text-center">
            Sign in to continue your workflow
          </p>
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white text-black rounded-lg font-medium shadow-md hover:scale-[1.02] transition disabled:opacity-50"
        >
          {/* ✅ Google SVG Icon */}
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.69 1.22 9.19 3.61l6.85-6.85C35.91 2.36 30.36 0 24 0 14.64 0 6.56 5.4 2.56 13.27l7.98 6.2C12.44 13.2 17.78 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.1 24.5c0-1.56-.14-3.06-.4-4.5H24v9h12.4c-.54 2.9-2.16 5.36-4.6 7.04l7.12 5.52C43.94 37.5 46.1 31.5 46.1 24.5z"/>
            <path fill="#FBBC05" d="M10.54 28.27A14.5 14.5 0 0 1 9.5 24c0-1.48.25-2.92.69-4.27l-7.98-6.2A23.93 23.93 0 0 0 0 24c0 3.86.92 7.5 2.56 10.73l7.98-6.46z"/>
            <path fill="#34A853" d="M24 48c6.36 0 11.71-2.1 15.62-5.73l-7.12-5.52c-2.02 1.36-4.6 2.17-8.5 2.17-6.22 0-11.56-3.7-13.46-8.97l-7.98 6.46C6.56 42.6 14.64 48 24 48z"/>
          </svg>

          {loading ? "Signing in..." : "Continue with Google"}
        </button>

        {/* Footer */}
        <p className="text-gray-500 text-xs text-center mt-6">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;