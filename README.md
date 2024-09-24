# Project-Pilot
Task Management Website - Project 2 
Created By: Brad Webster, Andrew Surrena, and Nadia Hashemi - in collaboration with edX Coding Bootcamp
## Description:
Project Pilot is a task management platform designed to make organizing and managing tasks easier, faster, and more convenient. Whether you're handling workplace projects, personal to-dos, or school assignments, Project Pilot offers a variety of tools to help you stay on track.

Our platform is built for both individuals and teams, with features that streamline workflows and help you focus on what truly matters. From intuitive task tracking to efficient team collaboration, Project Pilot adapts to your needs and simplifies your task management experience.
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
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
<br/>React, Node.js, NPM, Postgres, Sequilize
### Other Features: 
- Task organization for personal and professional use
- Team collaboration tools
- Intuitive interface designed to enhance productivity
- User account creation with profile pictures via cloudinary
- User login/logout with password encryption and conditional rendering for best cybersecurity practices
 - User profile page to update their own info (in progress)
- User task management features include: Ability to create, edit, update, and delete tasks, assign them to "status" columns, and assign them to other users
- Side navigation bar for frequently accessed pages

## License / Badges:
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) 
    
This project is licensed under the MIT license. Click the badge for more information.
## Credits:
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/bmw-dev0p)
Brad Webster's Github Portfolio
<br/>[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/nadiahashe)
Nadia Hashemi's Github Portfolio
<br/>[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/andrew-surrena)
Andrew Surrena's Github Portfolio
<br/>Created in collaboration with edX Coding Bootcamp
<br/>Github Badges - https://github.com/Ileriayo/markdown-badges
<br/>CSS Button Template - https://getcssscan.com/css-buttons-examples
  

