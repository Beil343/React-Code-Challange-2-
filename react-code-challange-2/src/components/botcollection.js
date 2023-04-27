import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCard from './BotCard';
import './Bot.css';

const BotCollection = ({ addToArmy }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      const { data } = await axios.get('http://localhost:8001/bots');
      setBots(data);
    };
    fetchBots();
  }, []);

  return (
      <div className="bot-collection">
        {bots.map((bot) => (
          <div key={bot.id} className="bot-card">
            <div className="bot-card__image-container">
              <img src={bot.avatar_url} alt={bot.name} />
            </div>
            <div className="bot-card__details">
              <h2>{bot.name}</h2>
              <p>{bot.weapon}</p>
              <p>{bot.special_ability}</p>
            </div>
          </div>
        ))}
      </div>
  );
};

export default BotCollection;