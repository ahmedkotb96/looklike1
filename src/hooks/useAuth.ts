import { useState, useEffect } from 'react';
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';

interface AuthState {
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
}

const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isAdmin: false,
    isLoading: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const token = await user.getIdTokenResult();
          setAuthState({
            isAuthenticated: true,
            isAdmin: !!token.claims.admin,
            isLoading: false,
          });
        } catch (error) {
          console.error('Error getting token claims:', error);
          setAuthState({
            isAuthenticated: false,
            isAdmin: false,
            isLoading: false,
          });
        }
      } else {
        setAuthState({
          isAuthenticated: false,
          isAdmin: false,
          isLoading: false,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return authState;
};

export default useAuth;
