import Navigation from "@/components/LandingPage/Navigation";
import Footer from "@/components/LandingPage/Footer";
import GetInTouchButton from "@/components/ui/GetInTouchButton";
import mediaProductionDecoration from "@/assets/decoration/media_production.webp";
import ellipseReversed from "@/assets/ellipse_reversed.webp";
import ContactSection from "@/components/LandingPage/ContactSection";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

// Interface for a single media item
interface MediaItem {
  id: string;
  title: string;
  mediaUrl: string;
}

// Function to convert a YouTube watch URL to an embed URL
// This handles both standard watch URLs and shortened youtu.be URLs
const getYouTubeEmbedUrl = (url: string): string => {
  const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:\S+)?/;
  const match = url.match(regExp);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return url; // Return original URL if no match, or handle as error
};

export default function MediaProduction() {
  // State to hold media items fetched from Firebase
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);

  // Effect to fetch data from Firestore on component mount
  useEffect(() => {
    const fetchMediaItems = async () => {
      try {
        const snapshot = await getDocs(collection(db, "mediaProduction"));
        const fetchedItems = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || "Looklike Production Video", // Fallback title
            mediaUrl: data.mediaUrl,
          };
        });
        setMediaItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching media productions:", error);
      }
    };

    fetchMediaItems();
  }, []);

  // Static items that are always present
  const staticItems: MediaItem[] = [
    {
      id: "static-1",
      title: "Looklike YouTube Video 1",
      mediaUrl: "https://www.youtube.com/embed/gEhJqwWNhhQ",
    },


  ];

  // Combine static items with items fetched from Firebase
  const allItems = [...staticItems, ...mediaItems];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left blur */}
        <svg
          className="absolute -left-36 -top-36 w-[468px] h-[473px] text-blue-600 opacity-75"
          style={{ filter: "blur(75px)", transform: "rotate(88.762deg)" }}
          width="488"
          height="471"
          viewBox="0 0 488 471"
          fill="none"
        >
          <path
            d="M129.886 320.948C11.3434 323.509 -262.547 130.025 -64.8001 128.175C132.947 126.325 -87.1969 100.403 0.253979 -74.2464C87.7049 -248.896 333.667 -74.1838 336.944 77.5163C340.222 229.216 248.428 318.387 129.886 320.948Z"
            fill="currentColor"
          />
        </svg>

        {/* Top right blur */}
        <svg
          className="absolute right-0 top-80 w-[984px] h-[705px] text-pink-500 opacity-75"
          style={{ filter: "blur(75px)" }}
          width="441"
          height="1005"
          viewBox="0 0 441 1005"
          fill="none"
        >
          <path
            d="M1134.1 466.134C1134.1 642.722 715.325 1044.31 720.412 749.813C725.498 455.316 661.071 782.268 298.244 646.439C-64.5819 510.609 313.504 150 632.248 150C950.993 150 1134.1 289.546 1134.1 466.134Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-5 py-16 pt-32">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-6 lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-['DM_Sans'] leading-tight">
                <span className="text-white">Media </span>
                <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent">
                  Production
                </span>
              </h1>

              <p className="text-white/80 text-lg leading-relaxed">
                We bring your brand's story to life through high-quality media
                production. Whether it's a promotional video, professional
                photography, or eye-catching motion graphics, our production
                team delivers stunning visuals that captivate your audience.
                From concept and scripting to filming and post-production, we
                ensure every frame reflects your brand's vision and
                professionalism.
              </p>

              <GetInTouchButton />
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src={mediaProductionDecoration}
                alt="3D Media Production Visualization"
                className="w-full max-w-[679px] h-auto rounded-lg ml-auto -mr-48 sm:-mr-56 md:-mr-64 lg:mr-0"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* === Video Showcase Section === */}
        <section className="relative z-40 max-w-7xl mx-auto px-5 pb-16 lg:pb-24">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black font-['DM_Sans'] leading-tight">
              <span className="text-white">Our Work in </span>
              <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent">
                Motion
              </span>
            </h2>
          </div>

          {/* Video Grid - Now dynamically rendered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allItems.map((item) => (
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
                  title={item.title}
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>

          {/* Description and Explore More */}
          <div className="text-center relative z-50 mt-16 sm:mt-20 md:mt-24">
            <p className="text-white font-inter text-lg sm:text-xl md:text-2xl lg:text-[24px] font-normal leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[34px] max-w-full sm:max-w-[600px] md:max-w-[717px] mx-auto mb-6 sm:mb-8 px-4">
              We bring stories to life with cinematic quality and creative
              passion. Every frame is crafted to captivate, engage, and deliver
              your message with impact. Explore more of our work in motion.
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
      </div>
      {/* Close Content Container */}
    </div>
  );
}