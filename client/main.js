import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players.js';
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/app.js';





Meteor.startup(() => {
	
	Tracker.autorun(() => {
	let players = Players.find({}, {sort: {score: -1}}).fetch();
	let title = 'Bach Bowl';
	ReactDOM.render(<App title={title} players={players}/>, document.getElementById('app'));
	});
});