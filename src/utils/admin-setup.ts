import { auth } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const createAdminUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Note: You'll need to set the custom claims using Firebase Functions or your backend
    // as it cannot be done directly from the client side
    return userCredential.user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unknown error occurred during admin user creation');
  }
};

// Function to check if current user is admin
export const isUserAdmin = async () => {
  const user = auth.currentUser;
  if (!user) return false;
  
  const idTokenResult = await user.getIdTokenResult();
  return !!idTokenResult.claims.admin;
};
