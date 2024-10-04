import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import sequelize from './config/connection.js';
import routes from './routes/api/api-routes.js';

const forceDatabaseRefresh = false;

const app = express();
const port = process.env.PORT || 4000;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use(express.json());
app.use(routes);

sequelize.sync({force: forceDatabaseRefresh}).then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});