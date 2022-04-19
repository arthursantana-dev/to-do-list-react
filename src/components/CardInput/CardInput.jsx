import React, { useState } from 'react';
import './CardInput.css'

const Cardinput = (props) => {
	return (
		<div className='input-wrapper'>
			<input 
				type="text" 
				className="i-card" 
				id='i-title' 
				placeholder='Título da nota'
				onChange={e => props.setTitle(e.target.value)}
			/>

			<input 
				type="text" 
				className="i-card" 
				id='i-content' 
				placeholder='Conteúdo da nota'
				onChange={e => props.setContent(e.target.value)}
			/>

			<button 
				className="send-button"
				onClick={() => props.inputSubmit()}
			>Criar nota</button>
		</div>
	);
}

export default Cardinput;
