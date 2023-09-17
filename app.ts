import express from 'express';
import urlRouter from './routers/urlRouter';
const app = express();
const port = 3000;

// Use built-in JSON body parser middleware
app.use(express.json());

// Use built-in URL-encoded body parser middleware
app.use(express.urlencoded({ extended: true }));

app.use(urlRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});