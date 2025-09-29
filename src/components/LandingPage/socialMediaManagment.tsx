import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import socialMediaManagementDecoration from "@/assets/decoration/social_media_management.webp";
import squeezeImg from "@/assets/social_media_camaigns/squeeze.webp";
import caribyDairy2Img from "@/assets/social_media_camaigns/cariby_dairy2.webp";
import qemamImg from "@/assets/social_media_camaigns/qemam.webp";
import caribyDairyImg from "@/assets/social_media_camaigns/cariby_dairy.webp";
import dahabiaImg from "@/assets/social_media_camaigns/dahabia.webp";
import alTakamolImg from "@/assets/social_media_camaigns/al_takamol.webp";
import ellipseReversed from "@/assets/ellipse_reversed.webp";
import ContactSection from "./ContactSection";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

interface SocialMediaItem {
  id: string;
  name: string;
  description: string;
  image: string;
  behanceLink?: string;
}

const RightPinkBlur = () => (
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
);

const SocialMediaManagment: React.FC = () => {
  const [socialMediaItems, setSocialMediaItems] = useState<SocialMediaItem[]>(
    []
  );

  useEffect(() => {
    const fetchSocialMediaItems = async () => {
      const snapshot = await getDocs(collection(db, "socialMediaManagement"));
      setSocialMediaItems(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name,
            description: data.description,
            image: data.image,
            behanceLink: data.behanceLink,
          };
        })
      );
    };

    fetchSocialMediaItems();
  }, []);

  const staticItems: SocialMediaItem[] = [
    {
      id: "squeeze",
      name: "Squeeze Social Media Campaign",
      description: "Fresh, bold, product-driven visuals",
      image: squeezeImg,
      behanceLink:
        "https://www.behance.net/gallery/202140597/SQUUSE-SOCIAL-MEDIA-CAMPAIN",
    },
    {
      id: "cariby2",
      name: "Cariby Social Media Campaign",
      description: "Designed to melt attention",
      image: caribyDairy2Img,
      behanceLink:
        "https://www.behance.net/gallery/177043275/cariby-dairy-social-media-campaign",
    },
    {
      id: "qemam",
      name: "Qemam Social Media Campaign",
      description: "Architecture meets confident design",
      image: qemamImg,
      behanceLink:
        "https://www.behance.net/gallery/165396653/QIMAM-REALESTATE-LOGO",
    },
    {
      id: "cariby",
      name: "Cariby Social Media Campaign",
      description: "Designed to melt attention",
      image: caribyDairyImg,
      behanceLink:
        "https://www.behance.net/gallery/202139479/RATB-ALA-ALBK-SOCIAL-MEDIA-CAMPAIGN",
    },
    {
      id: "dahabia",
      name: "Dahabia Social Media Campaign",
      description: "Designed to build appetite",
      image: dahabiaImg,
      behanceLink:
        "https://www.behance.net/gallery/202141925/DAHABIA-NEW-CAMPIAGN",
    },
    {
      id: "altakamol",
      name: "Takamol Social Media Campaign",
      description: "Architecture meets confident design",
      image: alTakamolImg,
      behanceLink:
        "https://www.behance.net/gallery/172599549/TAKAMOL-SOCIAL-MEDIA-CAMPAIGN",
    },
  ];

  const allItems = [...staticItems, ...socialMediaItems];

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
        <RightPinkBlur />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-8 py-16 sm:py-20 md:py-28 pb-8 sm:pb-12 md:pb-16 max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-4 max-w-full lg:max-w-[612px] mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-dm-sans font-black leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[95px]">
              <span className="text-white">Social Media </span>
              <span className="bg-[linear-gradient(267deg,_#00F0FF_4.01%,_#5200FF_57.55%,_#FF2DF7_114.97%)] bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-white font-inter text-sm sm:text-base md:text-lg lg:text-[17px] font-normal leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[24px] max-w-full lg:max-w-[579px] mt-4">
              We manage your platforms with purpose and strategy — creating
              content that connects, engages, and converts. From planning and
              copywriting to design and analytics, our team handles every
              detail to keep your brand active, aligned, and always ahead.
              Whether you're building awareness or driving sales, we turn your
              social media into a powerful growth engine.
            </p>

            <a
              href="https://wa.me/201022668840"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="relative px-8 py-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-[10px] hover:bg-white/25 hover:border-white/30 active:bg-white/30 transition-all duration-500 ease-out shadow-[0px_0px_8px_4px_rgba(255,255,255,0.15)_inset] hover:shadow-[0px_0px_20px_8px_rgba(255,255,255,0.25)_inset,0px_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group overflow-hidden">
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
              src={socialMediaManagementDecoration}
              alt="Social Media Management Decoration"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[672px] xl:h-[672px] object-contain ml-auto -mr-32 sm:-mr-40 md:-mr-48 lg:mr-0"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="relative z-40 px-6 sm:px-8 md:px-16 lg:px-32 py-4 sm:py-6 md:py-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {allItems.map((item) => {
              const cardContent = (
                <div className="group relative flex flex-col p-2 gap-3 rounded-[18px] bg-gray-800 hover:bg-gray-700 transition-colors overflow-hidden">
                  {/* Shade Overlay */}
                  <div className="absolute inset-0 bg-black rounded-[18px] opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"></div>

                  {/* Hover Button */}
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
                  {/* Card Content */}
                  <div className="flex h-[250px] sm:h-[280px] md:h-[319px] justify-center items-center rounded-[11px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
              );

              if (item.behanceLink) {
                return (
                  <a
                    key={item.id}
                    href={item.behanceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    tabIndex={0}
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <React.Fragment key={item.id}>{cardContent}</React.Fragment>
              );
            })}
          </div>

          <div className="text-center relative z-50">
            <p className="text-white text-lg md:text-2xl font-normal font-inter leading-relaxed max-w-3xl mx-auto mb-8">
              At Looklike, we craft every social media campaign with attention
              to the smallest detail — from content strategy to visual design
              and engagement metrics. Explore more of our social media
              management projects.
            </p>

            <Button className="relative px-8 py-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-[10px] hover:bg-white/25 hover:border-white/30 active:bg-white/30 transition-all duration-500 ease-out shadow-[0px_0px_8px_4px_rgba(255,255,255,0.15)_inset] hover:shadow-[0px_0px_20px_8px_rgba(255,255,255,0.25)_inset,0px_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group overflow-hidden">
              <span className="relative text-white text-base font-medium mr-3 group-hover:text-white/95 transition-colors duration-300">
                Explore More
              </span>
            </Button>
          </div>
        </section>

        {/* ellipse reversed image */}
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

        <Footer />
      </div>
    </div>
  );
};

export default SocialMediaManagment;