'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: {
     type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl:true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [5, 35]
      }
    }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Projects);
      }
    }
  });
  return User;
};
