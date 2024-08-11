// src/components/BotCollection.js
import React from 'react';
import BotCard from './BotCard';


function BotCollection({ bots, onEnlist, onViewDetails }) {
  return (
    <div>
      <h2>Available Bots</h2>
      <div className="bot-list">
        {bots.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onEnlist={onEnlist}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
