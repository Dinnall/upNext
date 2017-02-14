'use strict'; 
module.exports = function(sequelize, DataTypes) {
  var Projects = sequelize.define('Projects', {
    title: { 
      type: DataTypes.STRING, 
      allowNull: false},
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [200, 2000]
    },
    gitUsername: { 
      type: DataTypes.STRING, 
      allowNull: false},  
    gitRepo: { 
      type: DataTypes.STRING, 
      allowNull: false},
    url: { 
      type: DataTypes.STRING, 
      allowNull: true, 
      validate: { 
        isUrl: true } },
    videoUrl:{
      type: DataTypes.STRING,
      allowNull:true,
      validate:{
        isUrl:true
      }
    },
    vote: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
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