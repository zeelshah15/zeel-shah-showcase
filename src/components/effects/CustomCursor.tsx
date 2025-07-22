import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail effect
      const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrails(prev => [...prev.slice(-5), newTrail]); // Keep last 5 trails
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    // Clean up old trails
    const timer = setTimeout(() => {
      setTrails(prev => prev.slice(1));
    }, 100);

    return () => clearTimeout(timer);
  }, [trails]);

  return (
    <>
      {/* Main cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      
      {/* Cursor trails */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="custom-cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: (index + 1) / trails.length * 0.5,
            transform: `scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;