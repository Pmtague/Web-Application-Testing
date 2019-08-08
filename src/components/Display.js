import React from 'react';

const Buttons = (props) => {
	return (
		<div>
			<button className="balls-btn" onClick={() => setBalls(props.home + )}>
			Ball
			</button>
			<button className="strikes-btn" onClick={() => setStrikes(props.home + 7)}>
			Strike
			</button>
			<button className="fouls-btn" onClick={() => setStrikes(props.home + 7)}>
			Foul
			</button>
			<button className="hits-btn" onClick={() => setBalls(props.home + 7)}>
			Hit
			</button>
		</div>
	)
}