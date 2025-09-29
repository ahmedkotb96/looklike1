interface MediaValidationOptions {
  maxSize?: number; // in bytes
  allowedTypes?: string[];
  allowedDomains?: string[];
}

const DEFAULT_OPTIONS: MediaValidationOptions = {
  maxSize: 10 * 1024 * 1024, // 10MB default
  allowedTypes: [
    // Images
    '.jpg', '.jpeg', '.png', '.webp', '.gif',
    // Videos
    '.mp4', '.webm', '.ogg'
  ],
  allowedDomains: [
    'firebasestorage.googleapis.com',
    'storage.googleapis.com'
  ]
};

export async function validateMediaUrl(
  url: string,
  options: MediaValidationOptions = DEFAULT_OPTIONS
): Promise<{ valid: boolean; error?: string }> {
  try {
    const parsed = new URL(url);
    const { allowedDomains, allowedTypes, maxSize } = { ...DEFAULT_OPTIONS, ...options };
    
    // Check domain
    if (!allowedDomains?.includes(parsed.hostname)) {
      return { 
        valid: false, 
        error: 'Invalid domain. Please use an approved storage service.' 
      };
    }

    // Check file extension
    const extension = parsed.pathname.toLowerCase().slice(parsed.pathname.lastIndexOf('.'));
    if (!allowedTypes?.includes(extension)) {
      return { 
        valid: false, 
        error: `Invalid file type. Allowed types: ${allowedTypes?.join(', ')}` 
      };
    }

    // Check file size
    if (maxSize) {
      try {
        const response = await fetch(url, { method: 'HEAD' });
        const size = parseInt(response.headers.get('content-length') || '0');
        if (size > maxSize) {
          return {
            valid: false,
            error: `File too large. Maximum size: ${Math.round(maxSize / 1024 / 1024)}MB`
          };
        }
      } catch {
        // If we can't check size, we'll assume it's okay but log a warning
        console.warn('Could not verify file size for:', url);
      }
    }

    return { valid: true };
  } catch {
    return { valid: false, error: 'Invalid URL format' };
  }
}
