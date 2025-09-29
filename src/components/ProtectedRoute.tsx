import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '@/firebase';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          navigate('/admin');
          return;
        }
        
        const token = await user.getIdTokenResult();
        if (!token.claims.admin) {
          navigate('/');
        } else {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAdmin();
  }, [navigate]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAdmin) return null;
  
  return <>{children}</>;
};

export default ProtectedRoute;
