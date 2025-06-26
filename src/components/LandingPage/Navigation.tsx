import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-5 mx-auto max-w-7xl">
      <div className="flex items-center justify-center w-full max-w-screen-xl mx-auto px-5 py-5 rounded-2xl bg-white/[0.01] backdrop-blur-[7px] border border-white/10">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a08f03de9482231f373ce49cbf84244b8b6a4812"
              alt="Look Like Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              className="text-white font-bold text-base hover:text-blue-300 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white text-base hover:text-blue-300 transition-colors"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-white text-base hover:text-blue-300 transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-white text-base hover:text-blue-300 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#team"
              className="text-white text-base hover:text-blue-300 transition-colors"
            >
              Our Team
            </a>
            <a href="#contact">
              <Button className="bg-[#1225B9] hover:bg-[#1225B9]/90 text-white px-4 py-2 rounded-lg">
                Contact Us
              </Button>
            </a>
          </div>

          {/* Modern Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 focus:outline-none"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Open menu"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Premium backdrop with enhanced blur */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/20 to-blue-900/30 backdrop-blur-md"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Glassmorphism menu panel */}
          <div className="absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border-l border-white/20 shadow-2xl">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 opacity-60"></div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col">
              {/* Header with close button */}
              <div className="flex items-center justify-end p-6 pb-0">
                <button
                  className="group p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-300 focus:outline-none"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Navigation items */}
              <div className="flex-1 px-6 py-8">
                <div className="space-y-2">
                  <a
                    href="#home"
                    className="group block text-white font-medium text-lg py-4 px-4 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 hover:transform hover:translate-x-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="flex items-center justify-end">
                      <span className="group-hover:text-blue-300 transition-colors duration-300">Home</span>
                      <div className="w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ml-4"></div>
                    </div>
                  </a>
                  
                  <a
                    href="#about"
                    className="group block text-white/90 text-lg py-4 px-4 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 hover:transform hover:translate-x-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="flex items-center justify-end">
                      <span className="group-hover:text-blue-300 transition-colors duration-300">About Us</span>
                      <div className="w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ml-4"></div>
                    </div>
                  </a>
                  
                  <a
                    href="#services"
                    className="group block text-white/90 text-lg py-4 px-4 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 hover:transform hover:translate-x-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="flex items-center justify-end">
                      <span className="group-hover:text-blue-300 transition-colors duration-300">Services</span>
                      <div className="w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ml-4"></div>
                    </div>
                  </a>
                  
                  <a
                    href="#portfolio"
                    className="group block text-white/90 text-lg py-4 px-4 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 hover:transform hover:translate-x-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="flex items-center justify-end">
                      <span className="group-hover:text-blue-300 transition-colors duration-300">Portfolio</span>
                      <div className="w-2 h-2 rounded-full bg-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ml-4"></div>
                    </div>
                  </a>
                  
                  <a
                    href="#team"
                    className="group block text-white/90 text-lg py-4 px-4 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 hover:transform hover:translate-x-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="flex items-center justify-end">
                      <span className="group-hover:text-blue-300 transition-colors duration-300">Our Team</span>
                      <div className="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ml-4"></div>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Premium CTA section */}
              <div className="p-6">
                <div className="relative">
                  <Button
                    className="w-full bg-gradient-to-r from-[#1225B9] to-blue-600 hover:from-[#1225B9]/90 hover:to-blue-600/90 text-white px-6 py-4 rounded-2xl text-base font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 border border-blue-400/20"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="relative z-10">Get Started Today</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </Button>
                </div>
                
                <p className="text-white/50 text-sm text-center mt-3 font-light">
                  Transform your vision into reality
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;