import babelLogo from "@/assets/previous_customers/babel.webp";
import ihomeLogo from "@/assets/previous_customers/ihome.webp";
import alRehabLogo from "@/assets/previous_customers/al_rehab_development.webp";
import elmassaLogo from "@/assets/previous_customers/elmassa.webp";
import villaroseLogo from "@/assets/previous_customers/villarose.webp";
import plazaStripLogo from "@/assets/previous_customers/plaza_strip.webp";
import zodiacLogo from "@/assets/previous_customers/zodiac.webp";
import remaxLogo from "@/assets/previous_customers/remax.webp";
import blueLeftVectorTrustedSection from "@/assets/leftTrustedCompaniesVector.webp";


/**
 * Fixed Infinite Marquee Animation Styles
 * 
 * Key changes:
 * - Single marquee-inner container with duplicated content
 * - Proper gap management between items
 * - Seamless infinite loop without overlapping
 */
const marqueeStyles = `
.marquee-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.marquee {
  display: flex;
  width: max-content;
}

.marquee-inner {
  display: flex;
  gap: 30px;
  animation: marquee-scroll 200s linear infinite;
}

.marquee-item {
  flex-shrink: 0;
  width: 250px;
  height: 150px;
}

@media (max-width: 768px) {
  .marquee-item {
    width: 200px;
    height: 120px;
  }
  
  .marquee-inner {
    gap: 25px;
  }
}

@media (max-width: 480px) {
  .marquee-item {
    width: 150px;
    height: 100px;
  }
  
  .marquee-inner {
    gap: 20px;
  }
}

@keyframes marquee-scroll {
  0% { 
    transform: translateX(0); 
  }
  100% { 
    transform: translateX(calc(-100% - 30px)); 
  }
}

.marquee-container:hover .marquee-inner {
  animation-play-state: paused;
}
`;

// Company item component for reusability
interface CompanyItemProps {
  logo: string;
  alt: string;
}

const CompanyItem = ({ logo, alt }: CompanyItemProps) => {
  return (
    <div className="marquee-item flex items-center justify-center p-4 md:p-6 border border-gray-600 rounded-2xl bg-transparent hover:bg-white/5 transition-all duration-300">
      <img
        src={logo}
        alt={alt}
        className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

const TrustedCompaniesSection = () => {
  const companies = [
    {
      id: 1,
      logo: babelLogo,
      alt: "Babel",
    },
    {
      id: 2,
      logo: ihomeLogo,
      alt: "iHome",
    },
    {
      id: 3,
      logo: alRehabLogo,
      alt: "Al Rehab Development",
    },
    {
      id: 4,
      logo: elmassaLogo,
      alt: "El Massa",
    },
    {
      id: 5,
      logo: villaroseLogo,
      alt: "Villarose",
    },
    {
      id: 6,
      logo: plazaStripLogo,
      alt: "Plaza Street",
    },
    {
      id: 7,
      logo: zodiacLogo,
      alt: "Zodiac",
    },
    {
      id: 8,
      logo: remaxLogo,
      alt: "RE/MAX",
    },
  ];

  return (
    <section id="about" className="relative pt-32 pb-0 bg-black">
      {/* Blue Gradient */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] h-[600px] pointer-events-none z-0">
        <img src={blueLeftVectorTrustedSection} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto md:px-4">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
            Trusted by most innovative Companies
          </h2>
        </div>
      </div>

      {/* Fixed Infinite Marquee - full width outside container */}
      <div className="relative overflow-hidden w-screen left-1/2 right-1/2 -translate-x-1/2 py-8" style={{ position: 'relative' }}>
        <style>{marqueeStyles}</style>
        <div className="marquee-container">
          <div className="marquee">
            <div className="marquee-inner">
              {/* Repeat the companies array 10 times for a longer ribbon */}
              {Array.from({ length: 10 }, (_, setIndex) => 
                companies.map((company) => (
                  <CompanyItem 
                    key={`set-${setIndex}-${company.id}`}
                    logo={company.logo}
                    alt={company.alt}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;