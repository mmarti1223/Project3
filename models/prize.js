module.exports = function(sequelize, DataTypes) {
  var Prize = sequelize.define("Prize", {

    name: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a user's name from being entered if it doesn't
      // have a text value
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING
    },
    picture: {
      // Assuming pictures will be an asset, otherwise change to binary or blob
      type: DataTypes.STRING,
      allowNull: true
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Prize.associate = (models) => {
    Prize.belongsToMany(models.User, {
      through: 'UserPrize',
      as: 'redeemed_by',
      foreignKey: 'prize_id'
    });
  };
  return Prize;
};
