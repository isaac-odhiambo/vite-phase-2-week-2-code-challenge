// src/components/BotCard.js
import React from 'react';

function BotCard({ bot, onEnlist, onViewDetails }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <button onClick={() => onEnlist(bot)}>Add to Army</button>
      <button onClick={() => onViewDetails(bot)}>View Details</button>
    </div>
  );
}

export default BotCard;
