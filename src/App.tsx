import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactPage from "@/pages/Contact";
import AdminDashboard from "@/pages/Admin";
import AdminPortfolio from "@/pages/AdminPortfolio";
import AdminTeam from "./pages/AdminTeam";
import BrandingIdentityDesignPage from "@/components/LandingPage/BrandingIdentityDesign";
import AboutPage from "@/components/LandingPage/main/aboutUsMainSection";
import OurTeamPage from "@/components/LandingPage/main/ourTeamMain";
import MediaProductionPage from "@/components/LandingPage/MediaProduction";
import OutdoorAdvertisingPage from "@/components/LandingPage/OutdoorAdvertising";
import SocialMediaManagementPage from "@/components/LandingPage/socialMediaManagment";
import AdminBranding from "@/pages/AdminBranding";
import AdminSocialMediaManagement from "@/pages/AdminSocialMediaManagement";
import AdminMediaProduction from "@/pages/AdminMediaProduction";
import AdminOutdoorAdvertising from "@/pages/AdminOutdoorAdvertising";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useScrollToTop();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/team" element={<ProtectedRoute><AdminTeam /></ProtectedRoute>} />
      <Route path="/admin/portfolio" element={<ProtectedRoute><AdminPortfolio /></ProtectedRoute>} />
      <Route path="/admin/branding" element={<ProtectedRoute><AdminBranding /></ProtectedRoute>} />
      <Route path="/admin/social-media" element={<ProtectedRoute><AdminSocialMediaManagement /></ProtectedRoute>} />
      <Route path="/admin/media-production" element={<ProtectedRoute><AdminMediaProduction /></ProtectedRoute>} />
      <Route path="/admin/outdoor-ads" element={<ProtectedRoute><AdminOutdoorAdvertising /></ProtectedRoute>} />
      <Route path="/branding-identity-design" element={<BrandingIdentityDesignPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/team" element={<OurTeamPage />} />
      <Route path="/media-production" element={<MediaProductionPage />} />
      <Route path="/outdoor-advertising" element={<OutdoorAdvertisingPage />} />
      <Route path="/social-media-management" element={<SocialMediaManagementPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Enhanced WhatsApp Sticky Icon Component with interactive animations
const WhatsAppStickyIcon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show icon after a brief delay for smooth entrance
    const timer = setTimeout(() => setIsVisible(true), 1000);
    
    // Add CSS keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes whatsapp-float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      .whatsapp-float { animation: whatsapp-float 3s ease-in-out infinite; }
    `;
    document.head.appendChild(style);

    return () => {
      clearTimeout(timer);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Add click effect
    const target = e.currentTarget as HTMLElement;
    target.style.transform = 'scale(0.95) rotate(5deg)';
    setTimeout(() => {
      target.style.transform = '';
    }, 150);
  };

  if (!isVisible) return null;

  const containerStyle: CSSProperties = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: 1000,
    cursor: 'pointer',
    opacity: isVisible ? 1 : 0,
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  };

  const buttonStyle: CSSProperties = {
    width: '60px',
    height: '60px',
    background: isHovered 
      ? 'linear-gradient(135deg, #2EE86C 0%, #16A085 100%)'
      : 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    boxShadow: isHovered 
      ? '0 15px 40px rgba(37, 211, 102, 0.6), 0 0 0 8px rgba(37, 211, 102, 0.2)'
      : '0 8px 25px rgba(37, 211, 102, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    transform: isHovered ? 'scale(1.15) rotate(10deg)' : 'scale(1) rotate(0deg)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transformOrigin: 'center'
  };

  const iconStyle: CSSProperties = {
    width: '32px',
    height: '32px',
    fill: 'white',
    transform: isHovered ? 'scale(1.2) rotate(-10deg)' : 'scale(1) rotate(0deg)',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    filter: isHovered 
      ? 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
      : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
  };

  const tooltipStyle: CSSProperties = {
    position: 'absolute',
    right: '70px',
    top: '50%',
    transform: isHovered 
      ? 'translateY(-50%) translateX(-5px) scale(1)'
      : 'translateY(-50%) translateX(10px) scale(0.8)',
    background: 'linear-gradient(135deg, #333 0%, #555 100%)',
    color: 'white',
    padding: '10px 16px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    opacity: isHovered ? 1 : 0,
    visibility: isHovered ? 'visible' : 'hidden',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const tooltipArrowStyle: CSSProperties = {
    position: 'absolute',
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 0,
    height: 0,
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent',
    borderLeft: '8px solid #333',
    filter: 'drop-shadow(2px 0 4px rgba(0, 0, 0, 0.2))'
  };

  return (
    <div 
      className="whatsapp-float"
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href="https://wa.me/201022668840" 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={handleClick}
        style={buttonStyle}
      >
        <svg 
          viewBox="0 0 24 24"
          style={iconStyle}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
        </svg>
        
        <div style={tooltipStyle}>
          💬 Chat with us!
          <div style={tooltipArrowStyle}></div>
        </div>
      </a>
    </div>
  );
};

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <AppRoutes />
      {!isAdminRoute && <WhatsAppStickyIcon />}
    </div>
  );
};

const AppWithRouter = () => {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={base}>
          <App />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default AppWithRouter;