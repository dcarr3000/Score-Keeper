import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players, calculatePlayerPositions} from './../imports/api/players.js';
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/app.js';





Meteor.startup(() => {
	
	Tracker.autorun(() => {
	let players = Players.find({}, {sort: {score: -1}}).fetch();
	let positionedPlayer = calculatePlayerPositions(players);
	let title = 'Bach Bowl';
	let subtitle = 'Created by David Carron'
	ReactDOM.render(<App title={title} subtitle={subtitle} players={positionedPlayer}/>, document.getElementById('app'));
	});
});