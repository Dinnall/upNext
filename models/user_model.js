'user strict';
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

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
    bio: {
      type: DataTypes.STRING,
      isAlpha: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
      isAlpha: true
    },
    position: {
    type: DataTypes.STRING,
    allowNull: true,
    isAlpha: true
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false
    },
    linkedin: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: true,
      validate: {
        isUrl:true
      }
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
    },
    instanceMethods: {
      validPassword: function(password) {
      return bcrypt.compareSync(password, this.password);
      }
    },
    hooks: {
      beforeCreate: function(user, options) {
        const SALT_FACTOR = 10;
            if (!user.changed('password')) {
              return sequelize.Promise.reject("not modified");
            }
        return bcrypt.genSaltAsync(SALT_FACTOR).then(function(salt) {
          return bcrypt.hashAsync(user.password, salt, null);
        })
        .then(function(hash) {
          user.setDataValue('password', hash);
        })
        .catch(function(err) {
          return sequelize.Promise.reject(err);
        });
      }
    }
});
  return User;
};
