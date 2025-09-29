import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebase";
import Navigation from "@/components/LandingPage/Navigation";
import Footer from "@/components/LandingPage/Footer";
import { Button } from "@/components/ui/button";
import bottomEclipse from "@/assets/ellipse_bottom.webp";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  overlay?: string;
}

export default function OurTeamMain() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const snapshot = await getDocs(collection(db, "teamMembers"));
      setTeamMembers(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name || "",
            role: data.role || "",
            image: data.image || "",
            overlay: data.overlay || undefined,
            order: data.order || 0, // Ensure order is included
          };
        }).sort((a, b) => a.order - b.order)
      );
    };
    fetchTeamMembers();
  }, []);


  // Only use Firestore team members
  const allTeamMembers = teamMembers;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Check if mobile or desktop
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // Mobile: show one member at a time
      setCurrentSlide((prev) => {
        if (prev >= allTeamMembers.length - 1) return 0;
        return prev + 1;
      });
    } else {
      // Desktop: show 3 members at a time
      const maxSlide = allTeamMembers.length - 3;
      setCurrentSlide((prev) => {
        if (prev >= maxSlide) return 0;
        return prev + 3;
      });
    }
    
    setTimeout(() => setIsTransitioning(false), 350);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Check if mobile or desktop
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // Mobile: show one member at a time
      setCurrentSlide((prev) => {
        if (prev <= 0) return allTeamMembers.length - 1;
        return prev - 1;
      });
    } else {
      // Desktop: show 3 members at a time
      const maxSlide = allTeamMembers.length - 3;
      setCurrentSlide((prev) => {
        if (prev <= 0) return maxSlide;
        return prev - 3;
      });
    }
    
    setTimeout(() => setIsTransitioning(false), 350);
  };

  // Add touch state for swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute inset-0 overflow-hidden">
      <svg
          className="absolute left-0 top-72 w-[300px] h-[350px] text-blue-600 opacity-250"
          style={{ filter: "blur(0px)", transform: "rotate(270deg)" }}
          width="488"
          height="471"
          viewBox="0 0 488 471"
          fill="#1225B9"
        >
          <path
            d="M129.886 320.948C11.3434 323.509 -262.547 130.025 -64.8001 128.175C132.947 126.325 -87.1969 100.403 0.253979 -74.2464C87.7049 -248.896 333.667 -74.1838 336.944 77.5163C340.222 229.216 248.428 318.387 129.886 320.948Z"
            fill="#1225B9"
          />
        </svg>
        <svg
          className="absolute right-0 top-72 w-[500px] h-[300px] text-pink-500 opacity-250"
          style={{ filter: "blur(0px)" }}
          width="441"
          height="1005"
          viewBox="0 0 441 1005"
          fill="#F41CCC"
        >
          <path
            d="M1134.1 466.134C1134.1 642.722 715.325 1044.31 720.412 749.813C725.498 455.316 661.071 782.268 298.244 646.439C-64.5819 510.609 313.504 150 632.248 150C950.993 150 1134.1 289.546 1134.1 466.134Z"
            fill="#F41CCC"
          />
        </svg>
      </div>

      {/* Motion blur overlay */}
      <div className="absolute inset-0 bg-black/3 backdrop-blur-[100px]" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 py-16 pt-32 pb-32">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-[47px] font-bold mb-6"
            style={{
              fontFamily: 'Inter',
              fontSize: '46.934px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
            }}
          >
            <span className="text-white" style={{ fontFamily: 'Inter', fontSize: '46.934px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal' }}>Meet Our</span><br />
            <span
              style={{
                background: 'linear-gradient(267deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                fontFamily: 'Inter',
                fontSize: '46.934px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
              }}
              className="bg-clip-text text-transparent"
            >
              Creative Team
            </span>
          </h2>
        </div>

        {/* Add keyframes for animations */}
        <style>{`
          @keyframes slideInUp {
            0% {
              opacity: 0;
              transform: translateY(30px) scale(0.6);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}</style>

        {/* Team Carousel for desktop/tablet */}
        <div className="relative max-w-6xl mx-auto hidden md:flex items-center justify-center">
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex items-center justify-center z-20 disabled:opacity-50 absolute left-4 group"
          >
            <svg className="w-3 h-5 text-[#14142B] rotate-180 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25"><path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" /></svg>
          </button>
          <div className="flex gap-4 justify-center items-center overflow-hidden w-full max-w-4xl mx-auto relative h-[450px]">
            {allTeamMembers.length > 0 && allTeamMembers.slice(currentSlide, currentSlide + 3).map((member, index) => {
              if (!member) return null;
              return (
                <div
                  key={`${member.id}-${currentSlide}`}
                  className={`w-full md:w-1/3 h-[450px] relative flex-shrink-0 transition-all duration-500 ease-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                  style={{ animation: !isTransitioning ? `slideInUp 0.6s ease-out ${index * 100}ms both` : 'none' }}
                >
                  <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${member.image})` }} />
                  {member.overlay && <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${member.overlay})` }} />}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-white text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-300 text-sm">{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex items-center justify-center z-20 disabled:opacity-50 absolute right-4 group"
          >
            <svg className="w-3 h-5 text-[#14142B] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25"><path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" /></svg>
          </button>
        </div>

        {/* Mobile: Single card carousel */}
        <div className="block md:hidden relative max-w-xs mx-auto">
          <div
            className="flex justify-center mb-6 h-[400px] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {allTeamMembers.length > 0 && allTeamMembers[currentSlide % allTeamMembers.length] && (
              <div
                key={`mobile-${allTeamMembers[currentSlide % allTeamMembers.length].id}`}
                className={`w-full h-full relative transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                style={{ animation: !isTransitioning ? `slideInUp 0.6s ease-out both` : 'none' }}
              >
                <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${allTeamMembers[currentSlide % allTeamMembers.length].image})` }} />
                {allTeamMembers[currentSlide % allTeamMembers.length].overlay && <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${allTeamMembers[currentSlide % allTeamMembers.length].overlay})` }} />}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white text-lg font-semibold mb-1">{allTeamMembers[currentSlide % allTeamMembers.length].name}</h3>
                  <p className="text-gray-300 text-sm">{allTeamMembers[currentSlide % allTeamMembers.length].role}</p>
                </div>
              </div>
            )}
          </div>
          {/* Mobile Navigation Controls: [Prev] ...Dots... [Next] */}
          <div className="flex justify-between items-center w-full max-w-sm mx-auto px-2 gap-4">
            <button onClick={prevSlide} disabled={isTransitioning} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex-shrink-0 group disabled:opacity-50"><svg className="w-3 h-5 text-[#14142B] rotate-180 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25"><path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" /></svg></button>
            <div className="flex justify-center items-center space-x-1.5">
              {allTeamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsTransitioning(false), 600);
                  }}
                  disabled={isTransitioning}
                  className={`flex-shrink-0 w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-gradient-to-r from-[#1225B9] to-[#FF2DF7] shadow-lg" : "bg-gray-500"}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} disabled={isTransitioning} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex-shrink-0 group disabled:opacity-50"><svg className="w-3 h-5 text-[#14142B] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25"><path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" /></svg></button>
          </div>
        </div>

        {/* Indicator Dots below the cards (desktop and mobile) */}
        {/* Desktop Dots Indicator */}
        <div className="hidden md:flex items-center justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(allTeamMembers.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setCurrentSlide(index * 3);
                setTimeout(() => setIsTransitioning(false), 600);
              }}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentSlide / 3) === index ? "bg-gradient-to-r from-[#1225B9] to-[#FF2DF7] shadow-lg" : "bg-gray-400 hover:bg-gray-300"}`}
            />
          ))}
        </div>
      </section>

      {/* Get In Touch CTA */}
      <section
      id="contact"
      className="relative py-8 pt-16 pb-16 max-h-[70vh] md:py-0 md:pt-0 md:pb-[130px] md:max-h-none bg-black md:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_#0917A5_52.73%,_#1072FE_99%,_#1225B9_96.19%)]"
        >
        <img
          src={bottomEclipse}
          alt="Arrow"
          className="absolute left-0 bottom-[0px] md:bottom-[-250px] min-h w-full h-12 md:h-auto z-10 overflow-hidden"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 md:px-4">
        <div className="text-center max-w-6xl mx-auto pb-10 md:pb-20">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[65px] lg:leading-tight font-bold mb-6 md:mb-8">
            <span className="text-white">Why Choose Us for</span>
            <br />
            <span className="text-white">Your </span>
            <span className="bg-gradient-to-r from-[#142EF5] to-[#F41CCC] bg-clip-text text-transparent">
              Marketing
            </span>
            <span className="text-white"> Needs?</span>
          </h2>

          {/* Description */}
          <p className="text-white text-lg md:text-xl lg:text-[25px] lg:leading-[38px] mb-8 md:mb-12 max-w-5xl mx-auto font-medium">
            At Looklike, we don't just market — we build success stories. With a
            mix of creativity, experience, and market insight, we craft powerful
            campaigns tailored to each brand. Our team is dedicated to
            delivering real results through smart, impactful advertising and
            marketing solutions.
          </p>

          {/* CTA Button */}
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
      </div>
    </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
