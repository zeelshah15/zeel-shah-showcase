import { useEffect, useState } from 'react';

const SpotlightEffect = () => {
  const [spotlights, setSpotlights] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    // Initial spotlight on page load
    const initialSpotlight = {
      id: Date.now(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    };
    setSpotlights([initialSpotlight]);

    // Create interval for random spotlights
    const interval = setInterval(() => {
      const newSpotlight = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };
      
      setSpotlights(prev => [...prev, newSpotlight]);
      
      // Remove spotlight after animation completes
      setTimeout(() => {
        setSpotlights(prev => prev.filter(s => s.id !== newSpotlight.id));
      }, 3000);
    }, 8000); // Create new spotlight every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="spotlight-container">
      {spotlights.map(spotlight => (
        <div
          key={spotlight.id}
          className="spotlight"
          style={{
            left: `${spotlight.x}px`,
            top: `${spotlight.y}px`,
          }}
        />
      ))}
    </div>
  );
};

export default SpotlightEffect;