module.exports = function(sequelize, DataTypes) {
  var Trivia = sequelize.define("Trivia", {

    question: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a user's name from being entered if it doesn't
      // have a text value
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wrongAnswer: {
      type: DataTypes.STRING,
      allowNull: true
    },

    points: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  Trivia.associate = (models) => {
    Trivia.belongsTo(models.Animal, {
      foreignKey: 'animal_id'
    });
  }
  return Trivia;
};
