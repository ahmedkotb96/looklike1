import Navigation from "./Navigation";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import brandingDecoration from "@/assets/decoration/branding.webp";
import centromallIdentity from "@/assets/branding/centromall_identity.webp";
import ihomeIdentity from "@/assets/branding/ihome_identity.webp";
import zodiacIdentity from "@/assets/branding/zodiac_identity.webp";
import cinnarollsIdentity from "@/assets/branding/cinnarolls_identity.webp";
import elmassaIdentity from "@/assets/branding/elmassa_identity.webp";
import aemenIdentity from "@/assets/branding/Aemen_identity.webp";
import ellipseReversed from "@/assets/ellipse_reversed.webp";
import ContactSection from "./ContactSection";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

interface BrandingItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default function Index() {
  const [brandingItems, setBrandingItems] = useState<BrandingItem[]>([]);

  useEffect(() => {
    const fetchBrandingItems = async () => {
      const snapshot = await getDocs(collection(db, "branding"));
      setBrandingItems(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name,
            description: data.description,
            image: data.image,
          };
        })
      );
    };

    fetchBrandingItems();
  }, []);

  const staticItems: BrandingItem[] = [
    {
      id: "centromall",
      name: "Centro Mall Brand Identity",
      description: "Modern. Simple. Family vibes",
      image: centromallIdentity,
    },
    {
      id: "ihome",
      name: "i home Brand Identity",
      description:
        "a sleek, modern identity that brings out i home's unique style",
      image: ihomeIdentity,
    },
    {
      id: "zodiac",
      name: "Zodiac Brand Identity",
      description: "inspired by cosmic energy and timeless elegance",
      image: zodiacIdentity,
    },
    {
      id: "cinnarolls",
      name: "CinnaRolls Brand Identity",
      description: "A soft, sweet, and stylish brand.",
      image: cinnarollsIdentity,
    },
    {
      id: "elmassa",
      name: "Elmassa Brand Identity",
      description: "Sharp. Elegant. Confident. A brand that leads by design.",
      image: elmassaIdentity,
    },
    {
      id: "aamen",
      name: "Aamen Brand Identity",
      description: "Simple. Safe. Smart. Designed by Looklike for AAMEN.",
      image: aemenIdentity,
    },
  ];

  const allItems = [...staticItems, ...brandingItems];

  return (
    <div className="min-h-screen bg-black text-white font-inter relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left blur */}
        <div
          className="absolute -top-16 -left-44 w-[468px] h-[473px] opacity-60 rotate-[88.762deg] sm:w-[300px] sm:h-[300px] sm:-top-10 sm:-left-20"
          style={{
            background: "#1225B9",
            filter: "blur(75px)",
          }}
        />

        {/* Top right blur */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="378"
          height="1264"
          viewBox="0 0 378 1264"
          fill="none"
          className="absolute top-0 right-0 pointer-events-none"
          style={{ filter: "blur(75px)" }}
        >
          <g filter="url(#filter0_f_141_1296)">
            <path
              d="M607.295 1110.42C434.983 1149.04 -48.4783 828.244 240.001 768.794C528.48 709.343 195.353 717.988 248.535 334.238C301.717 -49.5124 736.29 240.545 806.007 551.571C875.724 862.598 779.607 1071.8 607.295 1110.42Z"
              fill="#F41CCC"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_141_1296"
              x="0.155273"
              y="0.828125"
              width="978.747"
              height="1262.81"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="75"
                result="effect1_foregroundBlur_141_1296"
              />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navigation - updated to match landing page */}
        <Navigation />

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-8 py-16 sm:py-20 md:py-28 pb-8 sm:pb-12 md:pb-16 max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-4 max-w-full lg:max-w-[612px] mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-dm-sans font-black leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[95px]">
              <span className="text-white">Brand </span>
              <span className="bg-[linear-gradient(267deg,_#00F0FF_4.01%,_#5200FF_57.55%,_#FF2DF7_114.97%)] bg-clip-text text-transparent">
                Identity &
              </span>
              <span className="bg-[linear-gradient(267deg,_#00F0FF_4.01%,_#5200FF_57.55%,_#FF2DF7_114.97%)] bg-clip-text text-transparent">
                {" "}
                Design
              </span>
            </h1>
            <p className="text-white font-inter text-sm sm:text-base md:text-lg lg:text-[17px] font-normal leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[24px] max-w-full lg:max-w-[579px] mt-4">
              Your brand identity is what makes you stand out. We craft visual
              identities that capture the essence of your business and ensure
              consistency across all media. Our design team creates everything
              from memorable logos and comprehensive brand guidelines to
              compelling company profiles and eye-catching digital designs, all
              tailored to make your brand instantly recognizable and impactful.
            </p>
            <a
              href="https://wa.me/201022668840"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="relative px-8 py-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-[10px] hover:bg-white/25 hover:border-white/30 active:bg-white/30 transition-all duration-500 ease-out shadow-[0px_0px_8px_4px_rgba(255,255,255,0.15)_inset] hover:shadow-[0px_0px_20px_8px_rgba(255,255,255,0.25)_inset,0px_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group overflow-hidden">
                {/* Subtle shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>

                <span className="relative text-white text-base font-medium mr-3 group-hover:text-white/95 transition-colors duration-300">
                  Get In Touch !
                </span>
                <svg
                  className="relative w-5 h-4 text-white group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500 ease-out"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M17.681 7.70853L11.2022 13.7067C10.9993 13.8945 10.7242 14 10.4373 14C10.1504 14 9.87529 13.8945 9.67243 13.7067C9.46958 13.5189 9.35561 13.2642 9.35561 12.9986C9.35561 12.733 9.46958 12.4783 9.67243 12.2905L14.3075 8.00094H1.07981C0.793429 8.00094 0.518775 7.89562 0.31627 7.70814C0.113766 7.52066 0 7.26638 0 7.00125C0 6.73611 0.113766 6.48184 0.31627 6.29436C0.518775 6.10688 0.793429 6.00156 1.07981 6.00156H14.3075L9.67423 1.70954C9.47137 1.52174 9.35741 1.26702 9.35741 1.00143C9.35741 0.735832 9.47137 0.481115 9.67423 0.293311C9.87709 0.105507 10.1522 2.7985e-09 10.4391 0C10.726 -2.7985e-09 11.0011 0.105507 11.204 0.293311L17.6828 6.29147C17.7835 6.38447 17.8634 6.49497 17.9178 6.61662C17.9722 6.73827 18.0002 6.86867 18 7.00035C17.9998 7.13202 17.9716 7.26236 17.9168 7.3839C17.8621 7.50543 17.782 7.61575 17.681 7.70853Z" />
                </svg>
              </Button>
            </a>
          </div>
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <img
              src={brandingDecoration}
              alt="Branding Decoration"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[672px] xl:h-[672px] object-contain ml-auto -mr-32 sm:-mr-40 md:-mr-48 lg:mr-0"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="relative z-40 px-6 sm:px-8 md:px-16 lg:px-32 py-4 sm:py-6 md:py-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {allItems.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col p-2 gap-3 rounded-[18px] bg-gray-800 hover:bg-gray-700 transition-colors overflow-hidden"
              >
                <button
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-auto"
                  style={{ pointerEvents: "auto" }}
                  aria-label={`View ${item.name}`}
                  tabIndex={0}
                >
                  <span
                    className="flex items-center justify-center w-14 h-14 border border-white/30 shadow-lg hover:opacity-90 transition-all"
                    style={{
                      borderRadius: "2018.518px",
                      background:
                        "linear-gradient(267deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)",
                      boxShadow:
                        "0 0 0 4px rgba(255,255,255,0.7), 0 0 16px 4px rgba(255,255,255,0.5)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <path
                        d="M8.44509 49.7399L42.9883 15.1967L42.9883 45.3795C42.9883 47.7917 44.9675 49.7709 47.3797 49.7709C49.7918 49.7709 51.7401 47.8226 51.7401 45.4104L51.7401 4.65128C51.7401 2.23913 49.7918 0.290861 47.3797 0.290857L6.62051 0.229006C4.20836 0.229008 2.26009 2.17728 2.26009 4.58943C2.26009 7.00158 4.20836 8.94986 6.62051 8.94986L36.8033 9.01171L2.26009 43.5549C0.559212 45.2558 0.559213 48.0391 2.26009 49.7399C3.96096 51.4408 6.74421 51.4408 8.44509 49.7399Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
                <div className="flex h-[250px] sm:h-[280px] md:h-[319px] justify-center items-center rounded-[11px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-col gap-2 px-2 pb-2">
                  <h3 className="text-white font-inter text-base sm:text-lg font-bold leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-gray-100 font-inter text-xs font-normal leading-relaxed opacity-80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Description and Explore More */}
          <div className="text-center relative z-50">
            <p className="text-white font-inter text-lg sm:text-xl md:text-2xl lg:text-[24px] font-normal leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[34px] max-w-full sm:max-w-[600px] md:max-w-[717px] mx-auto mb-6 sm:mb-8 px-4">
              At Looklike, we craft every brand with attention to the smallest
              detail — from the logo to the colors and tone of voice. Explore
              more of our visual identity projects.
            </p>

            <button className="flex mx-auto px-4 sm:px-[15px] py-2 sm:py-[6px] justify-center items-center gap-2 sm:gap-[10px] rounded-[10px] border border-white/15 bg-gray-500/40 backdrop-blur-[7px] shadow-[0px_0px_6px_3px_rgba(255,255,255,0.25)_inset] hover:bg-gray-500/50 hover:scale-105 hover:shadow-xl transition-all duration-300 group">
              <span className="text-white font-inter text-sm sm:text-[14px] font-normal leading-[26px] tracking-[-0.001px] group-hover:text-white/95 transition-colors duration-300">
                Explore More
              </span>
            </button>
          </div>
        </section>

        {/* ellipse reversed image as overlay */}
        <div className="w-full flex justify-center relative z-30 -translate-y-16 md:-translate-y-56 pointer-events-none">
          <img
            src={ellipseReversed}
            alt="Section bottom decorative ellipse"
            className="w-full max-w-none object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>{" "}
      {/* Close Content Container */}
    </div>
  );
}