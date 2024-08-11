// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import BotCollection from './components/BotCollection';
import BotDetails from './components/BotDetails';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [view, setView] = useState('home'); // 'home', 'details', or 'army'

  useEffect(() => {
    fetch('https://react-phase-2-week-2-db.vercel.app/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const handleEnlist = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleRelease = (botId) => {
    setArmy(army.filter(b => b.id !== botId));
  };

  const handleDischarge = (botId) => {
    fetch(`https://react-phase-2-week-2-db.vercel.app/bots${botId}`, { method: 'DELETE' })
      .then(() => {
        setBots(bots.filter(b => b.id !== botId));
        handleRelease(botId);
      })
      .catch(error => console.error('Error discharging bot:', error));
  };

  const handleViewDetails = (bot) => {
    setSelectedBot(bot);
    setView('details');
  };

  const renderView = () => {
    switch (view) {
      case 'details':
        return (
          <BotDetails bot={selectedBot} onEnlist={handleEnlist} />
        );
      case 'army':
        return (
          <YourBotArmy army={army} onRelease={handleRelease} onDischarge={handleDischarge} />
        );
      default:
        return (
          <div>
            <BotCollection
              bots={bots}
              onEnlist={handleEnlist}
              onViewDetails={handleViewDetails}
            />
            <YourBotArmy army={army} onRelease={handleRelease} onDischarge={handleDischarge} />
          </div>
        );
    }
  };

  return (
    <div>
      <Navbar setView={setView} />
      <Header />
      <main>
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
