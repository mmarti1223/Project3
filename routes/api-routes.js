const db = require("../models");

module.exports = function (app) {
  app.get("/api/animals", function (req, res) {
    db.Animal.findAll({include: [db.Trivia]})
      .then((data) => {
        res.json(data);
      })
      .catch(console.error);
  });

    app.get("/api/animals/:id", function (req, res) {
      db.Animal.findOne({
        where: {
          id: req.params.id
        },
        include: [db.Trivia]})
        .then((data) => {
          res.json(data);
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
      db.Prizes.findAll({where: {
        id: req.params.id
      },})
        .then((data) => {
          res.json(data);
        })
        .catch(console.error);
    });
};
