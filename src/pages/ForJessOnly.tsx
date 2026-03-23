import { useState, useRef, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";

const PASSWORD = "Jecinta";

const ForJessOnly = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [stage, setStage] = useState<"ask" | "no-escape" | "yes">("ask");
  const [noCount, setNoCount] = useState(0);
  const noBtnRef = useRef<HTMLButtonElement>(null);

  const handlePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setAuthenticated(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  };

  const evadeButton = () => {
    if (!noBtnRef.current) return;
    const btn = noBtnRef.current;
    const maxX = window.innerWidth - btn.offsetWidth - 20;
    const maxY = window.innerHeight - btn.offsetHeight - 20;
    btn.style.position = "fixed";
    btn.style.left = `${Math.random() * maxX}px`;
    btn.style.top = `${Math.random() * maxY}px`;
    btn.style.zIndex = "50";
    setNoCount((c) => c + 1);
    if (noCount >= 4) setStage("no-escape");
  };

  const funnyMessages = [
    "Are you sure? 🥺",
    "Think again! 💔",
    "You can't escape love! 😤",
    "Nice try! 😏",
    "The button has a mind of its own! 🏃‍♂️",
  ];

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <form
          onSubmit={handlePassword}
          className="bg-card border border-border rounded-2xl p-8 max-w-sm w-full text-center space-y-4"
        >
          <Heart className="w-10 h-10 text-pink-500 mx-auto animate-pulse" />
          <h1 className="text-xl font-bold text-foreground">Private Page 🔒</h1>
          <p className="text-muted-foreground text-sm">Enter the password to continue</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-muted border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Password"
          />
          {error && <p className="text-destructive text-sm">Wrong password 💀</p>}
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-lg py-2 font-semibold transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  if (stage === "yes") {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center space-y-6">
        <div className="relative">
          <Heart className="w-24 h-24 text-pink-500 animate-pulse" />
          <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-bounce" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Yaaay! 🎉💕
        </h1>
        <p className="text-xl text-pink-400 max-w-md">
          I knew you'd say yes! You just made me the happiest person ever! ❤️🥰
        </p>
        <div className="flex gap-2 flex-wrap justify-center text-4xl">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
              {["💖", "🌹", "💕", "✨", "🥰", "💗"][i % 6]}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (stage === "no-escape") {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center space-y-6">
        <img
          src="https://media.giphy.com/media/BEob5qhfSwQcd8TGXE/giphy.gif"
          alt="Cute animal"
          className="w-48 h-48 rounded-2xl object-cover"
        />
        <h2 className="text-2xl font-bold text-foreground">There's no escape! 😏</h2>
        <p className="text-muted-foreground">Just say yes already...</p>
        <button
          onClick={() => setStage("yes")}
          className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors animate-pulse"
        >
          Fine... YES! 💕
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center space-y-8">
      <Heart className="w-16 h-16 text-pink-500 animate-pulse" />
      <h1 className="text-3xl md:text-5xl font-bold text-foreground">
        Will you be my Valentine? 💕
      </h1>
      {noCount > 0 && (
        <p className="text-pink-400 text-lg animate-bounce">
          {funnyMessages[Math.min(noCount - 1, funnyMessages.length - 1)]}
        </p>
      )}
      <div className="flex gap-6">
        <button
          onClick={() => setStage("yes")}
          className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
        >
          Yes! 💖
        </button>
        <button
          ref={noBtnRef}
          onMouseEnter={evadeButton}
          onTouchStart={evadeButton}
          onClick={evadeButton}
          className="bg-muted text-muted-foreground px-8 py-3 rounded-full text-lg font-semibold transition-all"
        >
          No 😢
        </button>
      </div>
    </div>
  );
};

export default ForJessOnly;
