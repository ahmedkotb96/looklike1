import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Menu, ChevronDown, Globe, Search } from "lucide-react";
import looklikeLogo from "@/assets/looklike_logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { language, toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const t = translations[language];

  const serviceItems = useMemo(() => [
    {
      title: t.services.socialMedia.title,
      path: "/social-media-management"
    },
    {
      title: t.services.branding.title,
      path: "/branding-identity-design"
    },
    {
      title: t.services.mediaProduction.title.part1 + " " + t.services.mediaProduction.title.part2,
      path: "/media-production"
    },
    {
      title: t.services.outdoor.title,
      path: "/outdoor-advertising"
    }
  ], [t.services]);


  const handleNavigate = useCallback((path: string) => {
    navigate(path);
    setMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [navigate]);

  const allSearchableItemsMemo = useMemo(() => [
    { title: t.navigation.home, path: "/" },
    { title: t.navigation.about, path: "/about" },
    ...serviceItems.map(item => ({
      title: item.title,
      path: item.path
    })),
    { title: t.navigation.portfolio, path: "https://www.behance.net/looklikeadv", external: true },
    { title: t.navigation.team, path: "/team" },
    { title: t.navigation.contact, path: "/contact" },
  ], [t.navigation, serviceItems]);

  const filteredResults = useMemo(() => 
    searchQuery
      ? allSearchableItemsMemo.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [],
    [searchQuery, allSearchableItemsMemo]
  );

  const handleSearchNavigation = useCallback((path: string, external = false) => {
    setSearchOpen(false);
    setSearchQuery("");
    if (external) {
      window.open(path, '_blank', 'noopener,noreferrer');
    } else {
      handleNavigate(path);
    }
  }, [handleNavigate]);

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

  // Keyboard navigation and click outside for search
  useEffect(() => {
    if (!searchOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setSearchQuery("");
      } else if (e.key === 'Enter' && filteredResults.length > 0) {
        handleSearchNavigation(filteredResults[0].path, !!filteredResults[0].external);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Close search if clicking outside the search container
      if (!target.closest('.search-container') && searchOpen) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpen, filteredResults, handleSearchNavigation]);

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
          <div className={`hidden md:flex items-center gap-6 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <a
              href="/"
              className={`text-white text-base hover:text-blue-300 transition-colors ${
                location.pathname === "/" ? "font-bold" : ""
              }`}
              onClick={(e) => { e.preventDefault(); handleNavigate("/"); }}
            >
              {t.navigation.home}
            </a>
            <a
              href="/about"
              className={`text-white text-base hover:text-blue-300 transition-colors ${
                location.pathname === "/about" ? "font-bold" : ""
              }`}
              onClick={(e) => { e.preventDefault(); handleNavigate("/about"); }}
            >
              {t.navigation.about}
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
                } ${language === 'ar' ? 'flex-row-reverse' : ''}`}
              >
                {t.navigation.services}
                <ChevronDown className={`${language === 'ar' ? 'mr-1' : 'ml-1'} h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
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
                        className={`group block px-4 py-3 text-sm text-white/90 hover:bg-white/10 transition-colors duration-200 ${
                          location.pathname === item.path ? 'text-blue-300 font-medium bg-white/10' : 'font-normal'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigate(item.path);
                        }}
                      >
                        <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : 'justify-between'}`}>
                          <span className="group-hover:text-blue-300 transition-colors duration-200">
                            {item.title}
                          </span>
                          <div className={`w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110 ${language === 'ar' ? 'ml-2' : ''}`}></div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* END: Centered "Solid Glass" Submenu */}

            <a
              href="https://www.behance.net/looklikeadv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-base hover:text-blue-300 transition-colors"
            >
              {t.navigation.portfolio}
            </a>
            <a
              href="/team"
              className={`text-white text-base hover:text-blue-300 transition-colors ${
                location.pathname === "/team" ? "font-bold" : ""
              }`}
              onClick={(e) => { e.preventDefault(); handleNavigate("/team"); }}
            >
              {t.navigation.team}
            </a>
            <Button
              className="bg-[#1225B9] hover:bg-[#1225B9]/90 text-white px-4 py-2 rounded-lg"
              onClick={() => handleNavigate("/contact")}
            >
              {t.navigation.contact}
            </Button>

            <div className={`relative search-container ${language === 'ar' ? 'mr-2' : 'ml-2'}`}>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full transition-all duration-200"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
              {searchOpen && (
                <>
                  <div 
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-in fade-in duration-200" 
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                  ></div>
                  <div className={`search-dropdown absolute ${language === 'ar' ? 'left-0' : 'right-0'} top-full mt-2 w-80 bg-gradient-to-b from-gray-900/95 to-black/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl z-50 animate-in slide-in-from-top-2 duration-200`}>
                    <div className="p-4">
                      <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                        <Search className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <input
                          type="text"
                          placeholder={language === 'ar' ? 'ابحث...' : 'Search...'}
                          className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          autoFocus
                        />
                        {searchQuery && (
                          <button
                            onClick={() => setSearchQuery("")}
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Clear search"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                      {searchQuery && (
                        <div className="mt-3 max-h-80 overflow-y-auto custom-scrollbar">
                          {filteredResults.length > 0 ? (
                            <div className="space-y-1">
                              {filteredResults.map((item, index) => (
                                <a
                                  key={index}
                                  href={item.path}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleSearchNavigation(item.path, !!item.external);
                                  }}
                                  className="group flex items-center justify-between px-3 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer"
                                >
                                  <span className="group-hover:text-blue-300 transition-colors">{item.title}</span>
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
                                </a>
                              ))}
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-center py-8 text-center">
                              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3">
                                <Search className="h-6 w-6 text-gray-500" />
                              </div>
                              <p className="text-sm text-gray-400">{language === 'ar' ? 'لا توجد نتائج' : 'No results found'}</p>
                              <p className="text-xs text-gray-500 mt-1">{language === 'ar' ? 'جرب مصطلح بحث آخر' : 'Try a different search term'}</p>
                            </div>
                          )}
                        </div>
                      )}
                      {!searchQuery && (
                        <div className="mt-3 py-6 text-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-3">
                            <Search className="h-6 w-6 text-blue-400" />
                          </div>
                          <p className="text-sm text-gray-400">{language === 'ar' ? 'ابدأ الكتابة للبحث' : 'Start typing to search'}</p>
                          <p className="text-xs text-gray-500 mt-1">{language === 'ar' ? 'اضغط ESC للإغلاق' : 'Press ESC to close'}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            <Button
              variant="ghost"
              className="relative group flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              onClick={toggleLanguage}
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4 text-white/90 group-hover:text-white group-hover:rotate-180 transition-all duration-500" />
              <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                {language === 'en' ? 'عربي' : 'EN'}
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-blue-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10" />
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
            className={`absolute top-0 ${language === 'ar' ? 'left-0 rounded-r-2xl border-r' : 'right-0 rounded-l-2xl border-l'} max-h-full w-56 max-w-[80vw] bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-2xl border-white/20 shadow-2xl overflow-y-auto mt-6 mb-6`}
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
                    <div className={`flex items-center ${language === 'ar' ? 'justify-start flex-row-reverse' : 'justify-end'}`}>
                      <span className="group-hover:text-blue-300 transition-colors duration-300">{t.navigation.home}</span>
                      <div className={`w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ${language === 'ar' ? 'mr-4' : 'ml-4'}`}></div>
                    </div>
                  </a>
                  <a
                    href="/about"
                    className={`group block text-white/90 text-lg py-4 px-4 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 hover:transform hover:translate-x-1 ${
                      location.pathname === "/about" ? "font-bold" : "font-medium"
                    }`}
                    onClick={(e) => { e.preventDefault(); handleNavigate("/about"); }}
                  >
                    <div className={`flex items-center ${language === 'ar' ? 'justify-start flex-row-reverse' : 'justify-end'}`}>
                      <span className="group-hover:text-blue-300 transition-colors duration-300">{t.navigation.about}</span>
                      <div className={`w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ${language === 'ar' ? 'mr-4' : 'ml-4'}`}></div>
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
                      <div className={`flex items-center ${language === 'ar' ? 'justify-start flex-row-reverse' : 'justify-end'}`}>
                        <span className="group-hover:text-blue-300 transition-colors duration-300">{t.navigation.services}</span>
                        <ChevronDown className={`${language === 'ar' ? 'mr-2' : 'ml-2'} h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-blue-300' : ''}`} />
                        <div className={`w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ${language === 'ar' ? 'mr-2' : 'ml-2'}`}></div>
                      </div>
                    </a>
                    {servicesDropdownOpen && (
                      <div className={`mt-1 ${language === 'ar' ? 'mr-4 pr-4 border-r' : 'ml-4 pl-4 border-l'} border-white/10`}>
                        {serviceItems.map((item, index) => (
                          <a
                            key={index}
                            href={item.path}
                            className={`group block text-white/80 text-base py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-300 ${location.pathname === item.path ? 'text-blue-300 font-medium' : 'font-normal'}`}
                            onClick={(e) => { e.preventDefault(); handleNavigate(item.path); }}
                          >
                            <div className={`flex items-center ${language === 'ar' ? 'justify-start flex-row-reverse' : 'justify-end'}`}>
                              <span className="group-hover:text-blue-300 transition-colors duration-300">
                                {item.title}
                              </span>
                              <div className={`w-1.5 h-1.5 rounded-full bg-blue-400/70 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ${language === 'ar' ? 'mr-3' : 'ml-3'}`}></div>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <a
                    href="https://www.behance.net/looklikeadv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block text-white/90 font-medium text-lg py-4 px-4 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 hover:transform hover:translate-x-1"
                  >
                    <div className={`flex items-center ${language === 'ar' ? 'justify-start flex-row-reverse' : 'justify-end'}`}>
                      <span className="group-hover:text-blue-300 transition-colors duration-300">{t.navigation.portfolio}</span>
                      <div className={`w-2 h-2 rounded-full bg-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ${language === 'ar' ? 'mr-4' : 'ml-4'}`}></div>
                    </div>
                  </a>
                  <a
                    href="/team"
                    className={`group block text-white/90 text-lg py-4 px-4 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 hover:transform hover:translate-x-1 ${
                      location.pathname === "/team" ? "font-bold" : "font-medium"
                    }`}
                    onClick={(e) => { e.preventDefault(); handleNavigate("/team"); }}
                  >
                    <div className={`flex items-center ${language === 'ar' ? 'justify-start flex-row-reverse' : 'justify-end'}`}>
                      <span className="group-hover:text-blue-300 transition-colors duration-300">{t.navigation.team}</span>
                      <div className={`w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ${language === 'ar' ? 'mr-4' : 'ml-4'}`}></div>
                    </div>
                  </a>
                  <div className="p-0 pt-2">
                    <button
                      onClick={toggleLanguage}
                      className={`group w-full flex items-center ${language === 'ar' ? 'justify-start flex-row-reverse' : 'justify-end'} gap-3 text-white/90 text-lg py-4 px-4 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 hover:transform hover:translate-x-1 mb-4`}
                    >
                      <span className="group-hover:text-blue-300 transition-colors duration-300">
                        {language === 'en' ? 'عربي' : 'EN'}
                      </span>
                      <Globe className="h-5 w-5 text-white/90 group-hover:text-blue-300 group-hover:rotate-180 transition-all duration-500" />
                      <div className={`w-2 h-2 rounded-full bg-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ${language === 'ar' ? 'mr-4' : ''}`}></div>
                    </button>
                    <div className="relative">
                      <Button
                        className="w-full bg-gradient-to-r from-[#1225B9] to-blue-600 hover:from-[#1225B9]/90 hover:to-blue-600/90 text-white px-4 py-3 rounded-2xl text-[1rem] font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 border border-blue-400/20 min-h-0 min-w-0"
                        onClick={() => handleNavigate("/contact")}
                      >
                        <span className="relative z-10 leading-tight text-[0.95rem] font-semibold tracking-tight">{t.navigation.contact}</span>
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