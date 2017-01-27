'use strict';
module.exports = function(sequelize, DataTypes) {
  var Video = sequelize.define('Video', {
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
        Video.belongsTo(models.User);
      }
    }
  });
  return Video;
};