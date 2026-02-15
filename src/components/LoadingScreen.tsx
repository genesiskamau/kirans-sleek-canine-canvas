import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 200);
          return 100;
        }
        return prev + 10;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center">
      <div className="mb-8">
        <img 
          src="/lovable-uploads/e809515a-f089-4ecc-8f2c-98fc7069cd50.png" 
          alt="Kirangi Dogs" 
          className="w-20 h-20 rounded-full"
        />
      </div>
      <div className="w-48 h-0.5 bg-border rounded-full overflow-hidden">
        <div 
          className="h-full bg-secondary rounded-full transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
