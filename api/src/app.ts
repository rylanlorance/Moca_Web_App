import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';

var mongoose = require('mongoose');

const app: Application = express();
const port = 8585;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const recipeRoutes = require('./routes/recipe');

app.get('/', (req: Request, res: Response) =>
  res.send('Welcome to Meal Prep Bot')
);

// app.use('/', recipeRoutes);

// app.listen(port, () =>
//   console.log(`Application started successfully on port ${port}.`)
// );

mongoose
  .connect(
    'mongodb://localhost/meal-prep-bot-dev'
  )
  .then(result => {
    app.listen(port, () => console.log(`Application started successfully on port ${port}.`));
  })
  .catch(err => console.log(err));