import { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, useLocation, Link } from 'react-router-dom';
import { auth } from '@/firebase';
import { checkRateLimit, recordLoginAttempt } from '@/utils/security';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { ArrowLeft, LayoutDashboard, Users, Briefcase, Palette, Megaphone, Clapperboard, MonitorPlay, LogOut } from 'lucide-react';

// Import the actual management components
import AdminTeam from './AdminTeam';
import AdminPortfolio from './AdminPortfolio';
import AdminBranding from './AdminBranding';
import AdminSocialMediaManagement from './AdminSocialMediaManagement';
import AdminMediaProduction from './AdminMediaProduction';
import AdminOutdoorAdvertising from './AdminOutdoorAdvertising';

// A reusable back button for sub-pages
const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/admin' || location.pathname === '/admin/') {
      return null;
  }

  return (
    <button
      onClick={() => navigate('/admin')}
      className="flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-slate-600 bg-white rounded-lg shadow-sm hover:bg-slate-50 transition-colors"
    >
      <ArrowLeft size={16} />
      Back to Dashboard
    </button>
  );
};

// Component for a single dashboard card
const DashboardCard = ({ to, icon: Icon, title, description }: { to: string; icon: React.ElementType; title: string; description: string; }) => {
    return (
        <Link to={to} className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-slate-200">
            <div>
                <Icon className="h-8 w-8 text-indigo-500 mb-3 group-hover:text-indigo-600 transition-colors" />
                <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
                <p className="mt-1 text-sm text-slate-500">{description}</p>
            </div>
            <div className="mt-4 text-sm font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors flex items-center gap-2">
                Manage
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
        </Link>
    );
};

// The main grid of management options
const DashboardOverview = () => {
    const managementPages = [
        { to: '/admin/team', icon: Users, title: 'Team Members', description: 'Add, edit, and reorder team profiles.' },
        { to: '/admin/portfolio', icon: Briefcase, title: 'Portfolio', description: 'Showcase your best projects and case studies.' },
        { to: '/admin/branding', icon: Palette, title: 'Branding', description: 'Manage brand assets and visual guidelines.' },
        { to: '/admin/social-media', icon: Megaphone, title: 'Social Media', description: 'Organize social media campaign content.' },
        { to: '/admin/media-production', icon: Clapperboard, title: 'Media Production', description: 'Manage video, image, and audio assets.' },
        { to: '/admin/outdoor-ads', icon: MonitorPlay, title: 'Outdoor Ads', description: 'Handle outdoor advertising campaigns.' },
    ];
    return (
        <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Welcome, Admin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {managementPages.map(page => <DashboardCard key={page.to} {...page} />)}
            </div>
        </div>
    );
};

// Component that defines all the admin routes
const AdminRoutes = () => {
  return (
    <>
      <BackButton />
      <Routes>
        <Route path="/" element={<DashboardOverview />} />
        <Route path="/team" element={<AdminTeam />} />
        <Route path="/portfolio" element={<AdminPortfolio />} />
        <Route path="/branding" element={<AdminBranding />} />
        <Route path="/social-media" element={<AdminSocialMediaManagement />} />
        <Route path="/media-production" element={<AdminMediaProduction />} />
        <Route path="/outdoor-ads" element={<AdminOutdoorAdvertising />} />
      </Routes>
    </>
  );
};

// Main Admin Component: Handles Auth and Layout
const AdminDashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);
    const [loginLoading, setLoginLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
            setAuthLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginLoading(true);
        setError('');
        
        // Check rate limiting
        if (!checkRateLimit(email)) {
            setError('Too many login attempts. Please try again later.');
            setLoginLoading(false);
            return;
        }

        try {
            // Record the login attempt
            recordLoginAttempt(email);
            await signInWithEmailAndPassword(auth, email, password);
        }  finally {
            setLoginLoading(false);
        }
    };
    
    if (authLoading) {
        return <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500">Authenticating...</div>;
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md animate-fade-in">
                    <h2 className="text-3xl font-bold mb-2 text-center text-slate-800">Admin Panel</h2>
                    <p className="text-center text-slate-500 mb-6">Please sign in to continue</p>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-slate-700 text-sm font-semibold mb-2">Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" placeholder="admin@example.com" required />
                        </div>
                        <div>
                            <label className="block text-slate-700 text-sm font-semibold mb-2">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" placeholder="••••••••" required />
                        </div>
                        {error && <p className="text-sm text-red-600">{error}</p>}
                        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:bg-indigo-400 transition-all" disabled={loginLoading}>
                            {loginLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-4">
                            <LayoutDashboard className="h-6 w-6 text-indigo-600"/>
                            <h1 className="text-xl font-bold text-slate-800">Admin Dashboard</h1>
                        </div>
                        <button onClick={() => signOut(auth)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                            <LogOut size={16} />
                            Logout
                        </button>
                    </div>
                </div>
            </header>
    
            <main className="max-w-screen-xl mx-auto py-10 sm:px-6 lg:px-8">
                <AdminRoutes />
            </main>
        </div>
    );
};

export default AdminDashboard;