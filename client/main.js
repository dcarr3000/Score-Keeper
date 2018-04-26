import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players.js';
import {Tracker} from 'meteor/tracker';
import TitleBar from './../imports/ui/titlebar.js';
import AddPlayer from './../imports/ui/addplayer.js';


const renderPlayers = (playersList) => {
	
	
	return playersList.map((player) => {
		return( 
		<p key={player._id}>
		{player.name} has {player.score} point(s).
		<button onClick={() => { Players.update(player._id, {$inc: {score: 1}});
		}}>+1</button>
		<button onClick={() => { Players.update(player._id, {$inc: {score: -1}});
		}}>-1</button>
		<button onClick={() => Players.remove(player._id)}>X</button>
		</p>
	);
		
	});
};




Meteor.startup(() => {
	
	Tracker.autorun(() => {
	let players = Players.find().fetch();

	let title = 'Bach Bowl';
	let subtitle = 'Test';
	let jsx = 	(
		<div>
			<TitleBar title={title}/>
			{renderPlayers(players)}
			<AddPlayer/>
			
		</div>
		);
	ReactDOM.render(jsx, document.getElementById('app'));
	
	
	});
	
	
	
	
});