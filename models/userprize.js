module.exports = function(sequelize, DataTypes) {
const UserPrize = sequelize.define("UserPrize", {
  id : {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  prize_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Prize',
      key: 'id'
    }
  },
  date_redeemed: {
    type: DataTypes.DATE,
    defaultValue: Date.now
  }
});


return UserPrize;
};
