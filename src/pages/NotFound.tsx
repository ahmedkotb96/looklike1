import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "linear-gradient(180deg, #000 0%, #0917A5 52.73%, #1072FE 74.83%, #1225B9 96.19%)",
        }}
      />
      <div className="text-center relative z-10 p-8 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-white/10 border border-white/15 rounded-lg backdrop-blur-[7px] hover:bg-white/20 transition-all duration-300 shadow-[0px_0px_6px_3px_rgba(255,255,255,0.25)_inset]"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
