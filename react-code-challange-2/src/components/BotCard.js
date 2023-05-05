import React from 'react';
const Bot = ({ bot, onClick, onDelete, isEnlisted, className, setArmy }) => {
  const handleEnlist = (bot) => {
    onClick(bot);
  };
  // const handleDelete = (bot) => {
  //   onDelete(bot);
  // };
  return (
    <div className={`bot-card ${className}`}>
      <h3><label>Name: </label>{bot.name}</h3>
      <p><label>Class: </label>{bot.bot_class}</p>
      <p><label>Catchphrase: </label>{bot.catchphrase}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <img
        src={bot.avatar_url}
        alt={bot.name}
        onClick={() => handleEnlist(bot)}
      />
    </div>
  );
};
export default Bot;