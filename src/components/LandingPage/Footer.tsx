const Footer = () => {
  return (
    <footer className="relative bg-white/[0.01] backdrop-blur-[7px] border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/19262947c98dfd5570bca883385edc5103f3b892"
              alt="Look Like Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <a
              href="#home"
              className="text-[#E6E6E6] hover:text-white transition-colors text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#E6E6E6] hover:text-white transition-colors text-sm"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-[#E6E6E6] hover:text-white transition-colors text-sm"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-[#E6E6E6] hover:text-white transition-colors text-sm"
            >
              Portfolio
            </a>
            <a
              href="#team"
              className="text-[#E6E6E6] hover:text-white transition-colors text-sm"
            >
              Our Team
            </a>
            <a
              href="#contact"
              className="text-[#E6E6E6] hover:text-white transition-colors text-sm"
            >
              Contact US
            </a>
          </div>
        </div>

        {/* Gradient Divider */}
        <div
          className="h-[1px] w-full mb-8"
          style={{
            background:
              "linear-gradient(267deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
          }}
        />

        {/* Contact Info and Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Email */}
            <div className="flex items-center gap-2 pb-3 border-b border-[#262626]">
              <svg className="w-4 h-4" viewBox="0 0 19 19" fill="none">
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
              <span className="text-[#E6E6E6] text-sm">info@looklike.adv</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 pb-3 border-b border-[#262626]">
              <svg className="w-4 h-4" viewBox="0 0 19 19" fill="none">
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
              <span className="text-[#E6E6E6] text-sm">+971505045287</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 pb-3 border-b border-[#262626]">
              <svg className="w-4 h-4" viewBox="0 0 19 19" fill="none">
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
              <span className="text-[#E6E6E6] text-sm">
                Dubai Investment Park - Dubai
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-[#98989A] text-sm">
            © 2025 LookLike. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
