import React from "react";
import CoinIcon from "../assets/coin.svg";
import FireIcon from "../assets/fire.svg";

function Header({ level, xp, coins, streak }) {

  const nextLevel = level * 150;
  const progressBar = Math.min((xp / nextLevel) * 100, 100);

  return (
    <header className="app-header">
      <h1>LiveGame</h1>
      <div className="stats">
        <div className="stat">
          <span className="label">Level {level}</span>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progressBar}%` }}
            ></div>
          </div>
          <span className="xp-text">{xp}/{nextLevel} XP</span>
        </div>

        <div className="stat">
          <span className="label">Coins</span>
          <div className="value-with-icon">
            <img src={CoinIcon} alt="Coins" className="icon"></img>
            <span className="value">{coins}</span>
          </div>
        </div>

        <div className="stat">
          <span className="label">Streak</span>
          <div className="value-with-icon">
            <img src={FireIcon} alt="streak" className="icon"></img>
            <span className="value">{streak}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;