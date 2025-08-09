import { useState, useEffect } from 'react';
import { PawPrint } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after initial delay
    const textTimer = setTimeout(() => setShowText(true), 500);

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 800); // Delay before hiding
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(textTimer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-hero flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 animate-float">
          <PawPrint className="w-8 h-8 text-white" />
        </div>
        <div className="absolute top-40 right-32 animate-float animation-delay-500">
          <PawPrint className="w-6 h-6 text-white" />
        </div>
        <div className="absolute bottom-32 left-40 animate-float animation-delay-1000">
          <PawPrint className="w-10 h-10 text-white" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float animation-delay-700">
          <PawPrint className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center text-white z-10">
        {/* Logo */}
        <div className="mb-8 animate-scale-in">
          <div className="relative">
            <img 
              src="/lovable-uploads/3eb3333d-5f52-4ded-87dd-83a308207920.png" 
              alt="Kirangi Dogs Logo" 
              className="w-24 h-24 mx-auto animate-glow-pulse bg-white/10 backdrop-blur-sm rounded-full p-3"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-spin"></div>
          </div>
        </div>

        {/* Text */}
        {showText && (
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2 animate-slide-in-left">
              Kirangi Dogs
            </h1>
            <p className="text-lg opacity-90 mb-8 animate-slide-in-right animation-delay-300">
              Premium Kennel Experience
            </p>
          </div>
        )}

        {/* Progress Bar */}
        <div className="w-64 mx-auto animate-fade-in-up animation-delay-600">
          <div className="bg-white/20 rounded-full h-2 mb-4 overflow-hidden backdrop-blur-sm">
            <div 
              className="bg-gradient-to-r from-white to-white/80 h-full rounded-full transition-all duration-300 ease-out animate-shimmer"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm opacity-75 animate-pulse">
            {progress < 30 ? 'Preparing...' : 
             progress < 60 ? 'Loading dogs...' : 
             progress < 90 ? 'Almost ready...' : 
             'Welcome!'}
          </p>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6 animate-fade-in animation-delay-1000">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-slide-in-right"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-slide-in-left"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;