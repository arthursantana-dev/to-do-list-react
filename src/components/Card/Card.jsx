import React, { useState } from 'react';
import "./Card.css"
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Card = (props) => {
	return (
		<div className='card-wrapper'>
			
			<div className="card__row">
				<h2 className="card-title">{props.cardTitle}</h2><span className='card__icon' onClick={
					() => {
						props.setNotes(props.notes.filter((n) => props.notes.indexOf(n) != props.id))
					}
				}><FontAwesomeIcon icon={faTrash} /></span>
			</div>

			<p className="card-content">{props.cardContent}</p>

		</div>
	);
}

export default Card;
