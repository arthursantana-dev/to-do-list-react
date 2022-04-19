import "./App.css";
import Card from "./components/Card/Card";
import Cardinput from "./components/CardInput/CardInput";

import React, { useState } from "react";

function App() {
	// Array de notas
	const [notes, setNotes] = useState([]);

	//Value dos inputs de CardInput.js
	const [inputTitle, setInputTitle] = useState("");
	const [inputContent, setInputContent] = useState("");

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
			<Cardinput 
				setTitle={setInputTitle} 
				setContent={setInputContent}
				inputSubmit={() => {setNotes([...notes, {title: inputTitle, content: inputContent}])}}
			/>
		</>
	)

}

export default App;
