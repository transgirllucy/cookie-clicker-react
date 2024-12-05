import React, { useState } from 'react';
import './CookieClicker.css';

export const CookieClicker: React.FC = () => {
  const [cookies, setCookies] = useState<number>(0);
  const [clickValue, setClickValue] = useState<number>(1);
  const [upgrades, setUpgrades] = useState<number>(0);

  const handleCookieClick = () => {
    setCookies(cookies + clickValue);
  };

  const buyUpgrade = (quantity: number) => {
    const cost = 10 * Math.pow(2, upgrades) * quantity;
    if (cookies >= cost) {
      setCookies(cookies - cost);
      setClickValue(clickValue + quantity);
      setUpgrades(upgrades + quantity);
    } else {
      alert('Not enough cookies!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Cookie Clicker</h1>
      <h2>Cookies: {cookies}</h2>
      <div className="cookie-container">
        <span className="cookie" onClick={handleCookieClick}>
          🍪
        </span>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Upgrade Click Value</h3>
        <p>Current Click Value: {clickValue}</p>
        <p>Cost for 1 Upgrade: {10 * Math.pow(2, upgrades)} cookies</p>
        <button onClick={() => buyUpgrade(1)} style={{ fontSize: '20px', padding: '10px 20px' }}>
          Buy 1 Upgrade
        </button>
        <button onClick={() => buyUpgrade(10)} style={{ fontSize: '20px', padding: '10px 20px', marginLeft: '10px' }}>
          Buy 10 Upgrades
        </button>
        <button onClick={() => buyUpgrade(100)} style={{ fontSize: '20px', padding: '10px 20px', marginLeft: '10px' }}>
          Buy 100 Upgrades
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Upgrades Purchased: {upgrades}</h3>
      </div>
    </div>
  );
};

export default CookieClicker;
