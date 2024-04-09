import React from 'react';

const Header = () => {
  return (
    <div>
       <div className="text-center mb-3">
        <h1 className="font-weight-bold display-2 text-dark mb-0" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Bite Bliss</h1>
      </div>
      <div className="text-center">
        <p className="font-italic font-weight-light text-muted mb-0" style={{ fontFamily: 'cursive', fontSize: '0.9rem' }}>Discover Culinary Magic</p>
      </div>
    </div>
  );
};

export default Header;
