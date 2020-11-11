
const router = require('express').Router();


const Users = require('../Models/users-model');

// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
  let user = req.body;

  Users.addUser(user)
    .then(saved => {
      res.status(201).json(saved);
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
    const dbPassword = user.password
    if (password === dbPassword){
        res.status(200).json( user ); 

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
