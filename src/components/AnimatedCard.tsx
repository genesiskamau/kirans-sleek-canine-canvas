import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fade' | 'scale' | 'slide' | 'rotate' | 'float';
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  delay = 0,
  variant = 'fade'
}) => {
  const animationClasses = {
    fade: 'animate-fade-in-up',
    scale: 'animate-scale-in',
    slide: 'animate-slide-in-right',
    rotate: 'animate-rotate-in',
    float: 'animate-hover-float'
  };

  const delayClass = delay > 0 ? `animation-delay-${delay}` : '';

  return (
    <div 
      className={cn(
        'group transition-all duration-500 hover:scale-105 hover:shadow-float',
        animationClasses[variant],
        delayClass,
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden">
        {children}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>
    </div>
  );
};

export default AnimatedCard;