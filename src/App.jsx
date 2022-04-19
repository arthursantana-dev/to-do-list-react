import "./App.css";
import Card from "./components/Card/Card";
import Cardinput from "./components/CardInput/CardInput";

import React, { useState } from "react";

import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
	// Array de notas
	const [notes, setNotes] = useState([]);

	//Value dos inputs de CardInput.js
	const [inputTitle, setInputTitle] = useState("");
	const [inputContent, setInputContent] = useState("");

	return (
		<section className="wrapper">
			<main>
				<h1>Lista de Afazeres <FontAwesomeIcon icon={faList}/></h1>
				<hr />
				<Cardinput
					setTitle={setInputTitle}
					setContent={setInputContent}
					inputSubmit={() => {
						if (inputTitle.length > 0 && inputContent.length > 0){
							setNotes([...notes, {title: inputTitle, content: inputContent}])
						}
						
					}}
				/>
				<section className="card-list">
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
				</section>
			</main>
			<span className="desc">Feito por <a href="https://github.com/arthursantana-dev">Arthur Santana</a></span>
		</section>
	)

}

export default App;
