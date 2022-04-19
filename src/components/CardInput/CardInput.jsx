import React, { useState } from 'react';

const Cardinput = (props) => {
	return (
		<div>
			<input 
				type="text" 
				className="i-card" 
				id='i-title' 
				placeholder='Título da nota'
				onChange={e => props.setTitle(e.target.value)}
			/>
			<br />
			<input 
				type="text" 
				className="i-card" 
				id='i-content' 
				placeholder='Conteúdo da nota'
				onChange={e => props.setContent(e.target.value)}
			/>
			<br />
			<button 
				className="send-button"
				onClick={() => props.inputSubmit()}
			>Criar nota</button>
		</div>
	);
}

export default Cardinput;
