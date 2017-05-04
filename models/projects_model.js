'user strict';

module.exports = function(sequelize, DataTypes) {
  const Projects = sequelize.define('Projects', {
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
    type: DataTypes.STRING,
    allowNull: true
    },
    gitRepo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    webSiteUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
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
