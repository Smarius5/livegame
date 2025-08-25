import './App.css';
import Header from './components/Header';
import './components/Header.css'

function App() {
  //Mocking
  const playerStats = {
    level: 1,
    xp: 0,
    coins: 0,
    streak: 0,
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