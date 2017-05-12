import bodyParser from 'body-parser'; // extracts entire body of incoming request to be exposed on req.body
import morgan from 'morgan'; // logs request details
import session from 'express-session'; //create a session
import passport from 'passport'; // user authentication

export default app => {
  //returns middleware that only parses json
  app.use(bodyParser.json());
  //returns middleware that only parses urlencoded bodies.
  //extended: false allows to choose b/w parsing the url-encoded data with querystring library.
  app.use(bodyParser.urlencoded({ extended: false }));
  //'dev' concise output colored by response status for dev use.
  app.use(morgan('dev'));
  //simple session middleware
  app.use(session({
    secret: 'lol hi, i am a secret for da cookies',
    saveUninitialized: false, //useful for implementing login sessions and reducing server storage.
    resave: true
  }));
  //initializses the auth
  app.use(passport.initialize());
  //creates persistent session
  app.use(passport.session());
};
