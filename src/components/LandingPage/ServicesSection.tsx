import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import socialMediaManagmentImg from "@/assets/Services_imgs/socialMediaManagment.webp";
import brandingServicesImg from "@/assets/Services_imgs/brandingServices.webp";
import mediaProductionImg from "@/assets/Services_imgs/mediaProduction.webp";
import outdoorAdvertisingImg from "@/assets/Services_imgs/outdoorAdvertising.webp";
import PinkVector from "@/assets/topRightPinkVector.webp";
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/utils/translations';

const ServicesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: t.services.socialMedia.title,
      description:
        t.services.socialMedia.description,
      image:
        socialMediaManagmentImg,
    },
    {
      id: 2,
      title: t.services.branding.title,
      description:
        t.services.branding.description,
      image:
        brandingServicesImg,
    },
    {
      id: 3,
      title: t.services.mediaProduction.title.part1 + " " + t.services.mediaProduction.title.part2,
      description:
        t.services.mediaProduction.description,
      image:
        mediaProductionImg,
    },
    {
      id: 4,
      title: t.services.outdoor.title,
      description:
        t.services.outdoor.description,
      image:
        outdoorAdvertisingImg,
    },
  ];

  const routeMap: { [key: string]: string } = {
    [t.services.socialMedia.title]: "/social-media-management",
    [t.services.branding.title]: "/branding_identity_design",
    [t.services.mediaProduction.title.part1 + " " + t.services.mediaProduction.title.part2]: "/media-production",
    [t.services.outdoor.title]: "/outdoor-advertising",
  };

  const handleToggleDescription = (e: React.MouseEvent, serviceId: number) => {
    e.stopPropagation();
    e.preventDefault(); 
    setExpandedId(prevId => (prevId === serviceId ? null : serviceId));
  };


  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, services.length]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      // Pause autoplay if a description is expanded
      if (!isAnimating && expandedId === null) {
        nextSlide();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAnimating, nextSlide, expandedId]);

  // Touch handling for swipe gestures
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

  const getCardStyles = (index: number) => {
    if (hoveredCard === null) {
      return index === 0 ? 'flex-[2] min-w-0' : 'flex-[1] min-w-0';
    } else {
      if (index === hoveredCard) {
        return 'flex-[2] min-w-0';
      } else {
        return 'flex-[1] min-w-0';
      }
    }
  };

  const handleMouseEnter = (index: number) => {
    if (hoveredCard !== null && hoveredCard !== index) {
      setTransitioning(hoveredCard);
      setTimeout(() => setTransitioning(null), 800);
    }
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    if (hoveredCard !== null) {
      setTransitioning(hoveredCard);
      setTimeout(() => setTransitioning(null), 800);
    }
    setHoveredCard(null);
    setExpandedId(null); // Collapse description on mouse leave
  };

  const get3DTransform = (index: number) => {
    const isHovered = hoveredCard === index;
    const isTransitioning = transitioning === index;
    const isInactive = hoveredCard !== null && hoveredCard !== index;

    if (isTransitioning) {
      return {
        transform: 'perspective(1000px) scale(0.95)',
        transformOrigin: 'center center',
        opacity: '0.3',
        filter: 'blur(2px)',
      };
    }

    if (isHovered) {
      return {
        transform: 'perspective(1000px) scale(1.02)',
        transformOrigin: 'center center',
        opacity: '1',
        filter: 'brightness(1.1) contrast(1.1)',
      };
    }

    if (isInactive) {
      return {
        transform: 'perspective(1000px) scale(0.95)',
        transformOrigin: 'center center',
        opacity: '0.6',
        filter: 'brightness(0.7) blur(1px)',
      };
    }

    return {
      transform: 'perspective(1000px) scale(1)',
      transformOrigin: 'center center',
      opacity: '1',
      filter: 'brightness(1)',
    };
  };

  const getImageFilter = (index: number) => {
    if (hoveredCard === null) {
      return index === 0 ? 'grayscale(0)' : 'grayscale(100%)';
    } else {
      return hoveredCard === index ? 'grayscale(0)' : 'grayscale(100%)';
    }
  };

  return (
    <section id="services" className="relative mt-0 sm:mb-16 sm:py-16 lg:py-24 overflow-visible z-40">
      
      <div className="absolute top-32 right-0 w-[150px] h-[800px] pointer-events-none z-0">
        <img src={PinkVector} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
            {t.services.title}
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="block sm:hidden">
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service) => {
                const path = routeMap[service.title];
                const CardWrapper = path ? Link : 'div';
                const isExpanded = expandedId === service.id;
                const isLongDescription = service.description.length > 130;

                return (
                  <CardWrapper
                    to={path || ''}
                    key={service.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="relative h-[400px] rounded-[20px] overflow-hidden transform transition-all duration-300 hover:scale-105">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image})` }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                        <div className="flex items-end justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-white text-xl font-bold leading-tight mb-3">
                              {service.title}
                            </h3>
                            <p
                              className={`text-white text-sm leading-relaxed opacity-90 ${!isExpanded && isLongDescription ? 'line-clamp-4' : ''}`}
                              style={{
                                color: '#FFF',
                                fontFamily: 'Inter',
                                fontSize: '8.476px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '12.108px',
                                letterSpacing: '-0.001px',
                              }}
                            >
                              {service.description}
                            </p>
                             {isLongDescription && (
                                <button
                                  onClick={(e) => handleToggleDescription(e, service.id)}
                                  className="text-blue-300 text-xs font-semibold mt-2 hover:underline z-50"
                                >
                                  {isExpanded ? t.services.seeLess : t.services.seeMore}
                                </button>
                              )}
                          </div>
                          <div className="flex-shrink-0 w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                            <svg
                              className="w-7 h-7 text-black"
                              fill="currentColor"
                              viewBox="0 0 69 69"
                            >
                              <path d="M52.8083 35.8696L39.1973 48.1603C38.7712 48.5452 38.1932 48.7614 37.5905 48.7614C36.9878 48.7614 36.4098 48.5452 35.9836 48.1603C35.5574 47.7755 35.318 47.2536 35.318 46.7094C35.318 46.1651 35.5574 45.6432 35.9836 45.2584L45.7211 36.4688H10.932C10.3304 36.4688 9.7534 36.253 9.3279 35.8688C8.9025 35.4847 8.6635 34.9636 8.6635 34.4204C8.6635 33.8771 8.9025 33.356 9.3279 32.9719C9.7534 32.5877 10.3304 32.3719 10.932 32.3719H45.7211L35.9874 23.5772C35.5612 23.1924 35.3218 22.6704 35.3218 22.1262C35.3218 21.582 35.5612 21.0601 35.9874 20.6752C36.4136 20.2904 36.9916 20.0742 37.5942 20.0742C38.1969 20.0742 38.7749 20.2904 39.2011 20.6752L52.8121 32.9659C53.0236 33.1565 53.1914 33.3829 53.3057 33.6322C53.4201 33.8815 53.4787 34.1487 53.4784 34.4185C53.478 34.6883 53.4187 34.9554 53.3037 35.2044C53.1887 35.4535 53.0203 35.6795 52.8083 35.8696Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center mt-6 space-x-4">
            <button onClick={prevSlide} disabled={isAnimating} className="w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex items-center justify-center disabled:opacity-50 group">
              <svg className="w-3 h-5 text-[#14142B] rotate-180 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25">
                <path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" />
              </svg>
            </button>
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isAnimating}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gradient-to-r from-[#1225B9] to-[#FF2DF7] shadow-lg' : 'bg-gray-400 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button onClick={nextSlide} disabled={isAnimating} className="w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex items-center justify-center disabled:opacity-50 group">
              <svg className="w-3 h-5 text-[#14142B] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25">
                <path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div
          className="hidden sm:flex sm:gap-4 lg:gap-6 xl:gap-8 justify-center items-stretch max-w-5xl mx-auto"
          style={{ perspective: '1200px' }}
        >
          {services.map((service, index) => {
            const path = routeMap[service.title];
            const CardComponent = path ? Link : 'div';
            const isHovered = hoveredCard === index;
            const isExpanded = expandedId === service.id;
            const isLongDescription = service.description.length > 180;

            return (
              <CardComponent
                to={path || ''}
                key={service.id}
                className={`relative group cursor-pointer transition-all duration-[1000ms] ease-out hover:z-10 ${getCardStyles(index)}`}
                style={{
                  transitionProperty: 'flex-grow, flex-shrink, flex-basis, transform, opacity, filter',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transformStyle: 'preserve-3d',
                  ...get3DTransform(index),
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="relative rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden h-[350px] sm:h-[380px] lg:h-[420px] transition-all duration-[1000ms] ease-out"
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow:
                      isHovered
                        ? '0px 20px 100px 20px rgba(18, 37, 185, 0.4), 0px 0px 50px 10px rgba(244, 28, 204, 0.2)'
                        : 'none',
                  }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-gray-500 transition-all duration-[1000ms] ease-out"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      transform: isHovered ? 'scale(1.05)' :
                                transitioning === index ? 'scale(0.95)' :
                                hoveredCard !== null && !isHovered ? 'scale(0.98)' :
                                'scale(1)',
                      filter: getImageFilter(index),
                    }}
                  />
                  <div
                    className="absolute left-0 right-0 p-8 flex flex-col justify-end inset-0"
                  >
                    <div className="relative flex justify-between gap-3 sm:gap-4 items-end h-full">
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-white font-bold leading-tight mb-2 transition-all duration-[1000ms] ease-out truncate"
                          style={{
                            fontSize: isHovered ? '18px' :
                                     transitioning === index ? '14px' :
                                     hoveredCard !== null && !isHovered ? '16px' : '18px',
                            opacity: (isHovered || (hoveredCard === null && index === 0)) ? 1 : 0,
                          }}
                        >
                          {service.title}
                        </h3>
                        <div
                          className="transition-all duration-[1000ms] ease-out"
                          style={{
                              opacity: (isHovered || (hoveredCard === null && index === 0)) ? 1 : 0,
                              maxHeight: (isHovered || (hoveredCard === null && index === 0)) ? '40rem' : '0',
                              overflow: 'hidden',
                          }}
                        >
                          <p
                            className={`text-white leading-tight transition-all duration-[1000ms] ease-out ${!isExpanded && isLongDescription ? 'line-clamp-4' : ''}`}
                            style={{
                              fontSize: isHovered ? '13px' :
                                      transitioning === index ? '12px' :
                                      hoveredCard !== null && !isHovered ? '12px' : '13px',
                            }}
                          >
                            {service.description}
                          </p>
                          {isLongDescription && (
                            <button
                              onClick={(e) => handleToggleDescription(e, service.id)}
                              className="text-blue-300 text-sm font-semibold mt-2 hover:underline z-50"
                            >
                              {isExpanded ? t.services.seeLess : t.services.seeMore}
                            </button>
                          )}
                        </div>
                      </div>

                      <div
                        className="flex-shrink-0 bg-gray-300 rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-[1000ms] ease-out"
                        style={{
                          width: isHovered ? '60px' :
                                 transitioning === index ? '28px' :
                                 hoveredCard !== null && !isHovered ? '32px' : '48px',
                          height: isHovered ? '60px' :
                                  transitioning === index ? '28px' :
                                  hoveredCard !== null && !isHovered ? '32px' : '48px',
                          transform: isHovered
                                    ? 'scale(1.1)'
                                    : transitioning === index
                                    ? 'scale(0.7)'
                                    : (hoveredCard !== null || index > 0)
                                    ? 'scale(0.9)'
                                    : 'scale(1)',
                          opacity: transitioning === index ? 0.4 : 1,
                        }}
                      >
                        <svg
                          className="text-black transition-all duration-[1000ms] ease-out"
                          style={{
                            width: isHovered ? '32px' :
                                   transitioning === index ? '16px' :
                                   hoveredCard !== null && !isHovered ? '20px' : '24px',
                            height: isHovered ? '32px' :
                                    transitioning === index ? '16px' :
                                    hoveredCard !== null && !isHovered ? '20px' : '24px',
                            transform: isHovered ? 'rotate(0deg)' : 
                                      transitioning === index ? 'rotate(-20deg)' : 
                                      'rotate(-45deg)',
                            transformOrigin: 'center',
                            transition: 'transform 500ms ease-out'
                          }}
                          fill="currentColor"
                          viewBox="0 0 69 69"
                        >
                          <path d="M52.8083 35.8696L39.1973 48.1603C38.7712 48.5452 38.1932 48.7614 37.5905 48.7614C36.9878 48.7614 36.4098 48.5452 35.9836 48.1603C35.5574 47.7755 35.318 47.2536 35.318 46.7094C35.318 46.1651 35.5574 45.6432 35.9836 45.2584L45.7211 36.4688H10.932C10.3304 36.4688 9.7534 36.253 9.3279 35.8688C8.9025 35.4847 8.6635 34.9636 8.6635 34.4204C8.6635 33.8771 8.9025 33.356 9.3279 32.9719C9.7534 32.5877 10.3304 32.3719 10.932 32.3719H45.7211L35.9874 23.5772C35.5612 23.1924 35.3218 22.6704 35.3218 22.1262C35.3218 21.582 35.5612 21.0601 35.9874 20.6752C36.4136 20.2904 36.9916 20.0742 37.5942 20.0742C38.1969 20.0742 38.7749 20.2904 39.2011 20.6752L52.8121 32.9659C53.0236 33.1565 53.1914 33.3829 53.3057 33.6322C53.4201 33.8815 53.4787 34.1487 53.4784 34.4185C53.478 34.6883 53.4187 34.9554 53.3037 35.2044C53.1887 35.4535 53.0203 35.6795 52.8083 35.8696Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </CardComponent>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;