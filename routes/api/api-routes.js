const db = require("../../models");

module.exports = function (app) {

  // Returns all animals and their trivia questions from database.
  app.get("/api/animals", function (req, res) {
    db.Animal.findAll({include: [db.Trivia]})
      .then(data => res.json(data),error=>res.sendStatus(500))
      .catch(error=>res.sendStatus(500));
  });

  // Returns specific animal based on the id value in the Animals Table.
    app.get("/api/animals/:id", function (req, res) {
      db.Animal.findOne({
        where: {
          id: req.params.id
        },
        include: [db.Trivia]})
        .then(data => res.json(data),error=>res.sendStatus(500))
        .catch(error=>res.sendStatus(500));
    });

    // Returns the list of available items in the prize table along with its cost in coins
    app.get("/api/prizes", function (req, res) {
      db.Prizes.findAll({})
      .then(data => res.json(data),error=>res.sendStatus(500))
      .catch(error=>res.sendStatus(500));
    });
  
   // Returns the specific item based on the id in the prize table along with its cost in coins
    app.get("/api/prizes/:id", function (req, res) {
      db.Prizes.findAll({where: {
        id: req.params.id
      },})
      .then(data => res.json(data),error=>res.sendStatus(500))
      .catch(error=>res.sendStatus(500));
    });

    // Updates the user's total points, requires username and points (total number of points of the user) to be sent in request. Returns status code.
    app.put("/api/updatescore", function (req,res) {
      db.User.update({
        points: req.body.points
      }, {
        where: {
          username: req.body.username
        }})
      .then(()=>res.sendStatus(201),error=>res.sendStatus(500))
      .catch(error=>res.status(500).send('Error Updating User Points'));
    })
    
};
