// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a user's name from being entered if it doesn't
      // have a text value
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      // checks for email format 
      validate: {
        isEmail: true
      }
    },
    lastLogin: {
      type: DataTypes.DATE,
      defaultValue: Date.now
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 10
    }
  });
  User.associate = (models) => {
    User.belongsToMany(models.Prize, {
      through: 'UserPrize',
      as: 'prize_redeemed',
      foreignKey: 'user_id'
    });
  };
   // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
   User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;
};
