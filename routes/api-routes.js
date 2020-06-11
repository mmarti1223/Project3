const db = require("../models");
var bcrypt = require("bcryptjs");

const correctPassword = (enteredPassword, originalPassword) => {
  return new Promise(resolve => {
    bcrypt.compare(enteredPassword, originalPassword, (err, res) =>{
      resolve(res)
    });  
  })
}

module.exports = function (app) {
  app.get("/api/animals", function (req, res) {
    db.Animal.findAll({ include: [db.Trivia] })
      .then((data) => {
        res.json(data);
      })
      .catch(console.error);
  });

  app.get("/api/animals/:id", function (req, res) {
    db.Animal.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Trivia],
    })
      .then((data) => {
        res.json(data);
        console.log(data);
      })
      .catch(console.error);
  });

  app.get("/api/prizes", function (req, res) {
    db.Prizes.findAll({})
      .then((data) => {
        res.json(data);
      })
      .catch(console.error);
  });

  app.get("/api/prizes/:id", function (req, res) {
    db.Prizes.findAll({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        res.json(data);
      })
      .catch(console.error);
  });
  //Register User
  app.post("/api/registerUser", function (req, res) {
    db.User.create(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch(console.error);
  });

  //login
  app.post('/api/login', (req, res) => {
        db.User.findOne({
      where: {
        username: req.body.username
      }
    }).then((user) => {
      correctPassword(req.body.password, user.password)
        .then(authenticated => {
          res.json(user)
        })
        .catch(e => {
          res.send(e)
        })
    })
      
  
});
}
