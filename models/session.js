'use strict';
module.exports = function(sequelize, DataTypes) {
	var Session = sequelize.define('Session', {
		online: DataTypes.BOOLEAN
	}, {
		classMethods: {
			associate: function(models) {
				Session.belongsTo(models.User);
			}
		}
	});
	return Session
}