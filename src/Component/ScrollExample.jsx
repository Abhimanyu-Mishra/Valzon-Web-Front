import React, { useState } from 'react';

const ScrollExample = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  const handleScroll = (e) => {
    // Detect scroll direction
    const newScrollDirection = e.deltaY > 0 ? 'down' : 'up';

    // Update state with scroll direction
    setScrollDirection(newScrollDirection);
  };

  return (
    <div
      onWheel={handleScroll}
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        // Apply styles based on scroll direction
        color: scrollDirection === 'up' ? 'green' : 'red',
      }}
    >
      Scroll me!
    </div>
  );
};

export default ScrollExample;
