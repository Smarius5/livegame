import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import './components/Header.css'

function App() {
  //Mocking
  const [playerStats, setPlayerStats] = useState({
    level: 1,
    xp: 0,
    coins: 0,
    streak: 0
  });
  const [habits, setHabits] = useState([]);

  // Add XP and coins function
  const addXpAndCoins = (xpEarned, coinsEarned) => {
    setPlayerStats(prevStats => ({
      ...prevStats,
      xp: prevStats.xp + xpEarned,
      coins: prevStats.coins + coinsEarned
    }));
  };

  return (
    <div className='App'>
      <Header
        level={playerStats.level}
        xp={playerStats.xp}
        coins={playerStats.coins}
        streak={playerStats.streak}
      />

    </div>
  );
}

export default App;