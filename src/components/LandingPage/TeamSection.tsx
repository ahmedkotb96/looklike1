import { useState, useEffect, useCallback } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebase";
import bottomVector from "@/assets/bottomRightTeamVector.webp";
import homeBottomRight from "@/assets/decoration/home_bottom_right.webp";

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState<Array<{ id: string; name: string; role: string; image: string; overlay?: string }>>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
        }).sort((a, b) => a.order - b.order) // Sort by order
      );
    };
    fetchTeamMembers();
  }, []);

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
      handleSlideChange('next');
    } else if (isRightSwipe) {
      handleSlideChange('prev');
    }
  };
  // ...existing code...

  const slidesPerView = {
    mobile: 1,
    desktop: 3,
  };

  const handleSlideChange = useCallback((direction: 'next' | 'prev' | number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const isMobile = window.innerWidth < 768;
    const itemsPerSlide = isMobile ? slidesPerView.mobile : slidesPerView.desktop;
    const maxSlide = teamMembers.length - (isMobile ? slidesPerView.mobile : slidesPerView.desktop);

    if (typeof direction === 'number') {
      setCurrentSlide(direction);
    } else {
      setCurrentSlide((prev) => {
        let newSlide;
        if (direction === 'next') {
          newSlide = prev + itemsPerSlide;
          return newSlide >= teamMembers.length ? 0 : newSlide;
        } else { // 'prev'
          newSlide = prev - itemsPerSlide;
          return newSlide < 0 ? maxSlide : newSlide;
        }
      });
    }

    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, slidesPerView.mobile, slidesPerView.desktop, teamMembers.length]);
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => handleSlideChange('next'), 3000);
    return () => clearInterval(interval);
  }, [isTransitioning, teamMembers.length, handleSlideChange]);

  return (
    <section id="team" className="relative pt-24 pb-96 bg-black overflow-hidden">
      <div className="absolute bottom-64 right-0 w-[330px] h-[800px] pointer-events-none z-0">
        <img src={bottomVector} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>
      <div className="absolute -left-32 bottom-0">
        <img
          src={homeBottomRight}
          alt="3D decorative element"
          className="w-[540px] h-[550px] md:w-[540px] md:h-[550px] object-contain opacity-80"
          loading="lazy"
          decoding="async"
        />
      </div>
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
      
      <div className="container mx-auto px-4 relative z-10">
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

        {/* Team Carousel for desktop/tablet */}
        <div className="relative max-w-6xl mx-auto hidden md:flex items-center justify-center">
          <button
            onClick={() => handleSlideChange('prev')}
            disabled={isTransitioning}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex items-center justify-center z-20 disabled:opacity-50 absolute left-4 group"
          >
            <svg className="w-3 h-5 text-[#14142B] rotate-180 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25"><path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" /></svg>
          </button>
        <div className="flex gap-4 justify-center items-center overflow-hidden w-full max-w-4xl mx-auto relative h-[450px]">
          {teamMembers.length > 0 && teamMembers.slice(currentSlide, currentSlide + slidesPerView.desktop).map((member, index) => {
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
            onClick={() => handleSlideChange('next')}
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
            {teamMembers.length > 0 && teamMembers[currentSlide % teamMembers.length] && (
              <div
                key={`mobile-${teamMembers[currentSlide % teamMembers.length].id}`}
                className={`w-full h-full relative transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                style={{ animation: !isTransitioning ? `slideInUp 0.6s ease-out both` : 'none' }}
              >
                <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${teamMembers[currentSlide % teamMembers.length].image})` }} />
                {teamMembers[currentSlide % teamMembers.length].overlay && <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${teamMembers[currentSlide % teamMembers.length].overlay})` }} />}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white text-lg font-semibold mb-1">{teamMembers[currentSlide % teamMembers.length].name}</h3>
                  <p className="text-gray-300 text-sm">{teamMembers[currentSlide % teamMembers.length].role}</p>
                </div>
              </div>
            )}
          </div>
          {/* Mobile Navigation Controls: [Prev] ...Dots... [Next] */}
          <div className="flex justify-between items-center w-full max-w-sm mx-auto px-2">
            <button onClick={() => handleSlideChange('prev')} disabled={isTransitioning} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 disabled:opacity-50 group"><svg className="w-3 h-5 text-[#14142B] rotate-180 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25"><path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" /></svg></button>
            <div className="flex justify-center items-center space-x-1.5 overflow-x-auto">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  disabled={isTransitioning}
                  className={`flex-shrink-0 w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-gradient-to-r from-[#1225B9] to-[#FF2DF7] shadow-lg" : "bg-gray-500"}`}
                />
              ))}
            </div>
            <button onClick={() => handleSlideChange('next')} disabled={isTransitioning} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 disabled:opacity-50 group"><svg className="w-3 h-5 text-[#14142B] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25"><path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" /></svg></button>
          </div>
        </div>

        {/* Desktop Dots Indicator */}
        <div className="hidden md:flex items-center justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(teamMembers.length / slidesPerView.desktop) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index * slidesPerView.desktop)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentSlide / slidesPerView.desktop) === index ? "bg-gradient-to-r from-[#1225B9] to-[#FF2DF7] shadow-lg" : "bg-gray-400 hover:bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;