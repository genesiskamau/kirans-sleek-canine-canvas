import { useState, useEffect } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        
        // Update phase based on progress
        const newProgress = prev + 1.5;
        if (newProgress > 25 && currentPhase === 0) setCurrentPhase(1);
        if (newProgress > 50 && currentPhase === 1) setCurrentPhase(2);
        if (newProgress > 75 && currentPhase === 2) setCurrentPhase(3);
        
        return newProgress;
      });
    }, 60);

    return () => clearInterval(progressTimer);
  }, [onComplete, currentPhase]);

  const phases = [
    { text: 'Initializing...', icon: Heart, color: 'text-blue-300' },
    { text: 'Loading Experience...', icon: Sparkles, color: 'text-purple-300' },
    { text: 'Preparing Interface...', icon: Star, color: 'text-yellow-300' },
    { text: 'Welcome!', icon: Heart, color: 'text-green-300' }
  ];

  const CurrentIcon = phases[currentPhase]?.icon || Heart;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500/10 rounded-full blur-2xl animate-glow-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        {/* Logo Container */}
        <div className="mb-12 relative">
          <div className="relative group">
            {/* Rotating ring */}
            <div className="absolute inset-0 w-32 h-32 border-2 border-white/20 rounded-full animate-spin" 
                 style={{ animationDuration: '3s' }} />
            <div className="absolute inset-2 w-28 h-28 border-2 border-white/10 rounded-full animate-spin" 
                 style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
            
            {/* Logo */}
            <div className="relative w-32 h-32 rounded-full p-6 overflow-hidden group-hover:scale-110 transition-transform duration-500">
              <img 
                src="/lovable-uploads/e809515a-f089-4ecc-8f2c-98fc7069cd50.png" 
                alt="Kirangi Dogs Logo" 
                className="w-full h-full rounded-full object-cover animate-glow-pulse"
              />
            </div>
            
            {/* Pulsing glow */}
            <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-lg animate-pulse" />
          </div>
        </div>

        {/* Brand Text */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent">
              Kirangi Dogs
            </span>
          </h1>
          <p className="text-xl text-white/80 font-light animate-fade-in-up animation-delay-300">
            Premium Kennel Experience
          </p>
        </div>

        {/* Progress Section */}
        <div className="w-80 max-w-sm mx-auto">
          {/* Phase Indicator */}
          <div className="flex items-center justify-center mb-6 animate-fade-in-up animation-delay-600">
            <CurrentIcon className={`w-6 h-6 mr-3 animate-pulse ${phases[currentPhase]?.color || 'text-white'}`} />
            <span className="text-white/90 text-lg font-medium">
              {phases[currentPhase]?.text || 'Loading...'}
            </span>
          </div>

          {/* Modern Progress Bar */}
          <div className="relative mb-6 animate-fade-in-up animation-delay-800">
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div 
                className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>
            
            {/* Progress percentage */}
            <div className="mt-2 text-center">
              <span className="text-white/60 text-sm font-mono">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Animated Elements */}
          <div className="flex justify-center space-x-1 animate-fade-in-up animation-delay-1000">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white/20 animate-fade-in" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-white/20 animate-fade-in animation-delay-200" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-white/20 animate-fade-in animation-delay-400" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white/20 animate-fade-in animation-delay-600" />
    </div>
  );
};

export default LoadingScreen;