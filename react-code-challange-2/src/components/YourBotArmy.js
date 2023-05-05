import React from 'react';
import Bot from './BotCard';


const YourBotArmy = ({ army, onRelease, deleteBot }) => { 
  const handleDelete = (bot) => {
    onRelease(bot);
  };
  return (
    <div className="your-bot-army">
      <h1>Your Bot Army</h1>
      {army.map((bot) => (
        <Bot key={bot.id} bot={bot} onClick={handleDelete} onDelete={deleteBot} />
      ))}
    </div>
  );
};

export default YourBotArmy;