import { useNavigate } from "react-router-dom";
import looklikeLogo from "@/assets/looklike_logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const Footer = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  const navigateAndScroll = (path: string, targetId?: string) => {
    navigate(path);
    if (!targetId) return;
    let attempts = 0;
    const maxAttempts = 20;
    const tryScroll = () => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts++ < maxAttempts) {
        setTimeout(tryScroll, 50);
      }
    };
    setTimeout(tryScroll, 50);
  };

  return (
    <footer className="relative bg-black backdrop-blur-[7px] border-t border-white/10 px-4 sm:px-6 lg:px-8 mt-8 sm:mt-0">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <img
              src={looklikeLogo}
              alt="Look Like Logo"
              className="h-16 w-auto transition-all duration-500 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.3)] group-hover:brightness-110"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); navigateAndScroll('/'); }}
              className="relative text-[#E6E6E6] text-sm transition-all duration-300 ease-out hover:text-white hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10">{t.navigation.home}</span>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a
              href="/about"
              onClick={(e) => { e.preventDefault(); navigateAndScroll('/', 'about'); }}
              className="relative text-[#E6E6E6] text-sm transition-all duration-300 ease-out hover:text-white hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10">{t.navigation.about}</span>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a
              href="/services"
              onClick={(e) => { e.preventDefault(); navigateAndScroll('/', 'services'); }}
              className="relative text-[#E6E6E6] text-sm transition-all duration-300 ease-out hover:text-white hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10">{t.navigation.services}</span>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a
              href="/portfolio"
              onClick={(e) => { e.preventDefault(); navigateAndScroll('/', 'portfolio'); }}
              className="relative text-[#E6E6E6] text-sm transition-all duration-300 ease-out hover:text-white hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10">{t.navigation.portfolio}</span>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a
              href="#team"
              className="relative text-[#E6E6E6] text-sm transition-all duration-300 ease-out hover:text-white hover:scale-105 group overflow-hidden"
              onClick={e => { e.preventDefault(); navigate("/team"); }}
            >
              <span className="relative z-10">{t.navigation.team}</span>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate("/contact"); }}
              className="relative text-[#E6E6E6] text-sm transition-all duration-300 ease-out hover:text-white hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10">{t.navigation.contact}</span>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>
        </div>

        {/* Gradient Divider */}
        <div
          className="h-[1px] w-full mb-8 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(267deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[shimmer_3s_ease-in-out_infinite]"></div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center lg:justify-start gap-4 mb-8">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[#1877F2]/50 hover:scale-110 hover:shadow-[0_0_20px_rgba(24,119,242,0.5)]"
          >
            <svg className="w-5 h-5 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="fbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="50%" stopColor="#5200FF" />
                  <stop offset="100%" stopColor="#FF2DF7" />
                </linearGradient>
              </defs>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="url(#fbGrad)" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[#C13584]/50 hover:scale-110 hover:shadow-[0_0_20px_rgba(193,53,132,0.5)]"
          >
            <svg className="w-5 h-5 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="igGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="50%" stopColor="#5200FF" />
                  <stop offset="100%" stopColor="#FF2DF7" />
                </linearGradient>
              </defs>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#igGrad)" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[#FF0000]/50 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
          >
            <svg className="w-5 h-5 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="ytGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="50%" stopColor="#5200FF" />
                  <stop offset="100%" stopColor="#FF2DF7" />
                </linearGradient>
              </defs>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="url(#ytGrad)" />
            </svg>
          </a>

          {/* Snapchat */}
          <a
            href="https://snapchat.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[#FFFC00]/50 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,252,0,0.5)]"
          >
            <svg className="w-5 h-5 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="scGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="50%" stopColor="#5200FF" />
                  <stop offset="100%" stopColor="#FF2DF7" />
                </linearGradient>
              </defs>
              <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3 0 .691-.125 1.142-.329.51-.241 1.127-.537 1.997-.537a.595.595 0 0 1 .596.596c0 .345-.281.586-.585.586-.797 0-1.279.414-1.74.811-.45.391-.899.781-1.663.781-.36 0-.676-.09-.945-.27-.165-.119-.3-.285-.428-.436-.075-.09-.15-.181-.226-.256l-.034-.03c-.161-.149-.485-.135-.656.03l-.029.027c-.191.18-.403.379-.673.557-.3.195-.66.299-1.038.299-.337 0-.682-.09-1.028-.27a3.586 3.586 0 0 0-.965-.524c-.555-.195-1.138-.3-1.738-.3-.6 0-1.183.105-1.739.3-.344.12-.652.285-.964.524-.346.18-.691.27-1.029.27-.378 0-.738-.104-1.038-.299-.27-.178-.482-.377-.673-.557l-.03-.027c-.17-.165-.494-.179-.655-.03l-.034.03c-.076.075-.151.166-.226.256-.128.151-.263.317-.428.436-.269.18-.585.27-.945.27-.764 0-1.214-.39-1.663-.781-.461-.397-.943-.811-1.74-.811a.586.586 0 0 1-.586-.586.595.595 0 0 1 .596-.596c.87 0 1.486.296 1.997.537.451.204.842.329 1.142.329.198 0 .326-.045.401-.09a27.864 27.864 0 0 1-.03-.51l-.002-.06c-.105-1.628-.23-3.654.298-4.847C7.86 1.07 11.216.793 12.206.793zm9.779 18.183c0 .405-.332.737-.738.737H2.755a.738.738 0 0 1-.738-.737c0-.813.709-1.376 1.463-1.376.259 0 .504.06.714.18.24.135.451.315.677.51.165.143.33.285.51.405.225.15.48.226.765.226.557 0 1.053-.255 1.484-.641.181-.166.346-.346.496-.511.135-.151.256-.286.376-.391a.87.87 0 0 1 .556-.196c.226 0 .436.075.601.211.181.15.316.346.466.556.135.195.285.421.466.631.391.451.915.707 1.469.707.555 0 1.079-.256 1.47-.707.18-.21.33-.436.465-.631.15-.21.285-.406.466-.556a.87.87 0 0 1 .601-.211c.211 0 .406.075.556.196.12.105.241.24.376.391.15.165.315.345.496.511.431.386.927.641 1.484.641.285 0 .54-.075.765-.226.18-.12.345-.262.51-.405.226-.195.437-.375.677-.51.21-.12.455-.18.714-.18.754 0 1.463.563 1.463 1.376z" fill="url(#scGrad)" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[#0A66C2]/50 hover:scale-110 hover:shadow-[0_0_20px_rgba(10,102,194,0.5)]"
          >
            <svg className="w-5 h-5 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="liGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="50%" stopColor="#5200FF" />
                  <stop offset="100%" stopColor="#FF2DF7" />
                </linearGradient>
              </defs>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="url(#liGrad)" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[#00F2EA]/50 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,242,234,0.5)]"
          >
            <svg className="w-5 h-5 transition-all duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="ttGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="50%" stopColor="#5200FF" />
                  <stop offset="100%" stopColor="#FF2DF7" />
                </linearGradient>
              </defs>
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="url(#ttGrad)" />
            </svg>
          </a>
        </div>

        {/* Contact Info and Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Email */}
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 pb-3 border-b border-[#262626] transition-all duration-300 group-hover:border-[#00F0FF]/50 group-hover:pb-4">
                <svg className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" viewBox="0 0 19 19" fill="none">
                  <defs>
                    <linearGradient
                      id="emailGrad"
                      x1="16.512"
                      y1="0.312501"
                      x2="-1.79137"
                      y2="1.52154"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00F0FF" />
                      <stop offset="0.482483" stopColor="#5200FF" />
                      <stop offset="1" stopColor="#FF2DF7" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M1.625 7.00182V13.4375C1.625 14.6801 2.63236 15.6875 3.875 15.6875H15.125C16.3676 15.6875 17.375 14.6801 17.375 13.4375V7.00182L10.6792 11.1223C9.95605 11.5673 9.04395 11.5673 8.32078 11.1223L1.625 7.00182Z"
                    fill="url(#emailGrad)"
                  />
                  <path
                    d="M17.375 5.68087V5.5625C17.375 4.31986 16.3676 3.3125 15.125 3.3125H3.875C2.63236 3.3125 1.625 4.31986 1.625 5.5625V5.68087L8.91039 10.1642C9.27197 10.3867 9.72803 10.3867 10.0896 10.1642L17.375 5.68087Z"
                    fill="url(#emailGrad)"
                  />
                </svg>
                <span className="text-[#E6E6E6] text-sm transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                  {t.footer.contact.email}
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 pb-3 border-b border-[#262626] transition-all duration-300 group-hover:border-[#5200FF]/50 group-hover:pb-4">
                <svg className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(82,0,255,0.5)]" viewBox="0 0 19 19" fill="none">
                  <defs>
                    <linearGradient
                      id="phoneGrad"
                      x1="16.512"
                      y1="-2.19318"
                      x2="-1.82185"
                      y2="-1.24164"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00F0FF" />
                      <stop offset="0.482483" stopColor="#5200FF" />
                      <stop offset="1" stopColor="#FF2DF7" />
                    </linearGradient>
                  </defs>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.625 3.875C1.625 2.63236 2.63236 1.625 3.875 1.625H4.90372C5.549 1.625 6.11148 2.06417 6.26798 2.69018L7.09733 6.00757C7.23456 6.55647 7.02945 7.13416 6.57682 7.47364L5.6066 8.2013C5.50585 8.27686 5.48395 8.38751 5.51225 8.46476C6.36388 10.7896 8.21039 12.6361 10.5352 13.4877C10.6125 13.5161 10.7231 13.4941 10.7987 13.3934L11.5264 12.4232C11.8658 11.9705 12.4435 11.7654 12.9924 11.9027L16.3098 12.732C16.9358 12.8885 17.375 13.451 17.375 14.0963V15.125C17.375 16.3676 16.3676 17.375 15.125 17.375H13.4375C6.91364 17.375 1.625 12.0864 1.625 5.5625V3.875Z"
                    fill="url(#phoneGrad)"
                  />
                </svg>
                <span className="text-[#E6E6E6] text-sm transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                  {t.footer.contact.phone}
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 pb-3 border-b border-[#262626] transition-all duration-300 group-hover:border-[#FF2DF7]/50 group-hover:pb-4">
                <svg className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,45,247,0.5)]" viewBox="0 0 19 19" fill="none">
                  <defs>
                    <linearGradient
                      id="locationGrad"
                      x1="15.0094"
                      y1="-1.49405"
                      x2="0.591249"
                      y2="-0.884273"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00F0FF" />
                      <stop offset="0.482483" stopColor="#5200FF" />
                      <stop offset="1" stopColor="#FF2DF7" />
                    </linearGradient>
                  </defs>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.15481 17.2633C9.17746 17.2764 9.19527 17.2865 9.20788 17.2936L9.22882 17.3053C9.39597 17.3971 9.60332 17.3964 9.77063 17.3056L9.79212 17.2936C9.80473 17.2865 9.82254 17.2764 9.84519 17.2633C9.89049 17.237 9.95523 17.1988 10.0366 17.1486C10.1993 17.0484 10.4291 16.9007 10.7035 16.7068C11.2513 16.3198 11.9823 15.7456 12.7149 14.9955C14.173 13.5026 15.6875 11.2596 15.6875 8.375C15.6875 4.95774 12.9173 2.1875 9.5 2.1875C6.08274 2.1875 3.3125 4.95774 3.3125 8.375C3.3125 11.2596 4.82699 13.5026 6.28509 14.9955C7.01769 15.7456 7.74868 16.3198 8.29654 16.7068C8.57094 16.9007 8.80065 17.0484 8.96337 17.1486C9.04477 17.1988 9.10951 17.237 9.15481 17.2633ZM9.5 10.625C10.7426 10.625 11.75 9.61764 11.75 8.375C11.75 7.13236 10.7426 6.125 9.5 6.125C8.25736 6.125 7.25 7.13236 7.25 8.375C7.25 9.61764 8.25736 10.625 9.5 10.625Z"
                    fill="url(#locationGrad)"
                  />
                </svg>
                <span className="text-[#E6E6E6] text-sm transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                  {t.footer.contact.address}
                </span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-[#98989A] text-sm transition-all duration-300 hover:text-[#E6E6E6] hover:scale-105 cursor-default">
            {t.footer.copyright}
          </div>
        </div>
      </div>

      {/* Remove <style jsx> and use a normal <style> tag for TypeScript compatibility */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;