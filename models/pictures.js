'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pictures = sequelize.define('Pictures', {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [200, 2000]
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
  }, {
    classMethods: {
      associate: function(models) {
        Pictures.belongsTo(models.User);
      }
    }
  });
  return Pictures;
};