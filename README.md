# Project-Pilot
Task Management Website - Project 2 
Created By: Brad Webster, Andrew Surrena, and Nadia Hashemi - in collaboration with edX Coding Bootcamp
## Description:
As a github user myself, I find the community of open-source coding to be revolutionary. The free flow of ideas has enabled me to endlessly learn about programming. With git being the one centralized location for sharing coding knowledge, I wanted to create a fun way to discover other users and reops. Therefore I created this github user search project to pull a random github user with public information. Using typescript, react and apis, I learned how to integrate provided tools into a functional application.
## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
## Installation: 
  For a live demo of this project, you can just find it here:
  https://project-pilot-7djn.onrender.com/
  <br/>The following steps will allow you to run the code locally:
  <br/>Step 1: Navigate to : https://github.com/bmw-dev0p/Project-Pilot
  <br/>Step 2: Clone the repo to download it onto your local computer
  <br/>Step 3: Open download in the IDE of your choosing, navigate to the file "/server/db/schema.sql", right click, run in integrated terminal
  <br/>Step 3.5: In order to initialize the back-end database, postgreSQL is required : https://www.postgresql.org/
  <br/>Step 4: Run the command ```psql -U postgres``` to connect to postgres 
  <br/>Step 5: Run the command ```\i schema.sql``` to initialize the database
  <br/>Step 6: To auto connect next, you can change the ".env.EXAMPLE" to ".env" and add your postgres credentials from previous step.
  <br/>Step 7: Next, navigate to the root directory "Project-Pilot", right click, run in integrated terminal, and run the command ```npm install``` to install dependencies
  <br/>Step 8: Still in the same terminal, run the command ```npm run seed``` in order to seed the database with initial data
  <br/>Step 9: Start the program by running the command ```npm run start```
  <br/>Step 10: Navigate to the localhost:3001 in your web browser to enjoy the program!

## Usage:
  Landing page displaying Search and Save buttons, navigation
  <br/>![home](https://github.com/bmw-dev0p/Candidate-Search-C13/blob/main/src/assets/usage1.jpg?raw=true)
  <br/> Saved candidate table
  <br/>![home](https://github.com/bmw-dev0p/Candidate-Search-C13/blob/main/src/assets/usage2.jpg?raw=true)

## Features:
### Coding Language(s): 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
<br/>Typescript, HTML, CSS
### Framework(s):
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
<br/>React, Node.js, NPM, Sequilize
### Other Features: 
- All features built into a single web page
- Tab style navigation for different "pages"
- Accessible User Interface with stylized web elements.
- Find real Github users via git's API
- Selected Candidates automatically saved for the user
- Infinitely scalable

## License / Badges:
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) 
    
This project is licensed under the MIT license. Click the badge for more information.
## Credits:
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/bmw-dev0p)
Brad Webster's Github Portfolio
<br/>Created in collaboration with edX Coding Bootcamp
<br/>Github Badges - https://github.com/Ileriayo/markdown-badges
<br/>React portfolio inspiration - https://soumyajit.vercel.app/project
<br/>CSS Button Template - https://getcssscan.com/css-buttons-examples
  

