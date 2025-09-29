import { useState } from "react";
import { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebase";
import { useNavigate } from "react-router-dom";
import homeBottomLeft from "@/assets/decoration/home_bottom_left.webp";
import cinnarollsBrandIdentity from "@/assets/Portfolio_imgs/cinnarolls_portfolio.webp";
import elmassaBrandIdentity from "@/assets/Portfolio_imgs/elmassa_portfolio.webp";
import ihomeBrandIdentity from "@/assets/Portfolio_imgs/ihome_portfolio.webp";
import zodiacBrandIdentity from "@/assets/Portfolio_imgs/zodiac_portfolio.webp";
import centromallBrandIdentity from "@/assets/Portfolio_imgs/centromall_portfolio.webp";

const PortfolioSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [firestoreProjects, setFirestoreProjects] = useState<Array<{ id: string; title: string; description: string; image: string; logo?: string }>>([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{[key: number]: boolean}>({});
  const navigate = useNavigate();

  // Add touch state for swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null); // Reset touchEnd on new touch
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
      nextProject();
    } else if (isRightSwipe) {
      prevProject();
    }
  };

  const staticProjects = [
    {
      id: "1",
      title: "ihome",
      description:
        "We crafted a modern and clean visual identity for i Home, reflecting the brand's focus on smart living and contemporary design.",
      image: ihomeBrandIdentity,
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/19262947c98dfd5570bca883385edc5103f3b892",
    },
    {
      id: "2",
      title: "Elmassa",
      description: "Developed a refined and modern brand identity that reflects luxury, trust, and elegance. The design captures the brand's premium positioning through a sophisticated logo, elegant typography, and a timeless color palette. This comprehensive brand system ensures consistency across all touchpoints while maintaining the sophisticated aesthetic that defines the Elmassa experience.",
      image: elmassaBrandIdentity,
      logo: "",
    },
    {
      id: "3",
      title: "Zodiac",
      description: "We developed a bold and professional visual identity for Zodiac, capturing the essence of trust, growth, and real estate expertise. The design reflects the brand's ambition to lead in the property marketing sector.",
      image: zodiacBrandIdentity,
      logo: "",
    },
    {
      id: "4",
      title: "CinnaRolls",
      description: "We developed a bold and professional visual identity for CinnaRolls, capturing the warmth and comfort of freshly baked goods. The design combines playful elements with professional execution, creating a brand that feels both approachable and premium. Our comprehensive approach included logo design, packaging concepts, and brand guidelines that reflect the artisanal quality and delicious experience that CinnaRolls represents.",
      image: cinnarollsBrandIdentity,
      logo: "",
    },
    {
      id: "5",
      title: "Centro Mall",
      description: "Modern and clean brand identity for Centro Mall, reflecting the brand's focus on family shopping and contemporary retail experience.",
      image: centromallBrandIdentity,
      logo: "",
    },
  ];

  // Merge static and Firestore projects, avoiding duplicates by title
  const projects = [
    ...staticProjects,
    ...firestoreProjects.filter(
      (project) => !staticProjects.some((staticProject) => staticProject.title === project.title)
    ),
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(collection(db, "projects"));
      setFirestoreProjects(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || "",
            description: data.description || "",
            image: data.image || "",
            logo: data.logo || "",
          };
        })
      );
    };
    fetchProjects();
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    // Reset expanded state when changing projects
    setExpandedDescriptions(prev => ({
      ...prev,
      [currentProject]: false
    }));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    // Reset expanded state when changing projects
    setExpandedDescriptions(prev => ({
      ...prev,
      [currentProject]: false
    }));
  };

  // Function to check if description needs "See more" button
  const needsSeeMore = (description: string) => {
    // Check if description would be more than 4 lines (approximately 200 characters)
    return description.length > 200;
  };

  return (
    <section id="portfolio" className="relative py-24 pb-56 bg-black">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #000 0%, #1225B9 57.83%, #000 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Check Our
            <br />
            Last Work
          </h2>
          <p className="text-white text-lg">
            Take a look at our latest projects where creativity
            <br />
            meets strategy.
          </p>
        </div>

        {/* Portfolio Carousel */}
        <div className="relative max-w-6xl mx-auto flex items-center justify-center md:px-4">
          {/* Previous Button - DESKTOP ONLY */}
          <button
            onClick={prevProject}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 hidden md:flex items-center justify-center z-20 group absolute left-0 md:left-4"
          >
            <svg
              className="w-3 h-5 text-[#14142B] rotate-180 group-hover:text-white transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 15 25"
            >
              <path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" />
            </svg>
          </button>
          
          {/* Card Container - FIXED SIZE */}
          <div
            className="w-[896px] max-w-4xl mx-auto md:px-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative h-[600px] md:h-[500px] rounded-[50px] overflow-hidden bg-white/10 backdrop-blur-[160px] border border-white/20">
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-[250px] md:h-full">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover rounded-t-[50px] md:rounded-l-[50px] md:rounded-tr-none cursor-pointer"
                    onClick={() => navigate("/branding_identity_design")}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content Section */}
                <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-start">
                  <div className="space-y-3 md:space-y-6 mt-4 md:mt-8">
                    <div>
                      <h3 className="text-white text-2xl md:text-5xl font-bold">
                        {projects[currentProject].title}
                      </h3>
                    </div>
                    <div className="relative">
                      <div className={`${expandedDescriptions[currentProject] ? '' : 'max-h-[220px] md:max-h-[180px] overflow-hidden'}`}>
                        <p
                          className={`text-white text-base md:text-base lg:text-lg md:leading-7 font-medium ${
                            !expandedDescriptions[currentProject] && needsSeeMore(projects[currentProject].description) 
                              ? 'line-clamp-4' 
                              : ''
                          }`}
                          style={{
                            color: '#FFF',
                            fontFamily: 'Helvetica',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            lineHeight: '24px',
                            ...(window.innerWidth >= 768 && {
                              fontSize: '18px',
                              lineHeight: '28px',
                            })
                          }}
                        >
                          {projects[currentProject].description}
                        </p>
                      </div>
                      
                      {needsSeeMore(projects[currentProject].description) && (
                        <button
                          onClick={() => setExpandedDescriptions(prev => ({
                            ...prev,
                            [currentProject]: !prev[currentProject]
                          }))}
                          className="text-white/70 hover:text-white text-sm font-medium mt-2 transition-colors"
                        >
                          {expandedDescriptions[currentProject] ? 'See less' : 'See more'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button - DESKTOP ONLY */}
          <button
            onClick={nextProject}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 hidden md:flex items-center justify-center z-20 group absolute right-0 md:right-4"
          >
            <svg
              className="w-3 h-5 text-[#14142B] group-hover:text-white transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 15 25"
            >
              <path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Controls: [Prev] [Dots] [Next] */}
        <div className="block md:hidden mt-8">
          <div className="flex justify-center items-center w-full max-w-sm mx-auto px-4 gap-3">
            <button onClick={prevProject} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex-shrink-0 group">
              <svg className="w-3 h-5 text-[#14142B] rotate-180 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25">
                <path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" />
              </svg>
            </button>
            <div className="flex justify-center items-center space-x-1.5 flex-1">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`flex-shrink-0 w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentProject === index
                      ? "bg-gradient-to-r from-[#1225B9] to-[#FF2DF7] shadow-lg"
                      : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
            <button onClick={nextProject} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex-shrink-0 group">
              <svg className="w-3 h-5 text-[#14142B] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25">
                <path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Dots Indicator */}
        <div className="hidden md:flex items-center justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject
                  ? 'bg-gradient-to-r from-[#1225B9] to-[#FF2DF7] shadow-lg'
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      {/* Background decorative image */}
      <div className="absolute -right-32 bottom-[-75px] z-0">
        <img
          src={homeBottomLeft}
          alt="3D decorative element"
          className="w-[517px] h-[517px] object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default PortfolioSection;