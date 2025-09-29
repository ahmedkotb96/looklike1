import { Button } from "@/components/ui/button";
import homeTopLeft from "@/assets/decoration/home_top_left.webp";
import homeTopRight from "@/assets/decoration/home_top_right.webp";

const HeroSection = () => {
  return (
    <section
      // FINAL RESPONSIVE LOGIC: Handles all screen types correctly.
      className="relative flex flex-col items-center overflow-hidden
        /* 1. Base (Mobile): Compact padding, no min-height. */
        /* INCREASED bottom padding for mobile version. */
        pt-28 pb-48

        /* 2. Portrait Tablet (e.g., 1024x1366): Reduced height with balanced padding. */
        lg:portrait:min-h-[80vh] lg:portrait:py-32

        /* 3. Landscape Desktop: Reduced height with less padding. */
        lg:landscape:min-h-[100vh] lg:landscape:pt-[15vh] lg:landscape:pb-[10vh]
      "
    >
      {/* Background Elements - Extended 50px below section */}
      <BackgroundLayers />
      
      {/* Decorative Elements */}
      <DecorativeElements />
      
      {/* Main Content */}
      <MainContent />

      {/* SVG decorative element at bottom */}
      <div className="absolute left-0 w-full z-30 pointer-events-none" style={{ bottom: 'clamp(-2rem, -5vw, -4rem)' }}>
        <svg 
          width="100%" 
          height="133" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full 
                     /* Mobile: Much larger SVG height */
                     h-[175px] 
                     /* Tablet and up: Standard responsive sizes */
                     md:h-[200px] lg:h-[300px] xl:h-[400px]"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 800 133"
        >
          <defs>
            <radialGradient id="radialGradientHero" cx="50%" cy="50%" r="51.38%">
              <stop offset="82.2%" stopColor="#000000" stopOpacity="1" />
              <stop offset="100%" stopColor="#1146D7" stopOpacity="1" />
            </radialGradient>
            <clipPath id="cropClipHero">
              <rect x="0" y="0" width="800" height="133" />
            </clipPath>
          </defs>
          <rect 
            x="0" 
            y="0" 
            width="800" 
            height="400" 
            rx="2191" 
            ry="2191" 
            fill="url(#radialGradientHero)" 
            stroke="#B1D0FF" 
            strokeWidth="0.5"
            clipPath="url(#cropClipHero)" 
          />
        </svg>
      </div>

      {/* Services introduction text */}
      <div className="absolute bottom-4 left-0 right-0 md:relative md:bottom-auto md:left-auto md:right-auto z-40 text-center px-4 max-w-2xl mx-auto md:mb-16" style={{ marginTop: '12rem' }}>
        <p className="text-white text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Everything you need</p>
        <p className="text-white text-xs sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mt-2">
          From branding and graphic design to social media, digital ads, and outdoor campaigns — we plan, design, and execute strategies that get you noticed. Set goals, assign tasks, and watch your brand grow — effortlessly.
        </p>
      </div>

    </section>
  );
};

// Background layers component - Extended to flow 50px into next section
const BackgroundLayers = () => (
  <>
    {/* Base background - Extended 50px below */}
    <div className="absolute inset-0 bg-black" 
         style={{ bottom: '-50px' }} />
    
    {/* Main gradient background - Extended 50px below with fade effect */}
    <div className="absolute inset-0 bg-[linear-gradient(180deg,_#000_0%,_#000_40%,_#0917A5_55%,_#1072FE_65%,_#1225B9_75%,_#000_98%,_transparent_100%)]" 
         style={{ bottom: '-50px' }} />
    
    {/* Motion blur overlay - Extended 50px below */}
    <div className="absolute inset-0 bg-black/5 backdrop-blur-[150px]" 
         style={{ bottom: '-50px' }} />
  </>
);

// Decorative elements component
const DecorativeElements = () => (
  <>
    {/* Abstract background shape */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-50"
         style={{ 
           width: 'clamp(6rem, 25vw, 25rem)',
           height: 'clamp(12rem, 50vh, 45rem)'
         }}>
      <svg
        className="w-full h-full fill-[#1225B9] blur-[75px]"
        viewBox="0 0 345 1002"
      >
        <path d="M485.73 489.502C427.464 318.802 163.228 -24.4326 261.999 259.699C360.77 543.831 232.624 234.698 163.312 404.955C93.9989 575.213 331.914 883.203 432.177 848.979C532.441 814.756 543.996 660.202 485.73 489.502Z" />
      </svg>
    </div>

    {/* Left decorative star */}
    {/* MODIFIED: Changed top-[45%] to top-[42%] to move the element further up. */}
    <div className="absolute top-[42%] -translate-y-1/2 z-20"
         style={{
           left: 'clamp(-8rem, -15vw, -12rem)',
           transform: 'translateY(-50%)',
         }}
         // Web/desktop: move up more
         id="left-decorative-star"
    >
      <img
        src={homeTopLeft} 
        alt="Decorative star"
        className="object-contain opacity-150"
        style={{ 
          width: 'clamp(18rem, 40vw, 44rem)',
          height: 'clamp(18rem, 40vw, 44rem)',
          transform: 'rotate(0deg)'
        }}
        loading="lazy"
        decoding="async"
      />
    </div>

    {/* Right decorative visual */}
    <div className="absolute top-[54%] -translate-y-1/2 z-20"
         style={{
           right: 'clamp(-8rem, -15vw, -10rem)',
           transform: 'translateY(-50%)',
         }}
         id="right-decorative-visual"
    >
      <img
        src={homeTopRight} 
        alt="Visual element"
        className="object-contain opacity-150"
        style={{ 
          width: 'clamp(18rem, 40vw, 44rem)',
          height: 'clamp(18rem, 40vw, 44rem)'
        }}
        loading="lazy"
        decoding="async"
      />
    </div>
  </>
);

// Add a style tag for desktop-only upward movement
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @media (min-width: 1024px) {
      #left-decorative-star, #right-decorative-visual {
        transform: translateY(-50%) translateY(-6vw) !important;
      }
    }
  `;
  document.head.appendChild(style);
}

// Main content component
const MainContent = () => (
  <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto mb-auto"
       // IMPROVEMENT: Gap between elements is now responsive to screen height.
       style={{ gap: 'clamp(1rem, 3vh, 3rem)' }}>
    
    {/* Main heading */}
    <MainHeading />
    
    {/* Welcome text */}
    <WelcomeText />
    
    {/* CTA Button */}
    <CTAButton />
    
  </div>
);

// Main heading component
const MainHeading = () => (
  <h1
    style={{
      color: '#FFF',
      textAlign: 'center',
      fontFamily: 'DM Sans, sans-serif',
      // IMPROVEMENT: Replaced fixed font-size with clamp() for fluid scaling.
      // This makes the text large on desktops but readable without overflow on mobile.
      fontSize: 'clamp(4rem, 12vw, 11rem)',
      fontStyle: 'normal',
      fontWeight: 700,
      // IMPROVEMENT: Used a unitless line-height for proper scaling with the font-size.
      lineHeight: 0.95,
      margin: 0,
      padding: 0,
    }}
  >
    <span style={{ display: 'block' }}>
      Expect More
    </span>
    <span style={{ 
        display: 'block', 
        // IMPROVEMENT: Responsive margin-top to maintain spacing across screen sizes.
        marginTop: 'clamp(0.25rem, 2vh, 1rem)' 
    }}>
      With Us!
    </span>
  </h1>
);

// Welcome text component
const baseWelcomeTextStyle = {
  color: '#FFF',
  textAlign: 'center' as const,
  fontFamily: 'DM Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  letterSpacing: '-1.042px',
  // IMPROVEMENT: Fluid font size for better readability on all devices.
  fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
  // IMPROVEMENT: Unitless line-height for responsive vertical spacing.
  lineHeight: 1.5,
};

const WelcomeText = () => (
  // IMPROVEMENT: Responsive margin-top to ensure proper spacing from the main heading.
  <div style={{ marginTop: 'clamp(1rem, 4vh, 2rem)' }}>
    <div style={baseWelcomeTextStyle}>
      Welcome to Look Like Advertising & Marketing
    </div>
    <div style={{ ...baseWelcomeTextStyle, marginTop: '4px' }}>
      your partner for creative advertising solutions!
    </div>
  </div>
);

// CTA button component
const CTAButton = () => (
  <a href="#services" tabIndex={-1} className="focus:outline-none">
    <Button 
      className="bg-white/10 border border-white/15 rounded-lg backdrop-blur-[7px] 
                 hover:bg-white/20 transition-all duration-300 
                 shadow-[0px_0px_6px_3px_rgba(255,255,255,0.25)_inset]"
      style={{ 
        marginTop: 'clamp(0.5rem, 2vh, 2rem)',
        paddingLeft: 'clamp(1rem, 3vw, 2.5rem)',
        paddingRight: 'clamp(1rem, 3vw, 2.5rem)',
        paddingTop: 'clamp(0.5rem, 1.5vh, 1.25rem)',
        paddingBottom: 'clamp(0.5rem, 1.5vh, 1.25rem)'
      }}
    >
      <span className="text-white" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.25rem)' }}>
        Explore More
      </span>
    </Button>
  </a>
);

export default HeroSection;