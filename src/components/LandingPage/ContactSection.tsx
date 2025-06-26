import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-black min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #0917A5 52.73%, #1072FE 74.83%, #1225B9 96.19%)",
        }}
      />

      {/* Large circular background element */}
      <div
        className="absolute -left-96 bottom-0 w-[2191px] h-[794px] rounded-full border border-[#B1D0FF]/50"
        style={{
          background:
            "radial-gradient(45.38% 51.38% at 50% 50%, #000 82.2%, #1146D7 100%)",
        }}
      />

      {/* Background decorative image */}
      <div className="absolute -left-32 bottom-0 z-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a14be66bb588b6b2d22e87778ece4a66646d3dba"
          alt="3D decorative element"
          className="w-[517px] h-[517px] object-contain opacity-80"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[65px] lg:leading-tight font-bold mb-8">
            <span className="text-white">Why Choose Us for</span>
            <br />
            <span className="text-white">Your </span>
            <span className="bg-gradient-to-r from-[#142EF5] to-[#F41CCC] bg-clip-text text-transparent">
              Marketing
            </span>
            <span className="text-white"> Needs?</span>
          </h2>

          {/* Description */}
          <p className="text-white text-lg md:text-xl lg:text-[25px] lg:leading-[38px] mb-12 max-w-5xl mx-auto font-medium">
            At Looklike, we don't just market — we build success stories. With a
            mix of creativity, experience, and market insight, we craft powerful
            campaigns tailored to each brand. Our team is dedicated to
            delivering real results through smart, impactful advertising and
            marketing solutions.
          </p>

          {/* CTA Button */}
          <Button className="px-6 py-3 bg-white/10 border border-white/15 rounded-lg backdrop-blur-[7px] hover:bg-white/20 transition-all duration-300 shadow-[0px_0px_6px_3px_rgba(255,255,255,0.25)_inset] group">
            <span className="text-white text-sm mr-2">Get In Touch !</span>
            <svg
              className="w-4 h-3 text-white group-hover:translate-x-1 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M17.681 7.70853L11.2022 13.7067C10.9993 13.8945 10.7242 14 10.4373 14C10.1504 14 9.87529 13.8945 9.67243 13.7067C9.46958 13.5189 9.35561 13.2642 9.35561 12.9986C9.35561 12.733 9.46958 12.4783 9.67243 12.2905L14.3075 8.00094H1.07981C0.793429 8.00094 0.518775 7.89562 0.31627 7.70814C0.113766 7.52066 0 7.26638 0 7.00125C0 6.73611 0.113766 6.48184 0.31627 6.29436C0.518775 6.10688 0.793429 6.00156 1.07981 6.00156H14.3075L9.67423 1.70954C9.47137 1.52174 9.35741 1.26702 9.35741 1.00143C9.35741 0.735832 9.47137 0.481115 9.67423 0.293311C9.87709 0.105507 10.1522 2.7985e-09 10.4391 0C10.726 -2.7985e-09 11.0011 0.105507 11.204 0.293311L17.6828 6.29147C17.7835 6.38447 17.8634 6.49497 17.9178 6.61662C17.9722 6.73827 18.0002 6.86867 18 7.00035C17.9998 7.13202 17.9716 7.26236 17.9168 7.3839C17.8621 7.50543 17.782 7.61575 17.681 7.70853Z" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
