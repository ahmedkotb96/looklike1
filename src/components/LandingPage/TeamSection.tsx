import { useState } from "react";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Hassan Edrees",
      role: "Ceo & Founder",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/576e7c0b0283afbfa317a844ee0811899d25d736",
      overlay:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/32ae49fcdfe1d9046e59961e283ad55fefdbaf4e",
    },
    {
      id: 2,
      name: "Ahmed Hamada",
      role: "General Manager",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 3,
      name: "Muaaz Negm",
      role: "Graphic Designer",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/230c1561be57e20ee3576f8154103af5702f2616",
      overlay:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0615ff0641a2e09af20ea0b1ba57d7322d7cf2f8",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length,
    );
  };

  return (
    <section id="team" className="relative py-24 bg-black overflow-hidden">
      {/* Background decorative image */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 z-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/caa312e9412591d989bff3d9fae95d508f4290ef"
          alt="3D decorative element"
          className="w-[517px] h-[517px] object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[47px] font-bold mb-6">
            <span className="text-white">Meet Our </span>
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent">
              Creative Team
            </span>
          </h2>
        </div>

        {/* Team Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Previous Button */}
          <Button 
            onClick={prevSlide}
            className="absolute left-4 md:left-24 lg:left-32 top-1/2 -translate-y-1/2 group w-16 h-16 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex items-center justify-center z-20"
          >
            <svg
              className="w-4 h-6 text-[#14142B] group-hover:text-white transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 15 25"
            >
              <path d="M14.0868 1.21105C13.7709 0.895084 13.3838 0.737101 12.9256 0.737101C12.4675 0.737101 12.0804 0.895084 11.7645 1.21105L1.74033 11.2589C1.40856 11.5907 1.24268 11.9738 1.24268 12.4082C1.24268 12.8427 1.40856 13.2258 1.74033 13.5576L11.7645 23.6054C12.0804 23.9214 12.4675 24.0793 12.9256 24.0793C13.3838 24.0793 13.7709 23.9214 14.0868 23.6054C14.4028 23.2894 14.5608 22.9063 14.5608 22.4561C14.5608 22.0058 14.4028 21.6227 14.0868 21.3067L5.2002 12.4201L14.0868 3.53343C14.4028 3.21746 14.5608 2.8304 14.5608 2.37224C14.5608 1.91409 14.4028 1.52702 14.0868 1.21105Z" />
            </svg>
          </Button>

          {/* Team Cards Container */}
          <div className="flex gap-6 justify-center items-center overflow-hidden w-full max-w-4xl mx-auto">
            {teamMembers.map((member, index) => {
              return (
                <div
                  key={member.id}
                  className={`w-full md:w-[331px] h-[400px] md:h-[538px] relative flex-shrink-0 transition-all duration-500 ${
                    index === currentSlide ? "block" : "hidden"
                  }`}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />

                  {/* Overlay Image (if exists) */}
                  {member.overlay && (
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${member.overlay})` }}
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg" />

                  {/* Content */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-white text-lg font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <Button 
            onClick={nextSlide}
            className="absolute right-4 md:right-24 lg:right-32 top-1/2 -translate-y-1/2 group w-16 h-16 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex items-center justify-center z-20"
          >
            <svg
              className="w-4 h-6 text-[#14142B] group-hover:text-white transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 15 25"
            >
              <path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" />
            </svg>
          </Button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-6 h-6 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gradient-to-r from-[#1225B9] to-[#FF2DF7]"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
