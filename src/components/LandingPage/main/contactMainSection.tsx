import { useNavigate } from "react-router-dom";
import Navigation from "@/components/LandingPage/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import bottomEclipse from "@/assets/ellipse_bottom.webp";
import looklikeLogo from "@/assets/looklike_logo.png";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="relative bg-black backdrop-blur-[7px] border-t border-white/10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
          <div className="flex-shrink-0 group">
            <img
              src={looklikeLogo}
              alt="Look Like Logo"
              className="h-16 w-auto transition-all duration-500 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(0,240,255,0.3)] group-hover:brightness-110"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <a href="#home" className="relative text-[#E6E6E6] text-sm transition-all duration-300 ease-out hover:text-white hover:scale-105 group overflow-hidden">
              <span className="relative z-10">Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#about" className="relative text-[#E6E6E6] text-sm transition-all duration-300 ease-out hover:text-white hover:scale-105 group overflow-hidden">
              <span className="relative z-10">About Us</span>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#services" className="relative text-[#E6E6E6] text-sm transition-all duration-300 ease-out hover:text-white hover:scale-105 group overflow-hidden">
              <span className="relative z-10">Services</span>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#portfolio" className="relative text-[#E6E6E6] text-sm transition-all duration-300 ease-out hover:text-white hover:scale-105 group overflow-hidden">
              <span className="relative z-10">Portfolio</span>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#team" className="relative text-[#E6E6E6] text-sm transition-all duration-300 ease-out hover:text-white hover:scale-105 group overflow-hidden" onClick={e => { e.preventDefault(); navigate("/team"); }}>
              <span className="relative z-10">Our Team</span>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#contact" className="relative text-[#E6E6E6] text-sm transition-all duration-300 ease-out hover:text-white hover:scale-105 group overflow-hidden">
              <span className="relative z-10">Contact US</span>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>
        </div>
        <div className="h-[1px] w-full mb-8 relative overflow-hidden" style={{ background: "linear-gradient(267deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[shimmer_3s_ease-in_out_infinite]"></div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 pb-3 border-b border-[#262626] transition-all duration-300 group-hover:border-[#00F0FF]/50 group-hover:pb-4">
                <svg className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" viewBox="0 0 19 19" fill="none">
                  <defs>
                    <linearGradient id="emailGrad" x1="16.512" y1="0.312501" x2="-1.79137" y2="1.52154" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00F0FF" /><stop offset="0.482483" stopColor="#5200FF" /><stop offset="1" stopColor="#FF2DF7" />
                    </linearGradient>
                  </defs>
                  <path d="M1.625 7.00182V13.4375C1.625 14.6801 2.63236 15.6875 3.875 15.6875H15.125C16.3676 15.6875 17.375 14.6801 17.375 13.4375V7.00182L10.6792 11.1223C9.95605 11.5673 9.04395 11.5673 8.32078 11.1223L1.625 7.00182Z" fill="url(#emailGrad)" />
                  <path d="M17.375 5.68087V5.5625C17.375 4.31986 16.3676 3.3125 15.125 3.3125H3.875C2.63236 3.3125 1.625 4.31986 1.625 5.5625V5.68087L8.91039 10.1642C9.27197 10.3867 9.72803 10.3867 10.0896 10.1642L17.375 5.68087Z" fill="url(#emailGrad)" />
                </svg>
                <span className="text-[#E6E6E6] text-sm transition-all duration-300 group-hover:text-white group-hover:translate-x-1">info@looklike.adv</span>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 pb-3 border-b border-[#262626] transition-all duration-300 group-hover:border-[#5200FF]/50 group-hover:pb-4">
                <svg className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(82,0,255,0.5)]" viewBox="0 0 19 19" fill="none">
                  <defs>
                    <linearGradient id="phoneGrad" x1="16.512" y1="-2.19318" x2="-1.82185" y2="-1.24164" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00F0FF" /><stop offset="0.482483" stopColor="#5200FF" /><stop offset="1" stopColor="#FF2DF7" />
                    </linearGradient>
                  </defs>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.625 3.875C1.625 2.63236 2.63236 1.625 3.875 1.625H4.90372C5.549 1.625 6.11148 2.06417 6.26798 2.69018L7.09733 6.00757C7.23456 6.55647 7.02945 7.13416 6.57682 7.47364L5.6066 8.2013C5.50585 8.27686 5.48395 8.38751 5.51225 8.46476C6.36388 10.7896 8.21039 12.6361 10.5352 13.4877C10.6125 13.5161 10.7231 13.4941 10.7987 13.3934L11.5264 12.4232C11.8658 11.9705 12.4435 11.7654 12.9924 11.9027L16.3098 12.732C16.9358 12.8885 17.375 13.451 17.375 14.0963V15.125C17.375 16.3676 16.3676 17.375 15.125 17.375H13.4375C6.91364 17.375 1.625 12.0864 1.625 5.5625V3.875Z" fill="url(#phoneGrad)" />
                </svg>
                <span className="text-[#E6E6E6] text-sm transition-all duration-300 group-hover:text-white group-hover:translate-x-1">+971505045287</span>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 pb-3 border-b border-[#262626] transition-all duration-300 group-hover:border-[#FF2DF7]/50 group-hover:pb-4">
                <svg className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,45,247,0.5)]" viewBox="0 0 19 19" fill="none">
                  <defs>
                    <linearGradient id="locationGrad" x1="15.0094" y1="-1.49405" x2="0.591249" y2="-0.884273" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00F0FF" /><stop offset="0.482483" stopColor="#5200FF" /><stop offset="1" stopColor="#FF2DF7" />
                    </linearGradient>
                  </defs>
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.15481 17.2633C9.17746 17.2764 9.19527 17.2865 9.20788 17.2936L9.22882 17.3053C9.39597 17.3971 9.60332 17.3964 9.77063 17.3056L9.79212 17.2936C9.80473 17.2865 9.82254 17.2764 9.84519 17.2633C9.89049 17.237 9.95523 17.1988 10.0366 17.1486C10.1993 17.0484 10.4291 16.9007 10.7035 16.7068C11.2513 16.3198 11.9823 15.7456 12.7149 14.9955C14.173 13.5026 15.6875 11.2596 15.6875 8.375C15.6875 4.95774 12.9173 2.1875 9.5 2.1875C6.08274 2.1875 3.3125 4.95774 3.3125 8.375C3.3125 11.2596 4.82699 13.5026 6.28509 14.9955C7.01769 15.7456 7.74868 16.3198 8.29654 16.7068C8.57094 16.9007 8.80065 17.0484 8.96337 17.1486C9.04477 17.1988 9.10951 17.237 9.15481 17.2633ZM9.5 10.625C10.7426 10.625 11.75 9.61764 11.75 8.375C11.75 7.13236 10.7426 6.125 9.5 6.125C8.25736 6.125 7.25 7.13236 7.25 8.375C7.25 9.61764 8.25736 10.625 9.5 10.625Z" fill="url(#locationGrad)" />
                </svg>
                <span className="text-[#E6E6E6] text-sm transition-all duration-300 group-hover:text-white group-hover:translate-x-1">Dubai Investment Park - Dubai</span>
              </div>
            </div>
          </div>
          <div className="text-[#98989A] text-sm transition-all duration-300 hover:text-[#E6E6E6] hover:scale-105 cursor-default">
            © 2025 LookLike. All rights reserved.
          </div>
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </footer>
  );
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("nofz9hgHPlkSsJT2O");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const SERVICE_ID = "service_fxwfuki";
  const TEMPLATE_ID = "template_xpd7n0n";
  const USER_ID = "nofz9hgHPlkSsJT2O";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        USER_ID
      );
      
      if (result.status === 200) {
        setSuccess("Thank you for reaching out! We'll be in touch soon.");
        setForm({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSuccess("Sorry, there was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-black">
        <Navigation />
        {/* Section 1: Main Heading and Eclipse background */}
        <section
          id="contact-header"
          className="relative pt-40 pb-48 md:pt-48 md:pb-56 bg-black flex flex-col items-center justify-center overflow-hidden mb-24"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_#0917A5_52.73%,_#1072FE_99%,_#1225B9_96.19%)]">
            <img
              src={bottomEclipse}
              alt="Decorative Eclipse"
              className="absolute left-0 bottom-0 w-full h-auto z-10 translate-y-4 md:translate-y-24 lg:translate-y-56"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="text-center max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-[65px] lg:leading-tight font-bold mb-6 md:mb-8 text-white">
                Why Choose Us for
                <br />
                Your{" "}
                <span className="bg-gradient-to-r from-[#142EF5] to-[#F41CCC] bg-clip-text text-transparent">
                  Marketing
                </span>{" "}
                Needs?
              </h2>
              <p className="text-white text-lg md:text-xl lg:text-[25px] lg:leading-[38px] max-w-5xl mx-auto font-medium">
                At Looklike, we don't just market — we build success stories. With a
                mix of creativity, experience, and market insight, we craft powerful
                campaigns tailored to each brand. Our team is dedicated to
                delivering real results through smart, impactful advertising and
                marketing solutions.
              </p>
            </div>
          </div>
        </section>
        {/* Section 2: Contact Form */}
        <div id="contact-form" className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/20 rounded-2xl backdrop-blur-[10px] p-6 md:p-10 shadow-lg">
              {/* Introductory text for the contact form */}
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">Get in Touch</h3>
                <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
                  Interested in elevating your brand or have a business inquiry? Complete the form below, and our team will connect with you to discuss how we can help achieve your marketing goals.
                </p>
              </div>
              {/* Feedback messages */}
              {success && <div className="mb-4 text-green-400 text-center">{success}</div>}
              {/* Error feedback removed as error state is no longer used */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      className="bg-black/20 border-white/30 text-white placeholder:text-white/70 focus:border-[#F41CCC] focus:ring-[#F41CCC] rounded-lg w-full transition-colors duration-300 py-6"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <Input
             
             type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      className="bg-black/20 border-white/30 text-white placeholder:text-white/70 focus:border-[#142EF5] focus:ring-[#142EF5] rounded-lg w-full transition-colors duration-300 py-6"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <Textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Your Message"
                    className="bg-black/20 border-white/30 text-white placeholder:text-white/70 focus:border-white/50 focus:ring-white/50 rounded-lg w-full transition-colors duration-300"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    className="relative px-8 py-4 bg-gradient-to-r from-[#142EF5] to-[#F41CCC] text-white font-semibold rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out shadow-[0px_4px_24px_rgba(20,46,245,0.4),_0px_4px_24px_rgba(244,28,204,0.4)] group overflow-hidden w-full md:w-auto"
                    disabled={loading}
                  >
                    <span className="relative text-lg">{loading ? "Sending..." : "Send Message"}</span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Spacer to ensure content doesn't sit flush against the footer */}
        <div className="h-24 md:h-32 bg-black"></div>
      </div>
      <Footer />
    </>
  );
};

export default ContactSection;