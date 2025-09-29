import DOMPurify from 'dompurify';

// Password validation
export const validatePassword = (password: string): boolean => {
  const minLength = 8;
  const hasNumber = /\d/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);
  
  return password.length >= minLength && hasNumber && hasUpper && hasLower && hasSpecial;
};

// Rate limiting for login attempts
interface LoginAttempt {
  count: number;
  lastAttempt: number;
}

const loginAttempts = new Map<string, LoginAttempt>();
const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME = 15 * 60 * 1000; // 15 minutes

export const checkRateLimit = (email: string): boolean => {
  const now = Date.now();
  const attempts = loginAttempts.get(email);
  
  if (attempts && attempts.count >= MAX_ATTEMPTS) {
    if (now - attempts.lastAttempt < LOCKOUT_TIME) {
      return false;
    }
    loginAttempts.delete(email);
  }
  
  return true;
};

export const recordLoginAttempt = (email: string): void => {
  const now = Date.now();
  const attempts = loginAttempts.get(email) || { count: 0, lastAttempt: now };
  loginAttempts.set(email, {
    count: attempts.count + 1,
    lastAttempt: now
  });
};

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // No HTML allowed
    ALLOWED_ATTR: [] // No attributes allowed
  });
};

// URL validation
export const validateImageUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    const allowedDomains = [
      'firebasestorage.googleapis.com',
      'storage.googleapis.com'
    ];
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    
    const domain = parsed.hostname;
    const extension = parsed.pathname.toLowerCase().slice(parsed.pathname.lastIndexOf('.'));
    
    return allowedDomains.includes(domain) && allowedExtensions.includes(extension);
  } catch {
    return false;
  }
};
