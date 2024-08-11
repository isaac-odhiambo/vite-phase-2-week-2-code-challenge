## Bot Battlr
Welcome to Bot Battlr, the ultimate web application for building and managing your own Bot Army! This app allows users to browse through a list of available robots, view their details, and enlist them into their army. The enlisted bots can also be released or discharged from service.

## Table of Contents
Features
Tech Stack
Project Setup
API Endpoints
Folder Structure
Running the Application
How to Use
## Contributing
## License
## Features
Browse Bots: View a list of all available bots with their details.
View Details: See detailed information about each bot.
Enlist Bots: Add a bot to your army by clicking the "Add to Army" button.
Release Bots: Remove a bot from your army with the "Release" button.
Discharge Bots: Permanently remove a bot from both the backend and your army with the "Discharge" button.
## Tech Stack
Frontend: React.js
Backend: JSON Server (for mock data)
Styling: CSS (consolidated into App.css)

## Folder Structure
src/
components/ - Contains React components for the application.
BotCard.js - Displays individual bot cards.
BotCollection.js - Renders a list of bots.
BotDetails.js - Shows detailed information about a selected bot.
YourBotArmy.js - Displays the list of bots currently enlisted in the user's army.
Navbar.js - Contains the navigation bar.
Header.js - Contains the header section.
Footer.js - Contains the footer section.
App.js - Main application component that manages state and routing.
App.css - Consolidated CSS file for styling.

## Running the Application
Start the JSON Server (if not already running):
bash
Copy code
npx json-server --watch db.json --port 8001
Start the React development server:
bash
Copy code
npm start
## Visit https://react-phase-2-week-2-db.vercel.app/bots in your browser to view the application.

## How to Use
View Bots: On the homepage, browse through the list of available bots.
View Details: Click the "View Details" button on a bot card to see more information.
Enlist Bots: Click "Add to Army" to enlist a bot into your army.
Release Bots: Remove a bot from your army by clicking "Release".
Discharge Bots: Permanently remove a bot by clicking "Discharge".
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the bragitnch (git push origin feature-branch).
Create a new Pull Request.
## License
This project is licensed under the MIT License - see the LICENSE file for details.


Feel free to adjust any sections based on your specific setup or additional features you may have added. If there are any other details you need included or further modifications, let me know!
 

 ## visit the link 
https://vite-phase-2-week-2-code-challenge.vercel.app/