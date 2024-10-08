import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map(bot => (
        <BotCard key={bot.id} bot={bot} onRelease={onRelease} onDischarge={onDischarge} />
      ))}
    </div>
  );
}

export default YourBotArmy;
