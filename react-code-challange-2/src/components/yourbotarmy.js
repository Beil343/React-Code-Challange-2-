import React, { useState } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [army, setArmy] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bot Battlr</h1>
      </header>
      <main>
        <BotCollection army={army} setArmy={setArmy} />
        <YourBotArmy army={army} setArmy={setArmy} />
      </main>
    </div>
  );
}

export default App;