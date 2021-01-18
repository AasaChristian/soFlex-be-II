
const router = require('express').Router();

const Users = require('../Models/users-model');


const {jwtSecret} = require('../auth/secrets');
const bc = require('bcryptjs');
const jwt = require('jsonwebtoken');

// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
  let user = req.body;

  const hash = bc.hashSync(user.password, 8); 

  user.password = hash

  Users.addUser(user)
    .then(saved => {
      const token = signToken(saved)

      const {username, id} = saved[0]

      res.status(201).json({token, username, id});
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  console.log(username, password, "username password")

  Users.findByUserName(username)
    .first()
    .then(user => {

    if (user && bc.compareSync(password, user.password)){

      const token = signToken(user)

      const {username, id} = user
        res.status(200).json( {token, username, id} ); 

    } else{
        res.status(401).json({ message: 'Invalid Credentials' });
    }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


function signToken(user) {
  const payload = {
    username: user.username
  };

  const options = {
    expiresIn: '1d'
  };
console.log("signToken")

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
