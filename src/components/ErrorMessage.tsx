import React, { useEffect } from 'react';
import { XCircle } from 'lucide-react';
import { sanitizeInput } from '@/utils/security';

interface ErrorMessageProps {
  message: string;
  onDismiss?: () => void;
  autoHideDuration?: number;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onDismiss,
  autoHideDuration = 5000
}) => {
  useEffect(() => {
    if (onDismiss && autoHideDuration > 0) {
      const timer = setTimeout(onDismiss, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [onDismiss, autoHideDuration]);

  const sanitizedMessage = sanitizeInput(message);

  return (
    <div className="rounded-md bg-red-50 p-4 mb-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircle className="h-5 w-5 text-red-400" />
        </div>
        <div className="ml-3">
          <p 
            className="text-sm text-red-700" 
            dangerouslySetInnerHTML={{ __html: sanitizedMessage }}
          />
        </div>
        {onDismiss && (
          <div className="ml-auto pl-3">
            <button
              onClick={onDismiss}
              className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100"
            >
              <span className="sr-only">Dismiss</span>
              <XCircle className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
