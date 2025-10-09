import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/LandingPage/Navigation";
import Footer from "@/components/LandingPage/Footer";
import { Button } from "@/components/ui/button";

import al_rehab_development from "@/assets/previous_customers/al_rehab_development.webp";
import babel from "@/assets/previous_customers/babel.webp";
import elmassa from "@/assets/previous_customers/elmassa.webp";
import ihome from "@/assets/previous_customers/ihome.webp";
import plaza_strip from "@/assets/previous_customers/plaza_strip.webp";
import remax from "@/assets/previous_customers/remax.webp";
import villarose from "@/assets/previous_customers/villarose.webp";
import zodiac from "@/assets/previous_customers/zodiac.webp";
import aboutUsImg from "@/assets/decoration/about_us.webp";
import astronautImg from "@/assets/astronaut.webp";
import bottomEclipse from "@/assets/ellipse_bottom.webp";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

export default function AboutUsMainSection() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
      <svg
          className="absolute -left-36 -top-64 w-[500px] h-[500x] text-blue-600 opacity-250"
          style={{ filter: "blur(75px)", transform: "rotate(150deg)" }}
          width="488"
          height="471"
          viewBox="0 0 488 471"
          fill="#1225B9"
        >
          <path
            d="M129.886 320.948C11.3434 323.509 -262.547 130.025 -64.8001 128.175C132.947 126.325 -87.1969 100.403 0.253979 -74.2464C87.7049 -248.896 333.667 -74.1838 336.944 77.5163C340.222 229.216 248.428 318.387 129.886 320.948Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="absolute left-0 top-1/2 w-[468px] h-[473px] text-blue-600 opacity-250"
          style={{ filter: "blur(0px)", transform: "translate(-50%, -50%) rotate(88.762deg)" }}
          width="488"
          height="471"
          viewBox="0 0 488 471"
          fill="#1225B9"
        >
          <path
            d="M129.886 320.948C11.3434 323.509 -262.547 130.025 -64.8001 128.175C132.947 126.325 -87.1969 100.403 0.253979 -74.2464C87.7049 -248.896 333.667 -74.1838 336.944 77.5163C340.222 229.216 248.428 318.387 129.886 320.948Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="absolute right-0 top-80 w-[600px] h-[650px] text-pink-500 opacity-100"
          style={{ filter: "blur(75px)" }}
          width="441"
          height="1005"
          viewBox="0 0 441 1005"
          fill="#1225B9"
        >
          <path
            d="M1134.1 466.134C1134.1 642.722 715.325 1044.31 720.412 749.813C725.498 455.316 661.071 782.268 298.244 646.439C-64.5819 510.609 313.504 150 632.248 150C950.993 150 1134.1 289.546 1134.1 466.134Z"
            fill="#F41CCC"
          />
        </svg>
      </div>

      {/* Motion blur overlay */}
      <div className="absolute inset-0 bg-black/3 backdrop-blur-[100px] z-0" />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </header>
      <div className="h-20" /> {/* Spacer for fixed navbar */}

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 py-16 pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 max-w-2xl">
                         <h1
               className="text-3xl md:text-6xl lg:text-7xl font-black font-['DM_Sans'] leading-tight mb-6"
               style={{
                 fontFamily: '"DM Sans"',
                 fontSize: 'clamp(36px, 9vw, 72.995px)',
                 fontStyle: 'normal',
                 fontWeight: 900,
                 lineHeight: 'clamp(34px, 8.5vw, 67.686px)',
               }}
             >
              <span className="text-white">{t.aboutUsMain.hero.title.innovative}</span>{" "}
              <span className="bg-[linear-gradient(90deg,_#1225B9_0%,_#DE19BA_100%)] bg-clip-text text-transparent">{t.aboutUsMain.hero.title.outstanding}</span>{" "}
              <span className="bg-[linear-gradient(90deg,_#1225B9_0%,_#DE19BA_100%)] bg-clip-text text-transparent">{t.aboutUsMain.hero.title.results}</span>
            </h1>
            <p
              className="text-white text-lg leading-relaxed mb-8 max-w-xl"
              style={{
                fontFamily: 'Inter',
                fontSize: '17.093px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24.086px',
              }}
            >
              {t.aboutUsMain.hero.description}
            </p>
            <a href="https://wa.me/201022668840" target="_blank" rel="noopener noreferrer">
              <Button className="relative px-8 py-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-[10px] hover:bg-white/25 hover:border-white/30 active:bg-white/30 transition-all duration-500 ease-out shadow-[0px_0px_8px_4px_rgba(255,255,255,0.15)_inset] hover:shadow-[0px_0px_20px_8px_rgba(255,255,255,0.25)_inset,0px_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group overflow-hidden">
                {/* Subtle shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
                <span className="relative text-white text-base font-medium mr-3 group-hover:text-white/95 transition-colors duration-300">{t.aboutUsMain.hero.button}</span>
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
          <div className="flex-1">
            <img
              src={aboutUsImg}
              alt="cube-helix"
              className="w-full max-w-lg mx-auto md:mx-auto translate-x-1/2 md:translate-x-0"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 py-16">
                  <h2
                  className="text-xl font-bold text-center text-white mb-10"
                  style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '20.923px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '34px',
                    letterSpacing: '-0.002px',
                  }}
                >
                  {t.aboutUsMain.companies.title}
                </h2>        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-16">
          {[
            al_rehab_development,
            babel,
            elmassa,
            ihome,
            plaza_strip,
            remax,
            villarose,
            zodiac,
          ].map((src, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-1 w-full h-[110px] p-4 rounded-2xl border border-gray-400/50 bg-gray-400/0 hover:bg-gray-400/10 transition-colors"
            >
              <img
                src={src}
                alt={`Partner ${index + 1}`}
                className="max-w-full h-12 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </section>

      {/* About Sections */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 py-16">
        <div className="space-y-8">
          {/* Our Story */}
          <div className="border-b border-white/20 pb-4">
            <button
              onClick={() => toggleSection("story")}
              className="group flex items-center justify-between w-full text-left p-4 -m-4 rounded-xl transition-all duration-300 hover:bg-white/[0.03]"
            >
              <h2 className="text-3xl font-normal text-white transition-colors duration-300 group-hover:bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text group-hover:text-transparent">
                {t.aboutUsMain.sections.story.title}
              </h2>
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/50 transition-all duration-300 group-hover:border-white group-hover:bg-white/10 group-hover:scale-105">
                <svg
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    expandedSection === "story" ? "rotate-90" : "rotate-0"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" />
                </svg>
              </div>
            </button>
            {expandedSection === "story" && (
              <div className="mt-6 text-white/80 leading-relaxed pl-4">
                <p>
                  {t.aboutUsMain.sections.story.content}
                </p>
              </div>
            )}
          </div>

          {/* Our Vision */}
          <div className="border-b border-white/20 pb-4">
            <button
              onClick={() => toggleSection("vision")}
              className="group flex items-center justify-between w-full text-left p-4 -m-4 rounded-xl transition-all duration-300 hover:bg-white/[0.03]"
            >
              <h2 className="text-3xl font-normal text-white transition-colors duration-300 group-hover:bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text group-hover:text-transparent">
                {t.aboutUsMain.sections.vision.title}
              </h2>
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/50 transition-all duration-300 group-hover:border-white group-hover:bg-white/10 group-hover:scale-105">
                <svg
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    expandedSection === "vision" ? "rotate-90" : "rotate-0"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" />
                </svg>
              </div>
            </button>
            {expandedSection === "vision" && (
              <div className="mt-6 text-white/80 leading-relaxed pl-4">
                <p>
                  {t.aboutUsMain.sections.vision.content}
                </p>
              </div>
            )}
          </div>

          {/* Our Mission */}
          <div className="border-b border-white/20 pb-4">
            <button
              onClick={() => toggleSection("mission")}
              className="group flex items-center justify-between w-full text-left p-4 -m-4 rounded-xl transition-all duration-300 hover:bg-white/[0.03]"
            >
              <h2 className="text-3xl font-normal text-white transition-colors duration-300 group-hover:bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text group-hover:text-transparent">
                {t.aboutUsMain.sections.mission.title}
              </h2>
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/50 transition-all duration-300 group-hover:border-white group-hover:bg-white/10 group-hover:scale-105">
                <svg
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    expandedSection === "mission" ? "rotate-90" : "rotate-0"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" />
                </svg>
              </div>
            </button>
            {expandedSection === "mission" && (
              <div className="mt-6 text-white/80 leading-relaxed pl-4">
                <p>
                  {t.aboutUsMain.sections.mission.content}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 relative">
              <img
                src={astronautImg}
                alt="Why choose us"
                className="w-full rounded-3xl"
                loading="lazy"
                decoding="async"
              />
              {/* Text overlay on the image */}
              <div className="absolute inset-0  rounded-3xl flex items-end justify-start">
                <div className="text-left p-6 m-4 rounded-2xl border border-white/20 shadow-2xl" style={{ background: 'rgba(16, 16, 16, 0.32)', backdropFilter: 'blur(7.137087345123291px)' }}>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {t.aboutUsMain.whyChooseUs.seeTeam.title}
                  </h3>
                  <div className="text-white/90 text-sm md:text-base font-medium max-w-sm leading-relaxed space-y-0.5 mb-4">
                    <p>{t.aboutUsMain.whyChooseUs.seeTeam.description[0]}</p>
                    <p>{t.aboutUsMain.whyChooseUs.seeTeam.description[1]}</p>
                    <p>{t.aboutUsMain.whyChooseUs.seeTeam.description[2]}</p>
                    <p>{t.aboutUsMain.whyChooseUs.seeTeam.description[3]}</p>
                    <p>{t.aboutUsMain.whyChooseUs.seeTeam.description[4]}</p>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#000] hover:bg-[#1a1a1a] hover:scale-105 transition-all duration-300 ease-in-out border-0"
                      onClick={() => navigate('/team')}
                    >
                      <svg
                        className="w-5 h-5 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                <span className="text-white">{t.aboutUsMain.whyChooseUs.heading.part1} </span>
                <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
                  {t.aboutUsMain.whyChooseUs.heading.part2}
                </span>
                <span className="text-white"> {t.aboutUsMain.whyChooseUs.heading.part3}</span>
              </h2>
              <p
                className="text-white/80 text-lg leading-relaxed mb-8"
                style={{
                  color: '#FFF',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'Inter',
                  fontSize: '16.058px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '150%',
                }}
              >
                {t.aboutUsMain.whyChooseUs.description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <h3
                      className="text-xl font-medium text-white"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '19.508px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                      }}
                    >
                      {t.aboutUsMain.whyChooseUs.features[0]}
                    </h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <h3
                      className="text-xl font-medium text-white"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '19.508px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                      }}
                    >
                      {t.aboutUsMain.whyChooseUs.features[1]}
                    </h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <h3
                      className="text-xl font-medium text-white"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '19.508px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                      }}
                    >
                      {t.aboutUsMain.whyChooseUs.features[2]}
                    </h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <h3
                      className="text-xl font-medium text-white"
                      style={{
                        fontFamily: 'Inter',
                        fontSize: '19.508px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: 'normal',
                      }}
                    >
                      {t.aboutUsMain.whyChooseUs.features[3]}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

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