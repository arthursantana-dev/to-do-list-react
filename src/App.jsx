import "./App.css";
import Card from "./components/Card/Card";
import React, { useState } from "react";

function App() {
	const [notes, setNotes] = useState([
		{
			title: "título 1",
			content: "conteúdo 1",
		},
		{
			title: "título 2",
			content: "conteúdo 2",
		},
	]);

	return (
		<>
			{notes.map(note => 
				<Card 
					cardTitle={note.title} 
					cardContent={note.content} 
					setNotes={setNotes.bind(this)} 
					notes={notes}
					key={notes.indexOf(note)} 
					id={notes.indexOf(note)}
				/>
			)}
			<button 
				onClick={
					() => { setNotes([...notes, 
							{ 
								title: "título 3", 
								content: "conteúdo 3" }]) 
							}
					}>
					adicionar card
			</button>
		</>
	)

}

export default App;
