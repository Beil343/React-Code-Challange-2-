import React from 'react';

const BotCard = ({ bot, onClick, onDelete }) => {
  return (
    <div>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} onClick={() => onClick(bot)} />
      {onDelete && <button onClick={() => onDelete(bot)}>x</button>}
    </div>
  );
};

export default BotCard;