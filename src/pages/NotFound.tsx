import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 for analytics
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Update page title for SEO
    document.title = "Page Not Found | Kirangi Dogs Kennel";
    
    // Add meta robots noindex for 404 pages
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);
    
    return () => {
      // Cleanup meta tag
      const existingMeta = document.querySelector('meta[name="robots"][content="noindex, nofollow"]');
      if (existingMeta) {
        document.head.removeChild(existingMeta);
      }
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="text-6xl font-bold text-amber-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist. You might have mistyped the URL or the page may have been moved.
        </p>
        <div className="space-y-3">
          <Link 
            to="/" 
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
          >
            Return to Home
          </Link>
          <div className="text-sm text-gray-500">
            <p>Looking for our services? Visit our <Link to="/#services" className="text-amber-600 hover:underline">services page</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
