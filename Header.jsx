import React, { useState, useEffect } from "react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <header
      style={{
        backgroundImage: 'url(/path-to-image.jpg)',
        height: '300px',
        backgroundSize: 'cover',
        color: 'black',
        position: 'relative',
      }}
    >
      {/* Time and Date */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '20px',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
      >
        {currentTime}
      </div>

      {/* Title */}
      <h1 style={{ textAlign: 'center', paddingTop: '70px', fontSize: '3rem' }}>
        Daily News
      </h1>

      {/* Search Bar */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Search for news..."
          style={{
            width: '300px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />
      </div>
    </header>
  );
};

export default Header;
