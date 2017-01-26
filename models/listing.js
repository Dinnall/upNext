'use strict';
module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define('Listing', {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [200, 2000]
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [0, 5]
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    guestLimit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isInt: true
    },
    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Listing.belongsTo(models.User);
      }
    }
  });
  return Listing;
};