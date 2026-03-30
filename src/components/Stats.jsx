import React, { useState, useEffect, useRef } from 'react';

function Stats() {
  const [activeUsers, setActiveUsers] = useState(0);
  const [premiumTools, setPremiumTools] = useState(0);
  const [rating, setRating] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const targetActive = 50;
    const targetTools = 200;
    const targetRating = 4.9;
    const duration = 2000; // milliseconds
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic for smoother animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setActiveUsers(Math.floor(targetActive * easeOut));
      setPremiumTools(Math.floor(targetTools * easeOut));
      setRating(targetRating * easeOut);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Ensure final values are exactly set
        setActiveUsers(targetActive);
        setPremiumTools(targetTools);
        setRating(targetRating);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="bg-violet-600 px-[5%] py-9 grid grid-cols-3 text-center">
      <div>
        <div className="text-4xl font-extrabold text-white">
          {activeUsers}K+
        </div>
        <div className="text-violet-200 text-sm mt-1">Active Users</div>
      </div>
      <div className="border-l border-violet-400">
        <div className="text-4xl font-extrabold text-white">
          {premiumTools}+
        </div>
        <div className="text-violet-200 text-sm mt-1">Premium Tools</div>
      </div>
      <div className="border-l border-violet-400">
        <div className="text-4xl font-extrabold text-white">
          {rating.toFixed(1)}
        </div>
        <div className="text-violet-200 text-sm mt-1">Rating</div>
      </div>
    </div>
  );
}

export default Stats;