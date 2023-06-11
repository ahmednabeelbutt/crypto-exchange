import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div data-testid='banner-test' className="banner">
      <h1>Welcome to Crypto Exchange!</h1>
      <p>Discover amazing coins and blogs.</p>
      <Link to="/my-coins">
        <button className="banner-button">Go to My Coins</button>
      </Link>
    </div>
  );
};

export default Banner;
