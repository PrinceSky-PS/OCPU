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
	stash: function (target, room, user, connection) {
		if (!user.hasConsoleAccess(connection)) {
			return this.errorReply("/stash - Access denied.");
		}
		require('child_process').exec('git stash', (error, stdout, stderr) => {connection.sendTo(room, ("" + stdout + stderr));});
	},
	shinymon: function (target, room, user) {
		if (!target) return this.errorReply("This command requires a target.");
		if (!this.runBroadcast()) return;
		this.sendReplyBox(`<img src="https://img.pokemondb.net/sprites/x-y/shiny/${target}.png" width=150,height=200>`);
	},
	alolashiny: function (target, room, user) {
		if (!target) return this.errorReply("This command requires a target.");
		if (!this.runBroadcast()) return;
		this.sendReplyBox(`<img src="https://img.pokemondb.net/sprites/sun-moon/dex/shiny/${target}.png" width=150,height=200>`);
	},
};
