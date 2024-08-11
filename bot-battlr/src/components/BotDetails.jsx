// src/components/BotDetails.js
import React from 'react';


function BotDetails({ bot, onEnlist }) {
  if (!bot) return <p>Select a bot to see details.</p>;

  return (
    <div className="bot-details">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
    </div>
  );
}

export default BotDetails;
