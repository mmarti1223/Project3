module.exports = function(sequelize, DataTypes) {
  var Animal = sequelize.define("Animal", {
    name: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a user's name from being entered if it doesn't
      // have a text value
      allowNull: false,
    },
    picture: {
      // Assuming pictures will be an asset, otherwise change to binary or blob
      type: DataTypes.STRING,
      allowNull: true
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    youtube: {
      type: DataTypes.STRING,
      validate: {
         // checks for url format 
        isUrl: true
      }
    }
  });
  return Animal;
};
