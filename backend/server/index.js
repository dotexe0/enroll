import express from 'express';
//import path from 'path';
//import './config/db';
import middlewareConfig from './config/middlewares';

const app = express();

//middlewares
middlewareConfig(app);

//app.use('/api', []);


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
  console.log(`Server running on ${app.get('port')}`);
});
