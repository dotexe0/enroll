import User from './model';

  // ======================
  // LOCAL LOGIN
  // ======================
export const userLogin = (req, res, next) => {
  console.log('login credentials:', req.body);
  res.send({ user: req.user });
  return next();
};
  // ======================
  // LOGOUT
  // ======================
export const userLogout = (req, res) => {
  console.log('LOGOUT:', req.body);
  req.logout();
  res.redirect('/');
};

  // ======================
  // LOCAL SIGNUP
  // ======================
export const userSignup = async (req, res) => {
  const { email, password } = req.body;
   console.log('req.body: ', req.body);
  try {
    console.log('#1')
        const user = await User.findOne({ 'local.email': email });
            console.log('#2')

        if (user) {
          console.log('message: That email account already exists.');
          return res.status(422).json({ message: 'That email account already exists.' });
        }
        try {
          const newUser = await User.create({ local: { email, password } });
          console.log('new user: ', newUser);
          await newUser.save();
          res.status(200).json({ user: newUser });
        } catch (e) {
          throw new Error(e);
        }
      } catch (e) {
        throw new Error(e);
      }
};
