'use strict';
module.exports = function(sequelize, DataTypes) {
  var Video = sequelize.define('Video', {
    title: { 
      type: DataTypes.STRING, 
      allowNull: false},
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [200, 2000]
    },
    url: { 
      type: DataTypes.STRING, 
      allowNull: true, 
      validate: { 
        isUrl: true } },
  }, {
    classMethods: {
      associate: function(models) {
        Video.belongsTo(models.User);
      }
    }
  });
  return Video;
};