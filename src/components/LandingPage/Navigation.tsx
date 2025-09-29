import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Menu, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import looklikeLogo from "@/assets/looklike_logo.png";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const serviceItems = [
    {
      title: "Social Media Management",
      path: "/social-media-management"
    },
    {
      title: "Branding Service",
      path: "/branding_identity_design"
    },
    {
      title: "Media Production",
      path: "/media-production"
    },
    {
      title: "Outdoor Advertising",
      path: "/outdoor-advertising"
    }
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.services-dropdown') && servicesDropdownOpen) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesDropdownOpen]);

  useEffect(() => {
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const isServicesActive = location.pathname === '/services' || serviceItems.some(item => item.path === location.pathname);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-0 py-0 mx-auto max-w-7xl">
      <div className="flex items-center justify-center w-full max-w-screen-xl mx-auto px-5 py-3 rounded-b-2xl bg-white/[0.01] backdrop-blur-[7px] border-b border-white/10 mt-0">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                handleNavigate("/");
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }
            }}
            className="flex-shrink-0 focus:outline-none"
            aria-label="Go to home section"
          >
            <img
              src={looklikeLogo}
              alt="Looklike Logo"
              className="h-12 w-auto cursor-pointer"
              loading="lazy"
              decoding="async"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/"
              className={`text-white text-base hover:text-blue-300 transition-colors ${
                location.pathname === "/" ? "font-bold" : ""
              }`}
              onClick={(e) => { e.preventDefault(); handleNavigate("/"); }}
            >
              Home
            </a>
            <a
              href="/about"
              className={`text-white text-base hover:text-blue-300 transition-colors ${
                location.pathname === "/about" ? "font-bold" : ""
              }`}
              onClick={(e) => { e.preventDefault(); handleNavigate("/about"); }}
            >
              About Us
            </a>
            
            {/* START: Centered "Solid Glass" Submenu */}
            <div
              className="relative services-dropdown"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              {/* Trigger Link */}
              <div
                className={`flex items-center text-white text-base hover:text-blue-300 transition-colors cursor-pointer ${
                  isServicesActive ? "font-bold" : ""
                }`}
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Animated Container - Now perfectly centered */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full w-64 pt-2 z-50 transition-all duration-300 origin-top
                  ${servicesDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
              >
                {/* The "Solid Glass" Panel */}
                <div className="overflow-hidden rounded-2xl border border-white/20 shadow-2xl bg-gradient-to-b from-gray-900/90 to-black/80 backdrop-blur-sm">
                  <div className="py-2">
                    {serviceItems.map((item) => (
                      <a
                        key={item.path}
                        href={item.path}
                        // Font size reduced to text-sm for a more compact look
                        className={`group block px-4 py-3 text-sm text-white/90 hover:bg-white/10 transition-colors duration-200 ${
                          location.pathname === item.path ? 'text-blue-300 font-medium bg-white/10' : 'font-normal'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigate(item.path);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="group-hover:text-blue-300 transition-colors duration-200">{item.title}</span>
                          <div className="w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110"></div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* END: Centered "Solid Glass" Submenu */}

            <a
              href="https://www.behance.net/Looklikeadd544"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-base hover:text-blue-300 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="/team"
              className={`text-white text-base hover:text-blue-300 transition-colors ${
                location.pathname === "/team" ? "font-bold" : ""
              }`}
              onClick={(e) => { e.preventDefault(); handleNavigate("/team"); }}
            >
              Our Team
            </a>
            <Button
              className="bg-[#1225B9] hover:bg-[#1225B9]/90 text-white px-4 py-2 rounded-lg"
              onClick={() => handleNavigate("/contact")}
            >
              Contact Us
            </Button>
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
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/20 to-blue-900/30 backdrop-blur-md"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className="absolute top-0 right-0 max-h-full w-56 max-w-[80vw] bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border-l border-white/20 shadow-2xl rounded-l-2xl overflow-y-auto mt-6 mb-6"
            style={{ height: "auto", maxHeight: "calc(100vh - 3rem)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 opacity-60"></div>
            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-end p-6 pb-0">
                <button
                  className="group p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-300 focus:outline-none"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
              <div className="flex-1 px-6 py-8">
                <div className="space-y-2">
                  <a
                    href="/"
                    className={`group block text-white text-lg py-4 px-4 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 hover:transform hover:translate-x-1 ${
                      location.pathname === "/" ? "font-bold" : "font-medium"
                    }`}
                    onClick={(e) => { e.preventDefault(); handleNavigate("/"); }}
                  >
                    <div className="flex items-center justify-end">
                      <span className="group-hover:text-blue-300 transition-colors duration-300">Home</span>
                      <div className="w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ml-4"></div>
                    </div>
                  </a>
                  <a
                    href="/about"
                    className={`group block text-white/90 text-lg py-4 px-4 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 hover:transform hover:translate-x-1 ${
                      location.pathname === "/about" ? "font-bold" : "font-medium"
                    }`}
                    onClick={(e) => { e.preventDefault(); handleNavigate("/about"); }}
                  >
                    <div className="flex items-center justify-end">
                      <span className="group-hover:text-blue-300 transition-colors duration-300">About Us</span>
                      <div className="w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ml-4"></div>
                    </div>
                  </a>
                  <div className="mb-2 services-dropdown">
                    <a
                      href="/services"
                      className={`group block text-white/90 text-lg py-4 px-4 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 hover:transform hover:translate-x-1 ${
                        isServicesActive ? "font-bold" : "font-medium"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setServicesDropdownOpen(!servicesDropdownOpen);
                      }}
                    >
                      <div className="flex items-center justify-end">
                        <span className="group-hover:text-blue-300 transition-colors duration-300">Services</span>
                        <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-blue-300' : ''}`} />
                        <div className="w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ml-2"></div>
                      </div>
                    </a>
                    {servicesDropdownOpen && (
                      <div className="mt-1 ml-4 pl-4 border-l border-white/10">
                        {serviceItems.map((item, index) => (
                          <a
                            key={index}
                            href={item.path}
                            className={`group block text-white/80 text-base py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-300 ${location.pathname === item.path ? 'text-blue-300 font-medium' : 'font-normal'}`}
                            onClick={(e) => { e.preventDefault(); handleNavigate(item.path); }}
                          >
                            <div className="flex items-center justify-end">
                              <span className="group-hover:text-blue-300 transition-colors duration-300">{item.title}</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400/70 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ml-3"></div>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <a
                    href="https://www.behance.net/Looklikeadd544"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block text-white/90 font-medium text-lg py-4 px-4 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 hover:transform hover:translate-x-1"
                  >
                    <div className="flex items-center justify-end">
                      <span className="group-hover:text-blue-300 transition-colors duration-300">Portfolio</span>
                      <div className="w-2 h-2 rounded-full bg-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ml-4"></div>
                    </div>
                  </a>
                  <a
                    href="/team"
                    className={`group block text-white/90 text-lg py-4 px-4 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 hover:transform hover:translate-x-1 ${
                      location.pathname === "/team" ? "font-bold" : "font-medium"
                    }`}
                    onClick={(e) => { e.preventDefault(); handleNavigate("/team"); }}
                  >
                    <div className="flex items-center justify-end">
                      <span className="group-hover:text-blue-300 transition-colors duration-300">Our Team</span>
                      <div className="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ml-4"></div>
                    </div>
                  </a>
                  <div className="p-0 pt-2">
                    <div className="relative">
                      <Button
                        className="w-full bg-gradient-to-r from-[#1225B9] to-blue-600 hover:from-[#1225B9]/90 hover:to-blue-600/90 text-white px-4 py-3 rounded-2xl text-[1rem] font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 border border-blue-400/20 min-h-0 min-w-0"
                        onClick={() => handleNavigate("/contact")}
                      >
                        <span className="relative z-10 leading-tight text-[0.95rem] font-semibold tracking-tight">Contact Us</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      </Button>
                    </div>
                    <p className="text-white/50 text-sm text-center mt-3 font-light">Transform your vision into reality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;