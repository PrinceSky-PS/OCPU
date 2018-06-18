'use strict';

exports.commands = {
	shrug: function (target, room, user) {
		// @ts-ignore
		this.parse("¯\\_(ツ)_/¯");
	},
	upd: function (target, room, user, connection) {
		if (!user.hasConsoleAccess(connection)) {
			return this.errorReply("/upd - Access denied.");
		}
		require('child_process').exec('git pull', (error, stdout, stderr) => {connection.sendTo(room, ("" + stdout + stderr));});
	},
};
