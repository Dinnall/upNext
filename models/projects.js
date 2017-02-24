'use strict';
module.exports = function(sequelize, DataTypes) {
  var Projects = sequelize.define('Projects', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [200, 2000]
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    gitRepo: {
      type: DataTypes.STRING,
      allowNull: false},

    url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      isUrl: true }
    },

    videoUrl: {
      type: DataTypes.STRING,
      allowNull:true,
      validate: {
        isUrl:true
      }
    },

    pictureUrl: {
      type: DataTypes.STRING,
      allowNull:true,
      validate: {
        isUrl:true
      }
    }
  },{
    classMethods: {
      associate: function(models) {
        Projects.belongsTo(models.User);
      }
    }
  });
  return Projects;
};
