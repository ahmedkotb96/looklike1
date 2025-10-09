import Navigation from "@/components/LandingPage/Navigation";
import Footer from "@/components/LandingPage/Footer";
import { Button } from "@/components/ui/button";
import outdoorAdvertisingDecoration from "@/assets/decoration/Outdoor_Advertising.webp";
import ellipseReversed from "@/assets/ellipse_reversed.webp";
import ContactSection from "@/components/LandingPage/ContactSection";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

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
        <path d="M607.295 1110.42C434.983 1149.04 -48.4783 828.244 240.001 768.794C528.48 709.343 195.353 717.988 248.535 334.238C301.717 -49.5124 736.29 240.545 806.007 551.571C875.724 862.598 779.607 1071.8 607.295 1110.42Z" fill="#F41CCC"/>
      </g>
      <defs>
        <filter id="filter0_f_141_1296" x="0.155273" y="0.828125" width="978.747" height="1262.81" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_141_1296"/>
        </filter>
      </defs>
    </svg>
);

// Interface for a single media item
interface OutdoorAdvertisingItem {
  id: string;
  name: string;
  description: string;
  mediaUrl: string;
}

// Function to convert a YouTube watch URL to an embed URL
const getYouTubeEmbedUrl = (url: string): string => {
  const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:\S+)?/;
  const match = url.match(regExp);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return url;
};

export default function OutdoorAdvertising() {
  const [outdoorAdvertisingItems, setOutdoorAdvertisingItems] = useState<OutdoorAdvertisingItem[]>([]);

  useEffect(() => {
    const fetchOutdoorAdvertisingItems = async () => {
      try {
        const snapshot = await getDocs(collection(db, "outdoorAdvertising"));
        const fetchedItems = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name || "Outdoor Advertising Video",
            description: data.description || "",
            mediaUrl: data.mediaUrl,
          };
        });
        setOutdoorAdvertisingItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching outdoor advertising items:", error);
      }
    };
    fetchOutdoorAdvertisingItems();
  }, []);

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
              <span className="text-white">Outdoor </span>
              <span className="bg-[linear-gradient(267deg,_#00F0FF_4.01%,_#5200FF_57.55%,_#FF2DF7_114.97%)] bg-clip-text text-transparent">Advertising</span>
            </h1>
            <p className="text-white font-inter text-sm sm:text-base md:text-lg lg:text-[17px] font-normal leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[24px] max-w-full lg:max-w-[579px] mt-4">
              Make your brand impossible to ignore with our outdoor advertising solutions. From billboards and transit ads to street furniture and digital displays, we create impactful campaigns that reach your audience where they live, work, and play.
            </p>
            <a href="https://wa.me/201022668840" target="_blank" rel="noopener noreferrer">
              <Button className="relative px-8 py-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-[10px] hover:bg-white/25 hover:border-white/30 active:bg-white/30 transition-all duration-500 ease-out shadow-[0px_0px_8px_4px_rgba(255,255,255,0.15)_inset] hover:shadow-[0px_0px_20px_8px_rgba(255,255,255,0.25)_inset,0px_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
                <span className="relative text-white text-base font-medium mr-3 group-hover:text-white/95 transition-colors duration-300">Get In Touch !</span>
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
              src={outdoorAdvertisingDecoration}
              alt="Outdoor Advertising Decoration"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[672px] xl:h-[672px] object-contain ml-auto -mr-32 sm:-mr-40 md:-mr-48 lg:mr-0"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
        {/* === Video Showcase Section === */}
        <section className="relative z-40 max-w-7xl mx-auto px-5 pb-16 lg:pb-24">
          {/* Section Heading */}
          <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black font-['DM_Sans'] leading-tight">
                <span className="text-white">Campaigns in </span>
                <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent">
                  the Wild
                </span>
              </h2>
          </div>
          {/* Video Grid - Now dynamically rendered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outdoorAdvertisingItems.map((item) => (
              <div
                key={item.id}
                className="relative pt-[56.25%] bg-black/20 rounded-xl overflow-hidden border border-white/20 shadow-lg backdrop-blur-[10px]"
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={getYouTubeEmbedUrl(item.mediaUrl)}
                  style={{ border: "none" }}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen={true}
                  title={item.name}
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
          {/* Description and Explore More */}
          <div className="text-center relative z-50 mt-16 sm:mt-20 md:mt-24">
            <p className="text-white font-inter text-lg sm:text-xl md:text-2xl lg:text-[24px] font-normal leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[34px] max-w-full sm:max-w-[600px] md:max-w-[717px] mx-auto mb-6 sm:mb-8 px-4">
              Our strategic placement and creative designs ensure maximum visibility. See how we bring brands to the forefront with high-impact outdoor campaigns.
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
      </div> {/* Close Content Container */}
    </div>
  );
}