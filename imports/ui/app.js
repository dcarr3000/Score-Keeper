import React from 'react';
import TitleBar from './titlebar.js';
import AddPlayer from './addplayer.js';
import PlayerList from './playerlist.js';

export default class App extends React.Component {
	
	render() {
		
		return (
		
		<div> 
				<TitleBar title={this.props.title} subtitle="Created by David Carron"/>
					<div className="wrapper">
						<PlayerList players={this.props.players}/>
						<AddPlayer/> 
					</div>
		</div>
		);
		
	}
};

App.proptypes = {
	title: React.PropTypes.string.isRequired,
	players: React.PropTypes.array.isRequired
};