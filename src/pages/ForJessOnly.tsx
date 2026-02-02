import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Sparkles, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForJessOnly = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [stage, setStage] = useState<"question" | "no-escape" | "yes">("question");
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);

  const correctPassword = "Jecinta";

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Wrong password! Try again 💔");
      setPassword("");
    }
  };
  const funnyNoMessages = [
    "Are you sure? 🥺",
    "Think again... 💔",
    "Really?! 😭",
    "My heart can't take this! 💀",
    "Fine, but look at this face... 🐕"
  ];

  const handleNoHover = () => {
    if (noAttempts < 3) {
      // Make the button run away on first 3 attempts
      const randomX = Math.random() * 200 - 100;
      const randomY = Math.random() * 200 - 100;
      setNoButtonPosition({ x: randomX, y: randomY });
      setNoAttempts(prev => prev + 1);
    }
  };

  const handleNoClick = () => {
    // After running away 3 times, go to no-escape page
    setStage("no-escape");
  };

  const handleYesClick = () => {
    setStage("yes");
  };

  // Password Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-red-900 to-pink-800 relative overflow-hidden">
        <Navigation />
        
        {/* Floating hearts background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-500/20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
              size={Math.random() * 40 + 20}
            />
          ))}
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-24">
          <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-md w-full border border-pink-500/30 shadow-2xl">
            <div className="text-center mb-8">
              <Lock className="w-16 h-16 text-pink-400 mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                🔒 Secret Page
              </h1>
              <p className="text-pink-200">
                This page is for someone special only! 💕
              </p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <label className="block text-pink-200 mb-2 text-sm">
                  Enter the secret password:
                </label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Type the password..."
                  className="bg-white/10 border-pink-400/30 text-white placeholder:text-pink-300/50 focus:border-pink-400"
                />
              </div>

              {error && (
                <p className="text-red-400 text-center animate-pulse">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-6 text-lg font-bold rounded-xl"
              >
                Enter 💖
              </Button>
            </form>

            <p className="text-center text-pink-300/60 text-sm mt-6">
              Hint: Her beautiful name 💕
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Question Stage - Main Valentine's proposal
  if (stage === "question") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-red-900 to-pink-800 relative overflow-hidden">
        <Navigation />
        
        {/* Floating hearts background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-500/20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 30 + 10}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
              size={Math.random() * 40 + 20}
            />
          ))}
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-24">
          {/* Valentine Cat Image */}
          <div className="mb-8 animate-bounce">
            <img 
              src="/lovable-uploads/valentine-cat.jpg" 
              alt="Will you be my Valentine?" 
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl border-4 border-pink-400/50"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center animate-pulse">
            Jess... 💕
          </h1>
          
          <p className="text-xl md:text-2xl text-pink-200 mb-12 text-center">
            Will you be my Valentine? 🥰
          </p>

          {/* Yes/No Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Button
              onClick={handleYesClick}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-2xl px-12 py-8 rounded-2xl shadow-xl hover:scale-110 transition-all duration-300 font-bold"
            >
              YES! 💖
            </Button>
            
            <Button
              onClick={handleNoClick}
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white text-xl px-8 py-6 rounded-2xl shadow-xl transition-all duration-300"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              {noAttempts > 0 ? funnyNoMessages[Math.min(noAttempts - 1, funnyNoMessages.length - 1)] : "No 😢"}
            </Button>
          </div>

          {noAttempts > 0 && noAttempts < 3 && (
            <p className="mt-8 text-pink-300 text-lg animate-bounce">
              The button is running away! Try to catch it! 😂
            </p>
          )}
        </div>

        <Footer />
      </div>
    );
  }

  // No Escape Stage - She MUST accept!
  if (stage === "no-escape") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-pink-900 to-purple-900 relative overflow-hidden">
        <Navigation />
        
        {/* Dramatic hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-red-500/30 animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 2 + 1}s`
              }}
              size={Math.random() * 30 + 15}
            />
          ))}
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-24">
          {/* Sad Donkey Image */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/donkey.jpg" 
              alt="Please say yes!" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl border-4 border-red-400/50 animate-pulse"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Wait... You can't say no! 😭
          </h1>
          
          <p className="text-xl text-pink-200 mb-4 text-center max-w-md">
            Look at that face! How can you resist?!
          </p>

          {/* Boxing Cat */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/boxing-cat.jpg" 
              alt="Fighting for love" 
              className="w-48 h-48 object-cover rounded-2xl shadow-xl border-2 border-pink-400/30"
            />
            <p className="text-center text-pink-300 mt-2 text-sm">
              I'll fight for your love! 🥊
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 max-w-lg text-center border border-pink-500/30">
            <p className="text-2xl text-white mb-6">
              There's only one option here... 💕
            </p>
            
            <p className="text-pink-300 mb-8 text-lg">
              "No" was never really an option anyway! 😏
            </p>

            <Button
              onClick={handleYesClick}
              className="bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 hover:from-pink-600 hover:via-red-600 hover:to-pink-700 text-white text-2xl px-16 py-8 rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300 font-bold animate-pulse"
            >
              Fine... YES! 💖🎉
            </Button>

            <p className="mt-6 text-pink-400 text-sm italic">
              (This is your only choice, bestie! 😂)
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Yes Stage - Celebration!
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-600 via-red-500 to-pink-700 relative overflow-hidden">
      <Navigation />
      
      {/* Celebration effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-yellow-300 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 1 + 0.5}s`
            }}
            size={Math.random() * 20 + 10}
          />
        ))}
        {[...Array(30)].map((_, i) => (
          <Heart
            key={`heart-${i}`}
            className="absolute text-white/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
            size={Math.random() * 40 + 20}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-24">
        {/* Happy Dog with Flower */}
        <div className="mb-8 animate-bounce">
          <img 
            src="/lovable-uploads/dog-flower.jpg" 
            alt="Yay! She said yes!" 
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-8 border-white/50"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center animate-pulse">
          YAAAY! 🎉💖🎉
        </h1>
        
        <p className="text-2xl md:text-3xl text-white mb-8 text-center">
          She said YES! 🥳
        </p>

        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-lg text-center border border-white/30 shadow-2xl">
          <p className="text-xl md:text-2xl text-white mb-4">
            Happy Valentine's Day, Jess! 💕
          </p>
          <p className="text-lg text-pink-100">
            You're officially my Valentine! 🌹✨
          </p>
          <p className="mt-6 text-pink-200 text-lg">
            I knew you'd make the right choice! 😏💖
          </p>
        </div>

        <div className="mt-12 flex gap-4 text-6xl animate-bounce">
          <span>💕</span>
          <span>🥰</span>
          <span>💕</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ForJessOnly;