Meteor.publish("users", function () {
	return Meteor.users.find({}, {fields: {'emails': 1, 'profile': 1, 'username': 1}});
});

Meteor.publish("teams", function () {
	return Teams.find();
});

Teams.allow({
	insert: function (userId, team) {
		return Roles.userIsInRole(userId, ['admin']);
	},
	update: function (userId, team) {
		return Roles.userIsInRole(userId, ['admin']);
	}
});

Meteor.publish("players", function () {
	return Players.find();
});

Players.allow({
	insert: function (userId, team) {
		return Roles.userIsInRole(userId, ['admin']);
	},
	update: function (userId, team) {
		return Roles.userIsInRole(userId, ['admin']);
	}
});

Meteor.publish("tiers", function () {
	return Tiers.find();
});

Tiers.allow({
	insert: function (userId, tier) {
		return Roles.userIsInRole(userId, ['admin']);
	},
	update: function (userId, tier) {
		return Roles.userIsInRole(userId, ['admin']);
	}
});

Meteor.publish("bids", function () {
	var team = Teams.findOne({owner: this.userId});
	if (team) {
		return Bids.find({team: team._id});
	}
});

Meteor.publish("leagues", function () {
	return Leagues.find();
});

Leagues.allow({
	insert: function (userId, league) {
		return Roles.userIsInRole(userId, ['admin']);
	},
	update: function (userId, league) {
		return Roles.userIsInRole(userId, ['admin']);
	},
	remove: function (userId, league) {
		return Roles.userIsInRole(userId, ['admin']);
	}
});