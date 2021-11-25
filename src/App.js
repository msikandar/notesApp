import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import { useSelector } from "react-redux";

function App() {
	const notes = useSelector((state) => state.notesData);
	console.log(notes);
	return (
		<div className="App">
			<Header />
			<div className="px-20 mx-20 py-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
				{notes.map((note, index) => (
					<Card key={index} note={note} />
				))}
			</div>
		</div>
	);
}

export default App;
