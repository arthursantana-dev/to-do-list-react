import React, { useState } from 'react';

const Card = (props) => {
	return (
		<div className='card-wrapper'>
			<h2 className="card-title">{props.cardTitle}</h2>
			<p className="card-content">{props.cardContent}</p>
			<button onClick={
				() => {
					props.setNotes(props.notes.filter((n) => props.notes.indexOf(n) != props.id))
				}
			}>me delete!</button>
		</div>
	);
}

export default Card;
